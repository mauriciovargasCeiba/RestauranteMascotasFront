import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { MostrarReservaComponent } from './mostrar-reserva.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { HttpService } from '@core/services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { Mascota } from '@core/modelo/mascota';
import { Reserva } from '@reserva/shared/model/reserva';

describe('MostrarReservaComponent', () => {
  let component: MostrarReservaComponent;
  let fixture: ComponentFixture<MostrarReservaComponent>;
  let reservaService: ReservaService;
  const mascota: Mascota = new Mascota(1, 'Mascota 1', 'PERRO', 5);
  const reserva = Object.assign(new Reserva(1, 1, new Date(), 'Reserva 1', '1234567', '1234', '0002120366000001_1234'), {mascota});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarReservaComponent ],
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
    fixture = TestBed.createComponent(MostrarReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'mostrar').and.returnValue(of(reserva));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mostrar una reserva', () => {
    component.mostrarReservaForm.controls.codigo.setValue('0002120366000001_0000');

    component.mostrar();

    expect(component.reserva).toBe(reserva);
  });

  it('mostrar error al mostrar reserva', () => {
    reservaService.mostrar = jasmine.createSpy().and.returnValue(throwError({ error: { mensaje: 'Mensaje de error de reserva' }}))
    component.mostrarReservaForm.controls.codigo.setValue('0002120366000001_0000');
    
    component.mostrar();
    
    expect(component.alerta.mensaje).toBe('Mensaje de error de reserva');
    expect(component.alerta.tipoMensaje).toBe('error');
  });

});
