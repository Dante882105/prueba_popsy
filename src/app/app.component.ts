import { Component } from '@angular/core';
import { LoginComponent } from "./componentes/login/login.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba_popsy';
}
