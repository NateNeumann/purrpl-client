import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import moment from 'moment'
import Back from './../components/Back'
import FriendAction from './../components/FriendAction'
import { scaleHeight, scaleWidth, lesserScalar } from './../assets/scaling'

export default class IndividualFriend extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      user: this.props.navigation.state.params.user,
    }
  }

  handleCheckbox = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const name = this.props.navigation.state.params.name
    const username = this.props.navigation.state.params.username
    const encourage = { senderId: this.state.user.id, action: 'encourage', time: moment() }
    const affirm = { senderId: this.state.user.id, action: 'affirm', time: moment() }
    const concern = { senderId: this.state.user.id, action: 'concern', time: moment() }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Back navigation={this.props.navigation} />
          <Text style={styles.header}>FRIEND</Text>
        </View>
        <View>
          <Image style={{ alignSelf: 'center', height: scaleHeight(260), width: scaleWidth(260) }} source={require('./../assets/images/plant.png')} />
          <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
            <Text style={styles.bold}>{name.toUpperCase()}</Text>
          </View>
          <FriendAction
            image={require('./../assets/images/heart.png')}
            label="encourage"
            id={this.state.user.id}
            username={username}
            content={encourage}
          />
          <FriendAction
            image={require('./../assets/images/high-five.png')}
            label="affirm"
            id={this.state.user.id}
            username={username}
            content={affirm}
          />
          <FriendAction
            image={require('./../assets/images/smile.png')}
            label="concern"
            id={this.state.user.id}
            username={username}
            content={concern}
          />
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
    height: scaleHeight(80),
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: lesserScalar(24),
    marginTop: scaleHeight(20),
    marginLeft: scaleWidth(105),
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
    width: lesserScalar(20),
    height: lesserScalar(20),
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
  bold: {
    fontFamily: 'raleway-bold',
    fontSize: lesserScalar(20),
    paddingLeft: scaleWidth(20),
    marginTop: scaleHeight(20),
    color: '#053867',
  },
})
