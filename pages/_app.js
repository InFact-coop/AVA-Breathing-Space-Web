import App from 'next/app'
import { ApolloProvider } from 'react-apollo'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'use-react-modal'
import Router from 'next/router'
import * as gtag from '../lib/gtag'

import withData from '../lib/withData'
import tailwindConfig from '../tailwind.config.js' //eslint-disable-line
import '../styles/index.css' //eslint-disable-line

import Page from '../components/Page'
import Meta from '../components/Meta'

const { theme } = resolveConfig(tailwindConfig)

class BreathingSpace extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = (await Component.getInitialProps(ctx)) || {}
    }

    pageProps.query = ctx.query
    return { pageProps }
  }

  componentDidMount() {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }

  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <Meta />
          <Provider background={theme.colors.blackoverlay}>
            <Page
              _type={pageProps._type}
              title={pageProps.title}
              pageTitle={pageProps.pageTitle}
            >
              <Component theme={theme} {...pageProps} />
            </Page>
          </Provider>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withData(BreathingSpace)
