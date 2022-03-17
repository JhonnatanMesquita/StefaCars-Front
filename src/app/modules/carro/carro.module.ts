import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import {CarroComponent} from './carro.component';
import {CarroRoutingModule} from './carro-routing.module';
import {DataViewModule} from "primeng-lts/dataview";
import {CarroService} from "./carro.service";
import {CardModule} from "primeng-lts/card";
import {TooltipModule} from 'primeng-lts/tooltip';


@NgModule({
  declarations: [CarroComponent],
  imports: [
    CommonModule,
    CarroRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    FormsModule,
    InputNumberModule,
    ConfirmDialogModule,
    RippleModule,
    InputTextModule,
    DataViewModule,
    CardModule,
    TooltipModule
  ],
  providers: [
    CarroService
  ]
})
export class CarroModule { }
