import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Countries } from '../interfaces/Countries';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
    console.log("servicio funcionando")
  }

  getData() {
    return this.http.get<Countries[]>("https://restcountries.eu/rest/v2/all?fields=name;capital");
  }
}
