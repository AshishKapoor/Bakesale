import React, { Component } from 'react'
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
} from 'react-native'

import ajax from '../ajax'
import DealList from './DealList'
import DealDetail from './DealDetail'
import SearchBar from './SearchBar'

export default class App extends Component {

  state = {
    deals: [],
    currentDealId: null,
  }

  setCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: dealId,
    })
  }

  unsetCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: null,
    })
  }

  async componentDidMount(){
    const deals = await ajax.fetchInitialDeals();
    this.setState({deals})
  }

  currentDeal = () => {
    return this.state.deals.find((deal) => deal.key === this.state.currentDealId)
  }

  render() {
    if (this.state.currentDealId) {
      return <DealDetail initialDealData={this.currentDeal()} onBack={this.unsetCurrentDeal}/>
    }
    if (this.state.deals.length > 0) {
      return (
        <View style={[styles.container, styles.main]}>
          <SearchBar />
          <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal}/>
        </View>
      );
    }
    return (
      <View style={[styles.container, styles.main]}>
        <Text style={styles.header}>Bakesale</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 50
  },
  header: {
    fontSize: 40,
  }
})