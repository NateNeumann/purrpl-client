import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Image } from 'react-native'
import { fetchSearchedUsers } from './../actions/user-actions'
import { addFriend, deleteFriend } from './../actions/friends-actions'
import Back from './../components/Back'
import Avatar from './../components/Avatar'
import { scaleHeight, scaleWidth, lesserScalar } from './../assets/scaling'

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
  handleActionPress = (fn, userId, friendUsername, action) => {
    fn(userId, friendUsername, action).then((response) => {
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
        <TouchableOpacity onPress={() => this.handleActionPress(deleteFriend, this.state.user.id, item.username, '')}>
          <Image style={styles.actionIcon} source={require('./../assets/images/check.png')} />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => this.handleActionPress(addFriend, this.state.user.id, item.username, 'friend')}>
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
                    <Avatar height={scaleHeight(40)} width={scaleWidth(40)} id={item.id} />
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
            style={styles.searchBar}
            selectionColor="#053867"
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
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#EF8E8E',
    height: scaleHeight(80),
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    fontSize: lesserScalar(24),
    marginTop: scaleHeight(15),
    marginLeft: scaleWidth(65),
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    alignSelf: 'center',
    width: '80%',
    fontSize: lesserScalar(22),
    color: '#053867',
    marginTop: scaleHeight(20),
    paddingBottom: scaleHeight(5),
    borderBottomWidth: 2,
    borderBottomColor: '#053867',
  },
  searchIcon: {
    height: scaleHeight(30),
    width: scaleWidth(30),
    marginTop: scaleHeight(20),
    marginLeft: scaleWidth(10),
  },
  actionIcon: {
    height: scaleHeight(40),
    width: scaleWidth(40),
    marginRight: scaleWidth(15),
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
