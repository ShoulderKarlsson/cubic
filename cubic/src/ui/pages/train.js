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
import {WHITE, RED, ALT_BRIGHTER_RED} from '../../lib/colors'
import {Cube} from '../components/cube'
import {CButton} from '../components/cbutton'
const windowDimensions = Dimensions.get('window')

const styles = StyleSheet.create({
  stepContainer: {
    height: windowDimensions.height,
    width: windowDimensions.width,
    margin: 10,
  },

  titleAndDescription: {
    flex: 1.2,
    justifyContent: 'space-around',
    marginLeft: 3,
    marginRight: 3,
  },

  title: {
    fontSize: 24,
    color: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  stateText: {
    color: WHITE,
    fontSize: 16,
  },

  description: {
    fontSize: 14,
    color: '#DDDDDD', // TODO => Make this into a better color
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
  },
})

const StatelessTrain = ({navigation, ...props}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RED,
      }}
    >
      {stages.map(
        (
          {
            title,
            description,
            cubeStates = {exampleStart: [], finished: []},
            steps,
          },
          i
        ) => {
          return (
            <View
              style={[
                styles.stepContainer,

                // Swithing background color every second
                {backgroundColor: i % 2 === 0 ? ALT_BRIGHTER_RED : RED},
              ]}
              key={i}
            >
              {/* Top container (Includes title and description) */}
              <View style={[globalStyles.XYCenter, styles.titleAndDescription]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={[styles.description]}>{description}</Text>
              </View>

              {/* Middle section, (Cube with results) */}
              <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={[{flex: 1}, globalStyles.XYCenter]}>
                  <Text style={styles.stateText}>Example start state</Text>
                  {cubeStates.exampleStart.map((exampleState, i) => (
                    <Cube
                      key={i}
                      cubeColors={exampleState}
                      brickSize={cubeStates.exampleStart.length === 2 ? 30 : 60}
                      brickMargin={2}
                    />
                  ))}
                </View>
                <View style={[{flex: 1}, globalStyles.XYCenter]}>
                  <Text style={styles.stateText}>Example state when done</Text>
                  {cubeStates.finished.map((exampleFinish, i) => (
                    <Cube
                      key={i}
                      cubeColors={exampleFinish}
                      brickSize={cubeStates.exampleStart.length === 2 ? 30 : 60}
                      brickMargin={2}
                    />
                  ))}
                </View>
              </View>

              {/* Bottom Section (Button to step-train thingy) */}
              <View style={styles.linkContainer}>
                <CButton
                  label="Train on this!"
                  // onPress={() =>
                  //   navigation.navigate('StepTrain', {
                  //     steps,
                  //   })
                  // }
                  onPress={() => console.log('Training on something')}
                  size={'medium'}
                />
              </View>
            </View>
          )
        }
      )}
    </ScrollView>
  )
}

export const Train = StatelessTrain
