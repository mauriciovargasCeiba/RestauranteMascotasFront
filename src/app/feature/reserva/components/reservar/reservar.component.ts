import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../shared/service/reserva.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Reserva } from '@reserva/shared/model/reserva';
import { MascotaService } from '@reserva/shared/service/mascota.service';
import { Mascota } from '@reserva/shared/model/mascota';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {
  reservaForm: FormGroup;
  mascotaForm: FormGroup;
  incluyeMascota: boolean = false;
  especies: string[] = ['PERRO', 'GATO'];
  idMascota: number;

  mensaje: string;
  tipoMensaje: string;

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
    this.reservaServices.reservar(this.reservaForm.value as Reserva).subscribe(respuesta => {
      this.mensaje = `La reserva ha sido creada con éxito (${respuesta.valor})`;
      this.tipoMensaje = 'exito';
      this.destruirMensajeAlerta();
    }, e => {
      this.mensaje = e.error.mensaje;
      this.tipoMensaje = 'error';
      this.destruirMensajeAlerta();
    });
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
    this.mascotaServices.registrar(this.mascotaForm.value as Mascota).subscribe(idMascota => {
      this.idMascota = idMascota.valor;
      this.reservaForm.get('idMascota').setValue(idMascota.valor);
      this.mensaje = `Se ha registrado tu mascota con éxito. El ID que puedes utilizar para tus reservas es: ${idMascota.valor}`
      this.tipoMensaje = 'exito';
      this.destruirMensajeAlerta();
    }, e => {
      this.mensaje = e.error.mensaje;
      this.tipoMensaje = 'error';
      this.destruirMensajeAlerta();
    });
  }

  private destruirMensajeAlerta() {
    setTimeout(() => {
      this.mensaje = null;
    }, 4000);
  }

}
