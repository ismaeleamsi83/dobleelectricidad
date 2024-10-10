import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, RouterModule, MatToolbarModule, MatToolbarModule,  MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @Input() isOpen = false;

  
  @Output() menuToggle = new EventEmitter<void>();

  // Para utilizar el servicio de auth
  constructor(
    private authService: AuthService
  ){}
  
  // Emito al componente padre el valor si es true o false que esta mostrando o no el sidenav
  toggleMenu() {
    this.menuToggle.emit();  // Emite el evento para que el componente padre lo reciba
  }

  // Aquí cierro sesion si clico Cerrar sesion
  closeSession(){
    this.authService.closeLogin();
  }

}
