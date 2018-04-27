import React from 'react'
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native'
import {generateRandomColors} from '../../lib/common-helpers'
import {globalStyles} from '../../lib/common-styles'
import {OpacityFadeView} from '../components/opacity-fade-view'

const styles = StyleSheet.create({
  colorSquare: {
    height: 30,
    width: 30,
  },

  colorContainer: {
    flexDirection: 'row',

    // Magic number that make the container wrap every third item :)
    width: 204,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
})

export const AndroidMain = ({...props}) => {
  return (
    <View style={[globalStyles.mainColoredContainer, globalStyles.XYCenter]}>
      <View style={[styles.colorContainer, globalStyles.XYCenter]}>
        {generateRandomColors(9).map((randomColor, i) => (
          <OpacityFadeView
            key={i}
            delay={i * 100}
            style={{
              margin: 2,
            }}
          >
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
            >
              <View
                style={{height: 64, width: 64, backgroundColor: randomColor}}
              />
            </TouchableNativeFeedback>
          </OpacityFadeView>
        ))}
      </View>
    </View>
  )
}