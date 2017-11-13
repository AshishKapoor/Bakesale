/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class App extends Component {
  render() {
    console.log('works');
    return (
      <View style={{flex: 1, marginHorizontal: 50, }}>
        <Text style={{textAlign: 'center', paddingTop: 30,}}>Placeholder</Text>
      </View>
    );
  }
}
