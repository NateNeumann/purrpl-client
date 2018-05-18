import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import fetchUsers from './../actions/user-actions'

export default class AddFriends extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
    }
  }
  handleSearch = (text) => {
    this.setState({ searchText: text })
    fetchUsers(text).then((response) => {
      console.log('out here', response)
    })
  }
  render() {
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="Search for Friends"
          onChangeText={text => this.handleSearch(text)}
          value={this.state.searchText}
          style={styles.searchBar}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar: {
    alignSelf: 'center',
    width: '90%',
    fontSize: 22,
    color: '#053867',
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#053867',
  },
})
