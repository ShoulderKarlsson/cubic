import React from 'react'
import {StackNavigator} from 'react-navigation'
import {View, Text} from 'react-native'


/**
 * THIS SHOULD BE USED LATER
 */
// import {AndroidMain} from '../pages/android-main'



const Main = () => {
  return (
    <View>
      <Text>
        Ello!
      </Text>
    </View>
  )
}
export const AndroidNavigation = StackNavigator({
  Home: {
    screen: Main
  },
})