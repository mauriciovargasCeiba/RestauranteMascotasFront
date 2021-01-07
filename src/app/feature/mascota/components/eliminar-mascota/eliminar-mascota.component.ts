import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from '@core/services/mascota.service';
import { Alerta } from '@shared/model/alerta';


@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {
  eliminarMascotaForm: FormGroup;

  alerta: Alerta;

  constructor(protected mascotaServices: MascotaService) { }

  ngOnInit() {
    this.eliminarMascotaForm = new FormGroup({
      id: new FormControl('', Validators.required)
    });
  }

  eliminar() {
    this.mascotaServices.eliminar(this.eliminarMascotaForm.value.id).subscribe(() => {
      this.alerta = {
        mensaje: `La mascota con id ${this.eliminarMascotaForm.value.id} ha sido eliminada con éxito`,
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
