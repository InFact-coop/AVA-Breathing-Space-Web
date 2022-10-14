/* eslint-disable complexity */
import { useQuery } from '@apollo/react-hooks'

import styled from 'styled-components'
import gql from 'graphql-tag'
import Router, { useRouter } from 'next/router'

import getParentPath from '../lib/getParentPath'

import BackIcon from '../public/icons/back-black.svg'
import { HOME } from '../lib/constants'

const GET_NAVBAR_COLOUR = gql`
  query {
    state @client {
      navbarColour
    }
  }
`

const BackButton = styled.img.attrs(({ back, current }) => ({
  src: BackIcon,
  onClick:
    back === HOME
      ? () => Router.push('/staying-mum')
      : () => Router.push(getParentPath(current)),
}))``

const Back = ({ back }) => {
  const { asPath } = useRouter()
  return <BackButton back={back} current={asPath} />
}

const Title = styled.h1.attrs(({ font = 'sans' }) => ({
  className: `py-5 font-${font} text-center`,
}))``

const TitleCardStyled = styled.nav.attrs(
  ({ left, right, border, colour, lines = 1 }) => ({
    className: `flex ${
      lines > 1 ? 'flex-wrap' : 'flex-no-wrap'
    } items-center justify-between bg-${colour}${
      border ? ' border-b border-lightgray' : ''
    }${left ? ' pl-5' : ''}${right ? ' pr-5.5' : ''}`,
  }),
)``

const TitleCard = ({ back, colour, fallbackColour, font, title }) => {
  const { loading, error, data } = useQuery(GET_NAVBAR_COLOUR)
  const { navbarColour } = data && data.state

  if (loading || error) return <div />

  return (
    <TitleCardStyled colour={colour || navbarColour || fallbackColour}>
      {back && <Back back={back} />}
      {title && <Title font={font}>{title}</Title>}
    </TitleCardStyled>
  )
}

export const getTitleCardOptions = ({
  _type,
  title,
  colour,
  illustration,
  bgIllustration,
}) => {
  switch (_type) {
    case 'topic':
      return {
        illustration,
        bgIllustration,
        colour,
        title,
        fallbackColour: 'coral',
      }
    case 'page':
      return title.includes('Staying Mum')
        ? {}
        : {
            title,
            fallbackColour: 'coral',
          }

    case 'article':
    case 'person':
    case 'form':
    default:
      return {
        title,
        fallbackColour: 'coral',
      }
  }
}

export const updateNavbarColour = ({ apollo, colour }) => () =>
  apollo.writeData({
    data: { state: { __typename: 'State', navbarColour: colour } },
  })

export default TitleCard
