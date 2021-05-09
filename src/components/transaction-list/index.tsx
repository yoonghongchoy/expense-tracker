import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TransactionItem from '../transaction-item';
import {DailyTransactionScreenNavigationProps} from '../../screens/daily-transaction';
import {Transaction} from '../../redux/reducers/transaction';

type TransactionListProps = {
  navigation: DailyTransactionScreenNavigationProps;
  transactions: Transaction[];
};
const TransactionList = ({navigation, transactions}: TransactionListProps) => {
  return (
    <View style={style.listContainer}>
      <ScrollView style={style.scrollContainer}>
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
            navigation={navigation}
            id={transaction.id}
            payee={transaction.payee}
            type={transaction.type}
            category={transaction.category}
            date={transaction.date}
            amount={transaction.amount}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 30,
    alignContent: 'center',
  },
  scrollContainer: {marginBottom: 10},
});

export default TransactionList;
