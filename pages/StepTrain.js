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

  scoreContainer: {
    marginTop: 32
  },
})

class StepTrain extends Component {
  state = {
    stage: {},
    steps: [],
    guesses: [],
  }

  componentDidMount() {
    const {stageId} = this.props.match.params
    const stage = stages.find(({stageNumber}) => stageId == stageNumber)
    let a = stage.algs[0]._steps

    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    console.log(a)

    this.setState({
      stage: {...stage},
      steps: [...stage.algs[0]._steps],
    })
  }

  makeGuess = guess => {
    this.setState({
      guesses: [
        ...this.state.guesses,
        {...guess, guessPos: this.getGuessPosition()},
      ],
    })
  }

  getGuessPosition = () => {
    if (!this.state.guesses.length) return 0

    const tmp = Array(this.state.steps.length).fill(null)
    this.state.guesses.forEach(({guessPos}) => (tmp[guessPos] = guessPos))
    return tmp.findIndex(val => val === null)
  }

  removeGuess = guess => {
    const updatedGuesses = this.state.guesses.filter(
      ({guessPos}) => guessPos !== guess.guessPos,
    )
    this.setState({
      guesses: [...updatedGuesses],
    })
  }

  calculateScore = () =>
    this.state.guesses.reduce(
      (acc, {guessPos, order}) => (guessPos === order ? acc + 1 : acc),
      0,
    )

  render() {
    if (!Object.keys(this.state.stage).length) return null

    return (
      <View style={globalStyles.container}>
        <Header
          text={`Stage ${this.state.stage.stageNumber}`}
          color="#fff"
          fontSize={32}
        />
        <Header text={this.state.stage.title} color="#e0e0e0" fontSize={16} />
        <View style={styles.squareContainer}>
          {this.state.steps.map((step, i) => {
            const guessAtIndex = this.state.guesses.find(
              ({guessPos}) => guessPos === i,
            )

            return (
              <Square
                key={i}
                text={guessAtIndex ? guessAtIndex.name : null}
                onClick={() => this.removeGuess(guessAtIndex)}
              />
            )
          })}
        </View>
        <View style={styles.squareContainer}>
          {this.state.steps.map((step, i) => {
            const hasMadeGuess = this.state.guesses.find(
              ({optionPos}) => optionPos === i,
            )
            return (
              <Square
                key={i}
                text={!hasMadeGuess ? step.name : null}
                onClick={
                  !hasMadeGuess
                    ? () => this.makeGuess({...step, optionPos: i})
                    : null
                }
              />
            )
          })}
        </View>
        <View style={styles.scoreContainer}>
          {this.state.guesses.length === this.state.steps.length && (
            <Header fontSize={32} color='#fff' text={`Correct Moves: ${this.calculateScore()}`}/>
          )}
        </View>
      </View>
    )
  }
}

export default StepTrain
