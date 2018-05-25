import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      happy: require('./../assets/images/cat/cat_1.png'),
      sad: require('./../assets/images/cat/cat_4.png'),
      deprived: require('./../assets/images/cat/cat_5.png'),
      rollover: require('./../assets/images/cat/cat_8.png'),
    }
  }
  render() {
    return (
      <Image
        style={styles.animal}
        source={this.state.happy}
      />
    );
  }
}

const styles = StyleSheet.create({
  animal: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
})
