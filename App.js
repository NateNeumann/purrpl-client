import React from 'react'
import { Font, AppLoading } from 'expo'
import { createStackNavigator } from 'react-navigation'
import Landing from './src/screens/Landing'
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
