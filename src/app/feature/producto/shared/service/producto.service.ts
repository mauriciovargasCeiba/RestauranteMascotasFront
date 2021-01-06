import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar(codigoReserva: string) {
    const codigoReservaQueryParam = codigoReserva ? `?codigo_reserva=${codigoReserva}`: '' ;
    return this.http.doGet<Producto[]>(`${environment.endpoint}/productos${codigoReservaQueryParam}`, this.http.optsName('consultar productos'));
  }

}
