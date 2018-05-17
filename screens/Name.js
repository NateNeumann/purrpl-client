import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'

export default class Name extends Component {
  static navigationOptions = { header: null }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3B0170', '#6A1EB0']}
          style={styles.gradient}
        >
          <Image style={styles.gorilla} source={require('../assets/images/gorilla.png')} />
          <Text style={styles.nameText} />
          <TouchableOpacity style={styles.button} onPress={() => { navigate('Home') }} >
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
    height: 100,
    width: 100,
  },
});
