import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CupertinoHeader5 from '../symbols/cupertinoHeader5';
import List1 from '../symbols/list1';
import List12 from '../symbols/list12';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.root}>
        <CupertinoHeader5 style={styles.CupertinoHeader51} />
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            alignItems: 'center',
          }}
          pointerEvents="box-none" /* center */
        >
          <Image
            source={require('../assets/image_2_(1).png')}
            style={styles.image1}
          />
        </View>
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            alignItems: 'center',
          }}
          pointerEvents="box-none"
        >
          <Text style={styles.text1}>IJEMMA ONWUZULIKE</Text>
        </View>
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          pointerEvents="box-none" /* center */
        >
          <Text style={styles.text2}>How are you feeling today?</Text>
        </View>
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            alignItems: 'center',
          }}
          pointerEvents="box-none"
        >
          <Text style={styles.m8VqoY}>IJEMMA ONWUZULIKE</Text>
        </View>
        <List1 style={styles.Hvq8fY} />
        <List12 style={styles.MSr6yz} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
  },
  CupertinoHeader51: {
    height: 96,
    width: 375,
  },
  image1: {
    height: 133,
    width: 133,
    top: 181,
    position: 'absolute',
  },
  text1: {
    top: 338.99,
    left: 66.5,
    backgroundColor: 'transparent',
    position: 'absolute',
    color: 'rgba(5,56,103,1)',
    fontSize: 24,
  },
  text2: {
    top: 388.12,
    left: 98,
    position: 'absolute',
    backgroundColor: 'transparent',
    fontSize: 20,
    color: 'rgba(48,98,145,1)',
  },
  m8VqoY: {
    top: 429,
    left: 208,
    position: 'absolute',
    backgroundColor: 'transparent',
    fontSize: 24,
    color: 'rgba(5,56,103,1)',
  },
  Hvq8fY: {
    top: 429,
    left: 252,
    position: 'absolute',
  },
  cL0QDN: {
    top: 429,
    left: 167.5,
    position: 'absolute',
  },
  MSr6yz: {
    top: 429,
    left: 128,
    position: 'absolute',
  },
});
