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
