import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import * as operations from './common/actions/operations';
import * as currencies from './common/actions/currencies';
import { Operation } from './common/models/operation.model';

/**
 * In order to access the application state, reference the reducers folder again,
 * accessing all the exported members through index.ts
 */
import * as fromRoot from './common/reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public id = 0; // simulate IDs
  public operations: Observable<Operation[]>
  public currencies: Observable<string[]>;
  public selectedCurrency: Observable<string>;

  constructor(private _store: Store<fromRoot.State>) {
    this.operations = this._store.let(fromRoot.getEntities);
    this.currencies = this._store.let(fromRoot.getCurrencyEntities);
    this.selectedCurrency = this._store.let(fromRoot.getSelectedCurrency);
    this._store.dispatch(new currencies.LoadCurrencyRatesAction(''));
  }

  onCurrencySelected(currency: string) {
    this._store.dispatch( new currencies.ChangeCurrencyAction(currency));
  }

  addOperation(operation) {
    this._store.dispatch( new operations.AddOperationAction({
      id: ++ this.id,
      reason: operation.reason,
      amount: operation.amount
    }));
  }

  incrementOperation(operation) {
    this._store.dispatch( new operations.IncrementOperationAction(operation));
  }

  decrementOperation(operation) {
    this._store.dispatch( new operations.DecrementOperationAction(operation));
  }

  deleteOperation(operation) {
    this._store.dispatch( new operations.RemoveOperationAction(operation));
  }
}
