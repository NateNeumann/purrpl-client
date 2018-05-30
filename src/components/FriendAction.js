import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { sendAction } from './../actions/friends-actions'
import { scaleHeight, scaleWidth, lesserScalar } from './../assets/scaling'

export default class FriendAction extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
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
  },
  icon: {
    height: scaleHeight(35),
    width: scaleWidth(35),
    resizeMode: 'contain',
  },
  iconContainer: {
    height: scaleHeight(70),
    width: scaleWidth(70),
    backgroundColor: '#FFFFFF',
    borderRadius: scaleHeight(40),
    marginRight: scaleWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'raleway-semi-bold',
    fontSize: lesserScalar(26),
    color: '#053867',
  },
})
