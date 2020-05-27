import '../styles/index.css'

import App from 'next/app'
import { ApolloProvider } from 'react-apollo'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ThemeProvider } from 'styled-components'
import withData from '../lib/withData'

import Page from '../components/Page'
import Meta from '../components/Meta'

import tailwindConfig from '../tailwind.config.js' //eslint-disable-line

const { theme } = resolveConfig(tailwindConfig)

class BreathingSpace extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <Meta />
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withData(BreathingSpace)
