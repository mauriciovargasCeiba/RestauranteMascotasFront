import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';


@Injectable()
export class ReservaService {

  constructor(protected http: HttpService) {}

  public listar() {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`, this.http.optsName('consultar reservas'));
  }

  public mostrar(codigoReserva: string) {
    return this.http.doGet<Reserva>(`${environment.endpoint}/reservas/${codigoReserva}`,
                                                 this.http.optsName('mostrar reserva'));
  }

  public reservar(reserva: Reserva) {
    return this.http.doPost<Reserva, any>(`${environment.endpoint}/reservas`, reserva,
                                                this.http.optsName('crear/actualizar reservas'));
  }

  public cancelar(codigoReserva: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/reservas/${codigoReserva}`,
                                                 this.http.optsName('eliminar reservas'));
  }
}
