import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// importo el routeroutlet para poder utilizarlo en el html de este componente
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
