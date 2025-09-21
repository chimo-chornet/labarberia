import { Component } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { Router } from '@angular/router';
import { ScriptLoaderService } from '../../services/scriptloader.service';

@Component({
    selector: 'app-acordeon',
    imports: [CarruselComponent],
    templateUrl: './acordeon.component.html',
    styleUrl: './acordeon.component.css'
})
export class AcordeonComponent {
  constructor(private router:Router, private scriptLoaderService:ScriptLoaderService){};

  goLogin(){
this.router.navigate(['/login']);
  }

}
