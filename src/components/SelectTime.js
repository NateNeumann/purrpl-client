import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'


const times = [
  { value: '12a', label: '12:00 am' },
  { value: '1a', label: '1:00 am' },
  { value: '2a', label: '2:00 am' },
  { value: '3a', label: '3:00 am' },
  { value: '4a', label: '4:00 am' },
  { value: '5a', label: '5:00 am' },
  { value: '6a', label: '6:00 am' },
  { value: '7a', label: '7:00 am' },
  { value: '8a', label: '8:00 am' },
  { value: '9a', label: '9:00 am' },
  { value: '10a', label: '10:00 am' },
  { value: '11a', label: '11:00 am' },
  { value: '12p', label: '12:00 pm' },
  { value: '1p', label: '1:00 pm' },
  { value: '2p', label: '2:00 pm' },
  { value: '3p', label: '3:00 pm' },
  { value: '4p', label: '4:00 pm' },
  { value: '5p', label: '5:00 pm' },
  { value: '6p', label: '6:00 pm' },
  { value: '7p', label: '7:00 pm' },
  { value: '8p', label: '8:00 pm' },
  { value: '9p', label: '9:00 pm' },
  { value: '10p', label: '10:00 pm' },
  { value: '11p', label: '11:00 pm' },

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
  state = { selectedTimes: [] }

  onSelectionsChange = (selectedTimes) => {
    // selectedTimes is array of { label, value }
    this.setState({ selectedTimes })
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
