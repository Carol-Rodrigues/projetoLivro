import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { ListaComponent } from './components/lista/lista.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LivroService } from './services/livro.service';
import { LivroCardComponent } from './components/livro-card/livro-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivroFormComponent,
    ListaComponent,
    LivroCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
