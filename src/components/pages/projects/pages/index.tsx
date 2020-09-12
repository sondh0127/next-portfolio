import {
  Button,
  ButtonIcon,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
} from '@retail-ui/core'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { string } from 'zod'

import WebsiteIcon from '@/components/icons/WebsiteIcon'
import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'
import {
  DEVTOOLS,
  LANGUAGES,
  TDevtools,
  TECHNOLOGIES,
  TLanguages,
  TTechnologies,
} from '@/utils/data'

import GithubIcon from '../components/GithubIcon'
import TechItem from './TechItem'
import TechListWrapper from './TechListWrapper'

/* ---------------------------------- Types --------------------------------- */
export type TProject = {
  id: string
  name: string
  description: string
  github: string
  website: string
  image: string
  languages: TLanguages[]
  technologies: TTechnologies[]
  devtools: TDevtools[]
}

const projects: TProject[] = [
  {
    id: `1`,
    name: 'Doclabels',
    description:
      'Annotation system for labelling data from documents (with PDF documents)',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://next-doclabel.sondh0127.vercel.app/',
    image:
      'https://previews.dropbox.com/p/thumb/AA5MpeXs_wRppDh7eun6kkxmftyjFJFjZmlAp9e3TjQpRb_3f7bm9ttw-kR_Kmk2kfIx8N3jMlQVMeonPlP-TJfO_siNyFSSg41aFUQftY2-gBxQBKrD3UhTu9yVCopbo_G8Mcrxc9-rf-l00wAZTuyPZwB3zNYJdkW9fbK3iIUcUsOwowibzrcjqLrftJddDIyjZ8giu4gp8xxKNzS99pViZeaf1h5NvCHYX2X1QvbmJ0ubwtMWWOYhWVPeh4Td74f2sw5bw0suR8dBYiJsun3Gy9iOKDM-nKepqb_yULAI06UeVgUmHuZFfZrWrXG1BlLtxdlZEtcGZhXzKTFqhIeqmV4PSyLHv294JsCFXAkohw/p.png?fv_content=true&size_mode=5',
    languages: ['javascript', 'typescript'],
    technologies: ['reactjs', 'nextjs', 'graphql', 'hasura', 'eui'],
    devtools: ['docker'],
  },
  {
    id: `2`,
    name: 'Next.js Hasura Fullstack boilerplate',
    description:
      'A boilerplate which combine Next.js and Hasura to quickly develop applications',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image:
      'https://previews.dropbox.com/p/thumb/AA5MpeXs_wRppDh7eun6kkxmftyjFJFjZmlAp9e3TjQpRb_3f7bm9ttw-kR_Kmk2kfIx8N3jMlQVMeonPlP-TJfO_siNyFSSg41aFUQftY2-gBxQBKrD3UhTu9yVCopbo_G8Mcrxc9-rf-l00wAZTuyPZwB3zNYJdkW9fbK3iIUcUsOwowibzrcjqLrftJddDIyjZ8giu4gp8xxKNzS99pViZeaf1h5NvCHYX2X1QvbmJ0ubwtMWWOYhWVPeh4Td74f2sw5bw0suR8dBYiJsun3Gy9iOKDM-nKepqb_yULAI06UeVgUmHuZFfZrWrXG1BlLtxdlZEtcGZhXzKTFqhIeqmV4PSyLHv294JsCFXAkohw/p.png?fv_content=true&size_mode=5',
    languages: ['javascript', 'typescript'],
    technologies: ['reactjs', 'nextjs', 'tailwindcss', 'graphql', 'hasura'],
    devtools: ['docker'],
  },
  {
    id: `3`,
    name: 'DoclabelsDoclabelsDoclabelsDoclabelsDoclabelsDoclabels ',
    description: 'DoclabelsDoclabelsDoclabelsDoclabelsDoclabelsDoclabels',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image:
      'https://previews.dropbox.com/p/thumb/AA5MpeXs_wRppDh7eun6kkxmftyjFJFjZmlAp9e3TjQpRb_3f7bm9ttw-kR_Kmk2kfIx8N3jMlQVMeonPlP-TJfO_siNyFSSg41aFUQftY2-gBxQBKrD3UhTu9yVCopbo_G8Mcrxc9-rf-l00wAZTuyPZwB3zNYJdkW9fbK3iIUcUsOwowibzrcjqLrftJddDIyjZ8giu4gp8xxKNzS99pViZeaf1h5NvCHYX2X1QvbmJ0ubwtMWWOYhWVPeh4Td74f2sw5bw0suR8dBYiJsun3Gy9iOKDM-nKepqb_yULAI06UeVgUmHuZFfZrWrXG1BlLtxdlZEtcGZhXzKTFqhIeqmV4PSyLHv294JsCFXAkohw/p.png?fv_content=true&size_mode=5',
    languages: ['javascript', 'typescript'],
    technologies: ['reactjs', 'nextjs', 'tailwindcss', 'graphql', 'hasura'],
    devtools: ['docker'],
  },
  {
    id: `4`,
    name: 'Retail UI 🛒',
    description: 'A React UI components library  power by tailwindcss',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image:
      'https://previews.dropbox.com/p/thumb/AA5MpeXs_wRppDh7eun6kkxmftyjFJFjZmlAp9e3TjQpRb_3f7bm9ttw-kR_Kmk2kfIx8N3jMlQVMeonPlP-TJfO_siNyFSSg41aFUQftY2-gBxQBKrD3UhTu9yVCopbo_G8Mcrxc9-rf-l00wAZTuyPZwB3zNYJdkW9fbK3iIUcUsOwowibzrcjqLrftJddDIyjZ8giu4gp8xxKNzS99pViZeaf1h5NvCHYX2X1QvbmJ0ubwtMWWOYhWVPeh4Td74f2sw5bw0suR8dBYiJsun3Gy9iOKDM-nKepqb_yULAI06UeVgUmHuZFfZrWrXG1BlLtxdlZEtcGZhXzKTFqhIeqmV4PSyLHv294JsCFXAkohw/p.png?fv_content=true&size_mode=5',
    languages: ['javascript', 'typescript'],
    technologies: ['reactjs', 'tailwindcss'],
    devtools: ['lerna', 'tsdx', 'storybook'],
  },
  {
    id: `5`,
    name: 'Doclabels',
    description: 'Doclabels',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image:
      'https://previews.dropbox.com/p/thumb/AA5MpeXs_wRppDh7eun6kkxmftyjFJFjZmlAp9e3TjQpRb_3f7bm9ttw-kR_Kmk2kfIx8N3jMlQVMeonPlP-TJfO_siNyFSSg41aFUQftY2-gBxQBKrD3UhTu9yVCopbo_G8Mcrxc9-rf-l00wAZTuyPZwB3zNYJdkW9fbK3iIUcUsOwowibzrcjqLrftJddDIyjZ8giu4gp8xxKNzS99pViZeaf1h5NvCHYX2X1QvbmJ0ubwtMWWOYhWVPeh4Td74f2sw5bw0suR8dBYiJsun3Gy9iOKDM-nKepqb_yULAI06UeVgUmHuZFfZrWrXG1BlLtxdlZEtcGZhXzKTFqhIeqmV4PSyLHv294JsCFXAkohw/p.png?fv_content=true&size_mode=5',
    languages: ['javascript', 'typescript'],
    technologies: ['reactjs', 'nextjs', 'tailwindcss', 'graphql', 'hasura'],
    devtools: ['docker'],
  },
  {
    id: `6`,
    name: 'DoclabelsDoclabelsDoclabelsDoclabelsDoclabelsDoclabels',
    description: 'Doclabels Doclabels Doclabels Doclabels Doclabels Doclabels ',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image:
      'https://previews.dropbox.com/p/thumb/AA5MpeXs_wRppDh7eun6kkxmftyjFJFjZmlAp9e3TjQpRb_3f7bm9ttw-kR_Kmk2kfIx8N3jMlQVMeonPlP-TJfO_siNyFSSg41aFUQftY2-gBxQBKrD3UhTu9yVCopbo_G8Mcrxc9-rf-l00wAZTuyPZwB3zNYJdkW9fbK3iIUcUsOwowibzrcjqLrftJddDIyjZ8giu4gp8xxKNzS99pViZeaf1h5NvCHYX2X1QvbmJ0ubwtMWWOYhWVPeh4Td74f2sw5bw0suR8dBYiJsun3Gy9iOKDM-nKepqb_yULAI06UeVgUmHuZFfZrWrXG1BlLtxdlZEtcGZhXzKTFqhIeqmV4PSyLHv294JsCFXAkohw/p.png?fv_content=true&size_mode=5',
    languages: ['javascript', 'typescript'],
    technologies: ['reactjs', 'nextjs', 'tailwindcss', 'graphql', 'hasura'],
    devtools: ['docker'],
  },
]

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 px-6 gap-y-10">
      {projects.map((project) => (
        <article key={project.id}>
          <Card className="min-h-full">
            <CardHeader
              action={
                <div className={`flex`}>
                  <a href={project.website} target="__blank">
                    <ButtonIcon
                      variant="light"
                      color="secondary"
                      icon={<WebsiteIcon />}
                    />
                  </a>
                  <a href={project.github} target="__blank">
                    <ButtonIcon
                      className={`ml-2`}
                      variant="light"
                      color="primary"
                      icon={<GithubIcon />}
                    />
                  </a>
                </div>
              }
            >
              <div
                title={project.name}
                className={`mr-2 font-semibold text-gray-600 truncate cursor-default dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400`}
              >
                {project.name}
              </div>
            </CardHeader>
            <div className={`flex flex-col md:flex-row`}>
              <div>
                <img
                  className={`object-cover object-center bg-gray-400`}
                  alt={project.name}
                  src={project.image}
                />
                <CardBody>
                  <p className="p-2 leading-6 text-gray-600 break-words dark:text-gray-300 ">
                    {project.description}
                  </p>
                </CardBody>
              </div>
              <CardFooter className={`bg-gray-100 dark:bg-gray-600`}>
                <div className={`flex flex-col flex-1 space-y-2`}>
                  <TechListWrapper title="Languages">
                    {project.languages.map((item) => {
                      const lang = LANGUAGES[item]
                      return <TechItem key={lang.name} tech={lang} />
                    })}
                  </TechListWrapper>

                  <TechListWrapper
                    title="Tech-stack"
                    className={`pt-2 border-t border-gray-300`}
                  >
                    {project.technologies.map((item) => {
                      const tech = TECHNOLOGIES[item]
                      return <TechItem key={tech.name} tech={tech} />
                    })}
                  </TechListWrapper>

                  <TechListWrapper
                    title="Devtools"
                    className={`pt-2 border-t border-gray-300`}
                  >
                    {project.devtools.map((item) => {
                      const tool = DEVTOOLS[item]
                      return <TechItem key={tool.name} tech={tool} />
                    })}
                  </TechListWrapper>
                </div>
              </CardFooter>
            </div>
          </Card>
        </article>
      ))}
    </div>
  )
}

const CreateProjecLink = () => {
  return (
    <p>
      <Link href="/projects/new">
        <Button>
          <a href="/project/new">Add Project</a>
        </Button>
      </Link>
    </p>
  )
}

const ProjectsPage = () => {
  return (
    <div className={`mx-auto sm:max-w-md md:max-w-2xl lg:max-w-4xl`}>
      <div className="px-3 py-2 text-center">
        <h1 className="text-3xl font-bold text-purple-600 uppercase">
          Projects
        </h1>
        <h3 className="text-lg text-gray-600">
          Some of the projects I&apos;ve been working on.
        </h3>
      </div>
      {/* <CreateProjecLink /> */}

      <div className={`mt-6`}>
        <ProjectsList />
      </div>
    </div>
  )
}

export default ProjectsPage
