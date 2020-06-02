import styled from 'styled-components'
import * as R from 'ramda'
import Link from 'next/link'
import { useRouter } from 'next/router'

const TabStyled = styled.a.attrs(({ selected }) => ({
  className: `text-sm font-bold py-5 text-center border-b
  ${selected ? 'text-black border-black' : 'text-gray border-lightgray'}`,
}))`
  flex: 1;
`

const Tab = ({ href, children }) => {
  const { pathname } = useRouter()
  const isTabActive = R.equals(href, pathname)

  return (
    <Link href={href} passHref>
      <TabStyled selected={isTabActive}>{children}</TabStyled>
    </Link>
  )
}

const NavbarStyled = styled.nav.attrs({
  className: 'flex items-center bg-white',
})``

const Navbar = () => (
  <NavbarStyled>
    <Tab href="/">Support</Tab>
    <Tab href="/self-care">Self-Care</Tab>
    <Tab href="/stories">Stories</Tab>
  </NavbarStyled>
)

export default Navbar
