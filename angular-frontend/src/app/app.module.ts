import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { IndividualsComponent } from './body/individuals/individuals.component';
import { SingleIndividualComponent } from './body/single-individual/single-individual.component';
import { AddIndividualComponent } from './body/add-individual/add-individual.component';
import { FormsModule } from '@angular/forms';
import { PopulationStatisticComponent } from './body/population-statistic/population-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndividualsComponent,
    SingleIndividualComponent,
    AddIndividualComponent,
    PopulationStatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
