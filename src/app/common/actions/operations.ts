import { Action } from '@ngrx/store';
import { Operation } from '../models/operation.model';

export const ActionTypes = {
  ADD_OPERATION      : 'Add an operation',
  REMOVE_OPERATION   : 'Remove an operation',
  INCREMENT_OPERATION: 'Increment an operation',
  DECREMENT_OPERATION: 'Decrement an operation',
};

/**
 * Action Class
* Because the Meta Reducer dispatches actions to their 
* respective reducers, we define custom actions and create actions as new class instances 
* when dispatching using the @ngrx/store's Action class. Expressing actions as classes also 
* enables type checking in reducer functions.
Read more at https://www.pluralsight.com/guides/front-end-javascript/building-a-redux-application-with-angular-2-part-2#AqQlPkM0ex0gsQRy.99
 */

export class AddOperationAction implements Action {
    type = ActionTypes.ADD_OPERATION;
    constructor(public payload: Operation) { }
}
export class RemoveOperationAction implements Action {
    type = ActionTypes.REMOVE_OPERATION;
    constructor(public payload: Operation) { }
}
export class IncrementOperationAction implements Action {
    type = ActionTypes.INCREMENT_OPERATION;
    constructor(public payload: Operation) { }
}
export class DecrementOperationAction implements Action {
    type = ActionTypes.DECREMENT_OPERATION;
    constructor(public payload: Operation) { }
}

/**
 * A type alias for all actions in order to be later used in the reducers
 */
export type Actions =
    AddOperationAction |
    RemoveOperationAction |
    IncrementOperationAction |
    DecrementOperationAction
