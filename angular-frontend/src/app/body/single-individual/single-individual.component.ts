import { Component } from '@angular/core';
import { Individual } from '../models/individuals.models';
import { ApiService } from 'src/app/service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-individual',
  templateUrl: './single-individual.component.html',
  styleUrls: ['./single-individual.component.css']
})
export class SingleIndividualComponent {
  individual?: Individual;
  individualId?: number;
  firstname: string = '';
  lastname: string = '';
  nationality: string = '';
  age: string = '';
  job: string = '';
  constructor(private serv: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.individualId = params['id']
      this.serv.getIndividual(this.individualId!).subscribe((indiv: Individual) =>{
        this.individual = indiv;
        this.firstname = indiv.firstname;
        this.lastname = indiv.lastname;
        this.nationality = indiv.nationality;
        this.age = indiv.age;
        this.job = indiv.job;
      })
    })
  }

  deleteIndividual(id: string) {
    this.serv.deleteIndividual(id).subscribe(() => {
      this.router.navigate(['individuals'])
    })
  }

  updateIndividual() {
    const indiv: Individual = {
      id: '',
      firstname: this.firstname,
      lastname: this.lastname,
      nationality: this.nationality,
      age: this.age,
      job: this.job
    }
      this.serv.updateIndividual(this.individualId!, indiv).subscribe(() => {
        window.location.reload();
      });
  }
  

}
