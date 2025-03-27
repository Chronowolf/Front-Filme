import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Filme } from '../../models/Filme';
import { NgFor } from '@angular/common';
import { MoviecardComponent } from "../moviecard/moviecard.component";


@Component({
  selector: 'app-catalogo',
  imports: [NgFor, MoviecardComponent],
  templateUrl: './app-catalogo.component.html',
  styleUrl: './app-catalogo.component.css',
  standalone:true

})
export class AppCatalogoComponent implements OnInit {

  filmes:Filme[] = [];

  constructor(private api :ApiService){}
  ngOnInit(): void {
    this.api.buscarFilmes().subscribe(
      (response)=>{
        this.filmes = response;
      },
      (error)=>{console.log("LIMOU TUDO PAIN")}
    )
  }
}

