import { LivroService } from 'src/app/services/livro.service';
import { Livro } from 'src/app/livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-card',
  templateUrl: './livro-card.component.html',
  styleUrls: ['./livro-card.component.css']
})
export class LivroCardComponent implements OnInit {

  livros!: Livro[]

  constructor(private service: LivroService) { }

  ngOnInit(): void {
    this.listarlivros()
  }

  listarlivros() {
    this.service.listar().subscribe(resultado => {
      this.livros = resultado
      console.log(resultado)
    })
  }

}
