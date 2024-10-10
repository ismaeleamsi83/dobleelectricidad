import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  //Creo un formgroup para manipular el email y password, capturar los valores de los dos
  //Mediante los validator valido que sean requeridos, el formato email y password minimo de 8 caracteres
  forms: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  // Esta variable es para controlar si las credenciales son o no validas que lo utilizare en el metodo onSubmit
  messageAlert: boolean = false;

  // En el constructor declaro el router para poder modificar la ruta en el metodo getIsLogin
  // y el authService que es un servicio que he creado para ver si te logueas bien o no, email y password correctos o no
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  // Aquí se ejecuta el metodo getIsLogin nada mas que se carga este componente
  // Lo que hace es que si en el servicio comprueba si estas logueado, si lo esta pues te redirecciona al dashboard
  ngOnInit(): void {
    
    this.getIsLogin();
  }

  getIsLogin(){  
    this.authService.getStateLogin().subscribe({
      next: (res) => {
        if(res){
          this.router.navigate(['/dashboard']);
        }else{
          console.log("No esta logueado");
        }
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete is login');
      }
    })
    
  }

  // Este metodo solo se ejecuta cuando le das al boton de acceso para verificar si el email y password que has introducido es correcto
  onSubmit(){
    
    if(this.authService.login(this.forms.value.email, this.forms.value.password)){
      this.router.navigate(['/dashboard']);
    }else{
      this.messageAlert = true;
    }
    
  }

}
