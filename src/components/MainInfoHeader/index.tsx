import * as React from 'react'
import { useWindowScroll } from '@/hooks'

import MainInfo from './MainInfo'
import MainInfoSticky from './MainInfoSticky'

/* -------------------------------- Constant -------------------------------- */
const HEIGHT_THRESHOLD = 70

/* -------------------------------- Component ------------------------------- */
export const MainInfoHeader: React.FC = () => {
  const [isSimple, setIsSimple] = React.useState(false)
  const scroll = useWindowScroll()
  React.useEffect(() => {
    setIsSimple(scroll.y > HEIGHT_THRESHOLD)
  }, [scroll])
  return (
    <>
      <div
        className={`${
          !isSimple ? 'opacity-0 hidden' : 'opacity-100 z-10 block'
        } sticky top-0 w-full transition duration-150`}
      >
        <MainInfoSticky />
      </div>

      <div
        className={`${
          isSimple ? `opacity-0 max-h-0` : `opacity-100`
        } transition duration-150 ease-in-out`}
      >
        <MainInfo />
      </div>
    </>
  )
}

export default MainInfoHeader
