import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TransactionConstant, NavigationConstant} from '../../constants';
import {StackNavigationProp} from '@react-navigation/stack';
import {TransactionStackParamList} from '../../navigations/transaction-navigator';
import AddTransactionForm from '../../components/add-transaction-form';
import {Colors, Typography} from '../../styles';
import EditTransactionForm from '../../components/edit-transaction-form';

export type EditTransactionScreenNavigationProps = StackNavigationProp<
  TransactionStackParamList,
  NavigationConstant.AppScreens.EDIT
>;

export type EditTransactionParams = {
  id: number;
  payee: string;
  type: TransactionConstant.TransactionType;
  category: TransactionConstant.CategoryType;
  date: string;
  amount: number;
};

type EditTransactionScreenProps = {
  route: {params: EditTransactionParams};
  navigation: EditTransactionScreenNavigationProps;
};

const EditTransactionScreen = ({
  route,
  navigation,
}: EditTransactionScreenProps) => {
  const {id, payee, type, category, date, amount} = route.params;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}>
      <SafeAreaView style={style.innerContainer}>
        <View style={style.header}>
          <Text style={style.headerText}>Edit transaction</Text>
        </View>
        <EditTransactionForm
          navigation={navigation}
          id={id}
          payee={payee}
          type={type}
          category={category}
          date={date}
          amount={amount}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  header: {
    width: 300,
    height: 45,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
  },
  headerText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_24,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default EditTransactionScreen;
