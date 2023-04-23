import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualsComponent } from './body/individuals/individuals.component';

const routes: Routes = [
  {
    path : 'individuals',
    component: IndividualsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
