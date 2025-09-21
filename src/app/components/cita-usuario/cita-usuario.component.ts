import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Peticiones } from '../../services/peticiones';


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
  token:any='';
  mensaje:string='Mensaje de prueba ';
  frase: any = '';
  constructor(private router: Router, private conn: Peticiones) {

    this.urlTree = this.router.parseUrl(this.router.url);
    this.year = this.urlTree.queryParams['year'];
    this.month = this.urlTree.queryParams['month'];
    this.day = this.urlTree.queryParams['day'];
    this.idUsuario = localStorage.getItem('userId');
    if(localStorage.getItem('token')!=null){
      this.token=localStorage.getItem('token');
  };



  }
//Al inicio recogemos las horas reservadas para marcarlas en rojo
  ngOnInit(): void {


    this.conn.getCitas(this.year+"-"+this.month+"-"+this.day).subscribe(
      (res: any) => {
        this.respuesta = res.body;

      this.respuesta.forEach((element:any) => {
      let cambio=document.getElementById(element.hora);
      if(cambio){
      cambio.style.color='red'
      }
    });
      });
  }

  //Al salir redirigimos al area de usuario
  salir() {
    this.router.navigate(['/usuarios']);
  }


//Se selecciona la hora de la cita, se marca en rojo y se añade en la base de datos

  asignaHora(hora:string){
    this.mensaje='Ha elegido el día: '+ this.day+' a las: '+hora;
    let cambio=document.getElementById(hora);
    if(cambio&&cambio.style.color!='red'){
      this.modal();
      let resultado=document.getElementById('ok');
      if(resultado!=null){
      resultado.onclick=()=>{
        cambio.style.color='red';

        this.conn.creaCita(this.day,this.month,this.year,hora,this.idUsuario).subscribe((resp:any)=>{

        this.respuesta=resp.body;
      });
      this.cerrarModal();
      this.salir();
      this.conn.getCitasUsuario(this.idUsuario).subscribe((res:any)=>{
    this.respuesta=res.body;
    if(this.respuesta.length>0){
      this.mensaje='Citas programadas:'
    }
});
    }
  }
    }else{
      alert('Hora reservada')
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
