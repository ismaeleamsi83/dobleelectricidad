import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidenavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  // Controlo si esta mostrando el menu o no lateral
  sidenavOpened = false;

  // Para poder utilizar el router y el servicio auth
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  // Se carga siempre que se carga el componente
  ngOnInit(): void {
    this.isLogin();
  }


  // Compruebo si esta logueado o no por si alguien mete la ruta a mano
  isLogin(){
    this.authService.getStateLogin().subscribe({
      next: (res) => {
        if(res){
          console.log('Dashboard Component: User is logged in');
        }else{
          this.router.navigateByUrl('/auth');
        }
      },
      error: (err) => console.error(err),
    });
  }

  // Cambio el valor si se esta mostrando el menu lateral o no, para controlarlo
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

}
