import styled from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'
import nextIcon from '../public/icons/next.svg'

import tailwindConfig from '../tailwind.config.js' //eslint-disable-line

const { theme } = resolveConfig(tailwindConfig)

const Button = styled.a.attrs({
  className: 'py-4.5 rounded-2.5 block text-center tc font-med cursor-pointer',
})``

const PurpleButton = styled(Button).attrs({
  className: 'bg-lightviolet',
})``

const CoralButton = styled(Button).attrs({
  className: 'bg-coral',
})``

const OutlineButton = styled(Button).attrs({
  className: 'bg-white border border-lightgray mb-2.5',
})``

export const AccordionContainer = styled.div.attrs({
  className: 'flex justify-between font-sm my-3',
})`
  details {
    display: inline;
    width: 100%;
    border: ${({ border }) => `0.5px solid ${border}`};
    border-radius: 10px;

    > li:not(:last-of-type) {
      border-bottom: 0.5px solid grey;
    }

    > li:last-of-type {
      padding-bottom: 20px;
    }
  }

  summary {
    list-style-type: none;
    width: calc(100%);
  }

  [open] summary {
    border: ${({ border }) => `0.5px solid ${border}`};
    border-radius: 10px;
  }

  summary:after {
    content: '+';
    font-size: 30px;
  }

  [open] summary:after {
    content: '-';
    font-size: 30px;
  }

  position: relative;
`

const AccordionContentItem = ({ newTab, slug, title }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={`/${slug}`}
      rel={newTab ? 'noreferrer' : ''}
      target={newTab ? '_blank' : ''}
      key={slug}
    >
      <li className="font-bold p-4 flex justify-between items-center">
        <p className="mr-4">{title}</p>
        <img src={nextIcon} alt="Next icon" />
      </li>
    </a>
  )
}

const AccordionButton = ({
  content,
  introText,
  buttonText,
  newTab,
  themeColour: { solid, border, opacity },
}) => {
  return border && content ? (
    <AccordionContainer border={theme.colors[border]}>
      <details>
        <summary
          className={`bg-${solid} bg-opacity-${opacity} font-serif  py-3.5 px-4 rounded-2.5 block  font-med cursor-pointer flex justify-between`}
        >
          <p>{buttonText}</p>
        </summary>
        {introText && <p className="px-4 pt-4">{introText}</p>}
        {content &&
          content.map(({ slug, title }) => (
            <AccordionContentItem
              newTab={newTab}
              slug={slug}
              title={title}
              key={slug}
            />
          ))}
      </details>
    </AccordionContainer>
  ) : (
    <div />
  )
}

export { Button, PurpleButton, CoralButton, OutlineButton, AccordionButton }
