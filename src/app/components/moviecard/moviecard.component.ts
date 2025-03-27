import { Component, Input } from '@angular/core';
import { Filme } from '../../models/Filme';

@Component({
  selector: 'app-moviecard',
  imports: [],
  templateUrl: './moviecard.component.html',
  styleUrl: './moviecard.component.css'
})
export class MoviecardComponent {
  @Input()filme:Filme = {nome : "Gaiola das Loucas", ano: 1999, classificacao: 18, id: 0, url: ""};
  constructor(){}
}
