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


public lista(sort:string){
  var autorizacion=""+localStorage.getItem('token');
  const headers = { 'Authorization': autorizacion}

  return  this.http.get('https://srv1098627.hstgr.cloud/api/user/lista?order='+sort,{headers});
}

public getFestivos(){
    const autorizacion = ""+localStorage.getItem('token');

  const headers = { 'Authorization': autorizacion}

  return  this.http.get('https://srv1098627.hstgr.cloud/api/festivos/lista',{headers});
}
public setFestivos(fecha:string){
    const autorizacion = ""+localStorage.getItem('token');

  const headers = { 'Authorization': autorizacion}
  var body = {
      dia: fecha
    };

  return  this.http.post('https://srv1098627.hstgr.cloud/api/festivos/register',body,{headers});
}

public borraFestivo(fecha: string) {
    const autorizacion = localStorage.getItem('token')+"";
    const headers={'Authorization':autorizacion}
    let destino: string = 'https://srv1098627.hstgr.cloud/api/festivos/eliminar?dia=' + fecha;
    return this.http.delete(destino,{headers});
  }



  public getUsuario(mail: string) {
     const autorizacion = localStorage.getItem('token')+"";
    const headers={'Authorization':autorizacion}
    var body = {
      id: localStorage.getItem('userId'),

    };
    const usu = ('https://srv1098627.hstgr.cloud/api/user/user?id='+localStorage.getItem('userId'));


    return this.http.get(usu,{headers});
  }
   public getToken(mail: string, pass: string) {
    var body = {
      email: mail,
      password: pass,
    };
    const toki = this.http.post('https://srv1098627.hstgr.cloud/api/user/login', body);
    this.tok = toki;

    return this.tok;
  }


  public nuevoUsuario(bodey: any) {
     const autorizacion = ""+localStorage.getItem('token');

 const headers = { 'Authorization': autorizacion}
    return this.http.post('https://srv1098627.hstgr.cloud/api/user/register', bodey,{headers});
  }

   public nuevoProducto(bodey: any) {
     const autorizacion = ""+localStorage.getItem('token');

 const headers = { 'Authorization': autorizacion}
    return this.http.post('https://srv1098627.hstgr.cloud/api/product/register', bodey,{headers});
  }
  public borraProducto(id: any) {
    const autorizacion = localStorage.getItem('token')+"";
    const headers={'Authorization':autorizacion}
    let destino: string = 'https://srv1098627.hstgr.cloud/api/product/delete?id=' +id;
    return this.http.delete(destino,{headers});
  }
  public ofertas(){
  var autorizacion=""+localStorage.getItem('token');
  const headers = { 'Authorization': autorizacion}

  return  this.http.get('https://srv1098627.hstgr.cloud/api/product/lista',{headers});
}

public actualizaOferta(id:any, desc: string) {
     const autorizacion = ""+localStorage.getItem('token');
console.log(id+' '+desc);

 const headers = { 'Authorization': autorizacion}
    var body = {
      _id:id,
      description: desc
    };
    const toki = this.http.put('https://srv1098627.hstgr.cloud/api/product/actualiza',body,{headers});
    this.tok = toki;

    return this.tok;
  }



  public cambioPassword(mail: string, nuevopassword: string) {
     const autorizacion = ""+localStorage.getItem('token');

 const headers = { 'Authorization': autorizacion}
    var body = {
      email: mail,
      passnuevo: nuevopassword,
    };
    const toki = this.http.put('https://srv1098627.hstgr.cloud/api/user/actualiza',body,{headers});
    this.tok = toki;

    return this.tok;
  }
  public getCitas(dia: string) {
    const autorizacion = ""+localStorage.getItem('token');

 const headers = { 'Authorization': autorizacion}
    let destino: string = 'https://srv1098627.hstgr.cloud/api/citas/dia?dia=' + dia;
    return this.http.get(destino,{headers});
  }
  public citasPendientes(dia: string) {
    const autorizacion = ""+localStorage.getItem('token');


 const headers = { 'Authorization': autorizacion}
    let destino: string = 'https://srv1098627.hstgr.cloud/api/citas/pendientes?dia=' + dia;
    return this.http.get(destino,{headers});
  }
  public getCitasUsuario(usuario: string) {
    const autorizacion = ""+localStorage.getItem('token');


    const headers = { 'Authorization': autorizacion}
    let destino: string = 'https://srv1098627.hstgr.cloud/api/citas/user?user=' + usuario;
    return this.http.get(destino,{headers});
  }


  public creaCita(dia: any, mes: any, year: any,hora:string,user:string){
    let destino: string = 'https://srv1098627.hstgr.cloud/api/citas/register';
    let cadena=year+'-'+mes+'-'+dia;
    let idUser:any=user;
    let body={
      idUsuario:idUser,
      dia:cadena,
     hora:hora,
    }
    return this.http.post(destino,body)
  }

  public creaCitaAdmin(dia: any, mes: any, year: any,hora:string,user:string){
    let destino: string = 'https://srv1098627.hstgr.cloud/api/citas/registerAdmin';
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
    let destino: string = 'https://srv1098627.hstgr.cloud/api/citas/eliminar?id=' + id;
    return this.http.delete(destino,{headers});
  }

  public borraUsuario(id: string) {
    const autorizacion = localStorage.getItem('token')+"";
    const headers={'Authorization':autorizacion}
    let destino: string = "https://srv1098627.hstgr.cloud/api/usuarios/eliminar?id="+id;
    return this.http.delete(destino,{headers});
  }

}
