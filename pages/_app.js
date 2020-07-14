import * as Sentry from '@sentry/node'

import App from 'next/app'
import { ApolloProvider } from 'react-apollo'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'use-react-modal'

import withData from '../lib/withData'
import tailwindConfig from '../tailwind.config.js' //eslint-disable-line
import '../styles/index.css' //eslint-disable-line

import Page from '../components/Page'
import Meta from '../components/Meta'

const { theme } = resolveConfig(tailwindConfig)

Sentry.init({
  enabled: process.env.NODE_ENV !== 'production',
  dsn: process.env.SENTRY_DSN,
})

class BreathingSpace extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = (await Component.getInitialProps(ctx)) || {}
    }

    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps, err } = this.props
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <Meta />
          <Provider background={theme.colors.blackoverlay}>
            <Page _type={pageProps._type} title={pageProps.title}>
              <Component {...pageProps} err={err} />
            </Page>
          </Provider>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withData(BreathingSpace)
