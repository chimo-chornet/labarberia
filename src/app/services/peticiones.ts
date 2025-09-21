import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service.service';


@Injectable({
  providedIn: 'root',
})
export class Peticiones {
  private http = inject(HttpClient);
  private tok: any = '';
  constructor(private chimo: DataService) {}


public lista(){
  var autorizacion=""+localStorage.getItem('token');
  const headers = { 'Authorization': autorizacion}

  return  this.http.get('http://localhost:3020/api/user/lista',{headers});
}

public getFestivos(){
    const autorizacion = ""+localStorage.getItem('token');

  const headers = { 'Authorization': autorizacion}

  return  this.http.get('http://localhost:3020/api/festivos/lista',{headers});
}
public setFestivos(fecha:string){
    const autorizacion = ""+localStorage.getItem('token');

  const headers = { 'Authorization': autorizacion}
  var body = {
      dia: fecha
    };

  return  this.http.post('http://localhost:3020/api/festivos/register',body,{headers});
}

public borraFestivo(fecha: string) {
    const autorizacion = localStorage.getItem('token')+"";
    const headers={'Authorization':autorizacion}
    let destino: string = 'http://localhost:3020/api/festivos/eliminar?dia=' + fecha;
    return this.http.delete(destino,{headers});
  }



  public getToken(mail: string, pass: string) {
    var body = {
      email: mail,
      password: pass,
    };
    const toki = this.http.post('http://localhost:3020/api/user/login', body);
    this.tok = toki;

    return this.tok;
  }

  public nuevoUsuario(bodey: any) {
     const autorizacion = ""+localStorage.getItem('token');

 const headers = { 'Authorization': autorizacion}
    return this.http.post('http://localhost:3020/api/user/register', bodey,{headers});
  }

  public cambioPassword(mail: string, nuevopassword: string) {
     const autorizacion = ""+localStorage.getItem('token');

 const headers = { 'Authorization': autorizacion}
    var body = {
      email: mail,
      passnuevo: nuevopassword,
    };
    const toki = this.http.put('http://localhost:3020/api/user/actualiza',body,{headers});
    this.tok = toki;

    return this.tok;
  }
  public getCitas(dia: string) {
    const autorizacion = ""+localStorage.getItem('token');

 const headers = { 'Authorization': autorizacion}
    let destino: string = 'http://localhost:3020/api/citas/dia?dia=' + dia;
    return this.http.get(destino,{headers});
  }
  public citasPendientes(dia: string) {
    const autorizacion = ""+localStorage.getItem('token');


 const headers = { 'Authorization': autorizacion}
    let destino: string = 'http://localhost:3020/api/citas/pendientes?dia=' + dia;
    return this.http.get(destino,{headers});
  }
  public getCitasUsuario(usuario: string) {
    const autorizacion = ""+localStorage.getItem('token');


    const headers = { 'Authorization': autorizacion}
    let destino: string = 'http://localhost:3020/api/citas/user?user=' + usuario;
    return this.http.get(destino,{headers});
  }


  public creaCita(dia: number, mes: number, year: number,hora:string,user:string){
    let destino: string = 'http://localhost:3020/api/citas/register';
    let cadena=year+'-'+mes+'-'+dia;
    let idUser:any=user;
    let body={
      idUsuario:idUser,
      dia:cadena,
     hora:hora,
    }
    return this.http.post(destino,body)
  }

  public creaCitaAdmin(dia: number, mes: number, year: number,hora:string,user:string){
    let destino: string = 'http://localhost:3020/api/citas/registerAdmin';
    let cadena=year+'-'+mes+'-'+dia;
    let body={
      usuario:user,
      dia:cadena,
     hora:hora,
    }
    return this.http.post(destino,body)
  }


public borraCita(id: string) {
    const autorizacion = localStorage.getItem('token')+"";
    const headers={'Authorization':autorizacion}
    let destino: string = 'http://localhost:3020/api/citas/eliminar?id=' + id;
    return this.http.delete(destino,{headers});
  }

  public borraUsuario(id: string) {
    const autorizacion = localStorage.getItem('token')+"";
    const headers={'Authorization':autorizacion}
    let destino: string = "http://localhost:3020/api/usuarios/eliminar?id="+id;
    return this.http.delete(destino,{headers});
  }
}
