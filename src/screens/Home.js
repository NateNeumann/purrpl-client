import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import moment from 'moment'
import { fetchDailyReminders } from './../actions/reminder-actions'
import getWeather from './../actions/weather-actions'
import getAvatar from './../actions/avatar-actions'
import Checkbox from './../components/Checkbox'
import Menu from './../components/Menu'
import SlideMenu from './../components/SlideMenu'
import Avatar from './../components/Avatar'

const { width } = Dimensions.get('window')

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
      weather: {},
      user: this.props.navigation.state.params.user,
      avatar: null,
      reminders: [],
    }
  }
  componentDidMount = () => {
    // lat and long for Hanover
    getWeather(43.7005122, -72.2839756).then((response) => {
      this.setState({ weather: response })
    })
    fetchDailyReminders(this.state.user.id).then((response) => {
      this.setState({ reminders: response })
    })
    getAvatar(this.state.user.id).then((response) => {
      this.setState({ avatar: response })
    })
  }
  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible })
  }
  renderRemindersChecklist = () => {
    if (this.state.reminders && this.state.reminders.length > 0) {
      return (
        <FlatList
          data={this.state.reminders}
          renderItem={({ item }) => {
            return (
              <View style={[styles.checkContainer, { marginLeft: width * 0.3, justifyContent: 'flex-start' }]}>
                <Checkbox
                  user={this.state.user}
                  item={item}
                  id={item.id}
                  value={item.time.value}
                  time={item.time.label}
                  reminder={item.message}
                />
              </View>
            )
          }
          }
        />
      )
    } else {
      return <Text style={styles.reminderText}>No reminders</Text>
    }
  }
  render() {
    if (this.state.avatar) {
      return (
        <View style={styles.container}>
          {this.state.menuVisible ? <SlideMenu user={this.state.user} visible={this.state.menuVisible} toggleMenu={this.toggleMenu} navigation={this.props.navigation} /> : null}
          <View style={styles.headerContainer}>
            <Menu action={() => this.setState({ menuVisible: !this.state.menuVisible })} />
            <Text style={styles.header}>HOME</Text>
          </View>
          <View>
            <View style={[styles.welcomeContainer, { height: '25%' }]}>
              <View style={styles.row}>
                <Text style={styles.welcomeText}>HELLO, </Text><Text style={[styles.bold, { fontSize: 18 }]}>{this.state.user.name.toUpperCase()}!</Text>
              </View>
              <Text style={styles.welcomeText}>{moment().format('ddd, MMM D')}</Text>
              <View style={styles.row}>
                <Image
                  style={{ height: 20, width: 20, alignSelf: 'center' }}
                  source={require('./../assets/images/sun.png')}
                />
                <Text style={styles.welcomeText}>{Math.round(this.state.weather.temp)} °F</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'flex-start', height: '75%' }}>
              <View style={{ marginBottom: '15%', height: '30%' }}>
                <View style={styles.speechBubble}>
                  <Text style={styles.animalUpdate}>{this.state.avatar.message}</Text>
                </View>
                <Avatar avatar={this.state.avatar} />
              </View>
              <View style={{ marginBottom: '15%', height: '40%' }}>
                {this.renderRemindersChecklist()}
              </View>
            </View>
          </View>
        </View>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#7FD1FF',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'raleway-bold',
    marginTop: 20,
    marginLeft: 120,
  },
  welcomeContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 15,
    padding: 15,
  },
  animal: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 200,
    marginLeft: -120,
  },
  animalUpdate: {
    fontSize: 20,
    fontFamily: 'raleway-regular',
    position: 'absolute',
    textAlign: 'center',
  },
  speechBubble: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    right: 20,
    height: 110,
    width: 150,
    padding: 10,
    borderWidth: 3,
    borderColor: '#053867',
    borderRadius: 80,
  },
  checkItemsContainer: {
    marginTop: 150,
    alignSelf: 'auto',
    width: '100%',
    right: 20,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 70,
    borderColor: '#000',
    borderWidth: 1,
    zIndex: 2,
  },
  checkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: 'transparent',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'raleway-regular',
  },
  row: {
    flexDirection: 'row',
  },
  reminderText: {
    color: '#777777',
    fontSize: 20,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginTop: 10,
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
