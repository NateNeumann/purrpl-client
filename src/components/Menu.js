import React from 'react'
import { StyleSheet, View } from 'react-native'
import Hamburger from 'react-native-hamburger'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Hamburger active={this.state.active}
          type="cross"
          color="white"
          onPress={this.props.action}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
})
