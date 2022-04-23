import { NextPage } from 'next'

import { getDefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types'
import { Button, Toast, Select, NavigationMenu } from '@/components/shared'
import { notion } from '@/lib/notion'
import Image from 'next/image'
import Link from 'next/link'

async function blocks(id: string) {
  const myBlocks = await notion.blocks.children.list({
    block_id: id,
  })
  return myBlocks
}

async function post(id: string) {
  return await notion.pages.retrieve({
    page_id: id,
  })
}

async function posts() {
  const myPosts = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE}`,
  })
  return myPosts
}

export async function getStaticProps() {
  const { results } = await posts()
  return {
    props: {
      posts: results,
    },
  }
}

interface Props {
  posts: [any]
}

const WorkPage: NextPageWithLayout = (props) => {
  console.log('[LOG] ~ file: work.tsx ~ line 27 ~ props', props)
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div>
      <Select />
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
      <div>
        {/* {props.posts.map((result, index) => {
          return (
            <div className="text-[10px" key={index}>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
          )
        })} */}
      </div>
      {/* Thudo Multimedia:

      Livestream Transcode Admin CMS.
      Interactive Livesteam (Truyền hình tương tác)


      Freelance projects
      Manager large multiple file upload admin - Customer: Tab - Califonia: |
      Desc:

      Customer: Think Pro ecommerce New Frontstoter Website - Think Pro VN
      Desc: Editor

      MinterScan - Customer: MinterScanIO (Quang Anh Nguyen) - USA */}
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        Toast
      </Button>
      <Toast duration={500000} open={open} onOpenChange={setOpen}></Toast>
      <div className="flex justify-end">
        <div>
          <NavigationMenu />
        </div>
      </div>
    </div>
  )
}

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

WorkPage.getLayout = getDefaultLayout('Works')

export default WorkPage
