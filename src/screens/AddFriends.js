import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Image } from 'react-native'
import { fetchSearchedUsers } from './../actions/user-actions'
import { addFriend, deleteFriend } from './../actions/friends-actions'
import Back from './../components/Back'

export default class AddFriends extends React.Component {
  static navigationOptions = { header: null }
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      searchedUsers: [],
      user: this.props.navigation.state.params.user,
    }
  }
  handleSearch = (text) => {
    this.setState({ searchText: text })
  }
  searchForUsers = () => {
    if (this.state.searchText) {
      fetchSearchedUsers(this.state.user.id, this.state.searchText).then((response) => {
        this.setState({ searchedUsers: response })
      })
    }
  }
  handleActionPress = (fn, userId, friendUsername) => {
    fn(userId, friendUsername).then((response) => {
      const newUsersResults = this.state.searchedUsers.map((user) => {
        if (user.id === response.id) {
          return response
        }
        return user
      })
      this.setState({ searchedUsers: newUsersResults })
    })
  }
  renderActionButton = (item) => {
    if (item.isFriend) {
      return (
        <TouchableOpacity onPress={() => this.handleActionPress(deleteFriend, this.state.user.id, item.username)}>
          <Image style={styles.actionIcon} source={require('./../assets/images/check.png')} />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => this.handleActionPress(addFriend, this.state.user.id, item.username)}>
          <Image style={styles.actionIcon} source={require('./../assets/images/plus.png')} />
        </TouchableOpacity>
      )
    }
  }
  renderSearchedUsers = () => {
    const { navigate } = this.props.navigation
    if (this.state.searchedUsers) {
      return (
        <FlatList
          data={this.state.searchedUsers}
          style={{ height: '100%' }}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{ width: '85%' }}
                  onPress={() => {
                    if (item.isFriend) navigate('IndividualFriend', { name: item.name, username: item.username, user: this.state.user })
                  }}
                >
                  <View style={styles.friendContainer}>
                    <Image
                      style={styles.animal}
                      source={require('./../assets/images/plantcircle.png')}
                    />
                    <View style={{ alignItems: 'flex-start' }}>
                      <Text style={styles.bold}>{item.name.toUpperCase()}</Text>
                      <Text style={styles.userAt}>@{item.username}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {this.renderActionButton(item)}
              </View>
            )
          }
          }
        />
      )
    } else {
      return <Text>No users found :(</Text>
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Back navigation={this.props.navigation} />
          <Text style={styles.header}>ADD FRIENDS</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Search for Friends"
            onChangeText={text => this.handleSearch(text)}
            tintColor="#053867"
            value={this.state.searchText}
          />
          <TouchableOpacity onPress={this.searchForUsers}>
            <Image
              style={styles.searchIcon}
              source={require('./../assets/images/search.png')}
            />
          </TouchableOpacity>
        </View>
        {this.renderSearchedUsers()}
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    alignSelf: 'center',
    width: '80%',
    fontSize: 22,
    color: '#053867',
    marginTop: 20,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#053867',
  },
  searchIcon: {
    height: 30,
    width: 30,
    marginTop: 20,
    marginLeft: 10,
  },
  actionIcon: {
    height: 40,
    width: 40,
    marginRight: 15,
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
