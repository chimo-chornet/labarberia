import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cal',
    imports: [RouterLink],
    templateUrl: './cal.component.html',
    styleUrl: './cal.component.css'
})
export class CalComponent {
  mesActual: number = 0;
  anActual: number = 0;
  actual: Date = new Date();
  festivos: any = [1,5,8,24];
  nextMonth: number = 0;
  nextYear: number = 0;
  prevYear: number = 0;
  prevMonth: number = 0;
  a = [];
  messageSuccess = true;
  resultado:string='';
constructor(){};

  public fes(year: number, month: number):void {
    this.festivos = [];
    let bar = 'Hola Chimo';

   //this.mostrarCalendario(year,month);
  }

  public mostrarCalendario(year: number, month: number):void {
    console.log('mostrando ' + year + ' - ' + month);

    var now = new Date(year, month - 1, 1);
    var last = new Date(year, month, 0);
    var primerDiaSemana = now.getDay() == 0 ? 7 : now.getDay();
    var ultimoDiaMes = last.getDate();
    var dia = 40;
    this.resultado = '<tr >';
    var diaActual = 0;
    var last_cell = primerDiaSemana + ultimoDiaMes;
    // hacemos un bucle hasta 42
    //de  6 columnas y de 7 días
    for (var i = 1; i <= 42; i++) {
      if (i == primerDiaSemana) {
        // determinamos en que día empieza
        dia = 1;
      }
      if (i < primerDiaSemana || i >= last_cell) {
        // celda vacía
        this.resultado += '<td>&nbsp;</td>';
      } else {
        // mostramos el día
        let ahora = new Date(year, month - 1, dia);
        if (
          dia == this.actual.getDate() &&
          month == this.actual.getMonth() + 1 &&
          year == this.actual.getFullYear()
        ) {
          if (
            i % 7 == 0 ||
            (i + 1) % 7 == 0 ||
            this.festivos.includes(dia) ||
            dia < now.getDay() + 1
          ) {
            this.resultado += "<td class='findes hoy'>" + dia + '</td>';
          } else {
            this.resultado += "<td class='hoy'>" + dia + '</td>';
          }
        } else {
          if (
            i % 7 == 0 ||
            (i + 1) % 7 == 0 ||
            this.festivos.includes(dia) ||
            ahora < this.actual
          ) {
            this.resultado += "<td class='findes'>" + dia + '</td>';
          } else {
            this.resultado += '<td>' + dia + '</td>';
          }
        }
        dia++;
      }
      if (i % 7 == 0) {
        if (dia > ultimoDiaMes) break;
        this.resultado += '</tr><tr>\n';
      }
    }
    this.resultado += '</tr>';

    var meses = Array(
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    );

    // Calculamos el siguiente mes y año
    this.nextMonth = month + 1;
    this.nextYear = year;

    if (month + 1 > 12) {
      this.nextMonth = 1;
      this.nextYear = year + 1;
    }

    // Calculamos el anterior mes y año
    this.prevMonth = month - 1;
    this.prevYear = year;

    if (month - 1 < 1) {
      this.prevMonth = 12;
      this.prevYear = year - 1;
    }

    const una = document.getElementById('cap');

    if (una != null) {
      una.style.backgroundColor = 'red';
      una.getElementsByTagName('caption')[0].innerHTML =
        "<div class='blanco'>" +
        meses[month - 1] + ' / ' + year + "</div><div class='blanco'><a onclick='fes(" +
        this.prevYear + ',' + this.prevMonth + ")'>&#8592</a><a onclick='fes(" +
        this.nextYear +',' + this.nextMonth + ")'> &#8594</a></div>";
    }

    if (typeof document !== 'undefined') {
      const dos = document.getElementById('calendar');
      if (dos != null) {
        dos.getElementsByTagName('tbody')[0].innerHTML = this.resultado;
      }
    }

    if (month < 10) {
      this.mesActual = 0 + month;
    } else {
      this.mesActual = month;
    }
    this.anActual = year;

  }


  public hacer(evento: any) {
    console.log('tresul'+this.resultado);
    let validos = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ];
    if (
      evento.target.className == 'findes' ||
      evento.target.className == 'findes hoy'
    ) {
      alert('Día cerrado');
    } else if (validos.includes(evento.target.textContent)) {
      //window.location.href=("http://localhost:4200/citaUsuario/?="+this.anActual+'-'+this.mesActual+'-'+evento.target.textContent);
    }
  }

  ngOnInit() {
   //this.fes(this.actual.getFullYear(),this.actual.getMonth()+1);

  //document.;addEventListener('click',hacer);
 this.mostrarCalendario(this.actual.getFullYear(),this.actual.getMonth()+1)
  }
  muestra(){
    alert('joer');
    console.log('onio');

    this.mostrarCalendario(this.actual.getFullYear(),this.actual.getMonth()+1)
  }
}
