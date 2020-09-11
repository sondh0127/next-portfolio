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

import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'
import { DEVTOOLS, LANGUAGES, TECHNOLOGIES } from '@/utils/data'

import GithubIcon from '../components/GithubIcon'

const projects = [
  {
    id: 1,
    name: '🛒 Retail UI',
    description: 'A React UI library components power by tailwindcss',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image: 'https://github.com/sondh0127/doclabels',
    language: [LANGUAGES.javascript, LANGUAGES.typescript],
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.tailwindcss,
    ],
    devtools: [DEVTOOLS.lerna, DEVTOOLS.tsdx, DEVTOOLS.storybook],
  },
  {
    id: 2,
    name: 'Next.js Hasura Fullstack boilerplate',
    description:
      'A boilerplate which combine Next.js and Hasura to quickly develop applications',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image: 'https://github.com/sondh0127/doclabels',
    techstacks: ['React', 'Next.js', 'Tailwindcss', 'GraphQl', 'Hasura'],
  },
  {
    id: 3,
    name: 'DoclabelsDoclabelsDoclabelsDoclabelsDoclabelsDoclabels ',
    description: 'DoclabelsDoclabelsDoclabelsDoclabelsDoclabelsDoclabels',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image: 'https://github.com/sondh0127/doclabels',
    technologies: ['React', 'Next.js', 'Tailwindcss', 'GraphQl', 'Hasura'],
  },
  {
    id: 4,
    name: 'Doclabels',
    description: 'Doclabels',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image: 'https://github.com/sondh0127/doclabels',
    technologies: ['React', 'Next.js', 'Tailwindcss', 'GraphQl', 'Hasura'],
  },
  {
    id: 5,
    name: 'Doclabels',
    description: 'Doclabels',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image: 'https://github.com/sondh0127/doclabels',
    technologies: ['React', 'Next.js', 'Tailwindcss', 'GraphQl', 'Hasura'],
  },
  {
    id: 6,
    name: 'DoclabelsDoclabelsDoclabelsDoclabelsDoclabelsDoclabels',
    description: 'Doclabels Doclabels Doclabels Doclabels Doclabels Doclabels ',
    github: 'https://github.com/sondh0127/doclabels',
    website: 'https://github.com/sondh0127/doclabels',
    image: 'https://github.com/sondh0127/doclabels',
    technologies: ['React', 'Next.js', 'Tailwindcss', 'GraphQl', 'Hasura'],
  },
]

const ProjectsList = () => {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.id}>
          <Card className="min-h-full">
            <CardHeader
              className="text-center"
              title={`${project.name} 🇻🇳`}
              action={
                <ButtonIcon variant="default" color="dark" icon={GithubIcon} />
              }
            ></CardHeader>
            <img
              className="border border-black rounded-t"
              alt={project.name}
              src="/img/og.png"
            />
            <CardBody className="break-words">{project.description}</CardBody>
            <CardFooter>
              Tech stack:
              <span role="img" aria-label="mouse">
                <Icon></Icon>
              </span>
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
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
    <div className={`sm:max-w-md md:max-w-2xl mx-auto lg:max-w-4xl`}>
      <div className="px-3 py-2 text-center">
        <h1 className="text-4xl font-bold text-purple-600">Projects</h1>
        <h3 className="text-lg text-gray-600">
          Some of the project that I was working on !
        </h3>
      </div>
      {/* <CreateProjecLink /> */}

      <div className={`mt-6`}>
        <ProjectsList />
      </div>
    </div>
  )
}

ProjectsPage.getLayout = getHomeLayout('Projects | @sondh0127')

export default ProjectsPage
