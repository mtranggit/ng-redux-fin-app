import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Operation } from '../common/models/operation.model';

@Component({
  selector: 'operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationsListComponent implements OnInit {
  @Input() operations: Array<Operation>;
  @Input() selectedCurrency: string;

  @Output() incrementOperation = new EventEmitter();
  @Output() decrementOperation = new EventEmitter();
  @Output() deleteOperation = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

}
