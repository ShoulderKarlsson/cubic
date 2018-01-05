import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavLink} from '../components/NavLink'
import {Cube} from '../components/Cube'
import {Square} from '../components/common/Square'
import {generateRandomColors} from '../lib/common-helpers'
import {RED} from '../lib/colors'
import {globalStyles} from '../lib/common-styles'

const styles = StyleSheet.create({
  cubes: {
    flexDirection: 'row',
    width: 204,
    height: 204,
    flexWrap: 'wrap',
    backgroundColor: '#000',
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 128,
    marginTop: 64,
  },
})

export const Main = ({match}) => (
  <View style={[globalStyles.centeredContent, {flex: 1, backgroundColor: RED}]}>
    <View style={[globalStyles.centeredContent, styles.cubes]}>
      {generateRandomColors(9).map((color, i) => (
        <Square
          key={i}
          squareBackgroundColor={color}
          squareMargin={2}
          squareHeight={64}
          squareWidth={64}
        />
      ))}
    </View>
    <View style={styles.optionsContainer}>
      <NavLink to={'/algorithms'} text="Start Learning!" />
    </View>
  </View>
)
