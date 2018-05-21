import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

export default class SlideMenu extends React.Component {
  render() {
    if (this.props.visible) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.exitButton}
            onPress={this.props.toggleMenu}
          >
            <Text>X</Text>
          </TouchableOpacity>
          <Image
            style={styles.userStatus}
            source={require('./../assets/images/plantcircle.png')}
          />
          <Text style={styles.remindersCount}>16/32 Reminders</Text>
          <TouchableOpacity
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>Here is some text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>Here is some text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>Here is some text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
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
  },
  userStatus: {
    width: 150,
    height: 150,
  },
  remindersCount: {
    color: '#053867',
    fontSize: 20,
    fontFamily: 'raleway-regular',
  },
  optionButton: {
    width: '90%',
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
