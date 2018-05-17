import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { LinearGradient, Font } from 'expo';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#8254AC', '#6A1EB0']}
          style={styles.gradient}
        >
          <Image style={styles.gorilla} source={require('../assets/img/gorilla.png')} />
          { this.state.fontLoaded ? (
            <Text style={styles.title}>Purple Gorilla</Text>
            ) : null
          }
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  gorilla: {
    height: 240,
    width: 240,
  },
  title: {
    fontFamily: 'raleway-semi-bold',
    fontSize: 32,
  },
});

export default Login;
