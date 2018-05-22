import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false,
    }
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked })
    const checked = !this.state.checked

    if (checked) {
      // run the passed in callback
      // this.props.action()
    } else {
      // do something else
    }
  }

  renderCheck = () => {
    if (this.state.checked) {
      return (
        <Image
          style={{ height: 27, width: 27 }}
          source={require('./../assets/images/check.png')}
        />
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.handleCheck}
        >
          <View style={styles.checkbox}>
            {this.renderCheck()}
          </View>
        </TouchableHighlight>
        <Text style={styles.time}>{this.props.time}  </Text>
        <Text style={styles.reminder}>{this.props.reminder}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 30,
    height: 30,
    backgroundColor: '#F4FCFF',
    borderColor: '#B2CBFB',
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 5,
  },
  reminder: {
    fontSize: 18,
    fontFamily: 'raleway-regular',
    color: '#053867',
  },
  time: {
    fontSize: 18,
    fontFamily: 'raleway-bold',
    color: '#053867',
    marginLeft: 10,
  },
})
