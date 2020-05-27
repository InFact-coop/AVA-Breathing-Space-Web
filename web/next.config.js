const webpack = require('webpack') //eslint-disable-line
const path = require('path') //eslint-disable-line
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')

const FRONTEND_ENV_KEYS = ['NODE_ENV']

const envPlugin = FRONTEND_ENV_KEYS.reduce(
  (result, key) => ({
    ...result,
    [`process.env.${key}`]: JSON.stringify(process.env[key]),
  }),
  {},
)

module.exports = withPlugins([withImages, withCSS, withFonts], {
  webpack: (config, { _isServer }) => {
    // adds access to specific env variables on front end
    config.plugins.push(new webpack.DefinePlugin(envPlugin))

    config.plugins.push(
      new webpack.ProvidePlugin({
        cssTheme: path.resolve(path.join(__dirname, 'styles/theme')),
      }),
    )

    return config
  },
})
