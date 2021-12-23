import { Livro } from 'src/app/livro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = "http://localhost:3000/Livros"

  constructor(private http: HttpClient) { }

  //READ
  listar(): Observable<any> {
    return this.http.get<any>(this.API)
  }

  //UPDATE
  editarLivro(id:any, livro: Livro): Observable<any> {
    return this.http.put<any>(this.API + "/" + id, livro)
  }

  //READ - ID
  livroId(id: any): Observable<any> {
    return this.http.get(this.API + "/" + id)
  }

  //CREATE
  incluirLivro(livro: Livro): Observable<any> {
    return this.http.post(this.API, livro)
  }

  //DELETE
  deletarLivro(id: any): Observable<any> {
    return this.http.delete(this.API + "/" + id)
  }

}
