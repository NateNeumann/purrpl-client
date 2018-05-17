import React from 'react';
import { Font } from 'expo';
import Login from './components/login';

// disable really annoying in app warnings
console.disableYellowBox = true;

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'raleway-semi-bold': require('./assets/fonts/Raleway-SemiBold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Login />
    );
  }
}
