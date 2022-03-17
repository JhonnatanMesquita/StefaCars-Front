import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/']
      },
      {
        label: 'Jogador',
        icon: 'pi pi-user',
        routerLink: ['/jogador'],
        visible: false
      },
      {
        label: 'Carro',
        icon: 'pi pi-car',
        routerLink: ['/carro']
      }
    ];
  }

}
