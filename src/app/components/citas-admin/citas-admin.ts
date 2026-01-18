import { Component, OnInit } from '@angular/core';
import { CalendarioAdmin } from '../calendario-admin/calendario-admin';
import { Router, UrlTree } from '@angular/router';

@Component({
    selector: 'app-citas-admin',
    imports: [CalendarioAdmin],
    templateUrl: './citas-admin.html',
    styleUrl: './citas-admin.css'
})
export class CitasAdminComponent {
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
