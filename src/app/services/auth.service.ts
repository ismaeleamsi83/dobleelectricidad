import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Al no haber backend emulo que estos son los datos para poder loguearte
  private emailValidate: string = "admin@dobleelectricidad.com";
  private passwordValidate: string = "Admin1234.";

  //Inicio el behavior para poder controlar el estado si esta o no logueado de forma que
  // si cambia automaticamente lo detecta y me saca de sesion
  private loginState = new BehaviorSubject(sessionStorage.getItem("isLogin") === 'true' ? true : false);
  private loginState$: Observable<boolean> = this.loginState.asObservable();

  constructor() { }

  // El metodo para validar si el email y passwords son correctos
  login(email: string, password: string){
    if(email === this.emailValidate && password === this.passwordValidate){
      this.loginState.next(true);
      sessionStorage.setItem("isLogin", 'true');
      return true;
    }else{
      this.loginState.next(false);
      return false;
    }
  }

  // El metodo para saber si esta logueado o no
  getStateLogin(){
    return this.loginState$;
  }

  // El metodo para cerrar sesion
  closeLogin(){
    this.loginState.next(false);
    sessionStorage.setItem("isLogin", "false");
  }

}
