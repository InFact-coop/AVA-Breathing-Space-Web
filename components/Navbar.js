/* eslint-disable complexity */
import { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import styled from 'styled-components'
import * as R from 'ramda'
import Link from 'next/link'
import gql from 'graphql-tag'
import Router, { useRouter } from 'next/router'

import client from '../client'
import AppContext from '../lib/AppContext'
import getParentPath from '../lib/getParentPath'

import BackIcon from '../public/icons/back-black.svg'
import CrossIcon from '../public/icons/cross-black.svg'
import HeartIcon from '../public/icons/heart-black.svg'
import HeartFilledIcon from '../public/icons/heart-black-filled.svg'
import { HOME, RELATIVE, DISCARD } from '../lib/constants'

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
const NextButton = styled.button.attrs({
  className: '',
})``

const Next = ({ next, onClick }) =>
  next === 'end' ? (
    <div />
  ) : (
    <NextButton onClick={onClick}>
      <img src="/icons/next.svg" alt="Next button" />
    </NextButton>
  )

const Heart = ({ pageID, likedPageIDs, setLikedPageIDs }) => {
  const isLiked = R.includes(pageID, likedPageIDs)
  return (
    <button
      onClick={async () => {
        if (isLiked) {
          setLikedPageIDs(R.without([pageID], likedPageIDs))
          await client.patch(pageID).dec({ likes: 1 }).commit()
        }
        if (!isLiked) {
          setLikedPageIDs(R.append(pageID, likedPageIDs))
          await client.patch(pageID).inc({ likes: 1 }).commit()
        }
      }}
    >
      <img src={isLiked ? HeartFilledIcon : HeartIcon} alt="Heart icon" />
    </button>
  )
}

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
    }${left ? ' pl-5' : ''}${right ? ' pr-5.5' : ''}`,
  }),
)``

const Navbar = ({
  back,
  border,
  colour,
  clear,
  emptyLeft,
  emptyRight,
  fallbackColour,
  next,
  font,
  heart,
  lines,
  links,
  title,
}) => {
  const {
    modal: { closeModal },
    pageID,
    likedPageIDs,
    setLikedPageIDs,
  } = useContext(AppContext)

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
      left={back || emptyLeft}
      right={next || heart || emptyRight}
      colour={colour || navbarColour || fallbackColour}
      border={border}
      lines={lines}
    >
      {back && <Back back={back} lines={lines} closeModal={closeModal} />}
      {emptyLeft && <div />}
      {title && <Title font={font}>{title}</Title>}
      {next && <Next next={next} onClick={next} />}
      {clear && <Clear onClick={clear} />}
      {heart && (
        <Heart
          pageID={pageID}
          likedPageIDs={likedPageIDs}
          setLikedPageIDs={setLikedPageIDs}
        />
      )}
      {emptyRight && <div />}
    </NavbarStyled>
  )
}

export const getNavbarOptions = ({ _type, title, clear, next }) => {
  switch (_type) {
    case 'onboarding':
      return {
        border: true,
        colour: 'white',
        emptyLeft: true,
        next,
        title,
      }
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
        fallbackColour: 'tealcoral',
        title,
      }
    case 'supportCategory':
      return {
        back: RELATIVE,
        border: true,
        emptyRight: true,
        font: 'serif font-xl',
        fallbackColour: 'tealcoral',
        lines: 2,
        title,
      }
    case 'supportFilterType':
    case 'locationFilterType':
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
      return {
        back: HOME,
        border: true,
        emptyRight: true,
        title,
        colour: 'white',
      }
    default:
      return { links: true, colour: 'white' }
  }
}

export const updateNavbarColour = ({ apollo, colour }) => () =>
  apollo.writeData({
    data: { state: { __typename: 'State', navbarColour: colour } },
  })

export default Navbar
