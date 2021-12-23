import { FormBuilder, FormGroup } from '@angular/forms';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from './../../livro.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  form!: FormGroup
  livros: any

  isModal: boolean = false
  idLivroExcluir !: any

  // livro: Livro = {
  //   nome: "",
  //   autor: "",
  //   foto: ""
  // }

  verificarStatus: boolean = true

  //false = form para cadastro (botao cadastrar)
  //true = form para edição (botao alterar)

  constructor(private service: LivroService, private router: Router, private activated: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      id: [null],
      nome: [null],
      autor: [null],
      foto: [null],
      link: [null]
    })

    this.listarId()
  }

  confirmarAcao() {
    console.log(this.form.value)

    if (this.form.value.id) {

      //editar
      this.service.editarLivro(this.form.value.id, this.form.value).subscribe({
        next: (resultado) => console.log("Livro editado com sucesso"),
        error: (erro) => console.error(erro),
        complete: () => {
          console.info("Edição completa com sucesso")
          this.router.navigate(["lista"])
        }
      })
    }

    else {

      //cadastrar

      this.service.incluirLivro(this.form.value).subscribe({
        next: (resultado) => console.log("Livro cadastrado com sucesso"),
        error: (erro) => console.error(erro),
        complete: () => {
          console.info("Livro salvo com sucesso")
          this.router.navigate(["/lista"])} 
      })
    }

    this.isModal = false
  }

  mostrarModal() {
    this.isModal = true
  }

  cancelarAcao() {
    this.isModal = false
  }

  updateForm(livros: any) {
    this.form.patchValue({
      id: livros.id,
      nome: livros.nome,
      autor: livros.autor,
      foto: livros.foto,
      link: livros.link
    })
  }

  listarId() {
    // const id = this.activated.snapshot.paramMap.get("id")
    // this.service.livroId(id).subscribe((resultado) => {this.livro = <any>resultado})
    const id = <any>this.activated.snapshot.params["id"]
    console.log(id)
    this.service.livroId(id).subscribe((resultado) => {
      this.livros = <any>resultado
      this.updateForm(this.livros)
      this.verificarStatus = false
    })
  }

  criarLivro(): void {
    this.service.incluirLivro(this.livros).subscribe(resultado => {
      console.log(resultado)
    })
    this.router.navigate(["lista"])
  }

  editar() {
    this.service.editarLivro(this.livros.id, this.livros).subscribe(resultado => {
      console.log(resultado)
    })
    this.router.navigate(["lista"])
  }

  cancelar() {
    this.router.navigate(["lista"])
  }
}
