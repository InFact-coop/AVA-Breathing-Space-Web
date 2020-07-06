const webpack = require('webpack') //eslint-disable-line

const path = require('path') //eslint-disable-line
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withPWA = require('next-pwa')

const FRONTEND_ENV_KEYS = [
  'NODE_ENV',
  'HOST',
  'SANITY_DATASET',
  'SANITY_TOKEN',
  'SANITY_ID',
  'SENTRY_DSN',
  'SENTRY_ORG',
  'SENTRY_PROJECT',
  'SENTRY_AUTH_TOKEN',
]

if (process.env.HEROKU_APP_NAME) {
  process.env.HOST = `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
}

const envPlugin = FRONTEND_ENV_KEYS.reduce(
  (result, key) => ({
    ...result,
    [`process.env.${key}`]: JSON.stringify(process.env[key]),
  }),
  {},
)

module.exports = withPlugins(
  [withImages, withCSS, withFonts, [withPWA, { pwa: { dest: 'public' } }]],
  {
    webpack: (config, { _isServer }) => {
      config.plugins.push(
        new webpack.ProvidePlugin({
          cssTheme: path.resolve(path.join(__dirname, 'styles/theme')),
        }),
      )

      // adds access to specific env variables on front end
      config.plugins.push(new webpack.DefinePlugin(envPlugin))

      return config
    },
  },
)
