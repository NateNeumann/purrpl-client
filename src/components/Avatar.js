import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: '',
    }
  }
  componentWillMount = () => {
    this.randomlyGenerateImage()
  }
  randomlyGenerateImage = () => {
    switch (this.props.avatar.status) {
      case 'happy':
        this.setState({ image: require('./../assets/images/cat/happy/cat_belly.png') })
        break
      case 'normal':
        this.setState({ image: require('./../assets/images/cat/normal/cat_sitting.png') })
        break
      case 'sad':
        this.setState({ image: require('./../assets/images/cat/sad/cat_hissing.png') })
        break
      default:
        this.setState({ image: require('./../assets/images/cat/normal/cat_sitting.png') })
    }
  }
  render() {
    console.log(this.props.avatar)
    return (
      <View style={{ justifyContent: 'center' }}>
        <Image
          style={styles.animal}
          source={this.state.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animal: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: height * 0.05,
    left: 40,
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
})
