import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarReservaComponent } from './listar-reserva.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReservaService } from '../../shared/service/reserva.service';
import { Reserva } from '../../shared/model/reserva';
import { HttpService } from 'src/app/core/services/http.service';
import { Mascota } from '@reserva/shared/model/mascota';

describe('ListarReservaComponent', () => {
  let component: ListarReservaComponent;
  let fixture: ComponentFixture<ListarReservaComponent>;
  let reservaService: ReservaService;
  const mascota: Mascota = new Mascota(1, 'Mascota 1', 'PERRO', 5);
  const listaReservas: any[] = [
    Object.assign(new Reserva(1, 1, new Date(), 'Reserva 1', '1234567', '1234', '0002120366000001_1234'), {mascota}),
    Object.assign(new Reserva(2, 2, new Date(), 'Reserva 2', '0987654', '56789','0002120366000002_56789'), {mascota})
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarReservaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ReservaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'listar').and.returnValue(
      of(listaReservas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(2).toBe(component.listaReservas.length);
});

});
