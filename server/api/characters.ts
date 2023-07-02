// import { Character, Info } from '~/utils/types'

// function getRandomInt(min: number, max: number): number {
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   return Math.floor(Math.random() * (max - min) + min)
// }

// function generateRandomNumbers(): number[] {
//   const arr = []
//   for (let i = 0; i < 10; i++) {
//     const n = getRandomInt(1, 826)
//     arr.push(n)
//   }
//   return arr
// }

// export default defineEventHandler(async () => {
//   // const ids: number[] = generateRandomNumbers()
//
//   const response: { results: Character[]; info: Info } = await $fetch(
//     `https://rickandmortyapi.com/api/character`
//   )
//
//   if (response && typeof response === 'object') {
//     return {
//       characters: response.results,
//       info: response.info,
//     }
//   }
// })
