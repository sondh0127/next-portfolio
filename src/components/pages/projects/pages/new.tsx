import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

import ProjectForm from '../components/ProjectForm'

const NewProjectPage: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <React.Fragment>
      <Head>
        <title>New Project</title>
      </Head>

      <div className="flex flex-col items-center justify-center max-w-3xl p-6 mx-auto">
        <h1>Create New Project</h1>

        <ProjectForm
          submitText="Create"
          initialValues={{}}
          onSubmit={async (values) => {
            // try {
            //   const project = await createProject({ data: values })
            //   // alert("Success!" + JSON.stringify(project))
            //   router.push('/projects/[projectId]', `/projects/${project.id}`)
            // } catch (error) {
            //   alert('Error creating project ' + JSON.stringify(error, null, 2))
            // }
          }}
        />

        <p>
          <Link href="/projects">
            <a href="/projects">
              Back to <strong>Projects</strong>
            </a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  )
}

NewProjectPage.getLayout = getHomeLayout('Create New Project')

export default NewProjectPage
