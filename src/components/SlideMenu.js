import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated, AsyncStorage, PanResponder } from 'react-native'
import moment from 'moment'
import { Circle } from 'react-native-progress'
import Avatar from './../components/Avatar'
import { getRemainders } from './../actions/reminder-actions'
import { scaleHeight, scaleWidth } from './../assets/scaling'

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
      this.setState({ denominator: response.denominator ? response.denominator : -1 })
    })

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return gestureState.dx < -5
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < 0) {
          this.swipeOut()
        }
      },
    })
  }
  componentDidUpdate = () => {
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
  }

  swipeOut = () => {
    const toValue = -300
    Animated.spring(
      this.state.bounceValue,
      {
        toValue,
        tension: 3,
      },
    ).start(() => {
      this.props.toggleMenu()
    })
  }

  renderText = () => {
    console.log(this.state.denominator)
    if (this.state.denominator === -1) {
      return <Text style={styles.remindersCount}>No Reminders</Text>
    }
    return <Text style={styles.remindersCount}>{this.state.numerator}/{this.state.denominator} Reminders</Text>
  }

  render() {
    const { navigate } = this.props.navigation
    if (this.state.numerator !== null && this.state.denominator !== null) {
      return (
        <Animated.View style={[styles.container, { transform: [{ translateX: this.state.bounceValue }] }]} {...this._panResponder.panHandlers}>
          <TouchableOpacity
            style={styles.exitButton}
            onPress={this.swipeOut}
          >
            <Image style={{ height: scaleHeight(50), width: scaleHeight(50) }} source={require('./../assets/images/x.png')} />
          </TouchableOpacity>
          <View style={styles.firstHalf}>
            <View style={{
              justifyContent: 'center', alignItems: 'center', top: scaleWidth(35), height: 165, width: 165,
            }}
            >
              <Circle
                style={styles.progressCircle}
                color="rgb(169, 222, 81)"
                unfilledColor="rgb(196, 196, 196)"
                borderWidth={0}
                size={scaleWidth(165)}
                animated
                animating={false}
                thickness={7}
                progress={this.state.numerator / this.state.denominator}
              />
              <View height={scaleWidth(130)}
                width={scaleWidth(130)}
                style={{
 backgroundColor: 'white', borderRadius: 90, alignItems: 'center', justifyContent: 'center',
}}
              >
                <Avatar height={scaleWidth(110)} width={scaleWidth(110)} id={this.state.user.id} />
              </View>
            </View>
            <View>
              {this.renderText()}
            </View>
          </View>
          <View style={styles.secondHalf}>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => {
                  this.props.toggleMenu()
                  navigate('Profile', { user: this.state.user })
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ height: 40, width: 40 }} source={require('./../assets/images/prof.png')} />
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
                  navigate('Settings', { id: this.state.user.id })
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{ height: 40, width: 40 }} source={require('./../assets/images/set.png')} />
                  <Text style={styles.optionText}>SETTINGS</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.logoutButton}
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
    top: 20,
    right: 15,
    zIndex: 2,
  },
  progressCircle: {
    alignSelf: 'center',
    height: 165,
    position: 'absolute',
    width: 165,
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
    marginTop: 40,
  },
  firstHalf: {
    justifyContent: 'center',
    width: '100%',
    height: '35%',
    alignItems: 'center',
    paddingTop: scaleHeight(30),
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
    marginLeft: scaleWidth(10),
  },
  logoutButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#8D77A1',
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
