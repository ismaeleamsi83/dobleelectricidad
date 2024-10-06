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

  sidenavOpened = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.isLogin();
  }

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

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

}
