import * as c from './colors'
export function generateRandomColors(amount) {
  const randomColors = []
  const colors = Object.keys(c)
  const colorsLength = colors.length

  for (let i = 0; i < amount; i++) {
    randomColors.push(
      c[colors[Math.floor(Math.random() * colorsLength)]]
    )
  }

  return randomColors
}
