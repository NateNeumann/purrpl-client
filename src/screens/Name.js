import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from 'expo'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Back from './../components/Back'


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class Name extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }
  }

  handleName = (text) => {
    this.setState({
      name: text.replace(/[^A-Za-z]/, ''),
    });
  }

  submitName = () => {
    if (this.state.name !== '') {
      this.props.navigation.navigate('CreateAccount', { name: this.state.name })
    } else {
      Alert.alert('Oh no!', 'Please enter a valid name 😺')
    }
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
          <DismissKeyboard>
            <View style={styles.content}>
              <Image style={styles.cat} source={require('../assets/images/light_purple_cat.png')} />
              <Text style={styles.nameText}>What&#39;s your <Text style={styles.bold}>name?</Text></Text>
              <TextInput style={styles.input} onChangeText={this.handleName} value={this.state.name} />
              <TouchableOpacity style={styles.button} onPress={this.submitName}>
                <Image style={styles.arrow} source={require('../assets/images/purple_arrow.png')} />
              </TouchableOpacity>
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
    marginTop: responsiveHeight(-20),
  },
  nameText: {
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: responsiveFontSize(3),
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
  input: {
    borderColor: 'white',
    borderBottomWidth: 1.3,
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: responsiveFontSize(2.7),
    height: responsiveHeight(5),
    margin: responsiveWidth(3.5),
    textAlign: 'center',
    width: responsiveWidth(80),
  },
  arrow: {
    height: responsiveHeight(9),
    marginTop: responsiveHeight(4.5),
    width: responsiveHeight(9),
  },
});
