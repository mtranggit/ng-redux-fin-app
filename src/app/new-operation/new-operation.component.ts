import {
    Component,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';
import { Operation } from '../common/models/operation.model';

@Component({
    selector: 'new-operation',
    templateUrl: './new-operation.component.html',
    styleUrls: ['./new-operation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOperationComponent {
    @Output() addOperation = new EventEmitter();

    public operation: Operation;

    constructor() {
        this.operation = new Operation();
    }

}
