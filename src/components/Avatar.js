import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      waving: require('./../assets/images/cat/cat_waving.png'),
    }
  }
  render() {
    return (
      <View style={{ justifyContent: 'center' }}>
        <Image
          style={styles.animal}
          source={this.state.waving}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animal: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
})
