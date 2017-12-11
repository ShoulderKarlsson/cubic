import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

/**
 * TODO: Make more configurable
 */
const styles = StyleSheet.create({
  square: {
    height: 64,
    width: 64,
    backgroundColor: 'rgba(1,1,1, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },

  textStyle: {
    fontSize: 64,
    color: '#fff',
  },
})

export const Square = ({text, onClick = () => {}}) => (
  <View style={styles.square}>
    {!!text ? (
      <Text style={styles.textStyle} onPress={() => onClick()}>
        {text}
      </Text>
    ) : null}
  </View>
)
