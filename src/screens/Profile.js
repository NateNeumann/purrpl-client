import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { AirbnbRating } from 'react-native-ratings';
import Back from './../components/Back'
import Avatar from './../components/Avatar'
import LoadingScreen from './../components/LoadingScreen'
import { getFormattedNotifications } from './../actions/user-actions'
import { getFeelingToday, addFeelingToday } from '../actions/progress-actions'
import { scaleHeight, scaleWidth, lesserScalar } from './../assets/scaling'

export default class Profile extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.navigation.state.params.user,
      notifications: null,
    }
  }

  componentWillMount = () => {
    getFeelingToday(this.state.user.id).then((progress) => {
      const last = progress.feelingToday.length > 0 ? progress.feelingToday[progress.feelingToday.length - 1] : 0
      const today = new Date();
      if (progress.date) {
        const old = new Date(progress.date)
        if (old.getDate() === today.getDate()) {
          this.setState({ rating: last })
        } else {
          this.setState({ rating: 0 })
        }
      } else {
        this.setState({ rating: 0 })
      }
    })
    getFormattedNotifications(this.state.user.id).then((response) => {
      this.setState({ notifications: response })
    })
  }

  generateKey = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`
  }

  ratingCompleted = (rating) => {
    addFeelingToday(this.state.user.id, rating)
  }

  renderNotifications = () => {
    const { navigate } = this.props.navigation
    if (this.state.notifications && this.state.notifications.length) {
      return (
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
                    <Avatar height={scaleHeight(40)} width={scaleWidth(40)} id={item.id} />
                  </View>
                  <Text style={styles.notifText}><Text style={styles.bold}>{item.message}</Text></Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )
    } else {
      return <Text style={styles.reminderText}>No notifications</Text>
    }
  }

  render() {
    if (this.state.notifications && this.state.rating != null) {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Back navigation={this.props.navigation} />
            <Text style={styles.header}>PROFILE</Text>
          </View>
          <View style={styles.profileContainer}>
            <Avatar height={scaleHeight(110)} width={scaleWidth(110)} id={this.state.user.id} />
          </View>
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
          {this.renderNotifications()}
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
    height: scaleHeight(80),
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    fontSize: lesserScalar(24),
    marginTop: scaleHeight(15),
    marginLeft: scaleWidth(105),
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
    marginLeft: '-18%',
  },
  notifImage: {
    resizeMode: 'contain',
    height: '100%',
    marginLeft: '-21%',
    marginTop: '-1%',
  },
  profileContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: scaleWidth(160),
    height: scaleHeight(160),
    margin: scaleHeight(20),
    borderRadius: scaleHeight(80),
    backgroundColor: '#F1EAFF',
  },
  reminderText: {
    color: '#777777',
    fontSize: lesserScalar(20),
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginTop: scaleHeight(10),
  },
})
