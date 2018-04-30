import React from 'react'
import {View, TouchableNativeFeedback, Text} from 'react-native'
import propTypes from 'prop-types'
import {WHITE} from '../../lib/colors'

const getFontSizeFor = size => {
  if (size === 'small') return 15
  if (size === 'medium') return 24
  if (size === 'large') return 32
}
export const CButton = ({label, onPress, size}) => {
  const fontSize = getFontSizeFor(size.toLowerCase())

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View
        style={{
          padding: 4,
          backgroundColor: 'rgba(104, 65, 65, 0.45)',
        }}
      >
        <Text style={{color: WHITE, fontSize}}>{label}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}
