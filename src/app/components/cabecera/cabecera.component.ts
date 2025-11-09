import { Component, ElementRef, OnInit, Renderer2, viewChild } from '@angular/core';

@Component({
    selector: 'app-cabecera',
    imports: [],
    templateUrl: './cabecera.component.html',
    styleUrl: './cabecera.component.css'
})

export class CabeceraComponent  {
    ngOnInit(): void {
      var  poloI=document.getElementById('poloIzda');
      var  poloD=document.getElementById('poloDcha');


      setTimeout(()=>{
        if(poloD!=null && poloI!=null){
            poloD.style.opacity='100%';
            poloI.style.opacity='100%';
        }

      },1800)

    }



}