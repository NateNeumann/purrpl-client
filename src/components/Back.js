import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class Back extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Image style={styles.back} source={require('./../assets/images/back.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  back: {
    height: 20,
    width: 20,
    marginTop: 5,
    marginLeft: 20,
  },
})