import { Component } from '@angular/core';
import { AgeAvg } from '../models/age-statistic.models';
import { ApiService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-population-statistic',
  templateUrl: './population-statistic.component.html',
  styleUrls: ['./population-statistic.component.css']
})
export class PopulationStatisticComponent {
  statistics: AgeAvg[] = []

  constructor(private serv: ApiService, private router: Router) {}

  ngOnInit(): void{
    this.serv.getPopulationStatistic().subscribe((result: AgeAvg[]) =>{
      this.statistics = result;
    })
  }
}
