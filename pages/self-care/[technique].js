import { useEffect, useContext } from 'react'
import styled from 'styled-components'

import Container from '../../components/Container'
import Comments from '../../components/Comment'
import CommentForm from '../../components/CommentForm'
import Likes from '../../components/Likes'
import Block from '../../components/Block'

import web from '../../public/icons/web.svg'

import client from '../../client'
import AppContext from '../../lib/AppContext'

const GET_SELF_CARE_TECHNIQUE = `*[_type == "selfcareTechnique" && slug.current == $slug][0]{
  _type,
  title,
  "technique": {
    "parentID": _id,
    title,
    "videoUrl": videoFile.asset->url,
    "audioUrl": audio.asset->url, 
    videoLink,
    body,
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
  className: 'bg-white py-5 px-5',
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
  const { setPageID } = useContext(AppContext)
  useEffect(() => setPageID(technique.parentID), [])
  return (
    <OuterContainer className="h-full bg-white">
      {technique.audioUrl && (
        <div className="px-5 py-4">
          <audio controls className="w-full">
            <source src={technique.audioUrl} />
          </audio>
        </div>
      )}
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
          className="font-med font-normal"
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
        />
        {technique.link && (
          <div className="mt-5 border-t border-lightgray py-5">
            <p className="font-bold mb-4">More like this: </p>
            <p className="inline-block">
              <img className="inline mr-3.5" alt="web icon" src={web} />
              {technique.link}
            </p>
          </div>
        )}
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
      <Likes likes={technique.likes} />
      <Comments {...{ slug, _type: 'selfcareTechnique' }} />
    </OuterContainer>
  )
}

Technique.getInitialProps = async ctx => {
  const data = await client.fetch(GET_SELF_CARE_TECHNIQUE, {
    slug: ctx.query.technique,
  })

  return { pageTitle: data._type, ...data }
}

export default Technique
