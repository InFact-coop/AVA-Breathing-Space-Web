/* eslint-disable complexity */

import styled from 'styled-components'
import Router, { useRouter } from 'next/router'
import resolveConfig from 'tailwindcss/resolveConfig'
import getParentPath from '../lib/getParentPath'

import BackIcon from '../public/icons/back-black.svg'
import { HOME, RELATIVE } from '../lib/constants'
import tailwindConfig from '../tailwind.config.js' //eslint-disable-line

const { theme } = resolveConfig(tailwindConfig)

const TitleCardStyled = styled.div.attrs({
  className: `w-100 pb-4.5 pt-3.5 px-6 `,
})`
  background-image: ${({ titleBgIllustration, themeColour }) =>
    `url(${titleBgIllustration}), ${theme.colors[themeColour]}`};
  background-position: 40px 100%, right bottom;
  background-repeat: no-repeat;
  background-size: cover;
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

const TitleCard = cardVars => {
  const {
    titleCardOptions,
    themeColour,
    titleIllustration,
    titleBgIllustration,
  } = cardVars

  if (titleCardOptions.title) {
    const { back, title } = titleCardOptions

    return (
      <TitleCardStyled
        themeColour={themeColour.gradient}
        titleBgIllustration={titleBgIllustration}
      >
        {back && <Back back={back} />}
        <div>
          <div className="flex font-bold justify-start items-center mt-5 mr-10">
            {titleIllustration && (
              <img
                src={titleIllustration}
                className="h-16 mr-10"
                alt="drawn illustration"
              />
            )}
            {title && <p>{title}</p>}
          </div>
        </div>
      </TitleCardStyled>
    )
  } else {
    return null
  }
}

export const getTitleCardOptions = ({ _type, title, summaryTitle }) => {
  switch (_type) {
    case 'topic':
      return {
        back: RELATIVE,
        title: summaryTitle,
      }
    case 'page':
      return title.includes('Staying Mum')
        ? {}
        : {
            title,
            back: RELATIVE,
          }

    case 'article':
    case 'person':
    case 'form':
    default:
      return {
        back: RELATIVE,
        title,
      }
  }
}

export default TitleCard
