import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Suspense } from 'react'

import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

import ProjectForm from '../../components/ProjectForm'

export const EditProject = () => {
  const router = useRouter()
  const projectId = router.query.projectId
  // const [project, { mutate }] = useQuery(getProject, {
  //   where: { id: projectId },
  // })
  const project = {
    id: '#1',
    description: '',
    name: '',
    image: '',
    github: '',
    website: '',
  }

  return (
    <div>
      <h1>Edit Project {project.id}</h1>
      <pre>{JSON.stringify(project)}</pre>

      <ProjectForm
        submitText="Update"
        initialValues={project}
        onSubmit={async (values) => {
          // try {
          //   const updated = await updateProject({
          //     where: { id: project.id },
          //     data: values,
          //   })
          //   mutate(updated)
          //   alert('Success!' + JSON.stringify(updated))
          //   router.push('/projects/[projectId]', `/projects/${updated.id}`)
          // } catch (error) {
          //   console.log(error)
          //   alert('Error creating project ' + JSON.stringify(error, null, 2))
          // }
        }}
      />
    </div>
  )
}

const EditProjectPage: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Edit Project</title>
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <EditProject />
        </Suspense>

        <p>
          <Link href="/projects">
            <a href="/projects">Projects</a>
          </Link>
        </p>
      </main>
    </div>
  )
}

EditProjectPage.getLayout = getHomeLayout('Edit Project')

export default EditProjectPage
