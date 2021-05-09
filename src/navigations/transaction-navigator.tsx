import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DailyTransactionScreen from '../screens/daily-transaction';
import {NavigationConstant} from '../constants';
import TransactionDetailScreen, {
  TransactionDetailParams,
} from '../screens/transaction-detail';
import EditTransactionScreen, {
  EditTransactionParams,
} from '../screens/edit-transaction';

export type TransactionStackParamList = {
  Daily: undefined;
  Transaction: TransactionDetailParams;
  Edit: EditTransactionParams;
};

const TransactionStack = createStackNavigator<TransactionStackParamList>();

const TransactionNavigator = () => {
  return (
    <TransactionStack.Navigator>
      <TransactionStack.Screen
        name={NavigationConstant.AppScreens.DAILY}
        component={DailyTransactionScreen}
      />
      <TransactionStack.Screen
        name={NavigationConstant.AppScreens.TRANSACTION}
        component={TransactionDetailScreen}
      />
      <TransactionStack.Screen
        name={NavigationConstant.AppScreens.EDIT}
        component={EditTransactionScreen}
      />
    </TransactionStack.Navigator>
  );
};

export default TransactionNavigator;
