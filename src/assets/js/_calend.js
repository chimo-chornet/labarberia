"use strict";
var mesActual;
var anActual;
var actual=new Date();
var festivos=[];
var nextMonth="";
var nextYear="";
var prevYear="";
var prevMonth="";
var a=[];
function fes(year,month){
    festivos=[];
let bar = 'Hola Chimo';
$(document).ready(function ()
{
    $.ajax({
        type: 'POST',
        url: './admin/parser.php',
        data: {
            'foo': bar
        },
        success: function(msg){
           a=JSON.parse(msg);
           festivos=[];
          for(let i=0;i<a.length;i++){
            var festi=new Date(a[i]['fecha']);

            if(festi.getFullYear()==year && festi.getMonth()+1==month){
            festivos.push(festi.getDate());
            }
          }

        }
    });
});
setTimeout("mostrarCalendario("+year+","+month+")",100);

}
function mostrarCalendario(year,month)
{
var now=new Date(year,month-1,1);
    var last=new Date(year,month,0);
    var primerDiaSemana=(now.getDay()==0)?7:now.getDay();
    var ultimoDiaMes=last.getDate();
    var dia=0;
    var resultado="<tr >";
    var diaActual=0;
    console.log(ultimoDiaMes);
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
            if(dia==actual.getDate() && month==actual.getMonth()+1 &&
 year==actual.getFullYear()){
                resultado+="<td class='hoy'>"+dia+"</td>";
             }else{

                if(i%7==0 || (i+1)%7==0 || festivos.includes(dia)){


                    resultado+="<td class='findes'>"+dia+"</td>";
                }else{
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
    nextMonth=month+1;
    nextYear=year;

    if(month+1>12)
    {
        nextMonth=1;
        nextYear=year+1;
    }

    // Calculamos el anterior mes y año
    prevMonth=month-1;
    prevYear=year;

    if(month-1<1)
    {
        prevMonth=12;
        prevYear=year-1;
    }

document.getElementById("cap").getElementsByTagName("caption")[0].innerHTML="<div class='blanco'>"+meses[month-1]+" / "+year+"</div><div class='blanco'><a onclick='fes("+prevYear+","+prevMonth+")'>&#8592</a><a onclick='fes("+nextYear+","+nextMonth+")'> &#8594</a></div>";
document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML=resultado;
if(month.length<2){
    mesActual='0'+month;
}else{
mesActual=month;
}
anActual=year;
}
fes(actual.getFullYear(),actual.getMonth()+1);

document.addEventListener('click',hacer);
function hacer(evento){
    let validos=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    if(validos.includes(evento.target.textContent)){
    window.location.href=("citas.php?dia="+anActual+'-'+mesActual+'-'+evento.target.textContent);
    }
}


function citasTodas(){
    window.location.href=("citasTotales.php");
}

