import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Countries } from '../../interfaces/Countries';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
  }

  getData() {
    let countries = this.http.get<Countries[]>(environment.apiCountries);
    return countries
  }
  saveCountriesName(countries: string, capitals: string) {

    /*var myHeaders = new Headers();
    myHeaders.append("name", countries);
    myHeaders.append("capital", capitals);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", countries);
    urlencoded.append("capital", capitals);

    var requestOptions: object = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    //Server Node.js environment.apiServerDB
    fetch(environment.apiServerDBPHP, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));*/
  }
  
}