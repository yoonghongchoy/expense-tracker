import React from 'react';
import AddTransactionScreen from '../screens/add-transaction';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionNavigator from './transaction-navigator';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDay, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../styles';

export type TabStackParamList = {
  Daily: undefined;
  Add: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName = faCalendarDay;

            if (route.name === 'Daily') {
              iconName = faCalendarDay;
            } else if (route.name === 'Add') {
              iconName = faPlus;
            }

            // You can return any component that you like here!
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.RED,
          inactiveTintColor: Colors.DARK_GRAY,
        }}>
        <Tab.Screen name="Daily" component={TransactionNavigator} />
        <Tab.Screen name="Add" component={AddTransactionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
