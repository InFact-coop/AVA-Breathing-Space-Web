import styled from 'styled-components'
import Link from 'next/link'

const FooterStyled = styled.nav.attrs({
  className:
    'flex justify-between w-full fixed bottom-0 bg-lightestgray font-sm pt-9.5 pb-20 px-5 underline',
})`
  a:not(:last-of-type) {
    padding-bottom: 15px;
  }
`

const StyledLink = styled.a``

const Footer = () => (
  <FooterStyled>
    <div className="flex flex-col w-1/2">
      <Link href="/about-ava" passHref>
        <StyledLink>About AVA</StyledLink>
      </Link>
      <Link href="/contact" passHref>
        <StyledLink>Contact us</StyledLink>
      </Link>
      <Link href="/add-to-homescreen" passHref>
        <StyledLink>Add to homescreen</StyledLink>
      </Link>
    </div>
    <div className="flex flex-col w-1/2 pl-5">
      <Link href="/privacy" passHref>
        <StyledLink>Privacy</StyledLink>
      </Link>
      <Link href="/cookies" passHref>
        <StyledLink>Cookies</StyledLink>
      </Link>
    </div>
  </FooterStyled>
)

export default Footer
