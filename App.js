import React from 'react'
import { Font, AppLoading } from 'expo'
import { createStackNavigator } from 'react-navigation'
import Landing from './src/screens/Landing'
import Name from './src/screens/Name'
import Username from './src/screens/Username'
import Password from './src/screens/Password'
import TabBar from './src/components/TabBar'
import Friends from './src/screens/Friends'
import IndividualFriend from './src/screens/IndividualFriend'
import AddFriends from './src/screens/AddFriends'
import ProgressTracking from './src/screens/ProgressTracking'

const RootStack = createStackNavigator({
  Landing: { screen: Landing },
  Home: {
    screen: TabBar,
    navigationOptions: {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  Name: {
    screen: Name,
    navigationOptions: {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  Username: {
    screen: Username,
    navigationOptions: {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  Password: {
    screen: Password,
    navigateOptions: {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  Friends: { screen: Friends },
  IndividualFriend: { screen: IndividualFriend },
  AddFriends: { screen: AddFriends },
  ProgressTracking: { screen: ProgressTracking },
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'raleway-bold': require('./src/assets/fonts/Raleway-Bold.ttf'),
      'raleway-medium': require('./src/assets/fonts/Raleway-Medium.ttf'),
      'raleway-regular': require('./src/assets/fonts/Raleway-Regular.ttf'),
      'raleway-semi-bold': require('./src/assets/fonts/Raleway-SemiBold.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <AppLoading />
      );
    }
    return (
      <RootStack />
    );
  }
}

export default App
