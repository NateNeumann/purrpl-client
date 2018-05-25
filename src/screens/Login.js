import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo'
import { loginUser } from './../actions/user-actions'
import Back from './../components/Back'

export default class Login extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsername = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  finalizeAccount = () => {
    loginUser({ username: this.state.username, password: this.state.password }).then((response) => {
      this.props.navigation.navigate('Home', { user: response })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#420A75', '#5B1997']}
          style={styles.gradient}
        >
          <View style={styles.backView}>
            <Back style={styles.backButton} navigation={this.props.navigation} />
          </View>
          <View style={styles.content}>
            <Image style={styles.cat} source={require('../assets/images/light_purple_cat.png')} />
            <Text style={styles.nameText}>Enter your <Text style={styles.bold}>username:</Text></Text>
            <TextInput style={styles.input} autoCapitalize="none" onChangeText={this.handleUsername} value={this.state.username} />
            <Text style={styles.nameText}>Enter your <Text style={styles.bold}>password:</Text></Text>
            <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={this.handlePassword} value={this.state.password} />
            <TouchableOpacity style={styles.button} onPress={this.finalizeAccount} >
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
  backView: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  backButton: {
    alignSelf: 'flex-end',
  },
  content: {
    alignItems: 'center',
    flex: 10,
    justifyContent: 'center',
  },
  cat: {
    height: 115,
    width: 107,
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
