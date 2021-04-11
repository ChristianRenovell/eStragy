import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Countries } from '../../interfaces/Countries';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
  }

  getData() {
    let countries = this.http.get<Countries[]>("https://restcountries.eu/rest/v2/all?fields=name;capital");
    return countries
  }
  saveCountriesName(countries: string, capitals: string): void {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", "costarica");
    urlencoded.append("capital", "arizona");

    var requestOptions: object = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost/estragy/savecountris.php", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}