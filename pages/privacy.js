import styled from 'styled-components'
import Container from '../components/Container'
import client from '../client'
import Information from '../components/Information'

const GET_PRIVACY_POLICY = `*[_type == "page" && slug.current == "privacy-policy"][0]`

const PrivacyStyled = styled(Container).attrs({
  className: '',
})``

const Privacy = props => (
  <PrivacyStyled>
    <Information {...props} />
  </PrivacyStyled>
)

export default Privacy

Privacy.getInitialProps = () => client.fetch(GET_PRIVACY_POLICY)
