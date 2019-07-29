import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataModel } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getResponse() : Observable<DataModel[]>{
    return this.http.get<DataModel[]>('assets/categories.json')
  }
}
