import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import Back from './../components/Back'
import Dropdown from './../components/Dropdown'
import LoadingScreen from './../components/LoadingScreen'
import { toggleNotifications, fetchUser } from './../actions/user-actions'
import { scaleHeight, scaleWidth, lesserScalar } from './../assets/scaling'

export default class Settings extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      userID: this.props.navigation.state.params.id,
      user: null,
      active: null,
    }
  }
  componentWillMount = () => {
    fetchUser(this.state.userID).then((user) => {
      this.setState({ user })
      this.setState({ active: user.notifications.active })
    })
  }
  handleToggle = (status) => {
    // save to database
    toggleNotifications(this.state.user.id, status)
    return !status
  }
  render() {
    const { navigate } = this.props.navigation
    if (this.state.user && this.state.active !== null) {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Back navigation={this.props.navigation} />
            <Text style={styles.header}>SETTINGS</Text>
          </View>
          <Image style={{
            alignSelf: 'center', resizeMode: 'contain', height: 160, width: 160, marginTop: 50, marginBottom: 30,
          }}
            source={require('./../assets/images/catbutt.png')}
          />
          <View style={styles.whiteContainer}>
            <ToggleSwitch
              isOn={this.state.active}
              onColor="#7FD1FF"
              offColor="#DBDDDE"
              size="large"
              label="PUSH NOTIFICATIONS"
              labelStyle={{ fontSize: 20, fontFamily: 'raleway-regular', color: '#053867' }}
              onToggle={this.handleToggle}
            />;
          </View>
          <View style={styles.whiteContainer} >
            <Text style={styles.discoverabilityText}>DISCOVERABILITY</Text>
            <View style={styles.dropdownSize}>
              <Dropdown user={this.state.user} />
            </View>
          </View>
          <View style={styles.deleteContainer}>
            <TouchableOpacity
              style={styles.aboutButton}
              onPress={() => {
                navigate('About')
              }}
            >
              <Text style={{ fontSize: 18, color: '#FFF', textAlign: 'center' }}>ABOUT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
            >
              <Text style={{ fontSize: 18, color: '#FFF', textAlign: 'center' }}>DELETE ACCOUNT</Text>
            </TouchableOpacity>
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
    backgroundColor: '#F1EAFF',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#5B1997',
    height: scaleHeight(80),
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    fontSize: lesserScalar(24),
    marginTop: scaleHeight(15),
    marginLeft: scaleWidth(90),
  },
  dropdownSize: {
    width: 110,
    marginLeft: 40,
  },
  dropdown2Size: {
    width: 110,
    marginLeft: 135,
  },
  whiteContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  settingsText: {
    fontSize: 20,
    fontFamily: 'raleway-regular',
    color: '#053867',
  },
  discoverabilityText: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'raleway-regular',
    color: '#053867',
  },
  row: {
    flexDirection: 'row',
  },
  bold: {
    fontFamily: 'raleway-bold',
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 20,
    color: '#053867',
  },
  deleteContainer: {
    width: 200,
    alignSelf: 'center',
    marginTop: 40,
  },
  aboutButton: {
    alignSelf: 'center',
    backgroundColor: '#5EC0D5',
    borderRadius: 5,
    paddingBottom: 15,
    paddingTop: 15,
    width: 220,
    marginTop: -10,
  },
  deleteButton: {
    alignSelf: 'center',
    backgroundColor: '#D55E5E',
    borderRadius: 5,
    marginTop: 20,
    paddingBottom: 15,
    paddingTop: 15,
    width: 220,
  },

})
