import React, {Component} from 'react'
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
  stepContainer: {
    height: win.height / 4,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    backgroundColor: 'rgba(1,1,1, 0.4)',
    marginBottom: 8,
  },
})

export const Algorithms = () => (
  <ScrollView
    contentContainerStyle={{
      backgroundColor: RED,
    }}
  >
    {stages.map(({title, stageNumber, note}, i) => {
      return (
        <View key={i} style={styles.stepContainer}>
          <View
            style={{
              flex: 2,
              display: 'flex',
            }}
          >
            <View style={[globalStyles.centeredContent, {flex: 1}]}>
              <NavLink
                showUnderline
                to={`/algorithms/${stageNumber}`}
                text={`${title} (Stage ${stageNumber})`}
                fontSize={16}
              />
            </View>
            <View style={[globalStyles.centeredContent, {flex: 1}]}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
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
