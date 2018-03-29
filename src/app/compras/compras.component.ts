import { Component, OnInit } from '@angular/core';
import { COMPRAS } from '../domain/mock-compras';
import { Compra } from '../domain/compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  compras : Compra[] = COMPRAS;
  compra : Compra = new Compra();

  constructor() { }

  ngOnInit() {
  }

  addCompras(){
  let novoCompra = new Compra();
  novoCompra.id = this.compra.id;
  novoCompra.descricao = this.compra.descricao;
  this.compras.push(novoCompra);
}

}