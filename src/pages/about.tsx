import Link from 'next/link'
import React from 'react'

import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

const AboutPage: NextPageWithLayout = () => {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>Software engineer</p>
      <p>2020 new graduated</p>
      <p>Frontend development</p>
      <p>My Name is Do Hong Son</p>
      <p>
        <p>I am a software engineer focusing on the front-end development</p>
        from Hanoi, Vietnam
        <p>
          that specialized in creating UI components that include advanced
          logic, beautiful styles, and transitions. I help startups develop
          quality applications efficiently.
        </p>
        <p>
          I like to learn, explore and be updated about the latest trends in the
          industry and the open source community.
        </p>
        <Link href="/">
          <a href="/">Go home</a>
        </Link>
      </p>
      {/* Hobby */}
      <p>What do I do in my free time?</p>
      <p>
        Watching youtube technology. My favorite youtuber is BenAwad. RocketSeat
      </p>
      <p> Listening to music video like vpop, kpop</p>
      <p>Playing video game: Dota 2</p>
      <p>Looking for gym</p>
      {/* Stack */}
      <p>My current stack is React and TypeScript.</p>
      {/* Skill */}
      <a href="mailto:sondh017@gmail.com">Send me an email </a>
    </React.Fragment>
  )
}

AboutPage.getLayout = getHomeLayout('About me | @sondh0127')

export default AboutPage
