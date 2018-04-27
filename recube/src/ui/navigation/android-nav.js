import React from 'react'
import {StackNavigator} from 'react-navigation'
import {View, Text} from 'react-native'
import {AndroidMain} from '../pages/android-main'
import {Train} from '../pages/train'

export const AndroidNavigation = StackNavigator({
  Home: {
    screen: AndroidMain,
  },

  Train: {
    screen: Train,
  },
})
