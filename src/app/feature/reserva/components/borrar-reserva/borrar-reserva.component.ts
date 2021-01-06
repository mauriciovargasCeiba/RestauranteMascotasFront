import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-borrar-reserva',
  templateUrl: './borrar-reserva.component.html',
  styleUrls: ['./borrar-reserva.component.css']
})
export class BorrarReservaComponent implements OnInit {
  borrarReservaForm: FormGroup;
  constructor(protected reservaServices: ReservaService) { }

  ngOnInit() {
    this.borrarReservaForm = new FormGroup({
      id: new FormControl('', Validators.required)
    });
  }

  eliminar() {
    this.reservaServices.eliminar(this.borrarReservaForm.value.id).subscribe();
  }

}
