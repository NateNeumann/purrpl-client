import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { LinearGradient } from 'expo'
import axios from 'axios'

export default class Password extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      password: '',
      passwordConfirmed: '',
    }

    this.validatePassword = this.validatePassword.bind(this)
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  handleConfirmPassword = (text) => {
    this.setState({ passwordConfirmed: text })
  }

  validatePassword() {
    if (this.state.password !== this.state.passwordConfirmed) {
      Alert.alert('Passwords Don\'t Match', 'Please make sure your passwords match.')
    } else {
      const user = {
        name: this.props.navigation.state.params.name,
        username: this.props.navigation.state.params.username,
        password: this.state.password,
      }

      axios.post('http://localhost:9090/api/signup', user).then((response) => {
        console.log(response)
        this.props.navigation.navigate('Home')
      }).catch((error) => {
        console.log(error)
        console.log(error.response)
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3B0170', '#6A1EB0']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Image style={styles.gorilla} source={require('../assets/images/gorilla.png')} />
            <Text style={styles.nameText}>Create a <Text style={styles.bold}>password:</Text></Text>
            <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={this.handlePassword} value={this.state.password} />
            <Text style={styles.nameText}>Confirm <Text style={styles.bold}>password:</Text></Text>
            <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={this.handleConfirmPassword} value={this.state.passwordConfirmed} />
            <TouchableOpacity style={styles.button} onPress={this.validatePassword} >
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
