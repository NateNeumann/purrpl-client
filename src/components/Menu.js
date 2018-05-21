import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class Menu extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.action} style={styles.container}>
        <Image source={require('./../assets/images/hamburger.png')} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
})
