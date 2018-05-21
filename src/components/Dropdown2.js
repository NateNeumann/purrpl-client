import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

class Drop2 extends Component {
  render() {
    const data = [{
      value: 'Duck',
    }, {
      value: 'Gorilla',
    }, {
      value: 'Owl',
    }];

    return (
      <Dropdown
        data={data}
        itemPadding={10}
        dropdownOffset={{ top: 0, left: 0 }}
        rippleInsets={{ top: -10, bottom: 0 }}
        rippleCentered
      />
    );
  }
}

export default Drop2;
