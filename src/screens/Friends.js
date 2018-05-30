import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'
import Menu from './../components/Menu'
import SlideMenu from './../components/SlideMenu'
import Avatar from './../components/Avatar'
import { fetchFriends } from './../actions/friends-actions'
import { scaleHeight, scaleWidth, lesserScalar } from './../assets/scaling'

export default class Friends extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      menuVisible: false,
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
  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible })
  }

  renderFriends = () => {
    const { navigate } = this.props.navigation
    if (this.state.friends && this.state.friends.length > 0) {
      return (
        <FlatList
          data={this.state.friends}
          style={{ height: '100%' }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('IndividualFriend', {
                  id: item.id,
                  name: item.name,
                  username: item.username,
                  user: this.state.user,
                })}
              >
                <View style={styles.friendContainer}>
                  <View
                    style={{
                      backgroundColor: '#F1EAFF',
                      height: scaleWidth(80),
                      width: scaleWidth(80),
                      borderRadius: scaleHeight(40),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar height={scaleWidth(60)} width={scaleWidth(60)} id={item.id} />
                  </View>
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
    } else if (this.state.friends && this.state.friends.length === 0) {
      return (
        <View>
          <Image
            style={{
              alignSelf: 'center',
              height: scaleHeight(100),
              width: scaleHeight(100),
              marginTop: scaleHeight(20),
              resizeMode: 'contain',
            }}
            source={require('./../assets/images/catbutt.png')}
          />
          <Text
            style={{
              marginTop: scaleHeight(20),
              textAlign: 'center',
              fontFamily: 'raleway-semi-bold',
              fontSize: 20,
              color: '#777777',
            }}
          >
            Nothing to see here
          </Text>
        </View>
      )
    } else {
      return (
        <View>
          <Image
            style={{
              alignSelf: 'center',
              marginTop: scaleHeight(60),
              resizeMode: 'contain',
              height: scaleHeight(50),
            }}
            source={require('./../assets/images/light_purple_cat.png')}
          />
          <Progress.Bar
            style={{
              alignSelf: 'center',
              marginTop: scaleHeight(20),
            }}
            unfilledColor="#F1EAFF"
            color="#5B1997"
            borderColor="#F1EAFF"
            size={lesserScalar(50)}
            indeterminate
          />
        </View>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        {this.state.menuVisible ? <SlideMenu user={this.state.user} visible={this.state.menuVisible} toggleMenu={this.toggleMenu} navigation={this.props.navigation} /> : null}
        <View style={styles.headerContainer}>
          <Menu action={this.toggleMenu} />
          <Text style={styles.header}>FRIENDS</Text>
          <TouchableOpacity style={{ position: 'absolute', right: scaleWidth(10) }} onPress={() => navigate('AddFriends', { user: this.state.user })}>
            <Image
              style={{
                height: scaleHeight(30),
                width: scaleHeight(30),
                marginTop: scaleHeight(5),
                marginRight: scaleWidth(10),
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
    fontSize: lesserScalar(24),
    marginTop: scaleHeight(15),
    marginLeft: scaleWidth(90),
    fontFamily: 'Avenir Next',
  },
  friendContainer: {
    flexDirection: 'row',
    padding: lesserScalar(20),
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  animal: {
    alignSelf: 'flex-start',
  },
  animalUpdate: {
    fontSize: lesserScalar(20),
    fontFamily: 'raleway-semi-bold',
  },
  speechBubble: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: scaleWidth(10),
    height: scaleHeight(120),
    width: scaleWidth(130),
    backgroundColor: '#FFFFFF',
    borderRadius: lesserScalar(20),
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
    width: scaleWidth(20),
    height: scaleHeight(20),
  },
  nameText: {
    fontSize: lesserScalar(20),
    fontFamily: 'raleway-regular',
    marginTop: scaleHeight(20),
    width: scaleWidth(177),
    color: '#053867',
  },
  row: {
    flexDirection: 'row',
  },
  userAt: {
    fontFamily: 'raleway-semi-bold',
    paddingLeft: scaleWidth(20),
    color: '#333333',
  },
  bold: {
    fontFamily: 'raleway-bold',
    fontSize: lesserScalar(20),
    paddingLeft: scaleWidth(20),
    marginTop: scaleHeight(20),
    color: '#053867',
  },
})
