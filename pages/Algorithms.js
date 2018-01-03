import React from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import {globalStyles} from '../lib/common-styles'
import {stages} from '../lib/stages'
import {NavLink} from '../components/NavLink'
import {Square} from '../components/common/Square'
import {Header} from '../components/common/Header'
import {RED} from '../lib/colors'
import Dimensions from 'Dimensions'
const win = Dimensions.get('window')

const styles = StyleSheet.create({
  stageLinkContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  topSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Algorithms = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: RED,
      }}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight: 16,
          marginTop: 16,
        }}
      >
        <Square
          squareHeight={48}
          squareWidth={48}
          textFontSize={24}
          onClick={() => {}}
          text={'?'}
        />
      </View>
      {stages.map(({title, stageNumber, note}, i) => {
        return (
          <View
            key={i}
            style={{
              height: win.height / 2,
              marginLeft: 16,
              marginRight: 16,
              backgroundColor: 'rgba(1,1,1, 0.4)',
              marginBottom: 8,
            }}
          >
            <View
              style={{
                flex: 2,
                display: 'flex',
              }}
            >
              <View style={[globalStyles.centeredContent, {flex: 1}]}>
                <NavLink
                  to={`/algorithms/${stageNumber}`}
                  text={title}
                  style={{fontSize: 64}}
                />
              </View>
              <View style={[globalStyles.centeredContent, {flex: 1}]}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}
                >
                  {note}
                </Text>
              </View>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}
