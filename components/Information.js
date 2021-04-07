import styled from 'styled-components'
import { useState } from 'react'
import Block from './Block'

const InformationStyled = styled.section.attrs({
  className: 'pt-5 px-5 h-full max-w-256',
})``

const InformationTitle = styled.h2.attrs({
  className: 'font-serif font-xl',
})``

const InformationSubtitle = styled.p.attrs({
  className: 'font-sans font-base mt-2.5 mb-5',
})``

const Information = ({ background, props }) => {
  const [information] = useState(props)

  return (
    <>
      <InformationStyled>
        <InformationTitle>
          {information.pageTitle || information.title}
        </InformationTitle>
        {information.subtitle && (
          <InformationSubtitle>{information.subtitle}</InformationSubtitle>
        )}
      </InformationStyled>
      <Block
        body={information.body}
        className={`font-base px-5 pt-5 h-full max-w-256 font-normal ${background} ${
          background === 'bg-white' && 'shadow'
        }`}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </>
  )
}

export default Information
