import { Component } from '@angular/core';
import { ToastService } from 'ngx-toastr-notifier';

@Component({
  selector: 'app-pruebas',
  imports: [],
  templateUrl: './pruebas.html',
  styleUrl: './pruebas.css'
})
export class Pruebas {
  constructor(private toastr:ToastService){}

  ngOnInit(){
    this.toastr.success('A ver si sale','Enhorabuena')
  }

}
