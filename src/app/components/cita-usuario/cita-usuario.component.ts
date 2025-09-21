import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Peticiones } from '../../services/peticiones';
import { Request,Response } from 'express';

import { DataService } from '../../services/data-service.service';


@Component({
    selector: 'app-cita-usuario',
    imports: [],
    templateUrl: './cita-usuario.component.html',
    styleUrl: './cita-usuario.component.css'
})
export class CitaUsuarioComponent implements OnInit {
  year: number = 0;
  month: number = 0;
  day: number = 0;
  urlTree: UrlTree;
  respuesta: any = [];
  idUsuario:any='';
  token:string='';

  frase: any = '';
  constructor(private router: Router, private conn: Peticiones, private chimo:DataService) {

    this.urlTree = this.router.parseUrl(this.router.url);
    this.year = this.urlTree.queryParams['year'];
    this.month = this.urlTree.queryParams['month'];
    this.day = this.urlTree.queryParams['day'];
    this.idUsuario = this.urlTree.queryParams['user'];
    this.token = this.urlTree.queryParams['token'];



  }

  ngOnInit(): void {

    console.log(this.year + '-' + this.month + '-' + this.day);

    this.conn.getCitas(this.year+"-"+this.month+"-"+this.day,this.token).subscribe(
      (res: any) => {
        this.respuesta = res.body;

        //this.router.navigate(['/usuarios']);
this.respuesta.forEach((element:any) => {
      let cambio=document.getElementById(element.hora);
      if(cambio){
      cambio.style.color='red'
      }
    });
      });




  }

  salir() {
    history.back()
    history.back()

    //this.router.navigate(['/usuarios']);
  }



  mostrarCitas() {
    }
  asignaHora(hora:string){
    let cambio=document.getElementById(hora);
    if(cambio&&cambio.style.color!='red'){

      cambio.style.color='red';

      this.conn.creaCita(this.day,this.month,this.year,hora,this.idUsuario).subscribe((resp:any)=>{

        this.respuesta=resp.body;
      });


    }else{
      alert('Hora reservada')
    }

  }
}
