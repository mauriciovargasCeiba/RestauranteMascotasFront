import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Observable<Producto[]>;
  codigoReserva: string = '';

  constructor(protected productoService: ProductoService) { }

  ngOnInit() {    
    this.consultarProductos();
  }

  consultarProductos(conCodigoReserva?: string) {
    this.listaProductos = this.productoService.consultar(conCodigoReserva);
  }

}
