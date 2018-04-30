import React from 'react'
import {View, StyleSheet, TouchableNativeFeedback} from 'react-native'
import PropTypes from 'prop-types'

const calculateWrappingLength = (brickSize, brickMargin) => {
  // It should fit three bricks
  const totalBricksize = brickSize * 3

  // Each of the bricks on one row should have margin of 2
  const totalBrickMargin = brickMargin * 2 * 3

  // Adding together in order to get
  // container height and width
  return totalBrickMargin + totalBricksize
}

const Brick = ({color, brickSize = 60, brickMargin = 2}) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackground()}
  >
    <View
      style={{
        height: brickSize,
        width: brickSize,
        backgroundColor: color,
        margin: brickMargin
      }}
    />
  </TouchableNativeFeedback>
)

export const Cube = ({cubeColors, brickSize, brickMargin, ...props}) => {
  console.log(cubeColors)
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: calculateWrappingLength(brickSize, brickMargin),
        margin: brickMargin,
        backgroundColor: 'black'
      }}
    >
      {cubeColors.map((color, i) => (
        <Brick key={i} {...{color, brickSize, brickMargin}} />
      ))}
    </View>
  )
}


// @ts-ignore
Cube.propTypes = {
  cubeColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  brickSize: PropTypes.number,
  brickMargin: PropTypes.number,
}