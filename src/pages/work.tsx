import { NextPage } from 'next'

import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

const WorkPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Work</h1>
      List of project work
      <ul>
        <li>doclabel v1</li>
        <li>doclabels</li>
        <li>nextjs hasura fullstack boilerplate / trello clone</li>
        <li>retail-ui</li>
        <li>twitter react native</li>
        <li>airbnb clone</li>
      </ul>
    </div>
  )
}

WorkPage.getInitialProps = async (context) => {
  return {}
}
WorkPage.getLayout = getHomeLayout('Work')

export default WorkPage
