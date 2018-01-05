import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import PropTypes from 'prop-types'

const getStyles = ({
  squareHeight,
  squareWidth,
  squareBackgroundColor,
  squareMargin,
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
    alignItems: 'center',
    margin: squareMargin ? squareMargin : 8
  },

  textStyle: {
    fontSize: textFontSize ? textFontSize : 64,
    color: textColor ? textColor : '#fff',
  },
})

export const Square = ({text, onClick = () => {}, ...props}) => {
  const {square, textStyle} = getStyles(props)
  return (
    <View style={square}>
      {!!text ? (
        <Text style={textStyle} onPress={() => onClick()}>
          {text}
        </Text>
      ) : null}
    </View>
  )
}

Square.propTypes = {
  text: PropTypes.string,
  squareHeight: PropTypes.number,
  squareWidth: PropTypes.number,
  squareBackgroundColor: PropTypes.string,
  squareMargin: PropTypes.number,
  textFontSize: PropTypes.number,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
}
