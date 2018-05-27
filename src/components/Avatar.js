import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class Avatar extends React.Component {
  randomlyGenerateImage = () => {
    console.log(this.props.avatar.status)
    switch (this.props.avatar.status) {
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
    console.log(this.props.avatar)
    return (
      <View style={{ justifyContent: 'center' }}>
        <Image
          style={styles.animal}
          source={require('./../assets/images/cat/happy/cat_belly.png')}
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
