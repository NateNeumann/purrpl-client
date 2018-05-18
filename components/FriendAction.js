import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

export default class FriendAction extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
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
    marginBottom: 20,
    width: '60%',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 35,
    width: 35,
  },
  iconContainer: {
    height: 70,
    width: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'raleway-semi-bold',
    fontSize: 26,
    color: '#053867',
  },
})
