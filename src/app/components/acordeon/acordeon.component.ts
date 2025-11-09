import { Component } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { Router } from '@angular/router';
import { ScriptLoaderService } from '../../services/scriptloader.service';
import { Peticiones } from '../../services/peticiones';

@Component({
    selector: 'app-acordeon',
    imports: [CarruselComponent],
    templateUrl: './acordeon.component.html',
    styleUrl: './acordeon.component.css'
})
export class AcordeonComponent {
  listaOfertas:any=[];
  constructor(private router:Router, private scriptLoaderService:ScriptLoaderService, private conn:Peticiones){};
ngOnInit(){
 this.conn.ofertas().subscribe((res:any)=>{
this.listaOfertas=res.body;


 })

}
  goLogin(){
this.router.navigate(['/login']);
  }

}
