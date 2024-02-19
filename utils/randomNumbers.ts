function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export function generateRandomNumbers(): number[] {
  const arr = []
  for (let i = 0; i < 10; i++) {
    const n = getRandomInt(1, 826)
    arr.push(n)
  }
  return arr
}
