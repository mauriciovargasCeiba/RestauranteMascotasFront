import { Component, OnInit } from '@angular/core';
import { MascotaService } from '@core/services/mascota.service';
import { Mascota } from '@core/modelo/mascota';

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.css']
})
export class ListarMascotaComponent implements OnInit {
  public listaMascotas: Mascota[];

  constructor(protected mascotaService: MascotaService) { }

  ngOnInit() {
    this.mascotaService.listar().subscribe(mascotas => {
      this.listaMascotas = mascotas;
    });
  }

}
