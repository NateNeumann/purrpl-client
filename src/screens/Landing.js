import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { LinearGradient } from 'expo'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { fetchUser } from './../actions/user-actions'

export default class Landing extends Component {
  static navigationOptions = { header: null }

  componentDidMount() {
    const { navigate } = this.props.navigation

    AsyncStorage.getItem('loggedIn', (err, value) => {
      if (JSON.parse(value) !== null) {
        if (JSON.parse(value)) {
          AsyncStorage.getItem('user', (error, user) => {
            fetchUser(JSON.parse(user).id).then((response) => {
              if (response) {
                navigate('Home', { user: JSON.parse(user) })
              }
            })
          })
        }
      }
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
    resizeMode: 'contain',
    height: '110%',
    width: '110%',
    marginRight: '-18%',
  },
  title: {
    color: 'white',
    fontFamily: 'josefin-sans-bold',
    fontSize: responsiveFontSize(11),
    marginTop: responsiveHeight(8),
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontFamily: 'raleway-regular',
    fontSize: responsiveFontSize(3),
    marginLeft: responsiveWidth(20),
    marginRight: responsiveWidth(20),
    marginTop: responsiveHeight(2),
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#5B1997',
    borderRadius: responsiveHeight(0.8),
    marginTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(2.2),
    paddingLeft: responsiveHeight(6),
    paddingRight: responsiveHeight(6),
    paddingTop: responsiveHeight(2.2),
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: responsiveFontSize(2.3),
    textAlign: 'center',
  },
  secondButtonText: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: responsiveFontSize(2.3),
    marginTop: responsiveHeight(1.5),
  },
});
