import styled from 'styled-components'
import { useState } from 'react'
import Block from './Block'

const InformationStyled = styled.section.attrs({
  className: '',
})``

const InformationTitle = styled.h2.attrs({
  className: 'font-serif font-lg pb-5',
})``

const Information = props => {
  const [information] = useState(props)

  return (
    <InformationStyled>
      <InformationTitle>{props.title}</InformationTitle>
      <Block
        body={information.body}
        className="font-sm font-normal"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </InformationStyled>
  )
}

export default Information
