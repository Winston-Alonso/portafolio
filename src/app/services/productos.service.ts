import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos_idx: Producto[] = [];
  cargando = true;
  productosFil: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-2cc31.firebaseio.com/productos_idx.json').subscribe(
        (resp: Producto[]) => {
          this.productos_idx = resp;
          this.cargando = false;
          resolve();
          /* setTimeout(() => {
            this.cargando = false;
          }, 2000); */
        }
      );
    });
  }

  getProducto(id: String) {
    return this.http.get(`https://angular-html-2cc31.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string) {
    if(this.productos_idx.length === 0) {
      // Carga productos
      this.cargarProductos().then(() => {
        // Ejecuta despues de tener los productos
        // Aplica el filtro
        this.filtrarProductos(termino);
      });
    } else {
      // Aplica el filtro
      this.filtrarProductos(termino);
    }
    /* this.productosFil = this.productos_idx.filter(producto => {
      return true;
    });
    console.log(this.productosFil); */
  }

  private filtrarProductos(termino: string) {
    this.productosFil = [];
    termino = termino.toLowerCase();
    this.productos_idx.forEach(prod => {
      const titulo = prod.titulo.toLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || titulo.indexOf(termino) >= 0) {
        this.productosFil.push(prod);
      }
    });
  }
}
