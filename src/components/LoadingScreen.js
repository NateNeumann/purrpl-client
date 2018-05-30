import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as Progress from 'react-native-progress'
import { scaleHeight, lesserScalar } from './../assets/scaling'

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
        <Progress.Bar
          style={{
            alignSelf: 'center',
            marginTop: scaleHeight(20),
          }}
          unfilledColor="#F1EAFF"
          color="#5B1997"
          borderColor="#F1EAFF"
          size={lesserScalar(50)}
          indeterminate
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'raleway-bold',
    color: '#5B1997',
    marginTop: scaleHeight(100),
  },
})
