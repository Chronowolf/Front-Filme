import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppCatalogoComponent} from '../app/components/app-catalogo/app-catalogo.component'

@Component({
  selector: 'app-root',
  imports: [AppCatalogoComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Front-Filme';
}
