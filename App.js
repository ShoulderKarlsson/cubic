import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {Cube} from './components/Cube'
import * as colors from './lib/colors'
import {MenuText} from './components/MenuText'
import {generateRandomColors} from './lib/randomColors'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.cubes}>
        {generateRandomColors(9).map((color, i) => (
          <Cube key={i} color={color} />
        ))}
      </View>
      <View style={styles.optionsContainer}>
        <MenuText text={'Start Solving'}/>
        <MenuText text={'Continue on step 3'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ef5350',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cubes: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
