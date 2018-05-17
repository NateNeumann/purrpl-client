import React from 'react'
import { Font, AppLoading } from 'expo'
import { createStackNavigator } from 'react-navigation'
import Landing from './screens/Landing'
import Home from './screens/Home'

// disable really annoying in app warnings
// console.disableYellowBox = true

const RootStack = createStackNavigator({
  Landing: { screen: Landing },
  Home: { screen: Home },
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
