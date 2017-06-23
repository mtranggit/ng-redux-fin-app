import { Pipe, PipeTransform } from '@angular/core';
import * as fromRoot from '../common/reducers';
import { State, Store } from '@ngrx/store';
import { CurrencyService } from '../common/services/currencies.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import {LoadRatesCompleteAction} from '../common/actions/currencies';
/** Requiring money.js and setting the base currenc to USD. In this case, we infer that
 * the base currency is USD.
 * However, if you add a baseCurrency attribute to the currencies state,
 * you can make the base currency dynamic as well.
 * */
declare var require: any;

const fx = require('money');
fx.base = 'AUD';

@Pipe({ name: 'currencyPipe', })
export class CustomCurrencyPipe implements PipeTransform {
  /** One of the main advantages of Redux is that the
   * state of the application can be observed from any file
   * by simply implementing a selector and calling it where needed.
   * */
  constructor(private _store: Store<fromRoot.State>, private _currencyService: CurrencyService) {
    // this._store.let(fromRoot.getCurrencyRates)
    //   .subscribe((rates) => {
    //     // fx.rates = rates;
    //     this.rates = rates
    //   });
    this._currencyService.loadCurrencies().subscribe((rates) => {
      fx.rates = rates
    });
  }

  /** The currency parameter obtains its value from the selectedCurrency property.
   * An alternative implementation would be to call getSelectedCurrency within the
   * pipe and get the selectedCurrency within the pipe. */
  transform(value: number, currency): string {
    if (currency != null) {
      value = fx.convert(value, { from: 'AUD', to: currency });
      return currency + ' ' + value.toFixed(4);
    } else {
      return 'AUD' + ' ' + value; }
  }
}

