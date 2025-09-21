import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';
import { Peticiones } from '../../services/peticiones';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-area-usuario',
    imports: [RouterLink],
    templateUrl: './area-usuario.component.html',
    styleUrl: './area-usuario.component.css'
})
export class AreaUsuarioComponent {
  idUsuario:any='';
  recogido:any=[];
  mensaje:string='';
  mensajeModal:string='';

  token:any='';

  constructor(private router:Router,private dat:DataService,private conn:Peticiones){};
ngOnInit(){
  this.token=localStorage.getItem('token');
  this.idUsuario=localStorage.getItem('userId');
  const bearer=this.token.length;
if(bearer<=10){
  this.router.navigate(['/login']);
}else{
setTimeout(()=>{
  this.citasPendientesUsuario()
},100);

}

//this.citasPendientesUsuario()
}

citasPendientesUsuario(){

  this.conn.getCitasUsuario(this.idUsuario).subscribe((res:any)=>{
  this.idUsuario=localStorage.getItem('userId');

    this.recogido=res.body;
    if(this.recogido.length>0){
      this.mensaje='Citas programadas:'
    }
}, (event: HttpErrorResponse) =>{

      this.mensaje = event.error.msg;}
    );
}
  salir(){
   localStorage.clear();
    this.router.navigate(['/home']);


  }
  editar(entrada:any){
    console.log(entrada)
  }


  elimina(id:any){
this.mensajeModal='Eliminar cita';
    this.modal();
      let resultado=document.getElementById('ok');
      if(resultado!=null){
      resultado.onclick=()=>{
 // Lógica para aceptar
      this.conn.borraCita(id).subscribe((res:any)=>{
        this.mensaje=res.msg;
        this.conn.getCitasUsuario(this.idUsuario).subscribe((res:any)=>{
    this.recogido=res.body;
    if(this.recogido.length>0){
      this.mensaje='Citas programadas:'
    }
});

    });
 this.cerrarModal();
      this.router.navigate(['/usuarios']);
  }


}

  }


//Hacemos visible la ventana modal
modal() {
  let modal:any = document.getElementById("myModal");

  modal.style.display="block";

}

// Se cierra la ventana modal
cerrarModal() {let modal:any = document.getElementById("myModal");

  modal.style.display="none";
}



}
