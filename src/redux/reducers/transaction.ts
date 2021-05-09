import {ActionType} from '../constants';
import {TransactionConstant} from '../../constants';

export type Transaction = {
  id: number;
  payee: string;
  type: TransactionConstant.TransactionType;
  category: TransactionConstant.CategoryType;
  date: string;
  amount: number;
};

export type TransactionState = {
  transaction: Transaction[];
};

export interface TransactionAction {
  type: string;
  payload: any;
}

const initialState: TransactionState = {
  transaction: [
    {
      id: 1,
      payee: 'Pizza Hut',
      type: 1,
      category: 5,
      date: '2021-05-09',
      amount: 50.0,
    },
    {
      id: 2,
      payee: 'Go Fitness',
      type: 1,
      category: 8,
      date: '2021-05-09',
      amount: 100.0,
    },
    {
      id: 3,
      payee: 'Awana Puri Condo',
      type: 1,
      category: 14,
      date: '2021-05-09',
      amount: 300.0,
    },
    {
      id: 4,
      payee: 'Go Noodles',
      type: 1,
      category: 5,
      date: '2021-05-09',
      amount: 25.0,
    },
    {
      id: 5,
      payee: 'Salary',
      type: 0,
      category: 1,
      date: '2021-05-09',
      amount: 4000.0,
    },
  ],
};

export default function (
  state: TransactionState = initialState,
  action: TransactionAction,
) {
  switch (action.type) {
    case ActionType.ADD_TRANSACTION: {
      const lastId: number = state.transaction[state.transaction.length - 1].id;
      return {
        ...state,
        transaction: [
          ...state.transaction,
          {
            id: lastId + 1,
            ...action.payload,
          },
        ],
      };
    }
    case ActionType.EDIT_TRANSACTION: {
      const newTransaction = state.transaction;
      newTransaction.map((transaction, index) => {
        if (transaction.id === action.payload.id) {
          newTransaction[index] = action.payload;
        }
      });
      console.log(newTransaction);

      return {
        ...state,
        transaction: [...newTransaction],
      };
    }
    case ActionType.DELETE_TRANSACTION: {
      const newTransactions = state.transaction.filter(
        transaction => transaction.id !== action.payload,
      );
      return {
        ...state,
        transaction: [...newTransactions],
      };
    }
    default: {
      return state;
    }
  }
}
