import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { OperationsListComponent } from './operations-list/operations-list.component';
import { reducer } from './common/reducers/index';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NewOperationComponent,
    OperationsListComponent,
    CurrenciesComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
