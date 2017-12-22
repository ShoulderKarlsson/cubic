import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {globalStyles} from '../lib/common-styles'
import {stages} from '../lib/stages'
import {NavLink} from '../components/NavLink'

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

export const Algorithms = ({...props}) => {
  return (
    <View style={globalStyles.container}>
      {stages.map(({stageNumber, title, algs, ...props}, i) => {
        return (
          <View style={styles.stageLinkContainer} key={i}>
            <View style={styles.topSection}>
              <NavLink
                to={`/algorithms/${stageNumber}`}
                text={`Step ${stageNumber}`}
              />
              <Text
                style={{
                  color: '#e0e0e0',
                  fontSize: 16,
                }}
              >
                {title}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}
