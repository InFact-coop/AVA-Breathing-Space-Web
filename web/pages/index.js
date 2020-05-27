import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import * as R from 'ramda'
import styled from 'styled-components'

const GET_SERVICES_QUERY = gql`
  query GET_SERVICES_QUERY {
    allService {
      name
    }
  }
`

const ServiceStyled = styled.p.attrs({
  className: 'bg-coral font-header martin_sheen',
})``

const Service = ({ name }) => <ServiceStyled>{name}</ServiceStyled>
const Index = () => {
  return (
    <div>
      <Query query={GET_SERVICES_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>LOADING...</p>
          if (error)
            return <ServiceStyled>Error: {error.message}</ServiceStyled>
          return R.map(Service)(data.allService)
        }}
      </Query>
    </div>
  )
}

export default Index
