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

const StayingMumButton = styled.a.attrs({
  className:
    'p-4 flex bg-opacity-30 justify-between font-med cursor-pointer bg-lightblue border border-gray rounded-2.5 text-left',
})``

export const AccordionContainer = styled.div.attrs({
  className: 'flex justify-between font-sm',
})``

const Details = styled.details.attrs({})`
  display: inline;
  width: 100%;
  border: ${({ border }) => `0.5px solid ${border}`};
  border-radius: 10px;

  summary:after {
    content: '+';
    font-size: 30px;
  }

  [open] summary:after {
    content: '-';
    font-size: 30px;
  }
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
      <li className="font-bold font-sm p-4 flex justify-between items-center">
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
    <AccordionContainer>
      <Details border={theme.colors[border]} className="my-2">
        <summary
          className={`bg-${solid} bg-opacity-${opacity} border-${border} border-0.5 font-serif py-3.5 px-4 rounded-2.5 block font-med cursor-pointer flex justify-between`}
        >
          <p>{buttonText}</p>
        </summary>
        <div
          className={`border-${border} border-l-0.5 border-r-0.5 border-b-0.5 border-t-0 rounded-2.5 rounded-t-none -mt-2 pt-2`}
        >
          {introText && <p className="font-sm px-4 pt-4">{introText}</p>}
          {content &&
            content.map(({ slug, title }, index) => {
              return (
                <>
                  <AccordionContentItem
                    newTab={newTab}
                    slug={slug}
                    title={title}
                    key={slug}
                  />
                  {index !== content.length - 1 && (
                    <hr className="border-t-0.5 border-gray mx-4" />
                  )}
                </>
              )
            })}
        </div>
      </Details>
    </AccordionContainer>
  ) : (
    <div />
  )
}

export {
  Button,
  PurpleButton,
  CoralButton,
  StayingMumButton,
  OutlineButton,
  AccordionButton,
}
