import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private ENDPOINT = `${environment.API}/jogador`;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar(): Observable<any> {
    return this.httpClient.get(this.ENDPOINT);
  }

}
