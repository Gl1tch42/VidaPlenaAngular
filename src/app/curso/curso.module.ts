import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './page/curso.component';

import { CursoRoutingModule } from './curso-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule
  ],
  declarations: [CursoComponent]
})
export class CursoModule { }
