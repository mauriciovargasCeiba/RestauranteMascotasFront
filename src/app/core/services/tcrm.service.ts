import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TcrmService {

  constructor(protected http: HttpService) {}

  public obtenerTCRM() {
    return this.http.doGet<number>(`${environment.endpoint}/tcrm`, this.http.optsName('consultar TCRM'));
  }
  
}
