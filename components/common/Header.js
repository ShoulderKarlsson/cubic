import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  largeHeader: {
    fontSize: 32,
    color: '#fff',
  },
  smallHeader: {
    fontSize: 16,
    color: '#fff',
  },
})

export const Header = ({text, color, fontSize, onClick, style = {}}) => (
  <View style={styles.container}>
    <Text style={{color, fontSize, ...style}} onPress={() => onClick()}>
      {text}
    </Text>
  </View>
)
