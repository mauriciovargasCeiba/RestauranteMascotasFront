import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../modelo/mascota';

@Injectable()
export class MascotaService {

  constructor(protected http: HttpService) {}

  public listar() {
    return this.http.doGet<Mascota[]>(`${environment.endpoint}/mascotas`, this.http.optsName('consultar mascotas'));
  }

  public registrar(mascota: Mascota) {
    return this.http.doPost<Mascota, any>(`${environment.endpoint}/mascotas`, mascota,
                                                this.http.optsName('crear/actualizar mascotas'));
  }

  public eliminar(idMascota: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/mascotas/${idMascota}`,
                                                 this.http.optsName('eliminar mascotas'));
  }
}
