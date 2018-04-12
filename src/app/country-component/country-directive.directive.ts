import { Directive } from '@angular/core';
import { CountryServiceService } from './country-service.service';
import { CountryInterface } from './country-interface';


/**
 * @export
 * @class CountryDirectiveDirective
 */
@Directive({
  selector: '[appCountryDirective]'
})
export class CountryDirectiveDirective {


  /**
   * @type {Array<CountryInterface>}
   * @memberof CountryDirectiveDirective
   */
  countries: Array<CountryInterface>;
  constructor(public countryServiceService: CountryServiceService) { }


  /**
   * @param {(isSuccess: boolean, country: CountryInterface[]) => void} fn
   * @memberof CountryDirectiveDirective
   */
  getCountry(fn: (isSuccess: boolean, country: CountryInterface[]) => void) {
    this.countries = this.countryServiceService.getCountry();
    if (this.countries.length > 0) {
      fn(true, this.countries);
    } else {
      fn(false, this.countries);
    }
  }


  /**
   * @param {(isSuccess: boolean, country: CountryInterface[]) => void} fn
   * @memberof CountryDirectiveDirective
   */
  getCountryWithPromise(fn: (isSuccess: boolean, country: CountryInterface[]) => void) {
      this.countryServiceService.getCountryWithPromise().subscribe(
          (res) => {
              fn(true, res);
          },
          (error) => {
              fn(false, error);
          }
      );
  }

}
