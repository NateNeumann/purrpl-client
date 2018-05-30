import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Alert, Keyboard, TouchableWithoutFeedback, AsyncStorage } from 'react-native'
import { LinearGradient } from 'expo'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { loginUser } from './../actions/user-actions'
import Back from './../components/Back'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

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
      AsyncStorage.setItem('loggedIn', JSON.stringify(true))

      AsyncStorage.setItem('user', JSON.stringify(response))

      this.props.navigation.navigate('Home', { user: response })
    }).catch((error) => {
      Alert.alert(
        'Oops!',
        'Error logging in 😿',
        [
          { text: 'Got it', onPress: () => console.log('Ok pressed') },
        ],
        { cancelable: false },
      )
    });
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
                  <Text style={styles.hiText}>Welcome back!</Text>
                  <Text style={styles.nameText}><Text style={styles.bold}>Username:</Text></Text>
                  <TextInput style={styles.input} autoCapitalize="none" onChangeText={this.handleUsername} value={this.state.username} />
                  <Text style={styles.nameText}><Text style={styles.bold}>Password:</Text></Text>
                  <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={this.handlePassword} value={this.state.password} />
                  <TouchableOpacity style={styles.button} onPress={this.finalizeAccount} >
                    <Text style={styles.buttonText}>{'Log In'.toUpperCase()}</Text>
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
    resizeMode: 'contain',
    height: responsiveHeight(32),
    width: responsiveWidth(32),
    marginTop: responsiveHeight(-3.5),
  },
  nameText: {
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(2),
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
  input: {
    borderColor: 'white',
    borderBottomWidth: responsiveWidth(0.3),
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: responsiveFontSize(2.7),
    height: responsiveHeight(5),
    margin: responsiveWidth(3.5),
    textAlign: 'center',
    width: responsiveWidth(80),
  },
  button: {
    backgroundColor: '#A87FFF',
    borderRadius: responsiveHeight(0.8),
    marginTop: responsiveHeight(2.5),
    paddingBottom: responsiveHeight(2),
    paddingLeft: responsiveWidth(15),
    paddingRight: responsiveWidth(15),
    paddingTop: responsiveHeight(2),
  },
  buttonText: {
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: responsiveFontSize(2.7),
  },
  hiText: {
    color: '#A87FFF',
    fontFamily: 'josefin-sans-bold',
    fontSize: responsiveFontSize(4),
    marginTop: responsiveHeight(-2),
  },
});
