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
      class CustomPromise {
        state = 'PENDING'
        value = undefined
        thenCallbacks = []
        errorCallbacks = []

        constructor(action) {
          action(this.resolver.bind(this), this.reject.bind(this))
        }

        resolver(value: any) {
          this.state = 'RESOLVED'
          this.value = value
          this.thenCallbacks.forEach((callback: (value: any) => void) => {
            callback(this.value)
          })
        }

        reject(value: any) {
          this.state = 'REJECTED'
          this.value = value
          this.errorCallbacks.forEach((callback: (value: any) => void) => {
            callback(this.value)
          })
        }

        then(callback) {
          this.thenCallbacks.push(callback)
          return this
        }

        catch(callback) {
          this.errorCallbacks.push(callback)
          return this
        }
      }
    },
  },
]
