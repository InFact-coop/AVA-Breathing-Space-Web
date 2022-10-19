import styled from 'styled-components'
import Link from 'next/link'
import CloseMenu from '../public/icons/cross-black.svg'
import Menu from '../public/icons/nav-menu-icon.svg'

const NavMenuContainer = styled.nav.attrs({
  className: 'flex-col justify-between w-full font-sans font-med bg-tealcoral',
})`
  height: 100vh;
`

const StyledLink = styled.a.attrs({
  className: 'text-black font-bold py-4.5 px-5 border-midgray',
})`
  border-bottom-width: 0.5px;
`

const NavButton = styled.img.attrs(({ navOpen, setNavOpen }) => ({
  src: navOpen ? CloseMenu : Menu,
  onClick: navOpen ? () => setNavOpen(false) : () => setNavOpen(true),
}))`
  height: 18px;
`

const TopNavContainer = styled.nav.attrs({
  className:
    'flex bg-white justify-between w-full h-17.5 pb-4 pt-7.5 px-5 font-xl font-serif border-midgray',
})`
  border-bottom-width: 0.5px;
`

const NavClosed = ({ navOpen, setNavOpen }) => (
  <TopNavContainer>
    <p>Staying Mum</p>
    <NavButton navOpen={navOpen} setNavOpen={setNavOpen} />
  </TopNavContainer>
)

const NavOpen = ({ navOpen, setNavOpen }) => (
  <NavMenuContainer>
    <TopNavContainer>
      <p>Staying Mum</p>
      <NavButton navOpen={navOpen} setNavOpen={setNavOpen} />
    </TopNavContainer>
    <div className="flex flex-col grow">
      <Link href="/staying-mum" passHref>
        <StyledLink onClick={() => setNavOpen(false)}>Your journey</StyledLink>
      </Link>
      <Link href="/staying-mum/whos-who" passHref>
        <StyledLink onClick={() => setNavOpen(false)}>
          Who&apos;s who - professionals
        </StyledLink>
      </Link>
      <Link href="/staying-mum/support" passHref>
        <StyledLink onClick={() => setNavOpen(false)}>Support</StyledLink>
      </Link>
      <Link href="/staying-mum/stories" passHref>
        <StyledLink onClick={() => setNavOpen(false)}>Stories</StyledLink>
      </Link>
      <Link href="/staying-mum/about-staying-mum" passHref>
        <StyledLink onClick={() => setNavOpen(false)}>
          About Staying Mum
        </StyledLink>
      </Link>
      <Link onClick={() => setNavOpen(false)} href="/need-immediate-help">
        <button className="py-4.5 pl-4.5 block rounded-2.5 cursor-pointer text-left bg-darkpurple text-white my-4.5 mx-5">
          Need immediate help?
        </button>
      </Link>
    </div>
  </NavMenuContainer>
)

const StayingMumNav = ({ navOpen, setNavOpen }) =>
  navOpen ? (
    <NavOpen navOpen={navOpen} setNavOpen={setNavOpen} />
  ) : (
    <NavClosed navOpen={navOpen} setNavOpen={setNavOpen} />
  )

export default StayingMumNav
