import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Peticiones } from '../../services/peticiones';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-cita-admin',
    imports: [FormsModule],
    templateUrl: './cita-admin.html',
    styleUrl: './cita-admin.css'
})
export class CitaAdmin implements OnInit {
  year: number = 0;
  month: number = 0;
  day: number = 0;
  urlTree: UrlTree;
  respuesta: any = [];
  token:any='';
  dia:string='';
  color:string='';
  cliente:string='';
  mensaje:string='';
  mensajeModal:string='';



  frase: any = '';
  constructor(private router: Router, private conn: Peticiones) {

    this.urlTree = this.router.parseUrl(this.router.url);
    this.year = this.urlTree.queryParams['year'];
    this.month = this.urlTree.queryParams['month'];
    this.color = this.urlTree.queryParams['color'];

    this.day = this.urlTree.queryParams['day'];
    if(localStorage.getItem('token')!=null){
      this.token=localStorage.getItem('token');
  };



  }
//Al inicio comprobamos si es festivo y recogemos las horas reservadas para marcarlas en rojo
  ngOnInit(): void {
this.dia=this.year + '-' + this.month + '-' + this.day;
    let comienzo=document.getElementById('comienzo')
    if(comienzo!=null){
    comienzo.style.color=this.color;
    }



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
  //marca el día como festivo y lo muestra en rojo
  marcar(){
    this.conn.setFestivos(this.dia).subscribe((res:any)=>{
      this.respuesta=res.body
    });
    let comienzo=document.getElementById('comienzo')
    if(comienzo!=null){
    comienzo.style.color='red';
    }

  }
  //desmarca el día como festivo y lo muestra en negro
  desmarcar(){

    this.conn.borraFestivo(this.dia).subscribe((res:any)=>{
      this.respuesta=res.body
    });
    let comienzo=document.getElementById('comienzo')
    if(comienzo!=null){
    comienzo.style.color='black';
    }
  }

  //Al salir redirigimos al calendario de administración
  salir() {


    this.router.navigate(['/citasAdmin']);
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

      this.conn.creaCitaAdmin(this.day,this.month,this.year,hora,this.cliente).subscribe((resp:any)=>{

        this.respuesta=resp.body;
      });
      this.cerrarModal();
      this.salir();
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
