import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private emailValidate: string = "admin@dobleelectricidad.com";
  private passwordValidate: string = "Admin1234.";

  private loginState = new BehaviorSubject(sessionStorage.getItem("isLogin") === 'true' ? true : false);
  private loginState$: Observable<boolean> = this.loginState.asObservable();

  constructor() { }

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

  getStateLogin(){
    return this.loginState$;
  }

  closeLogin(){
    this.loginState.next(false);
    sessionStorage.setItem("isLogin", "false");
  }

}
