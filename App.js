import React from 'react'
import { Font, AppLoading } from 'expo'
import { createStackNavigator } from 'react-navigation'
import Landing from './src/screens/Landing'
import Name from './src/screens/Name'
import CreateAccount from './src/screens/CreateAccount'
import Login from './src/screens/Login'
import TabBar from './src/components/TabBar'
import Friends from './src/screens/Friends'
import IndividualFriend from './src/screens/IndividualFriend'
import Reminders from './src/screens/Reminders'
import EditReminder from './src/screens/EditReminder'
import Settings from './src/screens/Settings'
import Notification from './src/screens/Notification'
import AddFriends from './src/screens/AddFriends'
import ProgressTracking from './src/screens/ProgressTracking'
import About from './src/screens/About'
import Profile from './src/screens/Profile'

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
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
    },
  },
  Login: {
    screen: Login,
    navigateOptions: {
    },
  },
  Friends: { screen: Friends },
  IndividualFriend: { screen: IndividualFriend },
  Reminders: { screen: Reminders },
  EditReminder: { screen: EditReminder },
  Settings: { screen: Settings },
  Notification: { screen: Notification },
  AddFriends: { screen: AddFriends },
  ProgressTracking: { screen: ProgressTracking },
  About: { screen: About },
  Profile: { screen: Profile },
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
