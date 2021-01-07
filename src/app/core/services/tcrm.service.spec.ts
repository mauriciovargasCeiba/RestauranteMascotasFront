import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

import { TcrmService } from './tcrm.service';

describe('TcrmService', () => {
  let httpMock: HttpTestingController;
  let service: TcrmService;
  const apiEndpointTCRM = `${environment.endpoint}/tcrm`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TcrmService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(TcrmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia mostrar la TCRM', () => {
    const TCRM = 3500.0;
    service.obtenerTCRM().subscribe(tcrm => {
      expect(tcrm).toEqual(TCRM);
    });
    const req = httpMock.expectOne(apiEndpointTCRM);
    expect(req.request.method).toBe('GET');
    req.flush(TCRM);
  });

});
