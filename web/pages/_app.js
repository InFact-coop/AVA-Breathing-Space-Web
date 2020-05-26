import App from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'

import Page from '../components/Page'
import Meta from '../components/Meta'

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
        <Meta />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    )
  }
}

export default withData(BreathingSpace)
