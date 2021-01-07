import { NgModule } from '@angular/core';

import { MascotaRoutingModule } from './mascota-routing.module';
import { EliminarMascotaComponent } from './components/eliminar-mascota/eliminar-mascota.component';
import { ListarMascotaComponent } from './components/listar-mascota/listar-mascota.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ListarMascotaComponent,
    EliminarMascotaComponent,
    MascotaComponent
  ],
  imports: [
    MascotaRoutingModule,
    SharedModule
  ]
})
export class MascotaModule { }
