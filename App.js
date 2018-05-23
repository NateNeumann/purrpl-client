import React from 'react'
import { Font, AppLoading } from 'expo'
import { TouchableOpacity, Image } from 'react-native'
import { navigation, createStackNavigator } from 'react-navigation'
import Landing from './src/screens/Landing'
import Name from './src/screens/Name'
import Username from './src/screens/Username'
import Password from './src/screens/Password'
import Login from './src/screens/Login'
import TabBar from './src/components/TabBar'
import Friends from './src/screens/Friends'
import IndividualFriend from './src/screens/IndividualFriend'

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
      title: 'Name',
    },
  },
  Username: {
    screen: Username,
    navigationOptions: {
    },
  },
  Password: {
    screen: Password,
    navigateOptions: {
    },
  },
  Login: {
    screen: Login,
    navigateOptions: {
    },
  },
  Friends: { screen: Friends },
  IndividualFriend: { screen: IndividualFriend },
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
      'josefin-sans-bold': require('./src/assets/fonts/JosefinSans-Bold.ttf'),
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
