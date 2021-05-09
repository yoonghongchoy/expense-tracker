import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import TransactionList from '../../components/transaction-list';
import {Colors, Typography} from '../../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {TransactionStackParamList} from '../../navigations/transaction-navigator';
import {NavigationConstant, TransactionConstant} from '../../constants';
import moment, {Moment} from 'moment';
import {RootState} from '../../redux';
import {Transaction} from '../../redux/reducers/transaction';
import {connect} from 'react-redux';

export type DailyTransactionScreenNavigationProps = StackNavigationProp<
  TransactionStackParamList,
  NavigationConstant.AppScreens.DAILY
>;

type DailyTransactionScreenProps = {
  navigation: DailyTransactionScreenNavigationProps;
  transactions: Transaction[];
};

const mapStateToProps = (state: RootState) => {
  return {
    transactions: state.transaction.transaction,
  };
};

const DailyTransactionScreen = ({
  navigation,
  transactions,
}: DailyTransactionScreenProps) => {
  const [date, setDate] = React.useState<Moment>(moment());
  const [total, setTotal] = React.useState(0);
  const [sortedTransactions, setSortedTransactions] = React.useState(
    transactions,
  );

  React.useEffect(() => {
    const totalAmount = sortedTransactions.reduce((acc, cur) => {
      if (cur.type === TransactionConstant.TransactionType.INCOME) {
        return acc + cur.amount;
      } else {
        return acc - cur.amount;
      }
    }, 0);
    setTotal(totalAmount);
  }, [sortedTransactions]);

  React.useEffect(() => {
    const sorted = transactions.filter(transaction =>
      moment(transaction.date).isSame(date, 'day'),
    );
    setSortedTransactions([...sorted]);
  }, [date, transactions]);

  return (
    <SafeAreaView style={style.container}>
      <ReactNativeCalendarStrip
        scrollable
        style={style.calendar}
        calendarColor={Colors.WHITE}
        selectedDate={date}
        startingDate={date}
        onDateSelected={setDate}
        highlightDateContainerStyle={{backgroundColor: Colors.RED}}
      />
      <TransactionList
        navigation={navigation}
        transactions={sortedTransactions}
      />
      <View style={style.divider} />
      <View style={style.totalContainer}>
        <Text style={style.totalText}>{'Total'}</Text>
        <Text style={style.totalAmountText}>{`$${total.toFixed(2)}`}</Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {
    height: 100,
    paddingTop: 20,
    paddingBottom: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 105,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 40,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginLeft: 90,
    marginRight: 30,
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

export default connect(mapStateToProps)(DailyTransactionScreen);
