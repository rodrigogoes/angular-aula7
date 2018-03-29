import { Component, OnInit, Input } from '@angular/core';
import { Amigo } from '../domain/amigos';
import { AMIGOS } from '../domain/mock-amigo';


@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {
amigos : Amigo[] = AMIGOS;
amigo : Amigo = new Amigo();

  constructor() { }

  ngOnInit() {
  }

  addAmigo(){
    //console.log(this.amigo.nome);
    let novoAmigo = new Amigo();
    novoAmigo.id = this.amigo.id;
    novoAmigo.nome = this.amigo.nome;
    novoAmigo.dataNascimento = this.amigo.dataNascimento;
    this.amigos.push(novoAmigo);
  }

}
