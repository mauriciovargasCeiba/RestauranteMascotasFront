import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EliminarMascotaComponent } from './components/eliminar-mascota/eliminar-mascota.component';
import { ListarMascotaComponent } from './components/listar-mascota/listar-mascota.component';
import { MascotaComponent } from './components/mascota/mascota.component';


const routes: Routes = [
  {
    path: '',
    component: MascotaComponent,
    children: [
      {
        path: 'listar',
        component: ListarMascotaComponent
      },
      {
        path: 'eliminar',
        component: EliminarMascotaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule { }
