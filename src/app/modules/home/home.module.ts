import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenubarModule } from 'primeng-lts/menubar';
import {InputTextModule} from 'primeng-lts/inputtext';
import {CarroRoutingModule} from '../carro/carro-routing.module';
import {TableModule} from 'primeng-lts/table';
import {ButtonModule} from 'primeng-lts/button';
import {ToastModule} from 'primeng-lts/toast';
import {ToolbarModule} from 'primeng-lts/toolbar';
import {DialogModule} from 'primeng-lts/dialog';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng-lts/inputnumber';
import {ConfirmDialogModule} from 'primeng-lts/confirmdialog';
import {RippleModule} from 'primeng-lts/ripple';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
  ]
})
export class HomeModule { }
