import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {Cube} from './components/Cube'
import * as colors from './lib/colors'
import {MenuText} from './components/MenuText'

export default class App extends React.Component {
  generateRandomCubes = () => {
    const randomColors = []
    const availableColors = Object.keys(colors)
    const availableColorsLen = availableColors.length

    for (let i = 0; i < 9; i++) {
      randomColors.push(
        colors[availableColors[Math.floor(Math.random() * availableColorsLen)]],
      )
    }

    return randomColors
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cubes}>
          {this.generateRandomCubes().map((c, i) => <Cube color={c} key={i} />)}
        </View>
        <View style={styles.optionsContainer}>
          <MenuText text={'Start Solving'} />
          <MenuText text={'Continue'} />
        </View>
      </View>
    )
  }
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
