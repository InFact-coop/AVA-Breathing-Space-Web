import styled from 'styled-components'
import client from '../../client'
import { useState } from 'react'

const GET_SELF_CARE_TECHNIQUE = `*[_type == "selfcareTechnique" && slug.current == $slug][0]{
  title,
  mainImage,
  body, 
  video, 
  audio, 
  link, 
  likes
}`

const TechniqueStyled = styled.section.attrs({
  className: '',
})``

const Technique = props => {
  const [technique, setTechnique] = useState(props)

  return <TechniqueStyled>Technique</TechniqueStyled>
}

Technique.getInitialProps = ctx => {
  return client.fetch(GET_SELF_CARE_TECHNIQUE, {
    slug: ctx.query.technique,
  })
}

export default Technique
