import React from 'react'

import Page from '@/components/pages/projects/pages'
import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

const ProjectsPage: NextPageWithLayout = () => {
  return (
    <React.Fragment>
      <Page />
    </React.Fragment>
  )
}

ProjectsPage.getLayout = getHomeLayout('Projects | @sondh0127')

export default ProjectsPage
