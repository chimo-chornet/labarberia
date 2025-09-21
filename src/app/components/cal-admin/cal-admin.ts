import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ScriptLoaderService } from '../../services/scriptloader.service';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-cal-admin',
  imports: [RouterLink],
  templateUrl: './cal-admin.html',
  styleUrl: './cal-admin.css'
})
export class CalAdmin {
  idUsusario:any=''
  token:any=''

  constructor(private scriptLoaderService: ScriptLoaderService,private chimo:DataService) {}

      async ngOnInit() {
        await this.scriptLoaderService.loadScript('jquery-3.7.1');

        this.scriptLoaderService.loadScript('calendAdmin');
       this.idUsusario=localStorage.getItem('userId');
       this.token=localStorage.getItem('token');



        // Ahora puedes usar las funciones de tu script
      }


}
