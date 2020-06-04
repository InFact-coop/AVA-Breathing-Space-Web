import styled from 'styled-components'
import Container from '../components/Container'

const CookiesStyled = styled.section.attrs({
  className: '',
})``

const Cookies = () => (
  <Container bgColour="lightgrey">
    <CookiesStyled>Cookies</CookiesStyled>
  </Container>
)

export default Cookies
