import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Countries } from '../../interfaces/Countries';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  getData() {
    let countries = this.http.get<Countries[]>(environment.apiCountries);
    return countries
  }
  saveCountriesName(count: object[]) {

    let valuesObject: any[] = [];
  
    count.map(country => {
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

    fetch(environment.apiServer, requestOptions)
      .then(response => response.text())
      .then(result => {
        if(result === "1111111111"){
          this.toastr.success('Process done!', 'Cool! saved data');
          console.log(result)
        }else{
          this.toastr.error('Opps, Error');
          console.log(result)
        }
      })
      .catch(error => {
        this.toastr.error('Opps, Error', error);
        console.log('error', error)
      });
  }
}