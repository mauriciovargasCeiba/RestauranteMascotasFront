import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ReservaService } from '@reserva/shared/service/reserva.service';
import { Reserva } from '@reserva/shared/model/reserva';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  public listaReservas: Reserva[];

  constructor(protected reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaService.listar().subscribe(reservas => {
      this.listaReservas = reservas;
    });
  }

}
