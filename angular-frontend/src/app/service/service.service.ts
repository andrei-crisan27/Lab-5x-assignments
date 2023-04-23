import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Individual } from '../body/models/individuals.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://ec2-13-50-226-142.eu-north-1.compute.amazonaws.com/restapi/'
  constructor(private http: HttpClient) { }

  getIndividuals(): Observable<Individual[]>{
    return this.http.get(`${this.baseUrl}individuals/`) as Observable<Individual[]>
  }

  getIndividual(individualId: number): Observable<Individual>{
    return this.http.get(`${this.baseUrl}individuals/${individualId}/`) as Observable<Individual>
  }

  addIndividual(indiv: Individual): Observable<Individual>{
    return this.http.post(`${this.baseUrl}individuals/`, indiv) as Observable<Individual>
  }

  deleteIndividual(individualId: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}individuals/${individualId}/`) as Observable<any>
  }
}
