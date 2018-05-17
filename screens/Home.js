import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import Checkbox from './../components/Checkbox'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>HOME</Text>
        </View>
        <View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Text style={styles.welcomeText}>Hello, </Text><Text style={[styles.bold, { fontSize: 18 }]}>IJEMMA!</Text>
            </View>
            <Text style={styles.welcomeText}>Sat, May 12</Text>
            <Text style={styles.welcomeText}>72 F</Text>
          </View>
          <View>
            <View style={styles.speechBubble}>
              <Text style={[styles.animalUpdate, { textAlign: 'right' }]}>I'm thirsty</Text>
            </View>
            <Image
              style={styles.animal}
              source={require('./../assets/images/plant.png')}
            />
          </View>
          <View style={styles.checkItemsContainer}>
            <FlatList
              data={[
                { key: 'a', time: '8 AM', reminder: 'Apply sunscreen' },
                { key: 'b', time: '9 AM', reminder: 'Drink water' },
                { key: 'c', time: '11 AM', reminder: 'Take meds' },
              ]}
              renderItem={({ item }) => {
                return (
                  <View style={styles.checkContainer}>
                    <Checkbox
                      time={item.time}
                      reminder={item.reminder}
                      />
                  </View>
                )
              }
            }
            />
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
    backgroundColor: '#7FD1FF',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'raleway-bold',
  },
  welcomeContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 15,
  },
  animal: {
    alignSelf: 'flex-start',
    marginLeft: 10,
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
    right: 20,
    height: 100,
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
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'raleway-regular',
  },
  row: {
    flexDirection: 'row',
  },
  reminderText: {
    fontFamily: 'raleway-regular',
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
