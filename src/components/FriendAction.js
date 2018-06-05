import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native'
import { sendAction } from './../actions/friends-actions'
import { scaleHeight, scaleWidth, lesserScalar } from './../assets/scaling'

export default class FriendAction extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          Alert.alert(
            'Sent! 🎉 ',
            'Thanks for being a great friend!',
            [
              { text: 'OK', onPress: () => console.log('Ok pressed') },
            ],
            { cancelable: false },
          )
          sendAction(this.props.id, this.props.username, this.props.content)
        }}
        >
          <View style={styles.actionContainer}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={this.props.image}
              />
            </View>
            <Text style={styles.text}>{this.props.label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginBottom: scaleHeight(20),
    width: '60%',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleHeight(2),
    borderColor: '#053867',
  },
  icon: {
    height: scaleHeight(45),
    width: scaleWidth(45),
    resizeMode: 'contain',
  },
  iconContainer: {
    height: scaleHeight(70),
    width: scaleWidth(70),
    backgroundColor: '#FFF',
    borderRadius: scaleHeight(40),
    marginRight: scaleWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'raleway-semi-bold',
    fontSize: lesserScalar(23),
    color: '#053867',
  },
})
