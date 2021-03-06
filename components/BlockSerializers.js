/* eslint-disable react/display-name */
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'
import client from '../client'
import tailwindConfig from '../tailwind.config.js' //eslint-disable-line
import infoIcon from '../public/icons/infoWhite.svg'
import toggleInfo from '../public/icons/toggleInfo.svg'
import Contact from './Contact'

const { theme } = resolveConfig(tailwindConfig)

const Block = ({ className, body, imageOptions }) => (
  <BlockContent
    blocks={body}
    className={className}
    renderContainerOnSingleChild={true}
    imageOptions={imageOptions}
    serializers={serializers}
    projectId="is8j72h6"
    dataset={process.env.SANITY_DATASET}
    {...client.config()}
  />
)

const StyledList = styled.ul.attrs({
  className: 'pt-2.5 mb-5',
})`
  > li:not(:last-of-type) {
    padding-bottom: 10px;
  }
`

const StyledListItem = styled.li.attrs({
  className: '',
})`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;

  span {
    margin-left: -6px;
  }
`

const StyledParagraph = styled.p.attrs({
  className: 'mb-5',
})`
  a {
    color: ${theme.colors.teal};
    text-decoration: underline;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const StyledSubheading = styled.h2.attrs({
  className: 'font-bold font-base mb-5',
})``

const KarlaHeading = styled.h1.attrs({
  className: 'font-karla font-xl mb-2.5',
})``

const PurpleHeading = styled.h3.attrs({
  className: 'font-serif font-xl pb-5 mt-10 text-darkpurple',
})``

const StandoutParagraph = styled.h4.attrs({
  className: 'font-xl mb-5 font-serif',
})`
  a {
    color: ${theme.colors.teal};
    text-decoration: underline;
  }
`

const Linebreak = styled.hr.attrs({
  className: 'text-midgray left-0 w-100 my-7.5',
})``

const Background = styled.div.attrs({
  className: 'bg-teal flex items-start text-white rounded-1.5 p-2.5 mt-1 mb-5',
})``

const RestyledContact = styled(Contact).attrs({})`
  padding: 0;
  border: none;
  box-shadow: none;
`

const ToggleContainer = styled.div.attrs({
  className: 'flex justify-between',
})`
  details {
    display: inline;
    width: 100%;
  }

  summary {
    list-style-type: none;
    width: calc(100%);
  }

  [open] summary {
    img {
      transform: rotate(180deg);
    }
  }

  position: relative;
`

const Toggle = ({ props }) => {
  const { title, content } = props.node

  return (
    <ToggleContainer>
      <details>
        <summary className="mb-4.5 underline font-bold flex justify-between">
          <span>{title}</span>
          <img alt="arrow icon" src={toggleInfo} />
        </summary>
        <Block body={content} />
      </details>
    </ToggleContainer>
  )
}

const serializers = {
  list: ({ children }) => {
    return <StyledList>{children}</StyledList>
  },
  listItem: ({ children }) => {
    return (
      <StyledListItem>
        <span>{children}</span>
      </StyledListItem>
    )
  },
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <KarlaHeading>{props.children}</KarlaHeading>
        case 'h2':
          return <StyledSubheading>{props.children}</StyledSubheading>
        case 'h3':
          return <PurpleHeading>{props.children}</PurpleHeading>
        case 'h4':
          return <StandoutParagraph>{props.children}</StandoutParagraph>
        case 'blockquote':
          return (
            <Background>
              <img alt="info icon" src={infoIcon} />
              <p className="ml-2.5">{props.children}</p>
            </Background>
          )
        case 'hr':
          return <Linebreak />
        default:
          return <StyledParagraph>{props.children}</StyledParagraph>
      }
    },
    supportPhoneline(props) {
      const { title, phoneNumber, openingHours, additionalInfo } = props.node

      return (
        <RestyledContact
          title={title}
          phoneNumber={phoneNumber}
          openingHours={openingHours}
          additionalInfo={additionalInfo}
        />
      )
    },
    audio(props) {
      const { audioURL } = props.node
      return (
        <audio controls className="mb-2.5 -mt-2.5 w-full">
          <source src={audioURL} />
        </audio>
      )
    },
    toggle(props) {
      return <Toggle props={props} />
    },

    marks: {
      internalLink: ({ mark, children }) => {
        const { slug = {} } = mark
        const href = `/${slug.current}`
        return <a href={href}>{children}</a>
      },
      link: ({ mark, children }) => {
        const { blank, href } = mark
        return blank ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        )
      },
    },
  },
}

export { serializers, Block }
