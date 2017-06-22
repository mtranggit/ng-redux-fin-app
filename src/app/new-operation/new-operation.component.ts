import {
    Component,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';
import { Operation } from '../common/models/operation.model';

@Component({
    selector: 'new-operation',
    templateUrl: './new-operation.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOperationComponent {
    @Output() addOperation = new EventEmitter();

    public operation: Operation;
    constructor() {
        this.operation = new Operation();
    }
}
