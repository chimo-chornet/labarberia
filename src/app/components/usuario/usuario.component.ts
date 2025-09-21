import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Peticiones } from '../../services/peticiones';
import { json } from 'express';
import { Request,Response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-usuario',
    imports: [FormsModule,],
    templateUrl: './usuario.component.html',
    styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  nombre:string='';
  apellidos:string='';
  credenciales:number=123;
    mail: string = '';
  password: string = '';

  tipo: string = '';
  msg: string = '';
  errores: string = '';
  idUsuario:number=0;
  constructor(private router:Router,private conn:Peticiones){}
textValidate(cadena:string){
    var re = /^[A-Za-z Ññ áéíóúÁÉÍÓÚ]+$/;
    if(re.test(cadena))
      return true;
    else
       return false;
}
 crear(){
//validamos que los campos estén rellenos y que sean del tipo correcto
if(this.nombre==''|| this.apellidos==''||this.credenciales==undefined||this.mail==''|| this.password==''){
  this.msg='Debe llenar todos los campos';
}else if(!this.textValidate(this.nombre)|| !this.textValidate(this.apellidos)){
  this.nombre='';
  this.apellidos='';
  this.tipo='Error de tipos';
  this.msg='El nombre y los apellidos no admiten números ni caracteres especiales'
//comporbamos que el email contiene al menos una @ y un punto
}else if(this.mail.length<7 || !this.mail.includes('@')|| !this.mail.includes('.')){

    this.mail='';
    this.msg='No parece un email válido';

}else if(this.password.length<6){
  this.password='';
  this.tipo='Error en password';
  this.msg='La contraseña debe tener al menos 6 caracteres';

}else{


    var bodyUser = {
  name:this.nombre,
  lastName:this.apellidos,
  credential:this.credenciales,
  email: this.mail,
  password: this.password
    };
this.conn.nuevoUsuario(bodyUser).subscribe((res:any)=>{
  this.tipo='Respuesta del servidor';
  this.msg=res.msg;
  setTimeout(() => {
    this.salir()
  }, 2000);

},(event:HttpErrorResponse)=>{
  this.tipo='Error al crear usuario'
  this.msg=event.error.msg
  setTimeout(() => {
    this.salir()
  }, 2000);
});
}
 }
 salir(){
  this.router.navigate(['/admin'])

 }
}
