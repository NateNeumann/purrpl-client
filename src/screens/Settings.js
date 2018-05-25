import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import Back from './../components/Back'
import Dropdown from './../components/Dropdown';

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
    const { navigate } = this.props.navigation
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
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1EAFF',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#5B1997',
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
    fontFamily: 'raleway-bold',
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
