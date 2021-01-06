import { NgModule } from '@angular/core';

import { ReservaRoutingModule } from './reserva-routing.module';
import { BorrarReservaComponent } from './components/borrar-reserva/borrar-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { SharedModule } from '@shared/shared.module';
import { ReservaService } from './shared/service/reserva.service';
import { MascotaService } from './shared/service/mascota.service';


@NgModule({
  declarations: [
    CrearReservaComponent,
    ListarReservaComponent,
    BorrarReservaComponent,
    ReservaComponent
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule
  ],
  providers: [ReservaService, MascotaService]
})
export class ReservaModule { }
