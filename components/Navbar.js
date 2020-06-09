import styled from 'styled-components'
import * as R from 'ramda'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

import BackIcon from '../public/icons/back-black.svg'
import HeartIcon from '../public/icons/heart-black.svg'

const Back = styled.img.attrs({
  className: '',
  src: BackIcon,
})``

const Heart = styled.img.attrs({
  className: '',
  onClick: () => ({}), // TODO: Write plus-one function
  src: HeartIcon,
})``

const Title = styled.h1.attrs({ className: 'py-5' })``

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

const Tabs = () => (
  <>
    <Tab href="/">Support</Tab>
    <Tab href="/self-care">Self-Care</Tab>
    <Tab href="/stories">Stories</Tab>
  </>
)

const NavbarStyled = styled.nav.attrs(
  ({ left, right, border, colour = 'white' }) => ({
    className: `flex items-center justify-between bg-${colour}${
      border ? ' border-b border-lightgray' : ''
    }${left ? ' pl-4.5' : ''}${right ? ' pr-5.5' : ''}`,
  }),
)``

const Navbar = ({
  border,
  links,
  title,
  heart,
  back,
  empty,
  colour,
  backToHome,
}) => {
  if (links)
    return (
      <NavbarStyled>
        <Tabs />
      </NavbarStyled>
    )

  return (
    <NavbarStyled
      left={back}
      right={heart || empty}
      colour={colour}
      border={border}
    >
      {back && (
        <Back onClick={() => (backToHome ? Router.push('/') : Router.back())} />
      )}
      {title && <Title>{title}</Title>}
      {heart && <Heart />}
      {empty && <div />}
    </NavbarStyled>
  )
}

export const getNavbarOptions = ({ _type, title }) => {
  switch (_type) {
    case 'selfcareTechnique':
      return { border: true, back: true, heart: true, title, colour: 'coral' }
    case 'questionnaire':
    case 'page':
      return { border: true, back: true, backToHome: true, title, empty: true }
    default:
      return { links: true }
  }
}
export default Navbar
