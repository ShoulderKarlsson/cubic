


/**
 * 
 * 
 * 
 * 
 * 
 * TODO: TRY TO REFACTOR THIS BADBOY 
 * 
 * 
 * 
 * 
 * 
 * 
 */



// import React, {Component} from 'react'
// import {StyleSheet, Text, View} from 'react-native'
// import {stages} from '../lib/stages'
// import {globalStyles} from '../lib/common-styles'
// import {Header} from '../components/common/Header'
// import {Square} from '../components/common/Square'
// import {shuffleArray} from '../lib/common-helpers'

// const styles = StyleSheet.create({
//   squareContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 24,
//   },

//   scoreContainer: {
//     marginTop: 32,
//   },
// })

// class StepTrain extends Component {
//   state = {
//     stage: {},
//     steps: [],
//     guesses: [],
//   }

//   componentDidMount() {
//     const {stageId} = this.props.match.params
//     const stage = stages.find(({stageNumber}) => stageId == stageNumber)
//     const shuffledSteps = shuffleArray(stage.algs[0].steps)

//     this.setState({
//       stage: {...stage},
//       steps: [...shuffledSteps],
//     })
//   }

//   makeGuess = guess => {
//     this.setState({
//       guesses: [
//         ...this.state.guesses,
//         {...guess, guessPos: this.getGuessPosition()},
//       ],
//     })
//   }

//   getGuessPosition = () => {
//     const tmp = Array(this.state.steps.length).fill(null)
//     this.state.guesses.forEach(({guessPos}) => (tmp[guessPos] = guessPos))
//     return tmp.findIndex(val => val === null)
//   }

//   removeGuess = guess => {
//     this.setState({
//       guesses: [
//         ...this.state.guesses.filter(
//           ({guessPos}) => guessPos !== guess.guessPos,
//         ),
//       ],
//     })
//   }

//   calculateScore = () =>
//     this.state.guesses.reduce(
//       (acc, {guessPos, order}) =>
//         // Evaluates if the position of the guess is in any of the accepted locations
//         order.some(pos => pos === guessPos) ? acc + 1 : acc,
//       0,
//     )

//   render() {
//     if (!Object.keys(this.state.stage).length) return null

//     return (
//       <View style={globalStyles.container}>
//         <Header
//           text={`Stage ${this.state.stage.stageNumber}`}
//           color="#fff"
//           fontSize={32}
//         />
//         <Header
//           text={this.state.stage.algs[0].description}
//           color="#e0e0e0"
//           fontSize={16}
//           style={{marginTop: 16}}
//         />
//         <View style={styles.squareContainer}>
//           {this.state.steps.map((step, i) => {
//             // Evaluates if there should be a guess presented for the current square
//             const guessAtIndex = this.state.guesses.find(
//               ({guessPos}) => guessPos === i,
//             )

//             return (
//               <Square
//                 key={i}
//                 text={guessAtIndex ? guessAtIndex.name : null}
//                 onClick={() => this.removeGuess(guessAtIndex)}
//               />
//             )
//           })}
//         </View>
//         <View style={styles.squareContainer}>
//           {this.state.steps.map((step, i) => {
//             // Evaluates if there should be a guess in the current square
//             const hasMadeGuess = this.state.guesses.find(
//               ({optionPos}) => optionPos === i,
//             )
//             return (
//               <Square
//                 key={i}
//                 text={!hasMadeGuess ? step.name : null}
//                 onClick={
//                   !hasMadeGuess
//                     ? () => this.makeGuess({...step, optionPos: i})
//                     : null
//                 }
//               />
//             )
//           })}
//         </View>
//         <View style={styles.scoreContainer}>
//           {// Only displaying score when all guesses are done
//           this.state.guesses.length === this.state.steps.length && (
//             <View>
//               <Header
//                 fontSize={32}
//                 color="#fff"
//                 text={`Correct Moves: ${this.calculateScore()}/${
//                   this.state.steps.length
//                 }`}
//               />
//               <Header
//                 fontSize={24}
//                 color="#fff"
//                 text="Restart?"
//                 onClick={() => this.setState({guesses: []})}
//                 style={{marginTop: 8}}
//               />
//             </View>
//           )}
//         </View>
//       </View>
//     )
//   }
// }

// export default StepTrain
