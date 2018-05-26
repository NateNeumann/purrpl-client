import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class cupertinoHeader5 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 96,
    width: 375,
    defaultHeight: 'fixed',
    defaultWidth: 'fixed',
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
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
          <Text style={styles.text1}>PROFILE</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(127,209,255,1)',
    paddingRight: 8,
    paddingLeft: 8,
    opacity: 1,
  },
  text1: {
    top: 56,
    left: 143,
    position: 'absolute',
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
  },
});
