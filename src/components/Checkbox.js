import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import moment from 'moment'
import { updateCompletion, fetchReminderTime } from './../actions/reminder-actions'

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: null,
    }
  }

  componentWillMount = () => {
    fetchReminderTime(this.props.user.id, this.props.item.type, moment().format('MMM D, YYYY'), this.props.value).then((response) => {
      if (response.completion === undefined) {
        this.setState({ checked: false })
      }
      this.setState({ checked: response.completion })
    })
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked })
    const checked = !this.state.checked

    updateCompletion(this.props.id, moment().format('MMM D, YYYY'), this.props.value, checked)
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
    if (this.state.checked != null) {
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
    } else {
      return null
    }
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
