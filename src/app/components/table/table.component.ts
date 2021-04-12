import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/getData/data.service';
import { Countries } from '../../interfaces/Countries';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  countries: Countries[] = [];
  randonIndex : number=0;

  constructor(private getDataService: GetDataService) {
  }
  ngOnInit(): void {
    this.getCountries()
  }
  getCountries() {
    this.countries =[];
    this.getDataService.getData().subscribe(data => {
      for (let n = 0; n < 10; n++) {      
        this.randonIndex = Math.floor(Math.random() * data.length);   
        this.countries.push(data[this.randonIndex]);       
        this.getDataService.saveCountriesName(data[this.randonIndex].name,data[this.randonIndex].capital)
      }
    });
  }

  orderByCountries() {
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
