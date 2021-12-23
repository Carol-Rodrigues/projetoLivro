import { LivroCardComponent } from './components/livro-card/livro-card.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { ListaComponent } from './components/lista/lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "lista",
    component: ListaComponent
  },
  {
    path: "cards",
    component: LivroCardComponent
  },
  {
    path: "add",
    component: LivroFormComponent
  },
  {
    path: "lista/:id",
    component: LivroFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
