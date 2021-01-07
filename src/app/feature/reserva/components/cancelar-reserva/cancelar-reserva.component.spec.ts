import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { CancelarReservaComponent } from './cancelar-reserva.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { HttpService } from '@core/services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('CancelarReservaComponent', () => {
  let component: CancelarReservaComponent;
  let fixture: ComponentFixture<CancelarReservaComponent>;
  let reservaService: ReservaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelarReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ReservaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'cancelar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia cancelar una reserva', () => {
    component.cancelarReservaForm.controls.codigo.setValue('0002120366000001_0000');
    component.cancelar();
    expect(component.alerta.mensaje).toBe('La reserva 0002120366000001_0000 ha sido cancelada con éxito');
  });

  it('deberia mostrar error al cancelar reserva', () => {
    reservaService.cancelar = jasmine.createSpy().and.returnValue(throwError({ error: { mensaje: 'Mensaje de error de reserva' }}))
    component.cancelarReservaForm.controls.codigo.setValue('0002120366000001_0000');
    
    component.cancelar();
    
    expect(component.alerta.mensaje).toBe('Mensaje de error de reserva');
    expect(component.alerta.tipoMensaje).toBe('error');
  });

});
