import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import Button from 'apsl-react-native-button'
import Back from './../components/Back'
import FriendAction from './../components/FriendAction'
import Dropdown from './../components/Dropdown';
import Dropdown2 from './../components/Dropdown2';

export default class Settings extends React.Component {
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
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Back navigation={this.props.navigation} />
          <Text style={styles.header}>SETTINGS</Text>
        </View>
        <Image style={{
 alignSelf: 'center', height: 160, width: 160, marginTop: 50, marginBottom: 50,
}}
          source={require('./../assets/images/duck.png')}
        />
        <View style={styles.whiteContainer}>
          <ToggleSwitch
            isOn={false}
            onColor="#7FD1FF"
            offColor="#DBDDDE"
            size="large"
            label="PUSH NOTIFICATIONS"
            labelStyle={{ fontSize: 20, fontFamily: 'raleway-regular', color: '#053867' }}
            onToggle={isOn => console.log('changed to : ', isOn)}
          />;
        </View>
        <View style={styles.whiteContainer} >
          <Text style={styles.discoverabilityText}>DISCOVERABILITY</Text>
          <View style={styles.dropdownSize}>
            <Dropdown />
          </View>
        </View>
        <View style={styles.whiteContainer} >
          <Text style={styles.discoverabilityText}>AVATAR</Text>
          <View style={styles.dropdown2Size}>
            <Dropdown2 />
          </View>
        </View>
        <View style={styles.deleteContainer}>
          <Button style={{ backgroundColor: '#D55E5E', borderColor: '#D55E5E' }} textStyle={{ fontSize: 18, color: '#FFF' }}>
          DELETE ACCOUNT
          </Button>
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
    backgroundColor: '#766992',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 105,
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
    marginTop: 20,
  },
})
