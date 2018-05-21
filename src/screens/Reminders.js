import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
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
    const { navigate } = this.props.navigation
    console.log(this.state.checked)
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Menu style={[{ marginTop: 50 }]} />
          <Text style={styles.header}>REMINDERS</Text>
        </View>
        <View style={styles.containerHeight}>
          <View style={styles.welcomeContainer}>
            <FlatList
              data={[
            { key: '1', image: require('./../assets/images/drink.png'), text: 'drink a glass of water' },
            { key: '2', image: require('./../assets/images/sunscreen.png'), text: 'apply sunscreen' },
            { key: '3', image: require('./../assets/images/food.png'), text: 'eat meals' },
            { key: '4', image: require('./../assets/images/meds.png'), text: 'take your medication' },
            { key: '5', image: require('./../assets/images/bed.png'), text: 'go to sleep' },

          ]}
              renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('EditReminder', { image: item.image, text: item.text })}
              >
                <View style={styles.welcomeContainer}>
                  <View style={styles.row}>
                    <Image
                      style={styles.animal}
                      source={item.image}
                    />

                    {item.image}
                    <Text style={styles.reminderText}>{item.text}</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
  containerHeight: {
    height: 560,
  },
  animal: {
    alignSelf: 'flex-start',
    marginRight: 10,
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
