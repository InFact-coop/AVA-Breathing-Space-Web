import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

const createClient = () =>
  new ApolloClient({
    uri: 'ENTER CLIENT HERE',
  })

export default withApollo(createClient)
