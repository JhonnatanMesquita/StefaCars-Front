import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule) },
  { path: 'jogador', loadChildren: () => import('./modules/jogador/jogador.module').then(mod => mod.JogadorModule) },
  { path: 'carro', loadChildren: () => import('./modules/carro/carro.module').then(mod => mod.CarroModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
