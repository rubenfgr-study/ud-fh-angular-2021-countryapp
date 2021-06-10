import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  suggestedCountries: Country[] = [];
  showSuggestion: boolean = false;

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.error = false;
    this.term = term;

    this.countryService.searchCountry(term).subscribe(
      (countries) => {
        this.countries = countries;
        this.showSuggestion = false;
      },
      (error) => {
        console.info(error);
        this.error = true;
      }
    );
  }

  suggestions(term: string) {
    this.error = false;
    this.term = term;
    this.showSuggestion = true;
    // TODO crear sugerencias
    this.countryService.searchCountry(term).subscribe(
      (countries) => (this.suggestedCountries = countries.splice(0, 3)),
      (error) => (this.suggestedCountries = [])
    );
  }

  searchSuggestions(term: string) {
    this.search(term);
  }
}
