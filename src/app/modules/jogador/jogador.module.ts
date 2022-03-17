import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogadorRoutingModule } from './jogador-routing.module';
import { JogadorComponent } from './jogador.component';
import { JogadorService } from './jogador.service';
import { TableModule } from 'primeng-lts/table';
import { ButtonModule } from 'primeng-lts/button';
import { ToastModule } from 'primeng-lts/toast';
import { ToolbarModule } from 'primeng-lts/toolbar';
import { DialogModule } from 'primeng-lts/dialog';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng-lts/inputnumber';
import { ConfirmDialogModule } from 'primeng-lts/confirmdialog';
import { RippleModule } from 'primeng-lts/ripple';
import { InputTextModule } from 'primeng-lts/inputtext';


@NgModule({
  declarations: [JogadorComponent],
  imports: [
    CommonModule,
    JogadorRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    FormsModule,
    InputNumberModule,
    ConfirmDialogModule,
    RippleModule,
    InputTextModule
  ],
  providers: [
    JogadorService
  ]
})
export class JogadorModule { }
