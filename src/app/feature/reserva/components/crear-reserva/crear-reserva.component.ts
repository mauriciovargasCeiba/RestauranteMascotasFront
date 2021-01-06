import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../shared/service/reserva.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Reserva } from '@reserva/shared/model/reserva';
import { MascotaService } from '@reserva/shared/service/mascota.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  reservaForm: FormGroup;
  mascotaForm: FormGroup;
  incluyeMascota: boolean = false;
  especies: string[] = ['PERRO', 'GATO'];
  idMascota: number;

  constructor(protected reservaServices: ReservaService, protected mascotaServices: MascotaService) { }

  ngOnInit() {
    this.construirFormularioReserva();
    this.reservaForm.get('incluyeMascota').valueChanges.subscribe(incluyeMascota => {
      this.incluyeMascota = incluyeMascota;
      if (incluyeMascota) {
        this.construirFormularioMascota();
      } else {
        this.destruirFormularioMascota();
      }
    });
  }

  crear() {
    this.formatearFechaYHora(this.reservaForm);
    this.reservaServices.guardar(this.reservaForm.value as Reserva).subscribe();
  }

  private construirFormularioReserva() {
    this.reservaForm = new FormGroup({
      numeroMesa: new FormControl('', [Validators.required]),
      fechaYHora: new FormControl('', [Validators.required]),
      nombreCompletoCliente: new FormControl('', [Validators.required]),
      telefonoCliente: new FormControl('', [Validators.required]),
      incluyeMascota: new FormControl('')
    });
  }

  private formatearFechaYHora(reservaForm: FormGroup) {
    reservaForm.value.fechaYHora = formatDate(new Date(reservaForm.value.fechaYHora), 'yyyy-MM-dd HH:mm:ss', 'es-CO', '-0500');
  }

  private anadirCampoIdMascotaAFormularioReserva() {
    this.reservaForm.addControl('idMascota', new FormControl('', [Validators.required]));
  }

  private eliminarCampoIdMascotaFormularioReserva() {
    this.reservaForm.removeControl('idMascota');
  }

  private construirFormularioMascota() {
    this.mascotaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      especie: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required])
    });
    this.anadirCampoIdMascotaAFormularioReserva();
  }

  private destruirFormularioMascota() {
    this.mascotaForm = null;
    this.eliminarCampoIdMascotaFormularioReserva();
  }

  crearMascota() {
    this.mascotaServices.guardar(this.mascotaForm.value).subscribe(idMascota => {
      this.idMascota = idMascota.valor;
      this.reservaForm.get('idMascota').setValue(idMascota.valor);
    });
  }

}
