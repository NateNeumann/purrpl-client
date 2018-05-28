import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';

export default class list12 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 500,
    width: 375,
    defaultHeight: 'fixed',
    defaultWidth: 'fixed',
  };
  render() {
    return (
      <FlatList
        style={[styles.root, this.props.style]}
        renderItem={({ item, separators }) => {
          return (
            <View style={styles.rect1}>
              <Image
                style={styles.avatarImageStyle}
                source={require('../assets/cardImage1.jpg')}
              />
              <View style={styles.content}>
                <Text style={styles.text1}>Two-line Item</Text>
                <Text style={styles.text2}>
                  BuilderX is a screen design tool which codes React Native for
                  you.
                </Text>
              </View>
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 8,
  },
  rect1: {
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  avatarImageStyle: {
    width: 40,
    height: 40,
    backgroundColor: '#CCCCCC',
    borderRadius: 20,
  },
  content: {
    left: 72,
    right: 0,
    height: 88,
    position: 'absolute',
    justifyContent: 'center',
    paddingRight: 16,
    borderColor: '#BDBDBD',
    borderBottomWidth: 0.5,
  },
  text1: {
    paddingBottom: 8,
    fontSize: 16,
    color: '#212121',
  },
  text2: {
    fontSize: 13,
    lineHeight: 16,
    color: '#9E9E9E',
  },
});
