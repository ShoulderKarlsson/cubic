import React from 'react'
import {View, StyleSheet} from 'react-native'
import {RED} from '../lib/colors'
import Dimensions from 'Dimensions'
const win = Dimensions.get('window')

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RED,
  },

  fullScreenHalfHeight: {
    width: win.width,
    height: win.height / 2,
  },

  centeredContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
