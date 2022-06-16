import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class MockDataService {

  constructor(private _http: HttpClient) { }

  getProductsCategory(): Observable<any> {
    return this._http.get('./../../../assets/products.json', { responseType: 'json' })
  }

  getStudentMarks(): Observable<any> {
    return this._http.get('./../../../assets/marks.json', { responseType: 'json' })
  }
}
