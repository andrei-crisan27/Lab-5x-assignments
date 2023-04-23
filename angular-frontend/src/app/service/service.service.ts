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

  updateIndividual(individualId: number, individual: Individual): Observable<Individual> {
    const url = `${this.baseUrl}individuals/${individualId}/`;
    // Use PUT or PATCH based on your backend API requirements
    // You can modify the request body (individual) based on the properties you want to update
    return this.http.put<Individual>(url, individual);
  }
  
}
