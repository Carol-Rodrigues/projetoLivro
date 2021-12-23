import { Livro } from './../../livro.model';
import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  livros!: Livro[]
  // livro!: Livro

  isModal: boolean = false
  modalLivro: boolean = false
  idLivroExcluir !: any
  idLivro !:any

  constructor(private service: LivroService, private activated: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //inicializar depois que receber a resposta do backend
    this.listarlivros()
  }

  listarlivros() {
    this.service.listar().subscribe(resultado => {
      this.livros = resultado
      console.log(resultado)
    })
  }

  editar(id: any) {
    this.router.navigate(["/lista/" + id])
  }

  confirmarAcao() {
    this.service.deletarLivro(this.idLivroExcluir).subscribe(resultado => {
      this.listarlivros()
      console.log(resultado)
    })
    this.isModal = false
  }

  mostrarModal(id:any) {
    this.isModal = true
    this.idLivroExcluir = id
  }

  cancelarAcao() {
    this.isModal = false
  }

  mostrarLivro(id:any){
    this.modalLivro = true
    this.idLivro = id
  }

}
