import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

const EducationPage: NextPageWithLayout = () => {
  return (
    <div>
      EducationPage
      <p>Study HUST ICT Global ICT</p>
      <img src="#" alt="Bang dai hoc"></img>
      <p>Graduated at Very good - GPA</p>
    </div>
  )
}

EducationPage.getLayout = getHomeLayout('Educations | @sondh0127')

export default EducationPage
