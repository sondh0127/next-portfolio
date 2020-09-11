export const Answers: Array<{ id: string; answer: () => any }> = [
  {
    id: '1',
    answer: () => {
      const deepMergeArray = [1, 2, [3, 4, [5, 6, [7, 8]]], 9, [10]]

      const flatten = (array: any[]): number[] => {
        return array.reduce((acc, curr) => {
          if (Array.isArray(curr)) {
            acc.push(...flatten(curr))
          } else {
            acc.push(curr)
          }
          return acc
        }, [] as number[])
      }

      // if (!Array.prototype.flatten) {
      //   Array.prototype.flatten = () => {
      //     return flatten(this)
      //   }
      // }

      return flatten(deepMergeArray)
    },
  },
  {
    id: '2',
    answer: () => {
      return
    },
  },
]
