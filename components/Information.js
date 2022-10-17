import styled from 'styled-components'
import { useState } from 'react'
import { Block } from './BlockSerializers'

const InformationStyled = styled.section.attrs({
  className: 'pt-6 px-5 h-full max-w-256',
})``

const InformationTitle = styled.h2.attrs({
  className: 'font-serif font-xl',
})``

const StayingMumInformationTitle = styled.h2.attrs({
  className: 'font-sans font-lg font-bold',
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

export const InformationStayingMum = ({ props }) => {
  const [information] = useState(props)

  return (
    <>
      <InformationStyled>
        {(information.title || information.pageTitle) && (
          <StayingMumInformationTitle>
            {information.pageTitle || information.title}
          </StayingMumInformationTitle>
        )}
      </InformationStyled>
      <Block
        body={information.body}
        className="font-base leading-lg px-5 pt-4 h-full max-w-256 font-normal"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </>
  )
}

export default Information
