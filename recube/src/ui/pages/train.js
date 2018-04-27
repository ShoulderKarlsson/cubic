import React from 'react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native'
import {stages} from '../../lib/stages'
import {globalStyles} from '../../lib/common-styles'
const windowDimensions = Dimensions.get('window')

const styles = StyleSheet.create({
  stepContainer: {
    height: windowDimensions.height,
    width: windowDimensions.width,
    backgroundColor: 'orange',
    margin: 10,
  },
})

const StatelessTrain = ({...props}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
      }}
    >
      {stages.map((stage, i) => {
        return (
          <View style={styles.stepContainer} key={i}>
          </View>
        )
      })}
    </ScrollView>
  )
}

export const Train = StatelessTrain
