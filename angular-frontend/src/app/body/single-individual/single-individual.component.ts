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
  constructor(private serv: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.individualId = params['id']
      console.log(this.individualId)
      this.serv.getIndividual(this.individualId!).subscribe((indiv: Individual) =>{
        this.individual = indiv;
      })
    })
  }

  deleteIndividual(id: string) {
    this.serv.deleteIndividual(id).subscribe(() => {
      this.router.navigate(['individuals'])
    })
  }
}
