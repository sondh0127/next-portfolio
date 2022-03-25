const AutoImport = require('unplugin-auto-import/webpack')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      AutoImport({
        imports: ['react'],
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
