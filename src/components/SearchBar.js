//import liraries
import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

// create a component
class SearchBar extends Component {
  render() {
    return <TextInput 
    placeholder="Search all deals"
    style={styles.searchInput}>
    </TextInput>
  }
}

// define your styles
const styles = StyleSheet.create({
  searchInput: {
    height: 40,
  },
});

//make this component available to the app
export default SearchBar;