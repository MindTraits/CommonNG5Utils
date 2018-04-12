import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import { CountryDirectiveDirective } from './country-directive.directive';
import { CountryInterface } from './country-interface';

/**
 * @title CountryAutocomplete overview
 */

/**
 * @export
 * @class CountryComponentComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.css']
})
export class CountryComponentComponent implements OnInit {


  /**
   * @type {FormControl}
   * @memberof CountryComponentComponent
   */
  countryCtrl: FormControl;


  /**
   * @type {Observable<CountryInterface[]>}
   * @memberof CountryComponentComponent
   */
  filteredCountries: Observable<CountryInterface[]>;


  /**
   * @type {Array<CountryInterface>}
   * @memberof CountryComponentComponent
   */
  public countries: Array<CountryInterface>;

  constructor(public countryDirectiveDirective: CountryDirectiveDirective) {
    this.countryCtrl = new FormControl();
  }


  /**
   * @param {string} name
   * @returns
   * @memberof CountryComponentComponent
   */
  filterCountry(name: string) {
    return this.countries.filter(country =>
      country.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
    this.getCountry((countryList) => {
       this.filteredCountries = countryList;
    });
  }



  /**
   * @param {(countryList: Observable<CountryInterface[]>) => void} fn
   * @memberof CountryComponentComponent
   */
  getCountry(fn: (countryList: Observable<CountryInterface[]>) => void) {
     this.countryDirectiveDirective.getCountryWithPromise((isSuccess, countryList) => {
       this.countries = countryList;
        fn( this.countryCtrl.valueChanges
          .pipe(
            startWith(''),
            map((country) => country ? this.filterCountry(country) : this.countries.slice())
          )
        );
     });
  }
}
