import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  handleCheckbox = () => {
    this.setState({ checked: !this.state.checked })
  }
  render() {
    console.log(this.state.checked)
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>HOME</Text>
        </View>
        <View>
          <View style={styles.welcomeContainer}>
          <View style={styles.row}>
            <Text style={styles.welcomeText}>Hello, </Text><Text style={[styles.bold, styles.welcomeText]}>IJEMMA!</Text>
          </View>
            <Text style={styles.welcomeText}>Sat, May 12</Text>
            <Text style={styles.welcomeText}>72 F</Text>
          </View>
          <View>
            <Text>I'm thirsty</Text>
            <Image
              style={styles.plant}
              source={require('./../assets/images/plant.png')}
            />
          </View>
          <View style={styles.checkItemsContainer}>
            <FlatList
              data={[
                { key: 'a', time: '8 AM', reminder: 'Apply sunscreen' },
                { key: 'b', time: '9 AM', reminder: 'Drink water' },
                { key: 'c', time: '11 AM', reminder: 'Take meds' }
              ]}
              renderItem={({ item }) => {
                return (
                  <View style={styles.checkContainer}>
                    <CheckBox
                      checked={this.state.checked}
                      onPress={() => this.handleCheckbox()}
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
  plant: {
    alignSelf: 'flex-start',
    marginLeft: 30,
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
    backgroundColor: '#F4FCFF',
    borderColor: '#B2CBFB',
    borderWidth: 2,
    width: 20,
    height: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold'
  }
})
