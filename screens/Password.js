import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo'

export default class Username extends Component {
  static navigationOptions = { header: null }

  state = {
    password: '',
    passwordConfirmed: '',
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  handleConfirmPassword = (text) => {
    this.setState({ passwordConfirmed: text })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3B0170', '#6A1EB0']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Image style={styles.gorilla} source={require('../assets/images/gorilla.png')} />
            <Text style={styles.nameText}>Create a <Text style={styles.bold}>password:</Text></Text>
            <TextInput style={styles.input} onChangeText={this.handlePassword} value={this.state.password} />
            <Text style={styles.nameText}>Confirm <Text style={styles.bold}>password:</Text></Text>
            <TextInput style={styles.input} onChangeText={this.handleConfirmPassword} value={this.state.passwordConfirmed} />
            <TouchableOpacity style={styles.button} onPress={() => { navigate('Home') }} >
              <Text style={styles.buttonText}>{'Sign Up'.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
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
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gorilla: {
    height: 100,
    width: 100,
  },
  nameText: {
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: 24,
    marginTop: 60,
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
  input: {
    borderColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: 24,
    height: 40,
    margin: 20,
    textAlign: 'center',
    width: 275,
  },
  button: {
    backgroundColor: '#A87FFF',
    borderRadius: 5,
    marginTop: 50,
    paddingBottom: 15,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 15,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: 24,
  },
});
