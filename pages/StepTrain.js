import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {stages} from '../lib/stages'
import {globalStyles} from '../lib/common-styles'
import {Header} from '../components/common/Header'
import {Square} from '../components/common/Square'

const styles = StyleSheet.create({
  squareContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
  },

  scoreContainer: {},
})

class StepTrain extends Component {
  state = {
    amountOfErrors: 0,
    amountOfCorrect: 0,
    guesses: [],
    correctSequence: [],
    stage: {},
  }

  componentDidMount() {
    const {stageId} = this.props.match.params
    const stage = stages.find(({stageNumber}) => stageId == stageNumber)
    this.setState({
      stage: {...stage},
      correctSequence: [...stage.algs[0].steps],
    })
  }

  evaluateGuess = (guess, position) => {
    this.setState(() => ({
      guesses: [...this.state.guesses, {guess, pos: position}],
    }))
    this.foo()
  }

  foo = () => {
    const {amountOfCorrect, amountOfErrors} = this.state.guesses.reduce(
      (curr, {guess}, i) => {
        if (this.state.correctSequence[i] === guess) {
          return {
            ...curr,
            amountOfCorrect: curr.amountOfCorrect + 1,
          }
        } else {
          return {
            ...curr,
            amountOfErrors: curr.amountOfErrors + 1,
          }
        }
      }, {amountOfCorrect: 0, amountOfErrors: 0}
    )

    this.setState(() => ({
      amountOfCorrect, amountOfErrors
    }))

    console.log('amountOfCorrect :', amountOfCorrect)
    console.log('amountOfErrors :', amountOfErrors)
  }

  render() {
    // TODO: refactor this
    // This is because in componentDidMount we are collecting the stage
    // maybe provide this to component as prop or something like that...
    if (!Object.keys(this.state.stage).length) return null

    const {guesses} = this.state
    const [alg] = this.state.stage.algs
    return (
      <View style={globalStyles.container}>
        <Header
          text={`Stage ${this.state.stage.stageNumber}`}
          color="#fff"
          fontSize={32}
        />
        <Header text={this.state.stage.title} color="#e0e0e0" fontSize={16} />
        <View style={styles.squareContainer}>
          {alg.steps.map((_, i) => (
            <Square key={i} text={guesses[i] ? guesses[i].guess : null} />
          ))}
        </View>
        <View style={styles.squareContainer}>
          {alg.steps.map((step, i) => {
            const hasMadeGuess = guesses.find(({pos}) => pos === i)
            return (
              <Square
                key={i}
                text={!hasMadeGuess ? step : null}
                onClick={() => this.evaluateGuess(step, i)}
              />
            )
          })}
        </View>
        <View style={styles.scoreContainer}>
          <Text>{`Correct ${this.state.amountOfCorrect}`}</Text>
          <Text>{`Wrong: ${this.state.amountOfErrors}`}</Text>
        </View>
      </View>
    )
  }
}

export default StepTrain
