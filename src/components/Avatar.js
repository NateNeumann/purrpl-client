import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import getAvatar from './../actions/avatar-actions'

const { height } = Dimensions.get('window')

export default class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.id,
      avatar: null,
      image: '',
    }
  }
  componentWillMount = () => {
    getAvatar(this.state.userId).then((response) => {
      this.setState({ avatar: response })
      if (this.props.handleSpeechBubble) {
        this.props.handleSpeechBubble(this.state.avatar.message)
      }
      this.randomlyGenerateImage()
    })
  }
  randomlyGenerateImage = () => {
    switch (this.state.avatar.status) {
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
    if (this.state.avatar) {
      return (
        <View style={{ justifyContent: 'center' }}>
          <Image
            style={[styles.animal, { height: this.props.height, width: this.props.width }]}
            source={this.state.image}
          />
        </View>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  animal: {
    resizeMode: 'contain',
  },
})
