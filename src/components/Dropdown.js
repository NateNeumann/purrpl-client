import React, { Component } from 'react'
import { Dropdown } from 'react-native-material-dropdown'
import { updateVisibility } from './../actions/user-actions'

class Drop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
    }
  }
  handleValue = (value) => {
    updateVisibility(this.state.user.id, value)
  }
  render() {
    const data = [{
      value: 'Everyone',
    }, {
      value: 'Friends Only',
    }, {
      value: 'Private',
    }];

    return (
      <Dropdown
        data={data}
        itemPadding={10}
        dropdownOffset={{ top: 0, left: 0 }}
        rippleInsets={{ top: -10, bottom: 0 }}
        rippleCentered
        value={this.state.user.visible}
        onChangeText={this.handleValue}
      />
    );
  }
}

export default Drop;
