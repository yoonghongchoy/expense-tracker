import {CombinedState, createStore, Dispatch} from 'redux';
import rootReducer from './reducers';
import {TransactionAction, TransactionState} from './reducers/transaction';

const store = createStore(rootReducer);

export type RootState = CombinedState<{transaction: TransactionState}>;
export type DispatchType = typeof store.dispatch;

export default store;
