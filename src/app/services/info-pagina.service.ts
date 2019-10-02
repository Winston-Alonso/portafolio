import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Equipo } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: Equipo[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargaEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp); // TODOS LOS DATOS.
        // console.log(resp['twitter']); // DATOS ESPECIFICOS.
      }
    );
  }

  private cargaEquipo() {
    this.http.get('https://angular-html-2cc31.firebaseio.com/equipo.json').subscribe(
      (resp: Equipo[]) => {
        this.equipo = resp;
      }
    );
  }
}
