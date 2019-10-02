import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public _servicio: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this._servicio.buscarProducto(params['termino']);
      }
    );
  }

}
