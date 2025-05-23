import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { VerticalNavbarComponent } from './UI/vertical-navbar/vertical-navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,VerticalNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pintrst_mock';
}
