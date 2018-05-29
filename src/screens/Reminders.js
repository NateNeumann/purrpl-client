import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Menu from './../components/Menu'
import SlideMenu from './../components/SlideMenu'

export default class Reminders extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
      checked: false,
      user: this.props.navigation.state.params.user,
    }
  }

  handleCheckbox = () => {
    this.setState({ checked: !this.state.checked })
  }
  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        {this.state.menuVisible ? <SlideMenu visible={this.state.menuVisible} toggleMenu={this.toggleMenu} navigation={this.props.navigation} /> : null}
        <View style={styles.headerContainer}>
          <Menu action={() => this.setState({ menuVisible: !this.state.menuVisible })} />
          <Text style={styles.header}>REMINDERS</Text>
        </View>
        <View style={styles.containerHeight}>
          <View style={styles.remindersContainer}>
            <FlatList
              data={[
            { key: 'water', image: require('./../assets/images/reminders/water.png'), text: 'drink a glass of water' },
            { key: 'sunscreen', image: require('./../assets/images/reminders/sunscreen.png'), text: 'apply sunscreen' },
            { key: 'food', image: require('./../assets/images/reminders/food.png'), text: 'eat meals' },
            { key: 'medicine', image: require('./../assets/images/reminders/meds.png'), text: 'take your medication' },
            { key: 'sleep', image: require('./../assets/images/reminders/sleep.png'), text: 'go to sleep' },

          ]}
              renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('EditReminder', {
                  user: this.state.user,
                  image: item.image,
                  text: item.text,
                  type: item.key,
                })}
              >
                <View style={styles.eachContainer}>
                  <View style={styles.row}>
                    <Image
                      style={styles.reminderImage}
                      source={item.image}
                    />
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
    backgroundColor: 'white',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#FFC47F',
    height: responsiveHeight(11),
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(21),
  },
  eachContainer: {
    flexDirection: 'row',
    padding: responsiveHeight(3),
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  remindersContainer: {
    flexDirection: 'row',
    paddingLeft: responsiveHeight(2),
    paddingRight: responsiveHeight(2),
  },
  containerHeight: {
    height: '90%',
  },
  reminderImage: {
    alignSelf: 'flex-start',
    marginRight: responsiveHeight(3),
  },
  reminderText: {
    fontSize: responsiveFontSize(2.7),
    fontFamily: 'raleway-regular',
    marginTop: responsiveHeight(3),
  },
  row: {
    flexDirection: 'row',
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
