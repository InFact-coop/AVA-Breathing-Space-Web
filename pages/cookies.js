import styled from 'styled-components'
import client from '../client'
import Container from '../components/Container'
import Information from '../components/Information'

const CookiesStyled = styled(Container).attrs({
  className: '',
})``

const GET_COOKIES_PAGE = `*[_type == "page" && slug.current == "cookies"][0]`

const Cookies = props => {
  return (
    <CookiesStyled>
      <Information {...props} />
    </CookiesStyled>
  )
}

export default Cookies

Cookies.getInitialProps = () => client.fetch(GET_COOKIES_PAGE)
