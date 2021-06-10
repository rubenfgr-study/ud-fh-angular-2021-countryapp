import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [`
  .small-flag {
    width: 50px;
  }
`],
})
export class CountryTableComponent implements OnInit {
  @Input() countries: Country[] = [];

  constructor() {}

  ngOnInit(): void {}
}
