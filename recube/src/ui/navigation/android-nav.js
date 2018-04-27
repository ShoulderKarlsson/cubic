import React from 'react'
import {StackNavigator} from 'react-navigation'
import {View, Text} from 'react-native'
import {AndroidMain} from '../pages/android-main'

export const AndroidNavigation = StackNavigator({
  Home: {
    screen: AndroidMain
  },
})