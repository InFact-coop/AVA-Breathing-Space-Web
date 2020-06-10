import styled from 'styled-components'
import { useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'

import client from '../client'
import serializers from './serializers'

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
      <BlockContent
        blocks={information.body}
        className="font-sm font-normal"
        renderContainerOnSingleChild={true}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        serializers={serializers}
        projectId="is8j72h6"
        dataset={process.env.SANITY_DATASET}
        {...client.config()}
      />
    </InformationStyled>
  )
}

export default Information
