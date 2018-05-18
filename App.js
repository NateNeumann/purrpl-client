import React from 'react'
import { Font, AppLoading } from 'expo'
import { createStackNavigator } from 'react-navigation'
import Landing from './screens/Landing'
import TabBar from './components/TabBar'
import Friends from './screens/Friends'
import IndividualFriend from './screens/IndividualFriend'

// disable really annoying in app warnings
// console.disableYellowBox = true

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
      'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-semi-bold': require('./assets/fonts/Raleway-SemiBold.ttf'),
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
