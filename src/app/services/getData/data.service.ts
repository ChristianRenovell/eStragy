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
  saveCountriesName(count:object[]) {
    
    let valuesObject:any[] = [];
    count.map(country =>{
      valuesObject.push(country)
    })
   
    var myJsonString = JSON.stringify(valuesObject);
    
    var myHeaders = new Headers();
    myHeaders.append("country", myJsonString);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("country", myJsonString);

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
      .catch(error => console.log('error', error));
  }
  
}