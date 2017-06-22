import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrenciesComponent implements OnInit {

  @Input() currencies: Array<string>;
  @Input() selectedCurrency: string;
  @Output() currencySelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
