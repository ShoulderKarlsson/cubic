import React from 'react'
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native'
import {generateRandomColors} from '../../lib/common-helpers'
import {globalStyles} from '../../lib/common-styles'
import {OpacityFadeView} from '../components/opacity-fade-view'
import {WHITE, RED} from '../../lib/colors'

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
    backgroundColor: 'rgba(0,0,0,0.70)',
  },
})

export const AndroidMain = ({navigation, ...props}) => {
  const amountOfBoxes = 9
  return (
    <View
      style={[
        globalStyles.mainColoredContainer,
        globalStyles.XYCenter,
        {
          justifyContent: 'space-around',
        },
      ]}
    >
      <View style={[styles.colorContainer, globalStyles.XYCenter]}>

        {/* TODO: Use the Cube component instead of this. */}
        {generateRandomColors(amountOfBoxes).map((randomColor, i) => (
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
      <OpacityFadeView delay={amountOfBoxes * 100}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={() => navigation.navigate('Train')}
        >
          <Text
            style={{
              color: WHITE,
              fontSize: 32,
            }}
          >
            Start memory training
          </Text>
        </TouchableNativeFeedback>
      </OpacityFadeView>
    </View>
  )
}
