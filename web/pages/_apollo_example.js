import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import * as R from 'ramda'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const GET_SELF_CARE_TECHNIQUES = gql`
  query GET_SELF_CARE_TECHNIQUES {
    allSelfcareTechnique {
      title
      summary
    }
  }
`

const ServiceStyled = styled.p.attrs({
  className: 'bg-coral font-header',
})``

const Service = ({ summary }) => <ServiceStyled>{summary}</ServiceStyled>

const IndexStyled = styled.section.attrs({
  className: '',
})``

const Index = () => {
  return (
    <IndexStyled>
      <Navbar />
      <Query query={GET_SELF_CARE_TECHNIQUES}>
        {({ data, error, loading }) => {
          if (loading) return <p>LOADING...</p>
          if (error)
            return <ServiceStyled>Error: {error.message}</ServiceStyled>
          return R.map(Service)(data.allSelfcareTechnique)
        }}
      </Query>
    </IndexStyled>
  )
}

export default Index
