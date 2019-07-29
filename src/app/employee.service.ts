import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';
import { DataModel } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get<Employee[]>('assets/employes.json')
  }

  getResponse() : Observable<DataModel[]>{
    return this.http.get<DataModel[]>('assets/categories.json')
  }
}
