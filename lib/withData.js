import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import stateResolvers from './resolvers'
import typeDefs from './typeDefs'

const createClient = () => {
  const cache = new InMemoryCache()
  const getState = query => cache.readQuery({ query }).state
  const writeState = state => {
    return cache.writeData({ data: { state } })
  }

  const initState = () => {
    const state = {
      navbarColour: '',
      __typename: 'State',
    }

    writeState(state)
  }

  initState()

  return new ApolloClient({
    uri: 'https://is8j72h6.api.sanity.io/v1/graphql/production/default',
    cache,
    resolvers: stateResolvers(getState, writeState),
    typeDefs,
  })
}

export default withApollo(createClient)
