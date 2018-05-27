import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated, AsyncStorage } from 'react-native'
import moment from 'moment'
import { Circle } from 'react-native-progress'
import { getRemainders } from './../actions/reminder-actions'

export default class SlideMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bounceValue: new Animated.Value(-100),
      user: this.props.user,
      numerator: null,
      denominator: null,
    }
  }
  componentWillMount = () => {
    getRemainders(this.state.user.id, moment().format('MMM D, YYYY')).then((response) => {
      this.setState({ numerator: response.numerator })
      this.setState({ denominator: response.denominator ? response.denominator : 1 })
    })
  }
  render() {
    const { navigate } = this.props.navigation
    let toValue = -100
    if (this.props.visible) {
      toValue = 0
    }
    Animated.spring(
      this.state.bounceValue,
      {
        toValue,
        tension: 2,
      },
    ).start();
    if (this.state.numerator !== null && this.state.denominator !== null) {
      return (
        <Animated.View style={[styles.container, { transform: [{ translateX: this.state.bounceValue }] }]}>
          <TouchableOpacity
            style={styles.exitButton}
            onPress={this.props.toggleMenu}
          >
            <Image style={{ height: 40, width: 40 }} source={require('./../assets/images/x.png')} />
          </TouchableOpacity>
          <View style={styles.firstHalf}>
            <Circle
              style={styles.progressCircle}
              color="rgb(169, 222, 81)"
              borderWidth={0}
              size={135}
              animated
              animating={false}
              thickness={7}
              progress={this.state.numerator / this.state.denominator}
            />
            <Image
              style={styles.userStatus}
              source={require('./../assets/images/plantcircle.png')}
            />
            <Text style={styles.remindersCount}>{this.state.numerator}/{this.state.denominator} Reminders</Text>
          </View>
          <View style={styles.secondHalf}>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  this.props.toggleMenu()
                  navigate('Landing')
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ height: 40, width: 40 }} source={require('./../assets/images/profile.png')} />
                  <Text style={styles.optionText}>PROFILE</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  this.props.toggleMenu()
                  navigate('ProgressTracking', { user: this.state.user })
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ height: 40, width: 40 }} source={require('./../assets/images/progress.png')} />
                  <Text style={styles.optionText}>PROGRESS</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  this.props.toggleMenu()
                  navigate('Settings', { user: this.state.user })
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('./../assets/images/settings.png')} />
                  <Text style={styles.optionText}>SETTINGS</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => {
                AsyncStorage.setItem('loggedIn', JSON.stringify(false))
                this.props.toggleMenu()
                navigate('Landing')
              }}
            >
              <Text style={styles.logoutText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#F5E8FF',
    left: 0,
    zIndex: 1,
    alignItems: 'center',
  },
  exitButton: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 2,
  },
  progressCircle: {
    position: 'absolute',
    top: '19%',
    height: 135,
    width: 135,
  },
  userStatus: {
    width: 120,
    height: 120,
    marginBottom: '5%',
  },
  remindersCount: {
    color: '#053867',
    fontSize: 20,
    fontFamily: 'raleway-semi-bold',
    marginTop: 10,
  },
  firstHalf: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '35%',
    alignItems: 'center',
  },
  secondHalf: {
    justifyContent: 'space-around',
    width: '100%',
    height: '65%',
    alignItems: 'center',
  },
  optionButton: {
    width: '80%',
    height: 75,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DFD1EA',
  },
  optionText: {
    fontSize: 22,
    fontFamily: 'raleway-semi-bold',
    color: '#B0A3B9',
  },
  logoutButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#B0A3B9',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 22,
    fontFamily: 'raleway-bold',
    color: 'white',
  },
})
