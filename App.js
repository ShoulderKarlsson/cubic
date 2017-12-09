import React from 'react'
import {StyleSheet, Text, View, Button, AppRegistry} from 'react-native'
import {Cube} from './components/Cube'
import * as colors from './lib/colors'
import {MenuText} from './components/MenuText'
import {generateRandomColors} from './lib/randomColors'
import {NativeRouter, Link} from 'react-router-native'
import {Navigation, Card} from 'react-router-navigation'
import {Main} from './pages/Main'
import {Algorithms} from './pages/Algorithms'

export default () => (
  <NativeRouter>
    <Navigation>
      <Card exact path="/algorithms" render={Algorithms} />
      <Card exact path="/" render={Main} />
    </Navigation>
  </NativeRouter>
)
