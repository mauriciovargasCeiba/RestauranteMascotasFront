import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class MascotaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<any[]>(`${environment.endpoint}/mascotas`, this.http.optsName('consultar mascotas'));
  }

  public guardar(mascota: any) {
    return this.http.doPost<any, any>(`${environment.endpoint}/mascotas`, mascota,
                                                this.http.optsName('crear/actualizar mascotas'));
  }

  public eliminar(idMascota: string) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/mascotas/${idMascota}`,
                                                 this.http.optsName('eliminar mascotas'));
  }
}
