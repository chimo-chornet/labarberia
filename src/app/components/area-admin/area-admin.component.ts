import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';
import { Peticiones } from '../../services/peticiones';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-area-admin',
    imports: [RouterLink],
    templateUrl: './area-admin.component.html',
    styleUrl: './area-admin.component.css'
})
export class AreaAdminComponent {
recogido:any=[];
  mensaje:string='';
  hoy:Date=new Date();
  dia:string=""+(this.hoy.getDate()-1);
  mes:string=""+(this.hoy.getMonth()+1);
  mensajeModal:string='';


 fecha:string =""+this.hoy.getFullYear()+"-"+(this.hoy.getMonth()+1)+"-"+this.dia;
  token:any='';
  constructor(private router:Router,private dat:DataService,private conn:Peticiones){
    this.token=localStorage.getItem('token');
  };

listado(){
  let citas=document.getElementById('citas');
  if(citas!=null){
  citas.style.display='none';
  //citas.style.visibility='none';
    let usuario=document.getElementById('usuarios');
  if(usuario!=null){
  usuario.style.display='block'
  }
this.conn.lista().subscribe((res:any)=>{
    this.recogido=res.body;
    if(this.recogido.length>0){
      this.mensaje='Lista de usuarios'
    }
});

}
}
ngOnInit(){
  if(this.dia.length<2){
   this.dia="0"+this.dia;
  }
  if(this.mes.length<2){
   this.mes="0"+this.mes;
  }
   this.fecha=""+this.hoy.getFullYear()+"-"+this.mes+"-"+this.dia;
this.citasPendientes();
}
citasPendientes(){
  let citas=document.getElementById('citas');
  if(citas!=null){
  citas.style.display='block';
  //citas.style.visibility='none';
  }
    let usuario=document.getElementById('usuarios');

  if(usuario!=null){
  usuario.style.display='none'
  }

if(this.token==null){
  this.router.navigate(['/login']);
}
this.conn.citasPendientes(this.fecha).subscribe((res:any)=>{
    this.recogido=res.body;
    if(this.recogido.length>0){
      this.mensaje='Citas pendientes:'
    }
});
}

  salir(){
localStorage.clear();
    this.router.navigate(['/home']);


  }

  citasDia(dia:string){



this.conn.getCitas(dia).subscribe((res:any)=>{
    this.recogido=res.body;
    if(this.recogido.length>0){
      this.mensaje='Citas del: '+dia
    }
}, (event: HttpErrorResponse) =>{

      this.mensaje = event.error.msg;}
    );
}


  editar(entrada:any){
    console.log(entrada)
  }


  eliminaCita(id:any){

    this.modal();
    this.mensajeModal='Eliminar cita'
      let resultado=document.getElementById('ok');
      if(resultado!=null){
      resultado.onclick=()=>{
 // Lógica para aceptar
            this.conn.borraCita(id).subscribe((res:any)=>{
        this.mensaje=res.msg;
        this.conn.citasPendientes(this.fecha).subscribe((res:any)=>{
    this.recogido=res.body;
    if(this.recogido.length>0){
      this.mensaje='Citas pendientes:'
    }
  });
    });
     this.cerrarModal();
      this.router.navigate(['/admin']);
    }
  }
}

  eliminaUsuario(id:any){

    this.modal();
    this.mensajeModal='Eliminar usuario'
      let resultado=document.getElementById('ok');
      if(resultado!=null){
      resultado.onclick=()=>{
      this.conn.borraUsuario(id).subscribe((res:any)=>{
        this.mensaje=res.msg;
        this.conn.lista().subscribe((res:any)=>{
        this.recogido=res.body;
            if(this.recogido.length>0){
              this.mensaje='Lista de usuarios'
            }
        });
      });

     this.cerrarModal();
      this.router.navigate(['/admin']);
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
