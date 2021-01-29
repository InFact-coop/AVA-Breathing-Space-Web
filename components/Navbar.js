/* eslint-disable complexity */
import { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import styled from 'styled-components'
import * as R from 'ramda'
import Link from 'next/link'
import gql from 'graphql-tag'
import Router, { useRouter } from 'next/router'

import getParentPath from '../lib/getParentPath'

import BackIcon from '../public/icons/back-black.svg'
import CrossIcon from '../public/icons/cross-black.svg'
// import HeartIcon from '../public/icons/heart-black.svg'
import { HOME, RELATIVE, DISCARD } from '../lib/constants'
import { ModalContext } from './Modal'

const GET_NAVBAR_COLOUR = gql`
  query {
    state @client {
      navbarColour
    }
  }
`

const BackContainer = styled.div.attrs(({ lines = 1 }) => ({
  className: `${lines > 1 ? 'w-full pt-5' : ''}`,
}))``

const BackButton = styled.img.attrs(({ back, current, closeModal }) => ({
  src: back === DISCARD ? CrossIcon : BackIcon,
  onClick:
    back === HOME
      ? () => Router.push('/')
      : back === DISCARD
      ? () => closeModal()
      : () => Router.push(getParentPath(current)),
}))``

const Back = ({ back, lines, closeModal }) => {
  const { asPath } = useRouter()

  return (
    <BackContainer lines={lines}>
      <BackButton back={back} current={asPath} closeModal={closeModal} />
    </BackContainer>
  )
}

// const Heart = styled.img.attrs({
//   className: '',
//   onClick: () => ({}), // TODO: Write plus-one function
//   src: HeartIcon,
// })``

const Clear = styled.div.attrs({
  className: 'text-gray pr-4.5 font-med',
  children: 'Clear',
})``

// const Filter = styled.div.attrs({
//   className: 'rounded-full border border-gray text-gray font-med px-2.5 py-1.5',
//   children: 'Filter',
// })``

const Title = styled.h1.attrs(({ font = 'sans' }) => ({
  className: `py-5 font-${font} text-center`,
}))``

const TabStyled = styled.a.attrs(({ selected }) => ({
  className: `text-med font-bold py-5 text-center border-b
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
  ({ left, right, border, colour, lines = 1 }) => ({
    className: `flex ${
      lines > 1 ? 'flex-wrap' : 'flex-no-wrap'
    } items-center justify-between bg-${colour}${
      border ? ' border-b border-lightgray' : ''
    }${left ? ' pl-4.5' : ''}${right ? ' pr-5.5' : ''}`,
  }),
)``

const Navbar = ({
  back,
  border,
  colour,
  clear,
  empty,
  fallbackColour,
  font,
  heart,
  lines,
  links,
  title,
}) => {
  const {
    modal: { closeModal },
  } = useContext(ModalContext)

  const { loading, error, data } = useQuery(GET_NAVBAR_COLOUR)
  const { navbarColour } = data && data.state

  if (loading || error) return <div />

  if (links)
    return (
      <NavbarStyled colour={colour}>
        <Tabs />
      </NavbarStyled>
    )

  return (
    <NavbarStyled
      left={back}
      right={heart || empty}
      colour={colour || navbarColour || fallbackColour}
      border={border}
      lines={lines}
    >
      {back && <Back back={back} lines={lines} closeModal={closeModal} />}
      {title && <Title font={font}>{title}</Title>}
      {clear && <Clear onClick={clear} />}
      {(empty || heart) && <div />}
    </NavbarStyled>
  )
}

export const getNavbarOptions = ({ _type, title, clear }) => {
  switch (_type) {
    case 'selfcareTechnique':
      return {
        back: RELATIVE,
        border: true,
        heart: true,
        fallbackColour: 'coral',
        title,
      }
    case 'supportService':
      return {
        back: RELATIVE,
        border: true,
        heart: true,
        empty: true,
        fallbackColour: 'tealcoral',
        title,
      }
    case 'supportCategory':
      return {
        back: RELATIVE,
        border: true,
        empty: true,
        font: 'serif font-xl',
        fallbackColour: 'tealcoral',
        lines: 2,
        title,
      }
    case 'supportFilterType':
      return {
        border: true,
        back: DISCARD,
        clear,
        title: 'Filters',
      }
    case 'questionnaire':
    case 'story':
      return {
        border: true,
        back: RELATIVE,
        heart: true,
        title,
      }
    case 'page':
    case 'form':
      return { back: HOME, border: true, empty: true, title, colour: 'white' }
    default:
      return { links: true, colour: 'white' }
  }
}

export const updateNavbarColour = ({ apollo, colour }) => () =>
  apollo.writeData({
    data: { state: { __typename: 'State', navbarColour: colour } },
  })

export default Navbar
