import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos_idx: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-2cc31.firebaseio.com/productos_idx.json').subscribe(
      (resp: Producto[]) => {
        this.productos_idx = resp;
        this.cargando = false;
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      }
    );
  }
}
