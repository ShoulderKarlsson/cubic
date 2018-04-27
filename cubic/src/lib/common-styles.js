import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import {RED} from '../lib/colors'
const windowDimensions = Dimensions.get('window')

export const globalStyles = StyleSheet.create({
  mainColoredContainer: {
    flex: 1,
    backgroundColor: RED,
  },

  fullScreenHalfHeight: {
    width: windowDimensions.width,
    height: windowDimensions.height / 2,
  },

  XYCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
