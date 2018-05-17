import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Menu from './../components/Menu'

export default class Reminders extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
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
          <Menu style={[{ marginTop: 50 }]} />
          <Text style={styles.header}>REMINDERS</Text>
        </View>
        <View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/drink.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>drink</Text>
              <Text style={styles.reminderText}> a glass of water</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/sunscreen.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>apply</Text>
              <Text style={styles.reminderText}> sunscreen</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/food.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>eat</Text>
              <Text style={styles.reminderText}> meals</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/meds.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>take</Text>
              <Text style={styles.reminderText}> your meds</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/bed.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>sleep!</Text>
            </View>
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
    backgroundColor: '#FFC47F',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 90,
  },
  welcomeContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  animal: {
    alignSelf: 'flex-start',
  },
  animalUpdate: {
    fontSize: 20,
    fontFamily: 'raleway-semi-bold',
  },
  speechBubble: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    height: 120,
    width: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
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
  reminderText: {
    fontSize: 20,
    fontFamily: 'raleway-regular',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
