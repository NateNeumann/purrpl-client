import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Alert, Keyboard, TouchableWithoutFeedback, AsyncStorage } from 'react-native'
import { LinearGradient } from 'expo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createUser } from './../actions/user-actions'
import Back from './../components/Back'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class CreateAccount extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      passwordConfirmed: '',
    }
  }

  handleUsername = (text) => {
    this.setState({ username: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  handleConfirmPassword = (text) => {
    this.setState({ passwordConfirmed: text })
  }

  validateAccount = () => {
    if (this.state.password !== this.state.passwordConfirmed) {
      Alert.alert('Passwords Don\'t Match', 'Please make sure your passwords match.')
    } else if ((this.state.username === '') || (this.state.password === '') || (this.state.passwordConfirmed === '')) {
      Alert.alert('Error 🐱', 'Please fill in all inputs!')
    } else if (!(/^[a-zA-Z0-9_.-]*$/.test(this.state.username))) {
      Alert.alert('Error 🐱', 'Only alphanumeric characters allowed in the username!')
    } else {
      const user = {
        name: this.props.navigation.state.params.name,
        username: this.state.username,
        password: this.state.password,
      }

      createUser(user).then((response) => {
        AsyncStorage.setItem('loggedIn', JSON.stringify(true));
        AsyncStorage.setItem('user', JSON.stringify(response))

        this.props.navigation.navigate('Home', { user: response })
      }).catch((error) => {
        Alert.alert(
          'Oh no!',
          'Username is already taken. Try another! 🐱',
          [
            { text: 'Got it', onPress: () => console.log('Ok pressed') },
          ],
          { cancelable: false },
        )
      });
    }
  }

  render() {
    return (
      <View>
        <LinearGradient
          colors={['#420A75', '#5B1997']}
          style={styles.gradient}
        >
          <View style={styles.backView}>
            <Back style={styles.backButton} navigation={this.props.navigation} />
          </View>
          <DismissKeyboard>
            <View style={styles.content}>
              <KeyboardAwareScrollView>
                <View style={styles.content}>
                  <Image style={styles.cat} source={require('../assets/images/light_purple_cat.png')} />
                  <Text style={styles.hiText}>Hi there, {this.props.navigation.state.params.name}! 😸</Text>
                  <Text style={styles.nameText}>Create <Text style={styles.bold}>username:</Text></Text>
                  <TextInput style={styles.input} autoCapitalize="none" onChangeText={this.handleUsername} value={this.state.username} />
                  <Text style={styles.nameText}>Create <Text style={styles.bold}>password:</Text></Text>
                  <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={this.handlePassword} value={this.state.password} />
                  <Text style={styles.nameText}>Confirm <Text style={styles.bold}>password:</Text></Text>
                  <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={this.handleConfirmPassword} value={this.state.passwordConfirmed} />
                  <TouchableOpacity style={styles.button} onPress={this.validateAccount} >
                    <Text style={styles.buttonText}>{'Submit'.toUpperCase()}</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </DismissKeyboard>
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
    fontSize: 20,
    marginTop: 20,
  },
  hiText: {
    color: '#A87FFF',
    fontFamily: 'josefin-sans-bold',
    fontSize: 28,
    marginTop: 20,
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
  input: {
    borderColor: 'white',
    borderBottomWidth: 1.3,
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: 24,
    height: 40,
    margin: 10,
    textAlign: 'center',
    width: 275,
  },
  button: {
    backgroundColor: '#A87FFF',
    borderRadius: 70,
    marginTop: 30,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: 22,
  },
});
