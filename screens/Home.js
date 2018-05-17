import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default class Home extends React.Component {
  state = {
    checked: false
  }

  handleCheckbox = () => {
    this.setState({ checked: !this.state.checked })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>HOME</Text>
        </View>
        <View>
          <View style={styles.welcomeContainer}>
          <View style={styles.row}>
            <Text style={styles.welcomeText}>Hello, </Text><Text style={[styles.bold, styles.welcomeText]}>IJEMMA</Text>
          </View>
            <Text style={styles.welcomeText}>Sat, May 12</Text>
            <Text style={styles.welcomeText}>72 F</Text>
          </View>
          <View>
            <Text>I'm thirsty</Text>
          </View>
          <View style={styles.checkItemsContainer}>
            <FlatList
              data={[
                { key: 'a', time: '8 AM', reminder: 'Apply sunscreen' },
                { key: 'b', time: '9 AM', reminder: 'Drink water' },
                { key: 'c', time: '11 AM', reminder: 'Take meds' }]}
              renderItem={({ item }) => {
                return (
                  <View style={styles.checkContainer}>
                    <CheckBox
                      center
                      checked={this.state.checked}
                      onPress={this.handedCheckbox}
                      containerStyle={styles.checkboxContainer}
                    />
                    <Text style={styles.bold}>{item.time} </Text>
                    <Text>{item.reminder}</Text>
                  </View>
                )
              }
            }
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5E7',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#7FD1FF',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
  welcomeContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 15,
  },
  checkItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: 'transparent',
  },
  checkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%',
    backgroundColor: 'transparent',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: 40,
  },
  welcomeText: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold'
  }
})
