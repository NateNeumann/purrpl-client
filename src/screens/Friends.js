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
    }
  }
  
  componentWillMount = () => {
    fetchFriends('5afe44ee30dd09960685afd5').then((value) => {
      console.log(value)
      this.setState({ friends: value })
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
          // data={[
          //   { key: 'a', name: 'Nate Neumann' },
          //   { key: 'b', name: 'Amy Guan' },
          //   { key: 'c', name: 'Christina Lu' },
          //   { key: 'd', name: 'Sofia Stanescu-Bellu' },
          //   { key: 'e', name: 'Raul Rodriguez' },
          // ]}
          data={this.state.friends}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('IndividualFriend', { name: item.name })}
              >
                <View style={styles.friendContainer}>
                  <Image
                    style={styles.animal}
                    source={require('./../assets/images/plantcircle.png')}
                  />
                  <Text style={styles.bold}>{item.name.toUpperCase()}</Text>
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
          <Text>Loading</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Menu style={[{ marginTop: 50 }]} />
          <Text style={styles.header}>FRIENDS</Text>
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
  bold: {
    fontFamily: 'raleway-bold',
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 20,
    color: '#053867',
  },
})
