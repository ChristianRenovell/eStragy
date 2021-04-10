import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { GetDataService } from '../../services/get-data.service';
import { Countries } from '../../interfaces/Countries';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  countries: Array<Countries> = [];

  constructor(private getDataService: GetDataService) {
    this.getCountries()
  }

  ngOnInit(): void {

  }

  getCountries() {
    this.countries= [];
    this.getDataService.getData().subscribe(data => {
      for (let n = 0; n < 10; n++) {
        this.countries.push(data[Math.floor(Math.random() * data.length)])
      }
    });
  }

  orderByCountries () {
    this.countries.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  orderByCapitals() {
    this.countries.sort(function (a, b) {
      if (a.capital > b.capital) {
        return 1;
      }
      if (a.capital < b.capital) {
        return -1;
      }
      return 0;
    });
  }
  
}
