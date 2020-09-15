import Link from 'next/link'
import React from 'react'

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
/* ---------------------------------- Data ---------------------------------- */
const skills: Array<TLanguages | TTechnologies | TDevtools> = [
  'typescript',
  'javascript',
  'reactjs',
  'nextjs',
  'tailwindcss',
  'graphql',
  'apolloclient',
  'hasura',
  'redux',
  'docker',
  'antdesign',
  'reactquery',
  'expo',
  'reactnative',
  'python',
  'flask',
  'git',
  'github',
  'vscode',
]
/* ------------------------------- Components ------------------------------- */

const AboutPage: NextPageWithLayout = () => {
  return (
    <div className={`mx-auto mt-6 mb-12 sm:max-w-md md:max-w-2xl lg:max-w-4xl`}>
      <div className="flex flex-col items-center px-3 py-2 text-center">
        <h1 className="text-3xl font-bold text-purple-600 underline uppercase">
          About me
        </h1>
        {/* <h3 className="text-lg text-gray-600">
          Some of the projects I&apos;ve been working on.
        </h3> */}
        <div
          className={`relative flex-shrink-0 w-16 mt-4 text-center no-underline rounded-full select-none sm:mr-6 md:w-32`}
        >
          <img
            alt="avatar"
            className="object-cover w-full h-full bg-purple-300 rounded-full"
            src="https://avatars3.githubusercontent.com/u/62163604?s=460&amp;u=2d0ed85df93a996e55f9f81034abd2975d2342d3&amp;v=4"
            loading="lazy"
          />
        </div>
      </div>

      <article className={`px-12 prose text-gray-700 dark:text-gray-200`}>
        <div>
          <p className={`text-lg`}>My name is Do Hong Son</p>
          <p>
            I&apos;m <span>software engineer</span> focusing on the front-end
            development, currently living in 📍 Hanoi, Vietnam
          </p>
          <p>
            I specialize in creating UI components that include advanced logic,
            beautiful designs, and transitions that can help startups develop
            quality applications efficiently.
          </p>
          <p>
            I&apos;m enthusiastic about self-teaching, exploring and updating
            the latest trends in the webdev industry and the open-source
            community.
          </p>
        </div>

        <div className={`mx-auto`}>
          {/* Hobby */}
          <h2>What do I do in my free time?</h2>
          <ul>
            <li>I love to cook (and eat).</li>
            <li>I like gaming and esports.</li>
            <li>
              I worship the Internet and like to watch Youtube channel about
              technology.{' '}
              <a
                href="https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw"
                target="_blank"
                rel="noreferrer"
              >
                Check out this boi.
              </a>
            </li>
            <li>
              I&apos;m listening to any kind of music from pop, vpop, rap,
              kpop,...
            </li>
            <li>I&apos;m also looking for gym.</li>
          </ul>
        </div>

        <div>
          <h2>Some of my Technical Skills</h2>
          <div className={`grid grid-cols-4 px-4 md:grid-cols-7 gap-y-4`}>
            {skills.map((item) => {
              const teches = { ...TECHNOLOGIES, ...LANGUAGES, ...DEVTOOLS }
              const itemTech = teches[item]
              return (
                <a
                  key={itemTech.name}
                  href={itemTech.website}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-col items-center text-gray-700 hover:text-purple-600`}
                >
                  <img
                    className={`w-12 h-12`}
                    src={itemTech.logo}
                    alt={itemTech.name}
                    style={{ margin: 0 }}
                  />
                </a>
              )
            })}
          </div>

          <h2>My stacks</h2>
          <a
            href="https://github.com/sondh0127/nextjs-hasura-fullstack"
            target="_blank"
            rel="noreferrer"
          >
            React + Typescript + GraphQL + NextJs + Hasura
          </a>

          <h2>
            <Link href="/projects">
              <a href="/projects">Check my works !</a>
            </Link>
          </h2>
        </div>

        <div>
          <a href="mailto:sondh017@gmail.com">Send me an email </a>
        </div>
      </article>
    </div>
  )
}

AboutPage.getLayout = getHomeLayout('About me | @sondh0127')

export default AboutPage
