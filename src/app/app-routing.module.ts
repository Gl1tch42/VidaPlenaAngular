import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LivroComponent } from './livro/livro.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth/auth.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'livro', component: LivroComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'curso',
    loadChildren: () =>
      import('./curso/curso.module').then((m) => m.CursoModule),
    canActivate: [AuthService],
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
