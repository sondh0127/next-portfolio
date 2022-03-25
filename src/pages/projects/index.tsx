import React from 'react'

import Page from '@/components/pages/projects/pages'
import { getDefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types'

const ProjectsPage: NextPageWithLayout = () => {
  return (
    <React.Fragment>
      <Page />
    </React.Fragment>
  )
}

ProjectsPage.getLayout = getDefaultLayout('Projects | @sondh0127')

export default ProjectsPage
