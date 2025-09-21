import { Component, inject } from '@angular/core';
import { Peticiones } from '../../services/peticiones';
import { DataService } from '../../services/data-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrl: './login.css',
    imports: [FormsModule]
})
export class Login {
  mail: string = '';
  password: string = '';
  tipo: string = '';
  msg: string = '';
  errores: string = '';
  idUsuario:number=0;
  credenciales:number=0;


  recogidos: any = [];
  tokenRecibido = 'nada';
  constructor(
    private chimo: DataService,
    private conn: Peticiones,
    private router: Router,

   ) {}


  acceder() {
    if (this.mail == '' || this.password == '') {
      this.tokenRecibido = '';

      this.tipo = 'Error de autenticación';
      this.msg = 'El email o el password no son correctos';


      //this.router.navigate(['/error']);
    } else {

      this.conn.getToken(this.mail, this.password).subscribe((resp: any) => {
        this.recogidos = resp;
        this.errores = resp.status;
        //this.recogidos=this.recogidos.body;
        this.tokenRecibido = 'Bearer ' + this.recogidos.token;
        this.chimo.setShareData(this.tokenRecibido);
        this.chimo.setMail(resp.mail);
        this.chimo.setPas(this.password);
        this.idUsuario=this.recogidos.idUsario;
        localStorage.setItem('userId',this.recogidos.idUsuario);
        this.credenciales=resp.credential;
        localStorage.setItem('token',this.tokenRecibido);
        if(this.tokenRecibido=='nada'){
        console.log('no hay');

      }else{
        if(this.credenciales>125){
      this.router.navigate(['/admin']);
        }else{
      this.router.navigate(['/usuarios']);
      }
    }

      }, (event: HttpErrorResponse) =>{
        this.tipo = 'Error de autenticación';
      this.msg = event.error.msg;
      this.password='';
      });
    }
  }
  salir(){
    localStorage.clear();
         this.router.navigate(['/home']);

  }
  getMail(){
    return this.mail;
  }
}
