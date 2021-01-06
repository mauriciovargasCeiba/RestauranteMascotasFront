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
  constructor(protected reservaServices: ReservaService) { }

  ngOnInit() {
    this.cancelarReservaForm = new FormGroup({
      id: new FormControl('', Validators.required)
    });
  }

  cancelar() {
    this.reservaServices.cancelar(this.cancelarReservaForm.value.id).subscribe();
  }

}
