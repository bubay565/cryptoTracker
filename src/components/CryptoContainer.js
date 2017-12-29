import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import FetchCoinData from './../Actions/FetchCoinData'
import CoinCard from './CoinCard'
import { AppLoading } from 'expo'

class CryptoContainer extends Component {

  componentDidMount(){
    this.props.FetchCoinData()
  }

  renderCoinCards() {
    const { crypto } = this.props;
    console.log('renderCoinCards: ', crypto)
    return crypto.data.map((coin, index) =>
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    )
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching){
        return <AppLoading />
    }

    return (
      <ScrollView style={styles.content}>
          {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 55,
    paddingBottom: 100
  }
})

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
