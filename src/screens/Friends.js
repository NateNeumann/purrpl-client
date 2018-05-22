import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import Menu from './../components/Menu'
import { fetchFriends } from './../actions/friends-actions'

export default class Friends extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      friends: null,
      user: this.props.navigation.state.params.user,
    }
  }

  componentWillMount = () => {
    const userId = this.props.navigation.state.params.user.id
    fetchFriends(userId).then((value) => {
      this.setState({ friends: value.map(item => Object.assign(item, { key: item.id })) })
    })
  }

  handleCheckbox = () => {
    this.setState({ checked: !this.state.checked })
  }

  renderFriends = () => {
    const { navigate } = this.props.navigation
    if (this.state.friends) {
      return (
        <FlatList
          data={this.state.friends}
          style={{ height: '100%' }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('IndividualFriend', { name: item.name, username: item.username, user: this.state.user })}
              >
                <View style={styles.friendContainer}>
                  <Image
                    style={styles.animal}
                    source={require('./../assets/images/plantcircle.png')}
                  />
                  <View>
                    <Text style={styles.bold}>{item.name.toUpperCase()}</Text>
                    <Text style={styles.userAt}>@{item.username}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }
          }
        />
      )
    } else {
      return (
        <View>
          <Text style={{
            marginTop: 10,
            textAlign: 'center',
            color: '#053867',
            fontSize: 22,
            }}
          >
            Loading
          </Text>
        </View>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Menu style={[{ marginTop: 50 }]} />
          <Text style={styles.header}>FRIENDS</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => navigate('AddFriends', { user: this.state.user })}>
            <Image
              style={{
                height: 25,
                width: 25,
                marginTop: 5,
                marginRight: 10,
              }}
              source={require('./../assets/images/white-plus.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          {this.renderFriends()}
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
  friendContainer: {
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
  nameText: {
    fontSize: 20,
    fontFamily: 'raleway-regular',
    marginTop: 20,
    width: 177,
    color: '#053867',
  },
  row: {
    flexDirection: 'row',
  },
  userAt: {
    fontFamily: 'raleway-semi-bold',
    paddingLeft: 20,
    color: '#333333',
  },
  bold: {
    fontFamily: 'raleway-bold',
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 20,
    color: '#053867',
  },
})
