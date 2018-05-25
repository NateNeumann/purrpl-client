import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Back from './../components/Back'

export default class About extends React.Component {
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
          <Text style={styles.header}>ABOUT</Text>
        </View>
        <Image style={{
 alignSelf: 'center', resizeMode: 'contain', height: 160, width: 160, marginTop: 50, marginBottom: 30,
}}
          source={require('./../assets/images/catbutt.png')}
        />
        <View style={styles.whiteContainer} >
          <Text style={styles.aboutText}><Text style={styles.bold}>purrpl</Text> is a <Text style={styles.bold}>self-care app</Text> that helps you track your wellness and encourage your friends.</Text>
        </View>
        <View style={styles.whiteContainer} >
          <Text style={styles.designText}>
            <Text style={styles.designedBold}>DESIGNED AND DEVELOPED BY: {'\n'}</Text>
        Amy Guan, Christina Lu,
        Nate Neumann,
        Ijemma Onwuzulike,
        Raul Rodriguez,
        Sofia Stanescu-Bellu
          </Text>
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
  whiteContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FFF',
  },
  aboutText: {
    fontSize: 18,
    fontFamily: 'raleway-regular',
    color: '#053867',
  },
  designText: {
    fontSize: 14,
    fontFamily: 'raleway-regular',
    color: '#053867',
  },

  row: {
    flexDirection: 'row',
  },
  bold: {
    fontFamily: 'raleway-bold',
    fontSize: 24,
    color: '#5B1997',
  },
  designedBold: {
    fontFamily: 'raleway-bold',
    fontSize: 16,
    color: '#5B1997',
  },
})
