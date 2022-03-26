/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  webpack: (config) => {
    config.plugins.push(
      require('unplugin-auto-import/webpack')({
        imports: ['react'],
      })
    )

    config.plugins.push(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
        extension: 'jsx',
      })
    )

    // const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    // fileLoaderRule.exclude = /\.svg$/
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   loader: require.resolve('@svgr/webpack'),
    // })
    return config
  },
}
module.exports = nextConfig
