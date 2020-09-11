// import deleteProject from 'app/projects/mutations/deleteProject'
// import getProject from 'app/projects/queries/getProject'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Suspense } from 'react'

import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

export const Project = () => {
  const router = useRouter()
  const projectId = router.query.projectid
  // const projectId = useParam('projectId', 'number')
  // const [project] = useQuery(getProject, { where: { id: projectId } })

  const project = {
    id: '#1',
  }
  return (
    <div>
      <h1>Project {project.id}</h1>
      <pre>{JSON.stringify(project, null, 2)}</pre>

      <Link
        href="/projects/[projectId]/edit"
        as={`/projects/${project.id}/edit`}
      >
        <a href="/projects/[projectId]/edit">Edit</a>
      </Link>

      <button
        type="button"
        onClick={async () => {
          // if (window.confirm('This will be deleted')) {
          //   await deleteProject({ where: { id: project.id } })
          //   router.push('/projects')
          // }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowProjectPage: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Project</title>
      </Head>

      <main>
        <p>
          <Link href="/projects">
            <a href="/projects">Projects</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <Project />
        </Suspense>
      </main>
    </div>
  )
}

ShowProjectPage.getLayout = getHomeLayout('Project')

export default ShowProjectPage
