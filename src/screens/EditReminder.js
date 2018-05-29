import React from 'react'
import { StyleSheet, Text, View, Image, DeviceEventEmitter } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import SelectTime from './../components/SelectTime'
import Back from './../components/Back'
import LoadingScreen from './../components/LoadingScreen'
import { fetchReminder, updateActive } from './../actions/reminder-actions'

export default class EditReminder extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.navigation.state.params.user,
      type: this.props.navigation.state.params.type,
      reminder: {},
      active: null,
    }
  }

  componentDidMount = () => {
    fetchReminder(this.state.user.id, this.state.type).then((response) => {
      this.setState({ reminder: response })
      this.setState({ active: response.active })
    })
  }

  handleToggle = (status) => {
    // save to database
    updateActive(this.state.reminder.id, status)
    DeviceEventEmitter.emit('updatedActive')
    return !status
  }

  render() {
    const image = this.props.navigation.state.params.image
    const text = this.props.navigation.state.params.text
    if (this.state.active != null && this.state.reminder) {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Back navigation={this.props.navigation} />
            <Text style={styles.header}>REMINDER</Text>
          </View>
          <View>
            <View style={styles.welcomeContainer}>
              <View style={styles.row}>
                <Image
                  style={styles.animal}
                  source={image}
                />
                <Text style={styles.reminderText}>{text}</Text>
              </View>
            </View>
            <View style={styles.optionsContainer}>
              <Text style={styles.timesText}>active:</Text>
              <View style={styles.activeContainer}>
                <ToggleSwitch
                  isOn={this.state.active}
                  onColor="#A0D55E"
                  offColor="#B58853"
                  size="large"
                  onToggle={this.handleToggle}
                />
              </View>
              <Text style={styles.timesText}>times:</Text>
              <View style={styles.scrollHeight}>
                <SelectTime user={this.state.user} reminder={this.state.reminder} active={this.state.active} times={this.state.reminder.times} />
              </View>
            </View>
          </View>
        </View>
      )
    } else {
      return <LoadingScreen />
    }
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
    marginTop: 30,
  },
  welcomeContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  timesContainer: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 20,
    width: 260,
  },
  animal: {
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 0,
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
  column: {
    flexDirection: 'column',
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
