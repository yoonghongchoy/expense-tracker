import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {TransactionConstant, NavigationConstant} from '../../constants';
import {StackNavigationProp} from '@react-navigation/stack';
import {TransactionStackParamList} from '../../navigations/transaction-navigator';
import TransactionDetail from '../../components/transaction-detail';
import {Colors} from '../../styles';
import {DispatchType} from '../../redux';
import {deleteTransaction} from '../../redux/actions/transaction';
import {connect} from 'react-redux';

export type TransactionDetailScreenNavigationProps = StackNavigationProp<
  TransactionStackParamList,
  NavigationConstant.AppScreens.TRANSACTION
>;

export type TransactionDetailParams = {
  id: number;
  payee: string;
  type: TransactionConstant.TransactionType;
  category: TransactionConstant.CategoryType;
  date: string;
  amount: number;
};

type TransactionDetailScreenProps = {
  route: {params: TransactionDetailParams};
  navigation: TransactionDetailScreenNavigationProps;
  deleteTransaction: (id: number) => void;
};

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    deleteTransaction: (id: number) => dispatch(deleteTransaction(id)),
  };
};

const TransactionDetailScreen = ({
  route,
  navigation,
  deleteTransaction,
}: TransactionDetailScreenProps) => {
  const {id, payee, type, category, date, amount} = route.params;

  return (
    <SafeAreaView>
      <TransactionDetail
        payee={payee}
        type={type}
        date={date}
        amount={amount}
      />
      <View style={style.btnContainer}>
        <Button
          title="Edit"
          color={Colors.GREEN}
          onPress={() =>
            navigation.navigate(NavigationConstant.AppScreens.EDIT, {
              id,
              payee,
              type,
              category,
              date,
              amount,
            })
          }
        />
      </View>
      <View style={style.btnContainer}>
        <Button
          title="Delete"
          color={Colors.RED}
          onPress={() => {
            deleteTransaction(id);
            navigation.navigate(NavigationConstant.AppScreens.DAILY);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    width: 330,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
});

export default connect(null, mapDispatchToProps)(TransactionDetailScreen);
