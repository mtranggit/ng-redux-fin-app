import { combineReducers, ActionReducer } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Operation } from '../models/operation.model';
/**
 * Import each module of your state. This way, you can access its reducer
 * function and state interface as a property.
 */
import * as fromOperations from '../reducers/operations';
import * as fromCurrencies from '../reducers/currencies';

/**
 * The top-level interface of the state is simple a map of all the inner states.
 */
export interface State {
    operations: fromOperations.State;
    currencies: fromCurrencies.State;
}

/**
 * The reducers variable represents the map of all the reducer function 
 * that is used in the Meta Reducer
 */
const reducers = {
    operations: fromOperations.reducer,
    currencies: fromCurrencies.reducer
}

/**
 * Using combineReducers to create the Meta Reducer and export it from the module.
 * The exported Meta Reducer will be used as an argument
 * in provideStore() in the application's root module.
 */
const combinedReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combinedReducer(state, action);
}

export function getOperations(state$: Observable<State>) {
   return state$.select(state => state.operations);
}

export function getCurrencies(state$: Observable<State>) {
  return state$.select(state => state.currencies);
}
export const getEntities = compose(fromOperations.getEntities, getOperations);
export const getCurrencyEntities = compose(fromCurrencies.getCurrenciesEntities , getCurrencies);
export const getSelectedCurrency = compose(fromCurrencies.getSelectedCurrency , getCurrencies);
export const getCurrencyRates = compose(fromCurrencies.getRates , getCurrencies);


