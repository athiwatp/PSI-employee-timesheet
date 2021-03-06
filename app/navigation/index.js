import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialIcons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

// Import the screens
import Login from '../screens/Login';
import Main from '../screens/Main';
import AddEntry from '../screens/AddEntry';
import SelectRecent from '../screens/SelectRecent';
import TodaysCharges from '../screens/TodaysCharges';
import TimeTracker from '../screens/TimeTracker';

export const Tabs = TabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='account-circle' size={26} style={{ color: tintColor }} />
    },
  },
  TodaysCharges: {
    screen: TodaysCharges,
    navigationOptions: {
      tabBarLabel: 'Today\'s Charges',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='calendar-clock' size={26} style={{ color: tintColor }} />
    },
  },
  TimeTracker: {
    screen: TimeTracker,
    navigationOptions: {
      tabBarLabel: 'Time Tracker',
      tabBarIcon: ({ tintColor }) => <Octicons name='watch' size={26} style={{ color: tintColor }} />
    },
  },
}, {
    headerMode: 'none',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: '#b5b5b5',
      showIcon: 'true',
      showLabel: (Platform.OS !== 'android'),
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#fff'
      }
    },
});

export const LoginStack = StackNavigator({
  Login: {
    screen: Login
  },
  Tabs: {
    screen: Tabs
  },
}, {
  headerMode: 'none'
});

export const ModalStack = StackNavigator({
  LoginStack: {
    screen: LoginStack
  },
  AddEntry: {
		screen: AddEntry
	},
  SelectRecent: {
    screen: SelectRecent
  }
}, {
    mode: 'modal',
	  headerMode: 'none'
});
