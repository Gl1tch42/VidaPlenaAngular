import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './page/curso.component';

import { CursoRoutingModule } from './curso-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CursoRoutingModule
  ],
  declarations: [CursoComponent]
})
export class CursoModule { }
