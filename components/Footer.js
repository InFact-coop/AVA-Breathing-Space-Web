import styled from 'styled-components'
import Link from 'next/link'

const FooterStyled = styled.nav.attrs({
  className:
    'flex justify-between w-full bottom-0 bg-lightestgray font-med pt-10 pb-27 px-5 underline',
})`
  a:not(:last-of-type) {
    padding-bottom: 15px;
  }
`

const StyledLink = styled.a``

const Footer = () => (
  <FooterStyled>
    <div className="flex flex-col">
      <Link href="/about-us" passHref>
        <StyledLink>About Us</StyledLink>
      </Link>
      <Link href="/contact-us" passHref>
        <StyledLink>Contact us</StyledLink>
      </Link>
      <Link href="/add-to-homescreen" passHref>
        <StyledLink>Add to homescreen</StyledLink>
      </Link>
      <Link href="/feedback" passHref>
        <StyledLink>Give feedback</StyledLink>
      </Link>{' '}
      <Link href="/privacy-and-cookies" passHref>
        <StyledLink>Privacy and Cookies</StyledLink>
      </Link>
      <Link href="/online-safety" passHref>
        <StyledLink>Online Safety</StyledLink>
      </Link>
      <Link href="/quick-exit" passHref>
        <StyledLink>Quick Exit</StyledLink>
      </Link>
    </div>
  </FooterStyled>
)

export default Footer
