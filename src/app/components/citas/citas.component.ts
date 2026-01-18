import { Component, OnInit } from '@angular/core';
import { Calendariousuario } from "../calendario-usuario/calendario-usuario";
import { Router, UrlTree } from '@angular/router';

@Component({
    selector: 'app-citas',
    imports: [Calendariousuario],
    templateUrl: './citas.component.html',
    styleUrl: './citas.component.css'
})
export class CitasComponent {
    token:any="";
    constructor(private router: Router) {

        /*this.urlTree = this.router.parseUrl(this.router.url);
        this.year = this.urlTree.queryParams['year'];
        this.month = this.urlTree.queryParams['month'];
        this.color = this.urlTree.queryParams['color'];

        this.day = this.urlTree.queryParams['day'];
        */
        if(localStorage.getItem('token')!=null){
          this.token=localStorage.getItem('token');
      };
    }
    ngOnInit(): void {

    this.token=localStorage.getItem('token');
  var bearer=0;
  if (this.token!=null){
    bearer=this.token.length;
}
if(bearer<=10){
  this.router.navigate(['/login']);
}
    }
}
