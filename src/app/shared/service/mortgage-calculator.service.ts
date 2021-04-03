import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataModelBackend } from 'src/app/shared/models/DataModelBackend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorService {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  getDataFromBackend(): Observable<DataModelBackend> {
  
    return this.http.get<any>('./assets/data/DataFromBackend.JSON');
  }
}
