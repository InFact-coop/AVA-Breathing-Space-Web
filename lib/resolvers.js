import gql from 'graphql-tag'

const getAppState = gql`
  query {
    state @client {
      navbarColour
    }
  }
`
export default (getState, writeState) => {
  return {
    Mutation: {
      updateAppState(_, updated) {
        const state = getState(getAppState)

        const newState = {
          ...updated,
          ...state,
        }

        writeState(newState)
        return newState
      },
    },
  }
}
