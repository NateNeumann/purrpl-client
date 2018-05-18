import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo'

export default class Name extends Component {
  static navigationOptions = { header: null }

  state = {
    name: '',
  }

  handleName = (text) => {
    this.setState({ name: text })
  }

  render() {
    // const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3B0170', '#6A1EB0']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Image style={styles.gorilla} source={require('../assets/images/gorilla.png')} />
            <Text style={styles.nameText}>What&#39;s your <Text style={styles.bold}>name?</Text></Text>
            <TextInput style={styles.input} onChangeText={this.handleName} value={this.state.name} />
            <TouchableOpacity style={styles.button} >
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
  gorilla: {
    height: 100,
    width: 100,
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
