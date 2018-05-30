import React from 'react'
import { StyleSheet, Text, View, Image, DeviceEventEmitter } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import SelectTime from './../components/SelectTime'
import Back from './../components/Back'
import LoadingScreen from './../components/LoadingScreen'
import { fetchReminder, updateActive } from './../actions/reminder-actions'
import { scaleHeight } from './../assets/scaling'

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
    backgroundColor: '#FFF',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#FFC47F',
    height: scaleHeight(80),
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(24),
    fontFamily: 'Avenir Next',
  },
  toggleContainer: {
    marginLeft: responsiveWidth(5),
    marginTop: responsiveWidth(7),
    alignSelf: 'center',
  },
  optionsText: {
    color: '#053867',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveWidth(5),
    alignSelf: 'flex-start',
  },
  timesText: {
    color: '#575757',
    fontSize: responsiveFontSize(3.5),
    marginTop: responsiveWidth(5),
    marginLeft: responsiveWidth(2),
    fontFamily: 'raleway-regular',
    alignSelf: 'flex-start',
  },
  activeContainer: {
    flexDirection: 'row',
  },
  scrollHeight: {
    height: responsiveHeight(40),
    width: responsiveWidth(70),
    marginTop: responsiveWidth(5),
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
  reminderText: {
    fontSize: 20,
    fontFamily: 'raleway-regular',
    marginTop: 20,
    color: '#575757',
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
