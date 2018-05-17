import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Menu from './../components/Menu'

export default class Friends extends React.Component {
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
    console.log(this.state.checked)
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Menu style={[{ marginTop: 50 }]} />
          <Text style={styles.header}>FRIENDS</Text>
        </View>
        <View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/plantcircle.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>NATE</Text>
              <Text style={styles.reminderText}> NEUMANN</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/plantcircle.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>AMY</Text>
              <Text style={styles.reminderText}> GUAN</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/plantcircle.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>CHRISTINA</Text>
              <Text style={styles.reminderText}> LU</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/plantcircle.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>SOFIA </Text>
              <Text style={styles.reminderText}>STANESCU-BELLU</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Image
                style={styles.animal}
                source={require('./../assets/images/plantcircle.png')}
              />
              <Text style={[styles.bold, { fontSize: 20, paddingLeft: 20, marginTop: 20 }]}>RAUL</Text>
              <Text style={styles.reminderText}> RODRIGUEZ</Text>
            </View>
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
    backgroundColor: '#EF8E8E',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 105,
  },
  welcomeContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  animal: {
    alignSelf: 'flex-start',
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
    width: 177,
  },
  row: {
    flexDirection: 'row',
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
