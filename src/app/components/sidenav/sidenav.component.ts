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

  constructor(
    private authService: AuthService
  ){}
  
  toggleMenu() {
    this.menuToggle.emit();  // Emite el evento para que el componente padre lo reciba
  }


  closeSession(){
    this.authService.closeLogin();
  }

}
