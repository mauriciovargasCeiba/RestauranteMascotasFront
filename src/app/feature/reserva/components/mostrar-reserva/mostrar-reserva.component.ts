import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alerta } from '@shared/model/alerta';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-mostrar-reserva',
  templateUrl: './mostrar-reserva.component.html',
  styleUrls: ['./mostrar-reserva.component.css']
})
export class MostrarReservaComponent implements OnInit {
  mostrarReservaForm: FormGroup;
  reserva: any;

  alerta: Alerta;

  constructor(protected reservaServices: ReservaService) { }

  ngOnInit() {
    this.mostrarReservaForm = new FormGroup({
      codigo: new FormControl('', Validators.required)
    });
  }

  mostrar() {
    this.reservaServices.mostrar(this.mostrarReservaForm.value.codigo.trim()).subscribe(reserva => {
      this.reserva = reserva;
      this.alerta = null;
    }, e => {
      this.alerta = {
        mensaje: e.error.mensaje,
        tipoMensaje: 'error'
      };
      this.reserva = null;
    });
  }

}
