import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as currencyActions from '../actions/currencies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { CurrencyService } from '../services/currencies.service';
import {LoadRatesCompleteAction} from '../actions/currencies';

@Injectable()
export class CurrencyEffects {

  @Effect()
  loadCategories$ = this._actions.ofType(currencyActions.ActionTypes.LOAD_CURRENCY_RATES)
    .switchMap(() => this._currencyService.loadCurrencies())
    .do( (val) => console.log('BEFORE MAP:', val))
    .map((rates) => new LoadRatesCompleteAction(rates) )
    .catch(() => Observable.of( new LoadRatesCompleteAction({}))
    );

  constructor( private _actions: Actions, private _currencyService: CurrencyService ) { }

}
