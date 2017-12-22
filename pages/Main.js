import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavLink} from '../components/NavLink'
import {Cube} from '../components/Cube'
import {generateRandomColors} from '../lib/common-helpers'
import {RED} from '../lib/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RED,
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

export const Main = ({match}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cubes}>
        {generateRandomColors(9).map((color, i) => (
          <Cube key={i} color={color} />
        ))}
      </View>
      <View style={styles.optionsContainer}>
        <NavLink to={'/algorithms'} text="Start Learning!" />
      </View>
    </View>
  )
}
