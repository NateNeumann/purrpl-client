import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Image } from 'react-native'

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
  Friends: FriendsTab,
  Home: HomeTab,
  Reminders: RemindersTab,
}, {
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        return <Image style={styles.icon} source={require('../assets/images/tabbar/home.png')} />;
      } else if (routeName === 'Friends') {
        return <Image style={styles.icon} source={require('../assets/images/tabbar/friends.png')} />;
      } else if (routeName === 'Reminders') {
        return <Image style={styles.icon} source={require('../assets/images/tabbar/reminders.png')} />;
      }

      return <Image style={styles.icon} source={require('../assets/images/tabbar/home.png')} />;
    },
  }),
  tabBarOptions: {
    showLabel: false,
    activeBackgroundColor: '#317B34',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#5B9E61',
    },
  },
});

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
  },
});

export default MainTabBar;
