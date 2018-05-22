import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated } from 'react-native'

export default class SlideMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bounceValue: new Animated.Value(-100),
      user: this.props.user,
    }
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
    return (
      <Animated.View style={[styles.container, { transform: [{ translateX: this.state.bounceValue }] }]}>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={this.props.toggleMenu}
        >
          <Image style={{ height: 40, width: 40 }} source={require('./../assets/images/x.png')} />
        </TouchableOpacity>
        <View style={styles.firstHalf}>
          <Image
            style={styles.userStatus}
            source={require('./../assets/images/plantcircle.png')}
          />
          <Text style={styles.remindersCount}>16/32 Reminders</Text>
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
                navigate('Landing')
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('./../assets/images/settings.png')} />
                <Text style={styles.optionText}>SETTINGS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
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
  userStatus: {
    width: 120,
    height: 120,
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
    height: '30%',
    alignItems: 'center',
  },
  secondHalf: {
    justifyContent: 'space-around',
    width: '100%',
    height: '70%',
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
