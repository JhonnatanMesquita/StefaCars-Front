import { Component, OnInit } from '@angular/core';
import {JogadorService} from "../jogador/jogador.service";
import {ConfirmationService, MessageService} from "primeng-lts/api";
import {CarroService} from "./carro.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carros: [];

  constructor(
    private service: CarroService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.service.listar().subscribe(res => {
      this.carros = res;
    });
  }

  sanitizerImg(img: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

}
