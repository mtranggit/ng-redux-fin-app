import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effect';

import { AppComponent } from './app.component';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { OperationsListComponent } from './operations-list/operations-list.component';
import { reducer } from './common/reducers/index';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyService } from './common/services/currencies.service';
import { CurrencyEffects } from './common/effects/currencies';
import { EffectsModule } from '@ngrx/effects';
import { CustomCurrencyPipe } from './pipes/currency.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NewOperationComponent,
    OperationsListComponent,
    CurrenciesComponent,
    CustomCurrencyPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule,
    HttpModule,
    EffectsModule.run(CurrencyEffects),
    StoreModule.provideStore(reducer)
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
