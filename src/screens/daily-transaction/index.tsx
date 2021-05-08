import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import TransactionList from '../../components/transaction-list';
import {Colors} from '../../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {TransactionStackParamList} from '../../navigations/transaction-navigator';
import {NavigationConstant} from '../../constants';

export type DailyTransactionScreenNavigationProps = StackNavigationProp<
  TransactionStackParamList,
  NavigationConstant.AppScreens.DAILY
>;

type DailyTransactionScreenProps = {
  navigation: DailyTransactionScreenNavigationProps;
};

const DailyTransactionScreen = ({navigation}: DailyTransactionScreenProps) => {
  return (
    <SafeAreaView>
      <ReactNativeCalendarStrip
        scrollable
        style={style.calendar}
        calendarColor={Colors.WHITE}
      />
      <TransactionList navigation={navigation} />
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
