import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {stages} from '../lib/stages'
import {globalStyles} from '../lib/common-styles'
import {Header} from '../components/common/Header'
import {Square} from '../components/common/Square'

const styles = StyleSheet.create({
  guessesContainer: {},
  guessOptionsContainer: {},
})

class StepTrain extends Component {
  state = {
    guesses: [],
    stage: {},
  }

  componentDidMount() {
    const {stageId} = this.props.match.params
    const stage = stages.find(({stageNumber}) => stageId == stageNumber)
    this.setState({stage: {...stage}})
  }

  onGuess = (guess, pos) => {
    this.setState({
      guesses: [...this.state.guesses, {guess, pos}],
    })
  }

  render() {
    if (!Object.keys(this.state.stage).length) {
      return null
    }

    const [alg] = this.state.stage.algs
    return (
      <View style={globalStyles.container}>
        <Header
          text={`Stage ${this.state.stage.stageNumber}`}
          color="#fff"
          fontSize={32}
        />
        <Header text={this.state.stage.title} color="#e0e0e0" fontSize={16} />
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 12,
          }}
        >
          {alg.steps.map((_, i) => {
            const guess = this.state.guesses[i]
              ? this.state.guesses[i].guess
              : null
            return <Square key={i} text={guess} />
            // return (
            //   <View
            //     key={i}
            //     style={{
            //       height: 64,
            //       width: 64,
            //       backgroundColor: 'rgba(1,1,1, 0.4)',
            //       display: 'flex',
            //       justifyContent: 'center',
            //       alignItems: 'center',
            //       margin: 6,
            //     }}
            //   >
            //     {this.state.guesses[i] ? (
            //       <Text style={{color: '#fff', fontSize: 64}}>
            //         {this.state.guesses[i].guess}
            //       </Text>
            //     ) : null}
            //   </View>
            // )
          })}
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
              {this.state.guesses.find(({pos}) => pos === i) ? null : (
                <Text
                  style={{color: '#fff', fontSize: 64}}
                  onPress={() => this.onGuess(step, i)}
                >
                  {step}
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
    )
  }
}

export default StepTrain
