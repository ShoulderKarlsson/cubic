import React from 'react'
import {View, TouchableNativeFeedback, Text} from 'react-native'
import propTypes from 'prop-types'
import {WHITE} from '../../lib/colors'

export const CButton = ({label, onPress, size}) => {
  
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
        <Text
          style={{
            color: WHITE,
            fontSize: 32
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}
