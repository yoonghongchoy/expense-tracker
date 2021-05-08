import React from 'react';
import AddTransactionScreen from '../screens/add-transaction';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionNavigator from './transaction-navigator';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Daily" component={TransactionNavigator} />
        <Tab.Screen name="Add" component={AddTransactionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
