import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualsComponent } from './body/individuals/individuals.component';
import { SingleIndividualComponent } from './body/single-individual/single-individual.component';
import { PopulationStatisticComponent } from './body/population-statistic/population-statistic.component';

const routes: Routes = [
  {
    path : 'individuals',
    component: IndividualsComponent
  },
  {
    path: 'sort-by-total-age',
    component: PopulationStatisticComponent
  },
  {
    path: 'individuals/:id',
    component: SingleIndividualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
