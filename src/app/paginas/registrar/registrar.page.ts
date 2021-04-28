import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  email : string;
  senha : number; 

  constructor() { }

  ngOnInit() {
  }

  registraroOk(){
    console.log ("Registro concluido");
    console.log (this.email);
    console.log (this.senha);
  }

}
