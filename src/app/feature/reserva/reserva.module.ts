import { NgModule } from '@angular/core';

import { ReservaRoutingModule } from './reserva-routing.module';
import { CancelarReservaComponent } from './components/cancelar-reserva/cancelar-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { SharedModule } from '@shared/shared.module';
import { ReservaService } from './shared/service/reserva.service';
import { MascotaService } from '../../core/services/mascota.service';
import { MostrarReservaComponent } from './components/mostrar-reserva/mostrar-reserva.component';


@NgModule({
  declarations: [
    ReservarComponent,
    ListarReservaComponent,
    CancelarReservaComponent,
    MostrarReservaComponent,
    ReservaComponent
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule
  ],
  providers: [ReservaService, MascotaService]
})
export class ReservaModule { }
