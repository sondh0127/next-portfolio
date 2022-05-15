import { cx } from '@/lib'
import {
  Button,
  ButtonIcon,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@/components/shared'
import Link from 'next/link'
import React from 'react'

import IconApplication from '~icons/carbon/application-web.jsx'
import { getDefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types'
import {
  DEVTOOLS,
  LANGUAGES,
  TDevtools,
  TECHNOLOGIES,
  TLanguages,
  TTechnologies,
} from 'utils/data'

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

/* ---------------------------------- Data ---------------------------------- */

const projects: TProject[] = [
  {
    id: `1`,
    name: 'Retail UI 🛒',
    description:
      'A collection of accessible and reusable components for React to rapid development of gorgeous interfaces with Tailwind CSS - utility-first CSS framework',
    github: 'https://github.com/sondh0127/retail-ui',
    website: 'https://github.com/sondh0127/retail-ui',
    image:
      'https://user-images.githubusercontent.com/62163604/93030253-ce291380-f64b-11ea-9df2-28bd64dfeb78.png',
    languages: ['javascript', 'typescript'],
    technologies: ['reactjs', 'tailwindcss'],
    devtools: ['lerna', 'tsdx', 'storybook'],
  },
  {
    id: `2`,
    name: 'NextHasura Fullstack boilerplate',
    description:
      'A boilerplate which combine Next.js and Hasura to quickly develop applications',
    github: 'https://github.com/sondh0127/nextjs-hasura-fullstack',
    website: 'https://github.com/sondh0127/nextjs-hasura-fullstack',
    image:
      'https://user-images.githubusercontent.com/62163604/93016964-44e3f380-f5ef-11ea-905a-0af27eeea39b.png',
    languages: ['javascript', 'typescript'],
    technologies: [
      'reactjs',
      'nextjs',
      'graphql',
      'apolloclient',
      'hasura',
      'tailwindcss',
      'nextauthjs',
    ],
    devtools: ['docker'],
  },
  {
    id: `3`,
    name: 'Trello Clone with NextHasura boilerplate',
    description: `Trello board power by my fullstack. With awesome Caching update and Optimistic UI`,
    github: 'https://github.com/sondh0127/nextjs-hasura-fullstack/tree/trello',
    website: 'https://trello-sondh0127.vercel.app/boards',
    image:
      'https://user-images.githubusercontent.com/62163604/93017941-9f348280-f5f6-11ea-9062-574ec18a1f81.png',
    languages: ['javascript', 'typescript'],
    technologies: ['nexthasura'],
    devtools: ['docker'],
  },
  {
    id: `4`,
    name: 'Doclabels (Graduation Project)',
    description:
      'Annotation system for labelling data from documents (with PDF documents)',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://next-doclabel.sondh0127.vercel.app/',
    image:
      'https://user-images.githubusercontent.com/62163604/93016959-31d12380-f5ef-11ea-9e83-5461ba7eef24.png',
    languages: ['javascript', 'typescript'],
    technologies: [
      'reactjs',
      'nextjs',
      'graphql',
      'apolloclient',
      'hasura',
      'eui',
    ],
    devtools: ['docker'],
  },
  {
    id: `5`,
    name: 'Airbnb Clone - University project with Got It Vietnam',
    description:
      'A web application that allows users to rent out their houses or rooms to travellers, that can search for accommodations by location to find a place to rent.',
    github: 'https://github.com/sondh0127/airbnb-clone',
    website: 'https://github.com/sondh0127/airbnb-clone',
    image:
      'https://raw.githubusercontent.com/sondh0127/airbnb-clone/develop/demo/searching/design.png',
    languages: ['javascript', 'python'],
    technologies: [
      'reactjs',
      'flask',
      'rest',
      'reactrouter',
      'redux',
      'styledcomponents',
    ],
    devtools: ['docker'],
  },
  {
    id: `6`,
    name: 'Twitter Clone with React Native (Expo)',
    description:
      'Simple interface of Twitter app for the purpose of learning React Native, React Native Navigation',
    github: 'https://github.com/sondh0127/twitter-clone-rn',
    website: 'https://github.com/sondh0127/twitter-clone-rn',
    image:
      'https://user-images.githubusercontent.com/62163604/93066450-39063900-f6a4-11ea-9b34-9f23371e6285.png',
    languages: ['javascript', 'typescript'],
    technologies: [
      'reactjs',
      'reactnative',
      'expo',
      'hasura',
      'reactnativenavigation',
      'reactnativepaper',
    ],
    devtools: [],
  },
]

/* ------------------------------- Components ------------------------------- */

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 px-12 gap-y-10">
      {projects.map((project) => (
        <article key={project.id}>
          <Card className="min-h-full">
            <CardHeader
              action={
                <div className={`flex`}>
                  <a href={project.website} target="__blank">
                    <ButtonIcon
                      title="Website"
                      variant="light"
                      color="secondary"
                      icon={<IconApplication />}
                    />
                  </a>
                  <a href={project.github} target="__blank">
                    <ButtonIcon
                      title="Github"
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
                className={cx(
                  'mr-2 font-semibold text-gray-600 truncate cursor-default',
                  'dark:hover:text-purple-400 hover:text-purple-600 dark:text-gray-300',
                )}
              >
                {project.name}
              </div>
            </CardHeader>
            <div className={`flex flex-col md:flex-row`}>
              <div className={`md:w-2/3`}>
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
              <CardFooter
                className={`flex-auto bg-gray-100 md:w-1/3 dark:bg-gray-600`}
              >
                <div className={`flex flex-col flex-1 space-y-2`}>
                  <TechListWrapper title="Languages">
                    {project.languages.map((item, index) => {
                      const lang = LANGUAGES[item]
                      return <TechItem key={lang.name + index} tech={lang} />
                    })}
                  </TechListWrapper>

                  <TechListWrapper
                    title="Tech-stack"
                    className={`pt-2 border-t border-gray-300`}
                  >
                    {project.technologies.map((item, index) => {
                      const tech = TECHNOLOGIES[item]
                      return <TechItem key={tech.name + index} tech={tech} />
                    })}
                  </TechListWrapper>

                  <TechListWrapper
                    title="Devtools"
                    className={`pt-2 border-t border-gray-300`}
                  >
                    {project.devtools.map((item, index) => {
                      const tool = DEVTOOLS[item]
                      return <TechItem key={tool.name + index} tech={tool} />
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

const ProjectsPage: NextPageWithLayout = () => {
  return (
    <div>
      <div
        className={`mx-auto mt-4 mb-12 sm:max-w-md md:max-w-2xl lg:max-w-4xl`}
      >
        <div className="px-3 py-2 text-center">
          <h1 className="text-3xl font-bold text-purple-600 underline uppercase">
            Projects
          </h1>
          <h3 className="text-lg text-gray-600 dark:text-gray-200">
            Some of the projects I&apos;ve been working on.
          </h3>
        </div>
        {/* <CreateProjecLink /> */}

        <div className={`mt-6`}>
          <ProjectsList />
        </div>
      </div>
    </div>
  )
}

ProjectsPage.getLayout = getDefaultLayout('Projects | @sondh0127')

export default ProjectsPage
