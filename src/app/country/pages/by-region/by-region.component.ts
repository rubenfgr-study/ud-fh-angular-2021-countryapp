import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activedRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  activeRegion(region: string) {
    if (region === this.activedRegion) return;
    this.activedRegion = region;
    this.countries = [];
  }

  searchRegion(region: string) {
    this.countryService.byRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
