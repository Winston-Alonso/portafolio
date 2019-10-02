import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.sass']
})
export class PortafolioComponent implements OnInit {

  constructor(public _servicio: ProductosService) { }

  ngOnInit() {
  }

}
