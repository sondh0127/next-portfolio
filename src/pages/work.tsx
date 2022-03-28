import { NextPage } from 'next'

import { getDefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types'
import { Button, Toast } from '@/components/shared'
import { Select } from '@/components/shared'

const WorkPage: NextPageWithLayout = () => {
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
    </div>
  )
}

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

WorkPage.getInitialProps = async (context) => {
  return {}
}
WorkPage.getLayout = getDefaultLayout('Work')

export default WorkPage
