import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput /* Alert */ } from 'react-native'
import { LinearGradient } from 'expo'
import axios from 'axios'

export default class Login extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.validateAccount = this.validateAccount.bind(this)
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  validateAccount() {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post('http://localhost:9090/api/signin', user).then((response) => {
      this.props.navigation.navigate('Home')
    }).catch((error) => {
      console.log(error.response);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3B0170', '#6A1EB0']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Image style={styles.gorilla} source={require('../assets/images/purple_cat.png')} />
            <Text style={styles.nameText}>Enter your <Text style={styles.bold}>username:</Text></Text>
            <TextInput style={styles.input} autoCapitalize="none" onChangeText={this.handleEmail} value={this.state.email} />
            <Text style={styles.nameText}>Enter your <Text style={styles.bold}>password:</Text></Text>
            <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={this.handlePassword} value={this.state.password} />
            <TouchableOpacity style={styles.button} onPress={this.validateAccount} >
              <Text style={styles.buttonText}>{'Log In'.toUpperCase()}</Text>
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
