import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { LinearGradient } from 'expo'
import Back from './../components/Back'

export default class Username extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      username: '',
    }
  }

  handleUsername = (text) => {
    this.setState({ username: text })
  }

  submitUsername = () => {
    if (this.state.username !== '') {
      this.props.navigation.navigate('Password', { name: this.props.navigation.state.params.name, username: this.state.username })
    } else {
      Alert.alert('Username Field Empty', 'Please enter a valid username.')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#420A75', '#5B1997']}
          style={styles.gradient}
        >
          <View style={styles.backView}>
            <Back style={styles.backButton} navigation={this.props.navigation} />
          </View>
          <View style={styles.content}>
            <Image style={styles.cat} source={require('../assets/images/light_purple_cat.png')} />
            <Text style={styles.nameText}>Create your <Text style={styles.bold}>username:</Text></Text>
            <TextInput style={styles.input} autoCapitalize="none" onChangeText={this.handleUsername} value={this.state.username} />
            <TouchableOpacity style={styles.button} onPress={this.submitUsername}>
              <Image style={styles.arrow} source={require('../assets/images/purple_arrow.png')} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  backView: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  backButton: {
    alignSelf: 'flex-end',
  },
  content: {
    alignItems: 'center',
    flex: 10,
    justifyContent: 'center',
  },
  cat: {
    height: 115,
    width: 107,
  },
  nameText: {
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: 24,
    marginTop: 60,
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
  input: {
    borderColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
    fontFamily: 'raleway-medium',
    fontSize: 24,
    height: 40,
    margin: 20,
    textAlign: 'center',
    width: 275,
  },
  arrow: {
    height: 60,
    marginTop: 30,
    width: 60,
  },
});
