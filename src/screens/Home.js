import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import moment from 'moment'
import { fetchDailyReminders } from './../actions/reminder-actions'
import getWeather from './../actions/weather-actions'
import Checkbox from './../components/Checkbox'
import Menu from './../components/Menu'
import SlideMenu from './../components/SlideMenu'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuVisible: false,
      weather: {},
      user: this.props.navigation.state.params.user,
      reminders: [],
    }
  }
  componentDidMount = () => {
    // lat and long for Hanover
    getWeather(43.7005122, -72.2839756).then((response) => {
      this.setState({ weather: response })
    })
    fetchDailyReminders(this.state.user.id).then((response) => {
      this.setState({ reminders: response.reminders })
    })
  }
  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible })
  }
  renderRemindersChecklist = () => {
    console.log('here', this.state.reminders)
    if (this.state.reminders) {
      return (
        <FlatList
          data={this.state.reminders}
          renderItem={({ item }) => {
            return (
              <View style={styles.checkContainer}>
                <Checkbox
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
      return null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.menuVisible ? <SlideMenu user={this.state.user} visible={this.state.menuVisible} toggleMenu={this.toggleMenu} navigation={this.props.navigation} /> : null }
        <View style={styles.headerContainer}>
          <Menu action={() => this.setState({ menuVisible: !this.state.menuVisible })} />
          <Text style={styles.header}>HOME</Text>
        </View>
        <View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Text style={styles.welcomeText}>Hello, </Text><Text style={[styles.bold, { fontSize: 18 }]}>{this.state.user.name.toUpperCase()}!</Text>
            </View>
            <Text style={styles.welcomeText}>{moment().format('ddd, MMM D')}</Text>
            <Text style={styles.welcomeText}>{Math.round(this.state.weather.temp)} F</Text>
          </View>
          <View>
            <View style={styles.speechBubble}>
              <Text style={[styles.animalUpdate, { textAlign: 'right' }]}>I&#39;m thirsty</Text>
            </View>
            <Image
              style={styles.animal}
              source={require('./../assets/images/plant.png')}
            />
          </View>
          <View style={styles.checkItemsContainer}>
            {this.renderRemindersChecklist()}
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
    alignSelf: 'flex-start',
    marginLeft: 10,
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
    right: 20,
    height: 100,
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
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'raleway-regular',
  },
  row: {
    flexDirection: 'row',
  },
  reminderText: {
    fontFamily: 'raleway-regular',
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
