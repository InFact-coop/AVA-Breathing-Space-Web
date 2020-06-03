import styled from 'styled-components'
import Container from '../components/Container'
import client from '../client'
import Information from '../components/Information'

const GET_ABOUT_AVA_PAGE = `*[_type == "page" && slug.current == "about-ava"][0]`

const AboutAvaStyled = styled(Container).attrs({
  className: '',
})``

const AboutAVA = props => {
  return (
      <AboutAvaStyled>
        <Information {...props} />
      </AboutAvaStyled>
  )
}

export default AboutAVA

AboutAVA.getInitialProps = () => client.fetch(GET_ABOUT_AVA_PAGE)
