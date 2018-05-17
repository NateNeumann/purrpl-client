import React from 'react';
import { Font, AppLoading } from 'expo';
import Landing from './screens/Landing';

// disable really annoying in app warnings
console.disableYellowBox = true;

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
      <Landing />
    );
  }
}

export default App;
