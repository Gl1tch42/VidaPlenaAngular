import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoComponent } from './page/curso.component';

const routes: Routes = [
    { path: '', component: CursoComponent },
    // { path: 'path', component: FeatureComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CursoRoutingModule {}
