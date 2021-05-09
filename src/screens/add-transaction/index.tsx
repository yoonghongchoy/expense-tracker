import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AddTransactionForm from '../../components/add-transaction-form';
import {Colors, Typography} from '../../styles';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabStackParamList} from '../../navigations';
import {NavigationConstant} from '../../constants';

export type AddTransactionScreenNavigatorProps = BottomTabNavigationProp<
  TabStackParamList,
  NavigationConstant.AppScreens.ADD
>;

type AddTransactionScreenProps = {
  navigation: AddTransactionScreenNavigatorProps;
};

const AddTransactionScreen = ({navigation}: AddTransactionScreenProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}>
      <SafeAreaView style={style.innerContainer}>
        <View style={style.header}>
          <Text style={style.headerText}>Add transaction</Text>
        </View>
        <AddTransactionForm navigation={navigation} />
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

export default AddTransactionScreen;
