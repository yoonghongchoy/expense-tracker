import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DailyTransactionScreen from '../screens/daily-transaction';
import {NavigationConstant} from '../constants';
import TransactionDetailScreen, {
  TransactionDetailParams,
} from '../screens/transaction-detail';

export type TransactionStackParamList = {
  Daily: undefined;
  Transaction: TransactionDetailParams;
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
    </TransactionStack.Navigator>
  );
};

export default TransactionNavigator;
