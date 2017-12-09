import React from 'react'
import {View, StyleSheet} from 'react-native'
import {RED} from '../lib/colors'


/**
 * Try to export a view that is styled instead of a stylesheet
 */


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RED,
  },
})

