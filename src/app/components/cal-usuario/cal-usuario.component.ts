import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ScriptLoaderService } from '../../services/scriptloader.service';
import { DataService } from '../../services/data-service.service';



@Component({
    selector: 'app-cal-usuario',
    imports: [RouterLink],
    templateUrl: './cal-usuario.component.html',
    styleUrl: './cal-usuario.component.css'
})
export class CalUsuarioComponent implements OnInit{
  idUsusario:any=''
  token:any=''

  constructor(private scriptLoaderService: ScriptLoaderService,private chimo:DataService) {}

      async ngOnInit() {
        await this.scriptLoaderService.loadScript('jquery-3.7.1');

        this.scriptLoaderService.loadScript('calendUsuario');
       this.idUsusario=localStorage.getItem('userId');
       this.token=localStorage.getItem('token');



        // Ahora puedes usar las funciones de tu script
      }

}
