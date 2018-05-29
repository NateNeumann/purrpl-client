import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions, DeviceEventEmitter } from 'react-native'
import moment from 'moment'
import { fetchDailyReminders } from './../actions/reminder-actions'
import getWeather from './../actions/weather-actions'
import Checkbox from './../components/Checkbox'
import Menu from './../components/Menu'
import SlideMenu from './../components/SlideMenu'
import Avatar from './../components/Avatar'
import { scaleHeight, scaleWidth, lesserScalar } from './../assets/scaling'

const { width } = Dimensions.get('window')

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
      weather: {},
      user: this.props.navigation.state.params.user,
      speechBubble: '',
      reminders: [],
    }
  }

  componentDidMount = () => {
    DeviceEventEmitter.addListener('updatedReminders', (e) => {
      this.updateReminders()
    });

    // lat and long for Hanover
    getWeather(43.7005122, -72.2839756).then((response) => {
      this.setState({ weather: response })
    })
    this.updateReminders()
  }

  handleSpeechBubble = (text) => {
    this.setState({ speechBubble: text })
  }

  updateReminders = () => {
    fetchDailyReminders(this.state.user.id).then((response) => {
      this.setState({ reminders: response })
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
              // Not sure why this is width * .3 and not just 30%? -Nate
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
                <Text style={styles.animalUpdate}>{this.state.speechBubble}</Text>
              </View>
              <View style={{ position: 'absolute', left: width * 0.05 }}>
                <Avatar height={150} width={150} avatar={this.state.avatar} id={this.state.user.id} handleSpeechBubble={this.handleSpeechBubble} />
              </View>
            </View>
            <View style={{ marginBottom: '15%', height: '40%' }}>
              {this.renderRemindersChecklist()}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#7FD1FF',
    height: scaleHeight(80),
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: lesserScalar(24),
    fontFamily: 'raleway-bold',
    marginTop: scaleHeight(20),
    marginLeft: scaleWidth(120),
  },
  welcomeContainer: {
    alignItems: 'flex-end',
    marginTop: scaleHeight(5),
    marginRight: scaleWidth(15),
    padding: lesserScalar(15),
  },
  animal: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: scaleWidth(200),
    marginLeft: scaleWidth(-120),
  },
  animalUpdate: {
    fontSize: lesserScalar(20),
    fontFamily: 'raleway-regular',
    position: 'absolute',
    textAlign: 'center',
  },
  speechBubble: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleHeight(25),
    backgroundColor: 'transparent',
    borderRadius: lesserScalar(20),
    marginTop: scaleHeight(-30),
    right: scaleWidth(20),
    height: scaleHeight(110),
    width: scaleWidth(150),
    padding: lesserScalar(10),
    borderWidth: 3,
    borderColor: '#053867',
    borderRadius: lesserScalar(80),
  },
  checkItemsContainer: {
    marginTop: scaleHeight(150),
    alignSelf: 'auto',
    width: '100%',
    right: scaleWidth(20),
    height: scaleHeight(100),
    backgroundColor: '#FFFFFF',
    borderRadius: lesserScalar(70),
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
    fontSize: lesserScalar(18),
    marginBottom: scaleHeight(10),
    fontFamily: 'raleway-regular',
  },
  row: {
    flexDirection: 'row',
  },
  reminderText: {
    color: '#777777',
    fontSize: lesserScalar(20),
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginTop: scaleHeight(10),
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
