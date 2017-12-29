import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = () => (
  <View style={headerContainer}>
      <Text style={header}>Buwa's Crypto Tracker App</Text>
  </View>
)

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20
  }
})

const { header, headerContainer } = styles

export default Header;
