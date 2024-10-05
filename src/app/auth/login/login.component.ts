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

  forms: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  messageAlert: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    
    this.getIsLogin();
  }

  getIsLogin(){  
    if(this.authService.getStateLogin()){
      this.router.navigateByUrl('/dashboard');
    }
  }

  onSubmit(){
    
    if(this.authService.login(this.forms.value.email, this.forms.value.password)){
      this.router.navigate(['/dashboard']);
    }else{
      this.messageAlert = true;
    }
    
  }

}
