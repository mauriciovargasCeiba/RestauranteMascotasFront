import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ReservarComponent } from './reservar.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReservaService } from '../../shared/service/reserva.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import localeCo from '@angular/common/locales/es-CO';
import { MascotaService } from '@core/services/mascota.service';
import { By } from '@angular/platform-browser';
registerLocaleData(localeCo);


describe('ReservarComponent', () => {
  let component: ReservarComponent;
  let fixture: ComponentFixture<ReservarComponent>;
  let reservaService: ReservaService;
  let mascotaService: MascotaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservarComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ReservaService, MascotaService, HttpService, { provide: LOCALE_ID, useValue: 'es-CO' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    mascotaService = TestBed.inject(MascotaService);
    spyOn(reservaService, 'reservar').and.returnValue(
      of(true)
    );
    spyOn(mascotaService, 'registrar').and.returnValue(
      of({valor: 1})
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar que el formulario es invalido cuando esta vacio', () => {
    expect(component.reservaForm.valid).toBeFalsy();
  });

  it('reservar', () => {
    expect(component.reservaForm.valid).toBeFalsy();
    component.reservaForm.controls.numeroMesa.setValue(1);
    component.reservaForm.controls.fechaYHora.setValue('2020-03-01');
    component.reservaForm.controls.nombreCompletoCliente.setValue('Reserva test');
    component.reservaForm.controls.telefonoCliente.setValue('1234567');
    expect(component.reservaForm.valid).toBeTruthy();

    component.reservar();

    expect(reservaService.reservar).toHaveBeenCalled();
  });

  it('deberia crear un formulario para registrar una mascota', () => {
    expect(component.mascotaForm).toBeUndefined();

    const checkboxIncluyeMascota = fixture.debugElement.query(By.css('#incluyeMascota')).nativeElement;
    checkboxIncluyeMascota.click();
    fixture.detectChanges();

    expect(component.mascotaForm).not.toBeNull();
  });

  it('deberia registrar una mascota', () => {
    const checkboxIncluyeMascota = fixture.debugElement.query(By.css('#incluyeMascota')).nativeElement;
    checkboxIncluyeMascota.click();
    fixture.detectChanges();

    component.mascotaForm.controls.nombre.setValue('Mascota');
    component.mascotaForm.controls.especie.setValue('PERRO');
    component.mascotaForm.controls.edad.setValue(5);
    
    component.registrarMascota();

    expect(component.idMascota).toBe(1);
  });

  it('deberia crear y destruir formulario mascota', () => {
    const checkboxIncluyeMascota = fixture.debugElement.query(By.css('#incluyeMascota')).nativeElement;
    checkboxIncluyeMascota.click();
    fixture.detectChanges();
    expect(component.mascotaForm).not.toBeNull();

    checkboxIncluyeMascota.click();
    fixture.detectChanges();
    expect(component.mascotaForm).toBeNull();
  });

  it('deberia mostrar error al reservar', () => {
    reservaService.reservar = jasmine.createSpy().and.returnValue(throwError({ error: { mensaje: 'Mensaje de error de reserva' }}))
    component.reservaForm.controls.numeroMesa.setValue(1);
    component.reservaForm.controls.fechaYHora.setValue('2020-03-01');
    component.reservaForm.controls.nombreCompletoCliente.setValue('Reserva test');
    component.reservaForm.controls.telefonoCliente.setValue('1234567');
    
    component.reservar();
    
    expect(component.alerta.mensaje).toBe('Mensaje de error de reserva');
    expect(component.alerta.tipoMensaje).toBe('error');
  });

  it('deberia mostrar error al registrar mascota', () => {
    mascotaService.registrar = jasmine.createSpy().and.returnValue(throwError({ error: { mensaje: 'Mensaje de error de mascota' }}))
    const checkboxIncluyeMascota = fixture.debugElement.query(By.css('#incluyeMascota')).nativeElement;
    checkboxIncluyeMascota.click();
    fixture.detectChanges();

    component.mascotaForm.controls.nombre.setValue('Mascota');
    component.mascotaForm.controls.especie.setValue('PERRO');
    component.mascotaForm.controls.edad.setValue(5);
    
    component.registrarMascota();
    
    expect(component.alerta.mensaje).toBe('Mensaje de error de mascota');
    expect(component.alerta.tipoMensaje).toBe('error');
  });

});
