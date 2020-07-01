import styled from 'styled-components'

import Container from '../../components/Container'
import Comments from '../../components/Comment'
import CommentForm from '../../components/CommentForm'
import Block from '../../components/Block'

import client from '../../client'

const GET_SELF_CARE_TECHNIQUE = `*[_type == "selfcareTechnique" && slug.current == $slug][0]{
  _type,
  title,
  "technique": {
    "parentID": _id,
    title,
    "videoUrl": videoFile.asset->url,
    videoLink,
    body,
    audio, 
    link, 
    likes,
    mainImage,
  },
  "form": *[_type == "form" && slug.current == "selfcare-technique-comment"][0]{
    "formTitle": title, 
    body, 
    subtitle, 
    "inputsFromSanity": inputs[]->{ title, required, type },
    confirmationText
  }
}`

const TechniqueStyled = styled(Container).attrs({
  className: 'bg-white',
})``

const TechniqueTitle = styled.h2.attrs({
  className: 'font-serif font-lg pb-5',
})``

const TechniqueVideo = styled.video.attrs({
  className: 'w-full h-45',
})``

const OuterContainer = styled.div.attrs({
  className: 'bg-white min-h-content',
})``

const Technique = ({
  query: { technique: slug },
  technique,
  form: { formTitle, subtitle, inputsFromSanity, confirmationText },
}) => {
  return (
    <OuterContainer className="h-full bg-white">
      {technique.videoUrl && (
        <TechniqueVideo src={technique.videoUrl} controls />
      )}
      {technique.videoLink && (
        <TechniqueVideo as="iframe" src={technique.videoLink} />
      )}
      <TechniqueStyled bgColour="white">
        <TechniqueTitle>{technique.title}</TechniqueTitle>
        <Block
          body={technique.body}
          className="font-sm font-normal"
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
        />
      </TechniqueStyled>
      <CommentForm
        {...{
          inputsFromSanity,
          title: formTitle,
          subtitle,
          confirmationText,
          parentID: technique.parentID,
        }}
      />
      <Comments {...{ slug, _type: 'selfcareTechnique' }} />
    </OuterContainer>
  )
}

Technique.getInitialProps = ctx => {
  return client.fetch(GET_SELF_CARE_TECHNIQUE, {
    slug: ctx.query.technique,
  })
}

export default Technique
