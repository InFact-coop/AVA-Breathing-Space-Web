import styled from 'styled-components'
import { useState } from 'react'
import Block from './Block'

const InformationStyled = styled.section.attrs({
  className: 'pt-5 px-5 h-full max-w-256',
})``

const InformationTitle = styled.h2.attrs({
  className: 'font-serif font-lg',
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
          <Block
            body={information.subtitle}
            className="text-gray font-base pt-5"
          />
        )}
      </InformationStyled>
      <Block
        body={information.body}
        className={`font-base p-5 h-full max-w-256 font-normal ${background} ${
          background === 'bg-white' && 'shadow'
        }`}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </>
  )
}

export default Information
