import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alerta } from '@shared/model/alerta';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css']
})
export class CancelarReservaComponent implements OnInit {
  cancelarReservaForm: FormGroup;

  alerta: Alerta;

  constructor(protected reservaServices: ReservaService) { }

  ngOnInit() {
    this.cancelarReservaForm = new FormGroup({
      codigo: new FormControl('', Validators.required)
    });
  }

  cancelar() {
    this.reservaServices.cancelar(this.cancelarReservaForm.value.codigo).subscribe(() => {
      this.alerta = {
        mensaje: `La reserva ${this.cancelarReservaForm.value.codigo} ha sido cancelada con éxito`,
        tipoMensaje: 'exito'
      };
    }, e => {
      this.alerta = {
        mensaje: e.error.mensaje,
        tipoMensaje: 'error'
      };
    });
  }

}
