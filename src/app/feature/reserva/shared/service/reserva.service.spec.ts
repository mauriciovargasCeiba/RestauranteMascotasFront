import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ReservaService } from './reserva.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Reserva } from '../model/reserva';
import { HttpResponse } from '@angular/common/http';

describe('ReservaService', () => {
  let httpMock: HttpTestingController;
  let service: ReservaService;
  const apiEndpointReservas = `${environment.endpoint}/reservas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    const productService: ReservaService = TestBed.inject(ReservaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar reservas', () => {
    const dummyReservas = [
      new Reserva(1, 1, new Date(), 'Reserva 1', '1234567890', '1234', '0002120366000001_1234'),
      new Reserva(2, 2, new Date(), 'Reserva 2', '0987654321', '56789', '0002120366000001_56789')
    ];
    service.listar().subscribe(reservas => {
      expect(reservas.length).toBe(2);
      expect(reservas).toEqual(dummyReservas);
    });
    const req = httpMock.expectOne(apiEndpointReservas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });

  it('deberia mostrar una reserva', () => {
    const dummyReserva = new Reserva(1, 1, new Date(), 'Reserva 1', '1234567890', '1234', '0002120366000001_1234');
    service.mostrar(dummyReserva.codigoGenerado).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyReserva);
    });
    const req = httpMock.expectOne(`${apiEndpointReservas}/0002120366000001_1234`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReserva);
  });

  it('deberia reservar', () => {
    const dummyReserva = new Reserva(1, 1, new Date(), 'Reserva 1', '1234567890', '1234', '0002120366000001_1234');
    service.reservar(dummyReserva).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointReservas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia cancelar una reserva', () => {
    const dummyReserva = new Reserva(1, 1, new Date(), 'Reserva 1', '1234567890', '1234', '0002120366000001_1234');
    service.cancelar(dummyReserva.codigoGenerado).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointReservas}/0002120366000001_1234`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
