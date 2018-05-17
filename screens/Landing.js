import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3B0170', '#6A1EB0']}
          style={styles.gradient}
        >
          <Image style={styles.gorilla} source={require('../assets/images/gorilla.png')} />
          <Text style={styles.title}>Purple Gorilla</Text>
          <Text style={styles.subtitle}>Keeping track of your wellness</Text>
          <TouchableOpacity style={styles.button} onPress={() => {}} >
            <Text style={styles.buttonText}>{'Get Started'.toUpperCase()}</Text>
          </TouchableOpacity>
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
    color: 'white',
    fontFamily: 'raleway-semi-bold',
    fontSize: 36,
    marginTop: 50,
  },
  subtitle: {
    color: 'white',
    fontFamily: 'raleway-regular',
    fontSize: 24,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 70,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A87FFF',
    borderRadius: 5,
    marginTop: 50,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: 24,
  },
});

export default Landing;
