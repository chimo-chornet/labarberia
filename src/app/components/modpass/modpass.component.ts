import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Peticiones } from '../../services/peticiones';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data-service.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-modpass',
    imports: [FormsModule],
    templateUrl: './modpass.component.html',
    styleUrl: './modpass.component.css'
})
export class ModpassComponent {
  passact: string = '';
  passactual: string = '';

  passnew: string = '';
  passrep: string = '';
  tipo: string = '';
  msg: string = '';
  mail: string = '';

  constructor(
    private conn: Peticiones,
    private router: Router,
    private datos: DataService
  ) {}
  ngOnInit() {
    this.mail = this.datos.getMail();
    this.passactual = this.datos.getPas();
    if(this.mail==''){
      this.router.navigate(['/login']);
    }
  }
  cambiar() {
    if (this.passact != this.passactual) {
      this.tipo = 'Error de contraseñas';
      this.msg = 'la contraseña actual no es correcta';
      this.passact='';
    } else {
      if (this.passact == '' || this.passnew == '' || this.passrep == '') {
        // this.tokenRecibido = '';

        this.tipo = 'Error de contraseñas';
        this.msg = 'Debe llenar todos los campos';
      }else if(this.passnew.length<6){
        this.tipo = 'Error de contraseñas';
        this.msg ='La contaseña debe tener al menos 6 caracteres';
        this.passnew='';
        this.passrep='';
      } else if (this.passnew != this.passrep) {
        this.tipo = 'Error de contraseñas';
        this.msg =
          'el campo repetir contraseña debe ser igual a la nueva contraseña';
      } else {
        this.conn
          .cambioPassword(this.mail, this.passnew)
          .subscribe((resp: any) => {
            this.tipo = 'Respuesta del servidor';

            this.msg = resp.msg;
            //this.salir();
          }),
          (event: HttpErrorResponse) => {
            this.tipo = 'Respuesta del servidor';
            this.msg = event.error.msg;
          };
          setTimeout(() => {
            this.salir();
          }, 1000);
      }
    }
    //console.log(usuario.name)
  }

  salir() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
