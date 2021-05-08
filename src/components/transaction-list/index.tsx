import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TransactionItem from '../transaction-item';
import {Typography} from '../../styles';
import {DailyTransactionScreenNavigationProps} from '../../screens/daily-transaction';

type TransactionListProps = {
  navigation: DailyTransactionScreenNavigationProps;
};

const data = [
  {
    id: 1,
    payee: 'Pizza Hut',
    type: 1,
    category: 5,
    date: '07-05-21',
    amount: 50.0,
  },
  {
    id: 2,
    payee: 'Fitness gym',
    type: 1,
    category: 8,
    date: '07-05-21',
    amount: 100.0,
  },
  {
    id: 3,
    payee: 'J42',
    type: 1,
    category: 14,
    date: '07-05-21',
    amount: 50.0,
  },
  {
    id: 4,
    payee: 'Pizza Hut',
    type: 1,
    category: 5,
    date: '07-05-21',
    amount: 50.0,
  },
  {
    id: 5,
    payee: 'Salary',
    type: 0,
    category: 1,
    date: '07-05-21',
    amount: 5000.0,
  },
];

const totalAmount = data.reduce((acc, cur) => {
  return acc + cur.amount;
}, 0);

const TransactionList = ({navigation}: TransactionListProps) => {
  return (
    <View style={style.listContainer}>
      <FlatList
        data={data}
        renderItem={transaction => {
          return (
            <TransactionItem
              key={transaction.item.id}
              navigation={navigation}
              payee={transaction.item.payee}
              type={transaction.item.type}
              category={transaction.item.category}
              date={transaction.item.date}
              amount={transaction.item.amount}
            />
          );
        }}
      />
      <View style={style.divider} />
      <View style={style.totalContainer}>
        <Text style={style.totalText}>{'Total'}</Text>
        <Text style={style.totalAmountText}>{`$${totalAmount.toFixed(
          2,
        )}`}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  listContainer: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 70,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  totalText: {
    fontFamily: Typography.FONT_FAMILY_MEDIUM,
    fontSize: Typography.FONT_SIZE_15,
  },
  totalAmountText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_18,
  },
});

export default TransactionList;
