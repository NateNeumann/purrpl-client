import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { AirbnbRating } from 'react-native-ratings';
import Back from './../components/Back'
import Avatar from './../components/Avatar'
import LoadingScreen from './../components/LoadingScreen'
import { getFormattedNotifications } from './../actions/user-actions'
import { getFeelingToday, addFeelingToday } from '../actions/progress-actions'

export default class Profile extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.navigation.state.params.user,
      notifications: null,
      rating: null,
    }
    this.ratingCompleted = this.ratingCompleted.bind(this)
  }

  componentWillMount = () => {
    getFeelingToday(this.state.user.id).then((progress) => {
      const last = progress.feelingToday[progress.feelingToday.length - 1]
      const today = new Date();
      if (progress.date === today.getDate()) {
        this.setState({ rating: last })
      } else {
        this.setState({ rating: 0 })
      }
    })
  }
  componentWillMount = () => {
    getFormattedNotifications(this.state.user.id).then((response) => {
      this.setState({ notifications: response })
    })
  }

  generateKey = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`
  }

  handleCheckbox = () => {
    this.setState({ checked: !this.state.checked })
  }

  ratingCompleted(rating) {
    addFeelingToday(this.state.user.id, rating)
  }

  render() {
    const { navigate } = this.props.navigation
    if (this.state.notifications && this.state.rating) {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Back navigation={this.props.navigation} />
            <Text style={styles.header}>PROFILE</Text>
          </View>
          <Image style={{
            alignSelf: 'center', height: 160, width: 160, marginTop: '6%', marginBottom: '5%',
          }}
            source={require('./../assets/images/sittingcat.png')}
          />
          <Text style={styles.nameText}>{this.state.user.name}</Text>
          <Text style={styles.addedText}>How are you feeling today?</Text>
          <AirbnbRating
            count={5}
            reviews={['Bad 😿', 'Not great 😾', 'Eh, fine 🐱', 'Grr-eat 😺', 'Purr-fect! 😸']}
            defaultRating={this.state.rating}
            size={30}
            onFinishRating={this.ratingCompleted}
          />
          <Text style={styles.notifTitle}>NOTIFICATIONS</Text>
          <FlatList
            style={styles.notifContainer}
            data={this.state.notifications.map((item) => { return Object.assign(item, { key: this.generateKey() }) })}
            renderItem={({ item, separators }) => {
              return (
                <TouchableOpacity
                  onPress={item.action === 'friend' ? () => navigate('Notification', { user: this.state.user, item }) : () => { }}
                >
                  <View style={styles.notifBlock}>
                    <View style={{ marginLeft: 40 }}>
                      <Avatar height={40} width={40} id={item.id} />
                    </View>
                    <Text style={styles.notifText}><Text style={styles.bold}>{item.message}</Text></Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )
    } else {
      return <LoadingScreen />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#7FD1FF',
    height: '11%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '5%',
    marginLeft: '26%',
  },
  nameText: {
    color: '#053867',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'raleway-bold',
  },
  notifTitle: {
    color: '#053867',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'raleway-bold',
    marginTop: '9%',
  },
  addedText: {
    color: '#053867',
    fontSize: 20,
    marginTop: '2%',
    alignSelf: 'center',
    fontFamily: 'raleway-regular',
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
    marginLeft: '20%',
  },
  notifContainer: {
    width: '85%',
    alignSelf: 'center',
  },
  notifBlock: {
    width: '100%',
    height: 60,
    padding: '5%',
    backgroundColor: '#D5F2FF',
    borderRadius: 10,
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  notifText: {
    color: '#053867',
    fontSize: 16,
    fontFamily: 'raleway-regular',
  },
})
