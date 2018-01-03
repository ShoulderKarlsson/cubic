import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const styles = StyleSheet.create({
  square: {
    height: 72,
    width: 72,
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

const getStyles = ({
  squareHeight,
  squareWidth,
  squareBackgroundColor,
  textFontSize,
  textColor,
}) => ({
  square: {
    height: squareHeight ? squareHeight : 72,
    width: squareWidth ? squareWidth : 72,
    backgroundColor: squareBackgroundColor
      ? squareBackgroundColor
      : 'rgba(1,1,1, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    margin: 6,
  },

  textStyle: {
    fontSize: textFontSize ? textFontSize : 64,
    color: textColor ? textColor : '#fff',
  },
})

export const Square = ({text, onClick = () => {}, ...props}) => {
  const {square, textStyle} = getStyles(props)
  return (
    <View style={styles.square}>
      {!!text ? (
        <Text style={styles.textStyle} onPress={() => onClick()}>
          {text}
        </Text>
      ) : null}
    </View>
  )
}
