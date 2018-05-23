import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Home from './../screens/Home'
import Friends from './../screens/Friends'
import Reminders from './../screens/Reminders'

const FriendsTab = (props) => {
  return <Friends navigation={props.navigation} />
};

const HomeTab = (props) => {
  return <Home navigation={props.navigation} />
};

const RemindersTab = (props) => {
  return <Reminders navigation={props.navigation} />;
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
      backgroundColor: '#5B9E61',
    },
  },
});


export default MainTabBar;
