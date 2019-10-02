import { Component } from '@angular/core';
import { InfoPaginaService } from "./services/info-pagina.service";
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public _infoPagina: InfoPaginaService, public _productos: ProductosService) {}
}
