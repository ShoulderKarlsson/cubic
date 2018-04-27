import React from 'react'
import {NativeRouter} from 'react-router-native'
import {Navigation, Card} from 'react-router-navigation'
import {Main} from './pages/Main'
import {Algorithms} from './pages/Algorithms'
import StepTrain from './pages/StepTrain'

export default () => (
  <NativeRouter>
    <Navigation>
      <Card exact path="/algorithms" render={Algorithms} />
      <Card exact path="/algorithms/:stageId" render={props => <StepTrain {...props} />} />
      <Card exact path="/" render={Main} />
    </Navigation>
  </NativeRouter>
)
