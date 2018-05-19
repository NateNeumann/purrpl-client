import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Image } from 'react-native'
import { fetchSearchedUsers } from './../actions/user-actions'

export default class AddFriends extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      searchedUsers: [],
    }
  }
  handleSearch = (text) => {
    this.setState({ searchText: text })
  }
  searchForUsers = () => {
    if (this.state.searchText) {
      fetchSearchedUsers(this.state.searchText).then((response) => {
        this.setState({ searchedUsers: response })
      })
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
              <TouchableOpacity
                onPress={() => navigate('IndividualFriend', { name: item.name, username: item.username })}
              >
                <View style={styles.friendContainer}>
                  <Image
                    style={styles.animal}
                    source={require('./../assets/images/plantcircle.png')}
                  />
                  <Text style={styles.bold}>{item.name.toUpperCase()}</Text>
                  <Text>@{item.username}</Text>
                </View>
              </TouchableOpacity>
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
        <View style={styles.searchBarContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Search for Friends"
            onChangeText={text => this.handleSearch(text)}
            value={this.state.searchText}
            style={styles.searchBar}
          />
          <TouchableOpacity onPress={this.searchForUsers}>
            <Image
              style={styles.searchIcon}
              source={require('./../assets/images/search.png')}
            />
            {/* <Text>Search</Text> */}
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
  friendContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  animal: {
    alignSelf: 'flex-start',
  },
  bold: {
    fontFamily: 'raleway-bold',
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 20,
    color: '#053867',
  },
})
