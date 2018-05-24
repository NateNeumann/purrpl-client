import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import { LinearGradient } from 'expo'
import getUser from './../actions/testing-actions'

export default class Landing extends Component {
  static navigationOptions = { header: null }
  constructor(props) {
    super(props)

    this.state = {
      user: null,
    }
  }

  componentWillMount = () => {
    getUser().then((user) => {
      this.setState({ user })
    })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#9963F3', '#BE9FFF']}
          style={styles.gradient}
        >
          <View style={styles.landing}>
            <View style={{
 alignItems: 'center', alignSelf: 'center', flex: 1.5, justifyContent: 'center',
}}
            >
              <Text style={styles.title}>purrpl</Text>
              <Text style={styles.subtitle}>Keeping track of your wellness</Text>
              <TouchableOpacity style={styles.button} onPress={() => { navigate('Name') }} >
                <Text style={styles.buttonText}>{'Get Started'.toUpperCase()}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigate('Login') }} >
                <Text style={styles.secondButtonText}>{'Log In'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={{
 alignItems: 'flex-end', alignSelf: 'flex-end', flex: 1, justifyContent: 'flex-end', width: '100%',
}}
            >
              <Image style={styles.cat} source={require('../assets/images/purple_cat.png')} />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const { width, height } = Dimensions.get('window')
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
  landing: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
  },
  cat: {
    alignSelf: 'flex-end',
    height: height * 0.41,
    width: width * 0.72,
  },
  title: {
    color: 'white',
    fontFamily: 'josefin-sans-bold',
    fontSize: 100,
    marginTop: 50,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontFamily: 'raleway-regular',
    fontSize: 24,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#5B1997',
    borderRadius: 5,
    marginTop: 30,
    paddingBottom: 15,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 15,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  secondButtonText: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: 18,
    marginTop: 15,
  },
});
