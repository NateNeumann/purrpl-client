import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import Home from './../screens/Home'

const FriendsTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>FRIENDS</Text></View>;
};

const HomeTab = (props) => {
  return <Home />
};

const RemindersTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>REMINDERS</Text></View>;
};

const MainTabBar = createBottomTabNavigator({
  FriendsTab,
  HomeTab,
  RemindersTab,
}, {
  initialRouteName: 'FriendsTab',
  tabBarOptions: {
    showLabel: true,
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#A995D2',
    },
  },
});


export default MainTabBar;
