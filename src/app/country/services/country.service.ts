import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this._apiURL}/name/${term}`;
    return this.http.get<Country[]>(url);
  }

  byCapital(term: string): Observable<Country[]> {
    const url = `${this._apiURL}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

  byRegion(term: string): Observable<Country[]> {
    const url = `${this._apiURL}/region/${term}`;
    const params: HttpParams = new HttpParams().set(
      'fields',
      'name;flag;alpha2Code;population'
    );
    return this.http.get<Country[]>(url, { params }).pipe(tap(console.log));
  }

  byAlpha(term: string): Observable<Country> {
    const url = `${this._apiURL}/alpha/${term}`;
    return this.http.get<Country>(url);
  }

  /* searchCountry(term: string): Observable<any> {
    const url = `${this._apiURL}/name/${term}`;
    return this.http.get(url).pipe(catchError((err) => of([])));
  } */
}
