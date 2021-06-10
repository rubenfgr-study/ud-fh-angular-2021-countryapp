import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.error = false;
    this.term = term;

    this.countryService.byCapital(term).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        console.info(error);
        this.error = true;
      }
    );
  }

  suggestions(event: any) {
    this.error = false;
    // TODO crear sugerencias
  }
}
