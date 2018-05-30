import React from 'react'
import { StyleSheet, View, Image, DeviceEventEmitter } from 'react-native'
import getAvatar from './../actions/avatar-actions'

export default class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.id,
      avatar: null,
      image: null,
    }
  }
  componentWillMount = () => {
    DeviceEventEmitter.addListener('updateAvatar', (e) => {
      this.updateAvatar()
    })
    this.updateAvatar()
  }

  updateAvatar = () => {
    getAvatar(this.state.userId).then((response) => {
      this.setState({ avatar: response })
      if (this.props.handleSpeechBubble) {
        this.props.handleSpeechBubble(this.state.avatar.message)
      }
      this.setState({ image: this.randomlyGenerateImage() })
    })
  }
  randomlyGenerateImage = () => {
    switch (this.state.avatar.status) {
      case 'happy':
        return require('./../assets/images/cat/happy/cat_belly.png')
      case 'normal':
        return require('./../assets/images/cat/normal/cat_sitting.png')
      case 'sad':
        return require('./../assets/images/cat/sad/cat_hissing.png')
      default:
        return require('./../assets/images/cat/normal/cat_sitting.png')
    }
  }
  render() {
    if (this.state.avatar && this.state.image) {
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
