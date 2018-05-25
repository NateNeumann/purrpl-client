import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      happy: require('./../assets/images/cat/cat_1.png'),
    }
  }

  render() {
    const mood = [{
      happy: require('./../assets/images/cat/cat_1.png'),
    }, {
      rollover: require('./../assets/images/cat/cat_8.png'),
    }, {
      deprived: require('./../assets/images/cat/cat_5.png'),
    }, {
      sad: require('./../assets/images/cat/cat_4.png'),
    }];

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
