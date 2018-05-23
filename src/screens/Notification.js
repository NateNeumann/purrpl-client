import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Button from 'apsl-react-native-button'
import Back from './../components/Back'

export default class Notification extends React.Component {
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
          <Text style={styles.header}>NOTIFICATION</Text>
        </View>
        <Image style={{
 alignSelf: 'center', height: 160, width: 160, marginTop: 50, marginBottom: 50,
}}
          source={require('./../assets/images/plantcircle.png')}
        />
        <Text style={styles.nameText}>SOFIA STANESCU-BELLU</Text>
        <Text style={styles.addedText}> added you</Text>
        <View style={styles.deleteContainer}>
          <Button style={{ backgroundColor: '#A0D55E', borderColor: '#A0D55E' }}
            textStyle={{
 fontSize: 20, color: '#FFF', fontWeight: 'bold', fontFamily: 'raleway-bold',
}}
          >
            ACCEPT
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
    backgroundColor: '#7FD1FF',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 70,
  },
  nameText: {
    color: '#053867',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'raleway-bold',
  },
  addedText: {
    color: '#053867',
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'raleway-regular',
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
    marginTop: 80,
  },
})
