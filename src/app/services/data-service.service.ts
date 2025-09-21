import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedData:string='';
  mail:string='';
  password:string='';
  idUsuario:string='99';


  setShareData(data:any){
    this.sharedData=data;
  }
  getShareData(){
    return this.sharedData;
  }
  setMail(newmail:string){
    this.mail=newmail;

  }
  getMail(){
    return this.mail;

  }
  setPas(newpas:string){
    this.password=newpas;

  }
  getPas(){
    return this.password;

  }
  setUsuario(newuser:string){
    this.idUsuario=newuser;

  }
   getUsuario(){
    return this.idUsuario;

  }

}
