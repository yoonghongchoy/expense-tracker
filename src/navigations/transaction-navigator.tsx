import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DailyTransactionScreen from '../screens/daily-transaction';
import TransactionDetailScreen from '../screens/transaction-detail';

const TransactionStack = createStackNavigator();

const TransactionNavigator = () => {
  return (
    <TransactionStack.Navigator>
      <TransactionStack.Screen
        name="Daily"
        component={DailyTransactionScreen}
      />
      <TransactionStack.Screen
        name="Transaction"
        component={TransactionDetailScreen}
      />
    </TransactionStack.Navigator>
  );
};

export default TransactionNavigator;
