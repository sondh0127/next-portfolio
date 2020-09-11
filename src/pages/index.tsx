import Link from 'next/link'
import * as React from 'react'

import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

const IndexPage: NextPageWithLayout = () => {
  const interviewQuestionAnswer = [
    {
      id: '1',
      question: `Given a multidimensional array with depth of n, flatten it. Once flattened make it available as a method on array instance`,
    },
    {
      id: '2',
      question: `Create a promise from scratch`,
    },
  ]

  const flattenArray = React.useMemo(() => {
    const deepMergeArray = [1, 2, [3, 4, [5, 6, [7, 8]]], 9, [10]]

    const flatten = (array: any[]): number[] => {
      return array.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
          acc.push(...flatten(curr))
        }
        acc.push(curr)
        return acc
      }, [] as number[])
    }

    // if (!Array.prototype.flatten) {
    //   Array.prototype.flatten = () => {
    //     return flatten(this)
    //   }
    // }

    return flatten(deepMergeArray)
  }, [])
  console.log(`🇻🇳 [LOG]: IndexPage -> flattenArray`, flattenArray)

  return (
    <div>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Front End Blog by Son Do Hong
        </h1>
      </div>
    </div>
  )
}

IndexPage.getLayout = getHomeLayout('Home | @sondh0127')

export default IndexPage
