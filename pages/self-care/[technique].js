import styled from 'styled-components'
import { useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'

import client from '../../client'
import serializers from '../../components/serializers'

import Container from '../../components/Container'

const GET_SELF_CARE_TECHNIQUE = `*[_type == "selfcareTechnique" && slug.current == $slug][0]{
  title,
  mainImage,
  video, 
  body,
  audio, 
  link, 
  likes
}`

const TechniqueStyled = styled.section.attrs({
  className: 'bg-white',
})``

const TechniqueTitle = styled.h2.attrs({
  className: 'font-serif font-lg pb-5',
})``

const TechniqueVideo = styled.video.attrs({
  className: 'w-full h-45',
})``

const Technique = props => {
  const [technique] = useState(props)
  // console.log({ technique })

  const OuterContainer = styled.div.attrs({
    className: 'bg-white min-h-content',
  })``

  return (
    <OuterContainer className="h-full bg-white">
      {technique.video && <TechniqueVideo src={technique.video} controls />}
      <Container bgColour="white">
        <TechniqueStyled>
          <TechniqueTitle>{technique.title}</TechniqueTitle>
          <BlockContent
            blocks={technique.body}
            className="font-sm font-normal"
            renderContainerOnSingleChild={true}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            serializers={serializers}
            projectId="is8j72h6"
            dataset={
              process.env.NODE_ENV === 'production' ? 'production' : 'staging'
            }
            {...client.config()}
          />{' '}
        </TechniqueStyled>
      </Container>
    </OuterContainer>
  )
}

Technique.getInitialProps = ctx => {
  return client.fetch(GET_SELF_CARE_TECHNIQUE, {
    slug: ctx.query.technique,
  })
}

export default Technique
