import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CountryInterface } from './country-interface';
import { COUNTRIES } from './mock-country';

/**
 * @export
 * @class CountryServiceService
 */

@Injectable()
export class CountryServiceService {

  /**
   * @type {Array<CountryInterface>}
   * @memberof CountryServiceService
   */
  public countryList: Array<CountryInterface>;


  /**
   * @type {CountryInterface}
   * @memberof CountryServiceService
   */
  public countryInterface: CountryInterface;
  constructor() {
    this.countryList = COUNTRIES;
  }

 /**
  * @returns {CountryInterface[]}
  * @memberof CountryServiceService
  */
 public  getCountry(): CountryInterface[] {
    return this.countryList;
  }

 /**
  * @returns {Observable<CountryInterface[]>}
  * @memberof CountryServiceService
  */
 public  getCountryWithPromise(): Observable<CountryInterface[]> {
    return of(this.countryList);
  }

}
