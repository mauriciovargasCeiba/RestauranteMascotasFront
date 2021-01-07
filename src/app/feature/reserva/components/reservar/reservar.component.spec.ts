import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ReservarComponent } from './reservar.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReservaService } from '../../shared/service/reserva.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import localeCo from '@angular/common/locales/es-CO';
import { MascotaService } from '@reserva/shared/service/mascota.service';
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

  it('formulario es invalido cuando esta vacio', () => {
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

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    expect(reservaService.reservar).toHaveBeenCalled();
  });

  it('crear un formulario para registrar una mascota', () => {
    expect(component.mascotaForm).toBeUndefined();

    const checkboxIncluyeMascota = fixture.debugElement.query(By.css('#incluyeMascota')).nativeElement;
    checkboxIncluyeMascota.click();
    fixture.detectChanges();

    expect(component.mascotaForm).not.toBeNull();
  });

  it('registrar una mascota', () => {
    component.ngOnInit();
    const checkboxIncluyeMascota = fixture.debugElement.query(By.css('#incluyeMascota')).nativeElement;
    checkboxIncluyeMascota.click();
    fixture.detectChanges();

    component.mascotaForm.controls.nombre.setValue('Mascota');
    component.mascotaForm.controls.especie.setValue('PERRO');
    component.mascotaForm.controls.edad.setValue(5);
    
    component.registrarMascota();

    expect(component.idMascota).toBe(1);
  });
});
