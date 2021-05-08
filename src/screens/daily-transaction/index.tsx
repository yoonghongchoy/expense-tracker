import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import TransactionList from '../../components/transaction-list';
import {Colors} from '../../styles';

const DailyTransactionScreen = () => {
  return (
    <SafeAreaView>
      <ReactNativeCalendarStrip
        scrollable
        style={style.calendar}
        calendarColor={Colors.WHITE}
      />
      <TransactionList />
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
});

export default DailyTransactionScreen;
