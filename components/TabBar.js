import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { View } from 'react-native'
import Home from './../screens/Home'
import Friends from './../screens/Friends'

const FriendsTab = (props) => {
  return <Friends />;
};

const HomeTab = (props) => {
  return <Home />
};

const RemindersTab = (props) => {
  return <View />;
};

const MainTabBar = createBottomTabNavigator({
  FriendsTab,
  HomeTab,
  RemindersTab,
}, {
  initialRouteName: 'HomeTab',
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
