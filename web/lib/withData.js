import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

const createClient = () =>
  new ApolloClient({
    uri: 'https://is8j72h6.api.sanity.io/v1/graphql/production/default',
  })

export default withApollo(createClient)
