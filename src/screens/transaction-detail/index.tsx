import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {TransactionConstant, NavigationConstant} from '../../constants';
import {StackNavigationProp} from '@react-navigation/stack';
import {TransactionStackParamList} from '../../navigations/transaction-navigator';
import TransactionDetail from '../../components/transaction-detail';

export type TransactionDetailScreenNavigationProps = StackNavigationProp<
  TransactionStackParamList,
  NavigationConstant.AppScreens.TRANSACTION
>;

export type TransactionDetailParams = {
  payee: string;
  type: TransactionConstant.TransactionType;
  date: string;
  amount: number;
};

type TransactionDetailScreenProps = {
  route: {params: TransactionDetailParams};
};

const TransactionDetailScreen = ({route}: TransactionDetailScreenProps) => {
  const {payee, type, date, amount} = route.params;

  return (
    <SafeAreaView>
      <TransactionDetail
        payee={payee}
        type={type}
        date={date}
        amount={amount}
      />
    </SafeAreaView>
  );
};

export default TransactionDetailScreen;
