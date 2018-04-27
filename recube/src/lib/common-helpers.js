import * as c from './colors'

/**
 * Fisher-yates shuffle
 * @param {Array} array is a list of random entries to be shuffled
 */
export function shuffleArray(array) {
  const copy = array.slice()
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const x = copy[i]
    copy[i] = copy[j]
    copy[j] = x
  }

  return copy
}

export function generateRandomColors(amount) {
  const randomColors = []
  const colors = Object.keys(c)
  const colorsLength = colors.length

  for (let i = 0; i < amount; i++) {
    randomColors.push(c[colors[Math.floor(Math.random() * colorsLength)]])
  }

  return randomColors
}

