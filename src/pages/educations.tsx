import MainInfoHeader from '@/components/MainInfoHeader'
import { getHomeLayout } from '@/layouts/HomeLayout'
import { NextPageWithLayout } from '@/types'

const EducationPage: NextPageWithLayout = () => {
  return (
    <div>
      <MainInfoHeader />
      <div
        className={`mx-auto mt-4 mb-12 sm:max-w-md md:max-w-2xl lg:max-w-4xl`}
      >
        <div className="px-3 py-2 text-center">
          <h1 className="text-3xl font-bold text-purple-600 underline uppercase">
            Educations
          </h1>
          {/* <h3 className="text-lg text-gray-600">
      Some of the projects I&apos;ve been working on.
    </h3> */}
        </div>

        <article className={`px-12 prose text-gray-700 dark:text-gray-200`}>
          <div>
            <h3>University</h3>
            <ul>
              <li>
                I&apos;m study at{' '}
                <a
                  href="https://www.facebook.com/GlobalICTBachKhoa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Global ICT program
                </a>{' '}
                , which is fully english training program for IT Engineer from{' '}
                <a
                  href="https://en.hust.edu.vn/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hanoi University of Science and Technology (HUST)
                </a>
              </li>
              <li>
                I have graduated in <strong>Aug 2020</strong> at with{' '}
                <strong>Degree of Enginner in Information Techonology</strong>
              </li>
              <li>
                Degree classification: <strong>Very good</strong> / GPA:{' '}
                <strong>3.31</strong>
              </li>
            </ul>
            <h3>Self learning</h3>
            <p>
              I have complete alot of course, resource tutorial available from
              Internet about my career. Some notable course such as:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                  by <strong>Maximilian Schwarzmüller</strong>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=kfmh2mMf3fs&list=PLN3n1USn4xlkDk8vPVtgyGG3_1eXYPrW-"
                  target="_blank"
                  rel="noreferrer"
                >
                  Typescript, Next.js, And GraphQL Series by{' '}
                  <strong>Ben Awad</strong>
                </a>
              </li>
              <li>
                <a
                  href="https://hasura.io/learn/graphql/nextjs-fullstack-serverless/introduction/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nextjs Frontend GraphQL Tutorial with{' '}
                  <strong>Hasura Learn</strong>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS Tutorial from <strong>The Net Ninja</strong>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Herm workshop on everything you need to build fullstack
                  GraphQL apps <strong>Christian Nwamba</strong>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href="mailto:sondh017@gmail.com">Send me an email </a>
          </div>
        </article>
      </div>
    </div>
  )
}

EducationPage.getLayout = getHomeLayout('Educations | @sondh0127')

export default EducationPage
