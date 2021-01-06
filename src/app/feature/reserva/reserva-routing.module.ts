import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelarReservaComponent } from './components/cancelar-reserva/cancelar-reserva.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';


const routes: Routes = [
  {
    path: '',
    component: ReservaComponent,
    children: [
      {
        path: 'reservar',
        component: ReservarComponent
      },
      {
        path: 'listar',
        component: ListarReservaComponent
      },
      {
        path: 'cancelar',
        component: CancelarReservaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
