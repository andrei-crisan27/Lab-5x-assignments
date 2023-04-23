import { Component, OnInit } from '@angular/core';
import { Individual } from '../models/individuals.models';
import { ApiService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.css']
})
export class IndividualsComponent{
  individuals: Individual[] = []

  constructor(private serv: ApiService, private router: Router) {}

  ngOnInit(): void{
    this.serv.getIndividuals().subscribe((result: Individual[]) =>{
      this.individuals = result;
    })
  }

  goToIndividual(individualId: string) {
    this.router.navigateByUrl(`individuals/${individualId}`)
  }
}
