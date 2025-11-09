import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { Peticiones } from '../../services/peticiones';
import { ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calendario-usuario',
  imports: [],
  templateUrl: './calendario-usuario.html',
  styleUrl: './calendario-usuario.css'
})
export class Calendariousuario {
  constructor(private conn:Peticiones,private elementRef:ElementRef, private renderer:Renderer2){}
router=new Router();
mesActual:number=0;
anActual:number=0;
actual=new Date();
festivos:any=[];
festivos2:any[][]=[];

nextMonth=0;
nextYear=0;
prevYear=0;
prevMonth=0;
a=[];
color="";

ngOnInit(){
    this.fes(this.actual.getFullYear(),this.actual.getMonth()+1);
}

async fes(year:any,month:any){
this.festivos=[];
           this.conn.getFestivos().subscribe((res:any)=>{
            this.a=res.body;
          for(let i=0;i<this.a.length;i++){
            var festi=new Date(this.a[i]['dia']);

            if(festi.getFullYear()==year && festi.getMonth()+1==month){
                var festiDate:number=festi.getDate();
            this.festivos[i]=festiDate;


            }

          }

           });
console.log(this.festivos);




setTimeout(() => {
    this.mostrarCalendario(year,month);
}, 500);
this.mostrarCalendario(year,month);
//console.log(this.festivos);

        }


mostrarCalendario(year:any,month:any)
{
var now=new Date(year,month-1,1);
    var last=new Date(year,month,0);
    var primerDiaSemana=(now.getDay()==0)?7:now.getDay();
    var ultimoDiaMes=last.getDate();
    var dia:number=0;
    var color='black';
    var resultado="<tr >";
    var diaActual=0;
    var last_cell=primerDiaSemana+ultimoDiaMes;
    // hacemos un bucle hasta 42
    //de  6 columnas y de 7 días
    for(var i=1;i<=42;i++)
    {
        if(i==primerDiaSemana)
        {
            // determinamos en que día empieza
            dia=1;
        }
        if(i<primerDiaSemana || i>=last_cell)
        {
            // celda vacía
            resultado+="<td>&nbsp;</td>";
        }else{
            // mostramos el día
            let ahora=new Date(year,month-1,dia);
            if(dia==this.actual.getDate() && month==this.actual.getMonth()+1 &&
 year==this.actual.getFullYear()){

    if(i%7==0 || (i+1)%7==0 || this.festivos.includes(dia) ){


        resultado+="<td class='findes hoy'>"+dia+"</td>";
    }else{
        resultado+="<td class='hoy'>"+dia+"</td>";

 }


             }else{

                if(i%7==0 || (i+1)%7==0 || this.festivos.includes(dia) || ahora<this.actual){


                    resultado+="<td class='findes'>"+dia+"</td>";
                }else{
                     console.log('dia: ',dia);
                resultado+="<td>"+dia+"</td>";
             }
            }
                dia++;
        }
        if(i%7==0)
        {

            if(dia>ultimoDiaMes)
                break;
            resultado+="</tr><tr>\n";
        }
    }
    resultado+="</tr>";

var meses=Array("Enero", "Febrero", "Marzo", "Abril", "Mayo",
 "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
 "Diciembre");

    // Calculamos el siguiente mes y año
    this.nextMonth=month+1;
    this.nextYear=year;

    if(month+1>12)
    {
        this.nextMonth=1;
        this.nextYear=year+1;
    }

    // Calculamos el anterior mes y año
    this.prevMonth=month-1;
    this.prevYear=year;

    if(month-1<1)
    {
        this.prevMonth=12;
       this.prevYear=year-1;
    }
var cap=document.getElementById("cap");
var calendario=document.getElementById("calendar")
if(cap!=null && calendario!=null){
cap.getElementsByTagName("caption")[0].innerHTML="<div class='blanco'>"+meses[month-1]+" / "+year+"</div><div class='blanco'><a id='anterior'>&#8592</a><a id='posterior'> &#8594</a></div>";
calendario.getElementsByTagName("tbody")[0].innerHTML=resultado;
}
this.anActual=year;


this.mesActual=month;



}


hacer(evento:any){
    if(evento.target.className=='findes' || evento.target.className=='findes hoy'){
        this.color='red';
    }else{
        this.color='black';
    }
    let validos=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    if(evento.target.className=='findes' || evento.target.className=='findes hoy' ){
    this.router.navigate(['/citas'])

        alert("Día cerrado")

    }else if(validos.includes(evento.target.textContent)){

       if(evento.target.textContent.length<2){
this.router.navigate(["/citaUsuario"]);
localStorage.setItem('dia',"0"+evento.target.textContent);
localStorage.setItem('mes',""+this.mesActual),
localStorage.setItem('year',""+this.anActual);
localStorage.setItem('color',this.color);
    //?year="+this.anActual+'&month='+this.mesActual+'&day=0'+evento.target.textContent+'&color='+this.color"])
       // window.location.href=("http://www.labarberiademipadre.com/citaAdmin/?year="+anActual+'&month='+mesActual+'&day=0'+evento.target.textContent+'&color='+this.color);

        }else{
            this.router.navigate(["/citaUsuario"]);
localStorage.setItem('dia',evento.target.textContent);
if(this.mesActual<10){

localStorage.setItem('mes',"0"+this.mesActual);
}else{localStorage.setItem('mes',""+this.mesActual)}

localStorage.setItem('year',""+this.anActual);
localStorage.setItem('color',this.color);

  // window.location.hr
  // this.router.navigate(["/citaAdmin"]ef=("http://www.labarberiademipadre.com:4220/citaAdmin/?year="+anActual+'&month='+mesActual+'&day='+evento.target.textContent+'&color='+this.color);

        }
    }
}


//ngOnInit(){this.mostrarCalendario('2025','11')}
salir(){
    this.router.navigate(['/usuarios'])
}

ngAfterViewInit() {
    this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => {
        var x=event.target;
        console.log(event.target.id);

        if(x.id=='anterior'){
            if(this.anActual!=this.prevYear){
    this.anActual=this.prevYear
}
            this.mesActual=this.mesActual-1;
            this.fes(this.anActual,this.prevMonth,);
        }
         if(x.id=='posterior'){
            if(this.anActual!=this.nextYear){
    this.anActual=this.nextYear
}
            this.mesActual=this.mesActual+1;
            if(this.mesActual==13){
                this.mesActual=1;
            }

            this.fes(this.anActual,this.mesActual);
        }

this.hacer(event);
        this.navigate();});
  }
 public navigate() {
    console.log("eeeehnnananaa");
  }
}