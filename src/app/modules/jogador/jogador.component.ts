import { Component, OnInit } from '@angular/core';
import { JogadorService } from './jogador.service';
import { ConfirmationService, MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class JogadorComponent implements OnInit {

  colunas = [];
  jogador = {};
  jogadores = [];
  jogadoresSelecionados = [];

  enviado = false;
  jogadorDialog = false;

  constructor(
    private service: JogadorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {

    this.colunas.push(
      { nome: 'Nick', ref: 'nickname' },
      { nome: 'Saldo', ref: 'saldo', pipe: 'currency' },
      { nome: 'Carro', ref: 'carro' },
      { nome: 'Batalhar', ref: 'batalhar' }
    );

    this.service.listar().subscribe(res => {
      this.jogadores = res;
    });
  }

  novoJogador(): void {
    this.jogador = {};
    this.enviado = false;
    this.jogadorDialog = true;
  }

  deletarJogadorSelecionado(): void {

  }

  batalharComJogador(jogador): void {

  }

  editarJogador(jogador): void {

  }

  deletarJogador(jogador): void {
    this.confirmationService.confirm({
      message: 'Você realmente quer deletar o jogador "' + jogador.nickname + '" ?',
      header: 'Confimação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.jogadores = this.jogadores.filter(val => val.id !== jogador.id);
        this.jogador = {};
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Jogador deletado com sucesso!', life: 3000 });
      }
    });
  }

  hideDialog(): void {
    this.enviado = false;
    this.jogadorDialog = false;
    this.messageService.add({ severity: 'warning', summary: 'Cancelado', detail: 'Ação cancelada!', life: 3000 });
  }

  saveJogador(): void {
    this.enviado = true;
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Jogador criado!', life: 3000 });
    this.jogadorDialog = false;
    this.jogador = {};
  }

}
