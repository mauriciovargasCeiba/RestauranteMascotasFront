import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css']
})
export class CancelarReservaComponent implements OnInit {
  cancelarReservaForm: FormGroup;
  mensaje: string;
  tipoMensaje: string;

  constructor(protected reservaServices: ReservaService) { }

  ngOnInit() {
    this.cancelarReservaForm = new FormGroup({
      codigo: new FormControl('', Validators.required)
    });
  }

  cancelar() {
    this.reservaServices.cancelar(this.cancelarReservaForm.value.codigo).subscribe(res => {
      this.mensaje = `La reserva ${this.cancelarReservaForm.value.codigo} ha sido cancelada con éxito`;
      this.tipoMensaje = 'exito';
      this.destruirMensajeAlerta()
    }, e => {
      this.mensaje = e.error.mensaje;
      this.tipoMensaje = 'error';
      this.destruirMensajeAlerta()
    });
  }

  private destruirMensajeAlerta() {
    setTimeout(() => {
      this.mensaje = null;
    }, 8000);
  }

}
