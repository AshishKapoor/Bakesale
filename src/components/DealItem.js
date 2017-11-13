import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {priceDisplay} from '../components/util';

class DealItem extends Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
  }
  render() {
    const {deal} = this.props;
    return (
      <View style={styles.list}>
        <Image
        source={{uri: this.props.deal.media[0]}}
        style={styles.image}
        />
        <View>
          <Text>{deal.title}</Text>
          <Text>{priceDisplay(deal.price)}</Text>
          <Text>{deal.cause.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
})

export default DealItem;