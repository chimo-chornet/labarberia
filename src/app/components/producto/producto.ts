import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Peticiones } from '../../services/peticiones';
import { FormsModule } from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  recogido: any = [];
  mensaje: string = '';
  descripcion: string = '';
  status: number = 1;
  mensajeModal: string = '';
  contador:number=1;

  tipo: string = '';
  msg: string = '';
  errores: string = '';
  constructor(private router: Router, private conn: Peticiones) {}
  ngOnInit() {
    this.conn.ofertas().subscribe((res: any) => {
      this.recogido = res.body;

      if (this.recogido.length > 0) {
        this.mensaje = 'Ofertas actuales:';
      }
    });
  }
  crear() {
    //validamos que los campos estén rellenos y que sean del tipo correcto
    if (this.descripcion == '') {
      this.msg = 'La descripción no puede estar vacía';
    } else {
      var bodyProduct = {
        description: this.descripcion,
        status: this.status,
      };
      this.conn.nuevoProducto(bodyProduct).subscribe(
        (res: any) => {
          this.conn.ofertas().subscribe((res: any) => {
            this.recogido = res.body;

            if (this.recogido.length > 0) {
              this.mensaje = 'Ofertas actuales:';
            }
          });
          this.descripcion = '';
        },
        (event: HttpErrorResponse) => {
          this.tipo = 'Error al crear la oferta';
          this.msg = event.error.msg;
          setTimeout(() => {
            this.salir();
          }, 2000);
        }
      );
    }
  }
  salir() {
    this.router.navigate(['/admin']);
  }

  eliminaProducto(id: any, desc: string) {
    console.log(id);
    this.modal();
    this.mensajeModal = desc;
    let resultado = document.getElementById('ok');
    if (resultado != null) {
      resultado.onclick = () => {
        // Lógica para aceptar
        this.conn.borraProducto(id).subscribe((res: any) => {
          this.mensaje = res.msg;
          console.log(this.mensaje);

          this.conn.ofertas().subscribe((res: any) => {
            this.recogido = res.body;
            if (this.recogido.length > 0) {
              this.mensaje = 'Ofertas actuales:';
            }
          });
        });
        this.cerrarModal();
      };
    }
  }
  actualiza(indice:number,id:any) {

    var desc: any;
      var texto:string='';

    var seleccion = document.getElementById('oferta'+indice);

    if (seleccion) {
      desc = seleccion;
      texto=desc.value;
      console.log("texto:" +texto);

    }
    this.conn.actualizaOferta(id, texto).subscribe((resp: any) => {
      this.tipo = 'Respuesta del servidor';

      this.msg = resp.msg;
      this.conn.ofertas().subscribe((res: any) => {
        this.recogido = res.body;
        if (this.recogido.length > 0) {
          this.mensaje = 'Ofertas actuales:';
        }
      });

      //this.salir();
    }),
      (event: HttpErrorResponse) => {
        this.tipo = 'Respuesta del servidor';
        this.msg = event.error.msg;
      };
  }

  //Hacemos visible la ventana modal
  modal() {
    let modal: any = document.getElementById('myModal');

    modal.style.display = 'block';
  }

  // Se cierra la ventana modal
  cerrarModal() {
    let modal: any = document.getElementById('myModal');

    modal.style.display = 'none';
  }
}
