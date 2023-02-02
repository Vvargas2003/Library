import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  urlServer="https://librarypca.fly.dev/"
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

  constructor(
    private storage: Storage,
    private http: HttpClient) { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      if ( credentials.email == "alexavar2003@gmail.com" && credentials.password == "123456" )
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }

 // registerUser(userData: any){
    // return new Promise((accept,reject)=>{
     //  this.http.post(`${this.urlServer}signup`,userData,this.httpHeaders).subscribe((data:any)=>{
       //  if (data.status == "OK"){
       //    accept(data.msg);
        // }else{
          // reject(data.errors)
        // }
       //})
     //})

  // }
}
