import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/service.service';
import { Individual } from '../models/individuals.models';

@Component({
  selector: 'app-add-individual',
  templateUrl: './add-individual.component.html',
  styleUrls: ['./add-individual.component.css']
})
export class AddIndividualComponent {
  firstname: string = '';
  lastname: string = '';
  nationality: string = '';
  age: string = '';
  job: string = '';

  constructor(private serv: ApiService) {}

  addIndividual(){
    const indiv: Individual = {
      id: '',
      firstname: this.firstname,
      lastname: this.lastname,
      nationality: this.nationality,
      age: this.age,
      job: this.job
    }
    this.serv.addIndividual(indiv).subscribe((result: Individual) =>{
      window.location.reload();
    })
  }
}
