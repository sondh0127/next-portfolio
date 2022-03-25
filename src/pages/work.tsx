import { NextPage } from 'next'

import { getDefaultLayout } from '@/layouts/DefaultLayout'
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
      {/* Thudo Multimedia:

      Livestream Transcode Admin CMS.
      Interactive Livesteam (Truyền hình tương tác)


      Freelance projects
      Manager large multiple file upload admin - Customer: Tab - Califonia: |
      Desc:

      Customer: Think Pro ecommerce New Frontstoter Website - Think Pro VN
      Desc: Editor

      MinterScan - Customer: MinterScanIO (Quang Anh Nguyen) - USA */}
    </div>
  )
}

WorkPage.getInitialProps = async (context) => {
  return {}
}
WorkPage.getLayout = getDefaultLayout('Work')

export default WorkPage
