import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { LinearGradient } from 'expo'
import Back from './../components/Back'

export default class Name extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }
  }

  handleName = (text) => {
    this.setState({
      name: text.replace(/[^A-Za-z]/, ''),
    });
  }

  submitName = () => {
    if (this.state.name !== '') {
      this.props.navigation.navigate('Username', { name: this.state.name })
    } else {
      Alert.alert('Name Field Empty', 'Please enter a valid name.')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#420A75', '#5B1997']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Image style={styles.cat} source={require('../assets/images/light_purple_cat.png')} />
            <Text style={styles.nameText}>What&#39;s your <Text style={styles.bold}>name?</Text></Text>
            <TextInput style={styles.input} onChangeText={this.handleName} value={this.state.name} />
            <TouchableOpacity style={styles.button} onPress={this.submitName}>
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
  content: {
    alignItems: 'center',
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
