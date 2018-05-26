import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import { fetchReminder, updateTimes } from './../actions/reminder-actions'

const times = [
  { value: 0, label: '12:00 am' },
  { value: 1, label: '1:00 am' },
  { value: 2, label: '2:00 am' },
  { value: 3, label: '3:00 am' },
  { value: 4, label: '4:00 am' },
  { value: 5, label: '5:00 am' },
  { value: 6, label: '6:00 am' },
  { value: 7, label: '7:00 am' },
  { value: 8, label: '8:00 am' },
  { value: 9, label: '9:00 am' },
  { value: 10, label: '10:00 am' },
  { value: 11, label: '11:00 am' },
  { value: 12, label: '12:00 pm' },
  { value: 13, label: '1:00 pm' },
  { value: 14, label: '2:00 pm' },
  { value: 15, label: '3:00 pm' },
  { value: 16, label: '4:00 pm' },
  { value: 17, label: '5:00 pm' },
  { value: 18, label: '6:00 pm' },
  { value: 19, label: '7:00 pm' },
  { value: 20, label: '8:00 pm' },
  { value: 21, label: '9:00 pm' },
  { value: 22, label: '10:00 pm' },
  { value: 23, label: '11:00 pm' },

]
const renderLabel = (label, style) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.textStyle}>{label}</Text>
      </View>
    </View>
  )
}

class SelectTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTimes: [],
      user: this.props.user,
    }
  }
  componentWillMount = () => {
    fetchReminder(this.state.user.id, this.props.reminder.type).then((response) => {
      this.setState({ selectedTimes: response.times })
    })
  }
  onSelectionsChange = (selectedTimes) => {
    // selectedTimes is array of { label, value }
    this.setState({ selectedTimes })
    updateTimes(this.props.reminder.id, selectedTimes)
  }

  render() {
    return (
      <View>
        <SelectMultiple
          items={times}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedTimes}
          onSelectionsChange={this.onSelectionsChange}
          rowStyle={styles.timesContainer}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toggleContainer: {
    marginLeft: 20,
    marginTop: 18,
    alignSelf: 'center',
  },
  optionsText: {
    color: '#053867',
    fontSize: 25,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontSize: 18,
  },
  timesText: {
    color: '#053867',
    fontSize: 25,
    marginTop: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  activeContainer: {
    flexDirection: 'row',
  },
  scrollHeight: {
    height: 220,
    width: 245,
  },
  welcomeContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  timesContainer: {
    backgroundColor: '#FFF5E7',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 20,
    width: 260,
  },
})

export default SelectTime;
