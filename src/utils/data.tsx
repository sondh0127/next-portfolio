export const LANGUAGES = {
  javascript: {
    name: 'Typescript',
    logo: `https://cdn.worldvectorlogo.com/logos/javascript.svg`,
    website: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
  },
  typescript: {
    name: 'Typescript',
    logo: `https://cdn.worldvectorlogo.com/logos/typescript.svg`,
    website: `https://www.typescriptlang.org/`,
  },
}

export type TLanguages = keyof typeof LANGUAGES

export const TECHNOLOGIES = {
  reactjs: {
    name: 'React',
    logo: `https://reactjs.org/favicon-32x32.png?v=f4d46f030265b4c48a05c999b8d93791`,
    website: `https://reactjs.org/`,
  },
  nextjs: {
    name: 'Next.js',
    logo: `https://nextjs.org/static/favicon/favicon.ico`,
    website: `https://reactjs.org/`,
  },
  tailwindcss: {
    name: 'Tailwindcss',
    logo: `https://tailwindcss.com/favicon-32x32.png`,
    website: `https://tailwindcss.com/`,
  },
  graphql: {
    name: 'GraphQL',
    logo: `https://graphql.org/img/favicon.png`,
    website: `https://graphql.org/`,
  },
  hasura: {
    name: 'Hasura',
    logo: `https://hasura.io/icons-2dd80234672d9f3a718137c7b0cda15b/favicon.ico`,
    website: `https://hasura.io/`,
  },
  eui: {
    name: 'Elastic UI',
    logo: `https://www.elastic.co/favicon.ico`,
    website: `https://elastic.github.io/eui/#/`,
  },
}

export type TTechnologies = keyof typeof TECHNOLOGIES

export const DEVTOOLS = {
  storybook: {
    name: 'Storybook',
    logo: `https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm.png`,
    website: `https://storybook.js.org/`,
  },
  lerna: {
    name: 'Lerna',
    logo: `https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png`,
    website: `https://lerna.js.org/`,
  },
  tsdx: {
    name: 'TSDX',
    logo: `https://tsdx.io/favicon/favicon-32x32.png`,
    website: `https://tsdx.io/`,
  },
  docker: {
    name: 'Docker',
    logo: `https://www.docker.com/sites/default/files/d8/Docker-R-Logo-08-2018-Monochomatic-RGB_Moby-x1.png`,
    website: `https://www.docker.com/`,
  },
}

export type TDevtools = keyof typeof DEVTOOLS
