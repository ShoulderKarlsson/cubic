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
    errors: 0,
    correct: 0,
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


  handleGuess = (guess, pos) => {
    const guesses = [
      ...this.state.guesses,
      {guess, pos, guessPosition: this.findGuessPosition()},
    ]
    const {correct, errors} = this.evaluateScore(guesses)
    this.setState({guesses, correct, errors})
  }

  findGuessPosition = () => {
    if (this.state.guesses.length === 0) return 0

    const foo = Array(this.state.correctSequence.length).fill(null)
    this.state.guesses.forEach(({guessPosition}) => {
      foo[guessPosition] = guessPosition
    })


    const position = foo.findIndex(e => e === null)


    console.log('foo', foo)
    console.log('position', position)

    return position
  }

  removeGuess = target => {
    if (target === null) return
    const guesses = this.state.guesses.filter(
      ({guessPosition, guess, pos}) =>
        guessPosition !== target.guessPosition && pos !== target.pos,
    )
    const {correct, errors} = this.evaluateScore(guesses)
    this.setState({errors, correct, guesses})
  }

  evaluateScore = guesses =>
    guesses.reduce(
      ({correct, errors}, {guess}, i) =>
        this.state.correctSequence[i] === guess
          ? {errors, correct: correct + 1}
          : {correct, errors: errors + 1},
      {correct: 0, errors: 0},
    )

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
          {alg.steps.map((_, i) => {
            const guess = this.state.guesses.find(
              ({guessPosition}) => guessPosition === i,
            )
            return (
              <Square
                key={i}
                text={guess ? guess.guess : null}
                onClick={() => this.removeGuess(guess ? guess : null)}
              />
            )
          })}
        </View>
        <View style={styles.squareContainer}>
          {alg.steps.map((step, i) => {
            const hasMadeGuess = guesses.find(({pos}) => pos === i)
            return (
              <Square
                key={i}
                text={!hasMadeGuess ? step : null}
                onClick={() => this.handleGuess(step, i)}
              />
            )
          })}
        </View>
        {this.state.correct + this.state.errors ===
          this.state.correctSequence.length && (
          <View style={styles.scoreContainer}>
            <Text>{`Correct ${this.state.correct}`}</Text>
            <Text>{`Wrong: ${this.state.errors}`}</Text>
          </View>
        )}
      </View>
    )
  }
}

export default StepTrain
