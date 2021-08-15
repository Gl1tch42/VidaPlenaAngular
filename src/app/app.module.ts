import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CursoModule } from './curso/curso.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LivroComponent } from './livro/livro.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FloatComponent } from './core/float/float.component';
import { UserService } from './core/auth/user.service';
import { AuthService } from './core/auth/auth.service';
import { TokenService } from './core/auth/token.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LivroComponent,
    NavBarComponent,
    FloatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CursoModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }