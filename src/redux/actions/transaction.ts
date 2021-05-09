import {ActionType} from '../constants';
import {TransactionConstant} from '../../constants';

export type AddTransactionPayload = {
  payee: string;
  type: TransactionConstant.TransactionType;
  category: TransactionConstant.CategoryType;
  date: string;
  amount: number;
};

export type EditTransactionPayload = {
  id: number;
  payee?: string;
  type?: TransactionConstant.TransactionType;
  category?: TransactionConstant.CategoryType;
  date?: string;
  amount?: number;
};

export const addTransaction = (newTransaction: AddTransactionPayload) => ({
  type: ActionType.ADD_TRANSACTION,
  payload: newTransaction,
});

export const editTransaction = (transaction: EditTransactionPayload) => ({
  type: ActionType.EDIT_TRANSACTION,
  payload: transaction,
});

export const deleteTransaction = (id: number) => ({
  type: ActionType.DELETE_TRANSACTION,
  payload: id,
});
