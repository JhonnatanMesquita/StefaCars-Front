import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogadorComponent } from './jogador.component';

const routes: Routes = [
  { path: '', component: JogadorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogadorRoutingModule { }
