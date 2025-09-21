import { Component } from '@angular/core';
import { Router,UrlTree } from '@angular/router';
import { DataService } from '../services/data-service.service';
import { Peticiones } from '../services/peticiones';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cita-dia',
  imports: [],
  templateUrl: './cita-dia.html',
  styleUrl: './cita-dia.css'
})
export class CitaDia {
  idUsuario:string='';
  recogido:any=[];
  mensaje:string=''

  day: number = 0;
  urlTree: UrlTree;
  respuesta: any[] = [];

  frase: any = '';

  constructor(private router:Router,private dat:DataService,private conn:Peticiones){
    this.urlTree = this.router.parseUrl(this.router.url);

    this.day = this.urlTree.queryParams['day'];
  };

ngOnInit(){

  }
  editar(entrada:any){
    console.log(entrada)
  }
  elimina(id:any){
    if (window.confirm("¿Está seguro?")) {
      // Lógica para aceptar
      this.conn.borraCita(id).subscribe((res:any)=>{
        this.mensaje=res.msg;
        this.conn.getCitasUsuario(this.idUsuario).subscribe((res:any)=>{
    this.recogido=res.body;
    console.log(res.body)
    if(this.recogido.length>0){
      this.mensaje='Citas programadas:'
    }
});

    });
    }
  }
salir(){}
}
