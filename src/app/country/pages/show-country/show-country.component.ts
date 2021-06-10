import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [],
})
export class ShowCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    /* this.activateRoute.params.subscribe(({ id }) => {
      this.countryService.byAlpha(id).subscribe((country) => {
        console.log(country);
      });
    }); */
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.byAlpha(id)),
        tap(console.log)
      )
      .subscribe(
        (country) => {
          if (!country) {
            this.router.navigateByUrl('');
          }
          this.country = country;
        },
        (error) => this.router.navigateByUrl('')
      );
  }
}
