import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { AirbnbRating } from 'react-native-ratings';
import Back from './../components/Back'
import { getFormattedNotifications } from './../actions/user-actions'

// function ratingCompleted(rating) {
//   console.log(`Rating is: ${rating}`)
// }

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
    getFormattedNotifications(this.state.user.id).then((response) => {
      console.log(response)
      this.setState({ notifications: response })
    })
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
          defaultRating={0}
          size={30}
        />
        <Text style={styles.notifTitle}>NOTIFICATIONS</Text>
        <FlatList
          style={styles.notifContainer}
          data={this.state.notifications}
          renderItem={({ item, separators }) => {
            return (
              <TouchableOpacity
                onPress={item.action === 'friend' ? () => navigate('Notification', { user: this.state.user, item }) : () => {}}
              >
                <View style={styles.notifBlock}>
                  <Image style={styles.notifImage}
                    source={require('./../assets/images/sittingcat.png')}
                  />
                  <Text style={styles.notifText}><Text style={styles.bold}>{item.message}</Text></Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

    )
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
    maxWidth: '100%',
    minWidth: '100%',
    padding: '5%',
    backgroundColor: '#D5F2FF',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  notifText: {
    color: '#053867',
    fontSize: 18,
    fontFamily: 'raleway-regular',
    marginLeft: '-18%',
  },
  notifImage: {
    resizeMode: 'contain',
    height: '75%',
    marginLeft: '-21%',
  },
})
