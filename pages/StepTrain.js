import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {compose, withState, withHandlers} from 'recompose'
import {stages} from '../lib/stages'
import {globalStyles} from '../lib/common-styles'

const styles = StyleSheet.create({
  guessesContainer: {},

  guessOptionsContainer: {},
})

const enhance = compose(
  withState('guesses', 'setGuesses', []),

  withHandlers({
    onGuessClick: ({}) => () => {},
  }),
)

export const StatelessStepTrain = ({match: {params: {stageId}}, ...props}) => {
  const {algs, title} = stages.find(({stageNumber}) => stageId == stageNumber)

  /**
   * There can be multiple algorithms here, but for now only
   * interested in first.
   */
  const [alg] = algs
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Text style={{fontSize: 32, color: '#fff'}}>{`Stage ${stageId}`}</Text>
        <Text style={{fontSize: 16, color: '#e0e0e0'}}>{title}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 12,
          // backgroundColor: 'rgba(1,1,1, 0.2)',
        }}
      >
        {alg.steps.map((_, i) => (
          <View
            key={i}
            style={{
              height: 64,
              width: 64,
              backgroundColor: 'rgba(1,1,1, 0.4)',
              margin: 6,
            }}
          />
        ))}
      </View>
      <View
        style={{
          marginTop: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {alg.steps.map((step, i) => (
          <View
            key={i}
            style={{
              height: 70,
              width: 70,
              padding: 2,
              margin: 6,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(1,1,1, 0.4)',
            }}
          >
            <Text
              style={{color: '#fff', fontSize: 64}}
              onPress={() => console.log(step)}
            >
              {step}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}
