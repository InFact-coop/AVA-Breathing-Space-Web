import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'

import client from '../../../../client'

import { Block } from '../../../../components/BlockSerializers'
import Container, {
  StayingMumContainer,
} from '../../../../components/Container'
import Likes from '../../../../components/Likes'
import { PurpleButton, StayingMumButton } from '../../../../components/Button'

import AppContext from '../../../../lib/AppContext'

const GET_STORY = `*[_type == "story" && slug.current == $slug][0]{
  _type,
  "parentID": _id,
  "title": author,
  tags, 
  preview,
  body,
  "video": video.asset->url,
  "audio": audio.asset->url, 
  transcript,
  likes
}`

const StoryTitle = styled.h2.attrs({
  className: 'font-serif font-xl pb-5 text-darkpurple',
})``

const StoryStyled = styled(StayingMumContainer).attrs({
  className: 'px-5 pt-5 pb-5',
})``

const StoryMedia = ({ audio, video }) => {
  if (audio && video) {
    return (
      <>
        <video className="w-full mb-5" src={video} controls />
        <audio controls className="w-full">
          <source src={audio} />
        </audio>
      </>
    )
  }

  if (audio) {
    return (
      <audio controls className="w-full">
        <source src={audio} />
      </audio>
    )
  }

  if (video) {
    return <video className="w-full h-45" src={video} controls />
  }
}

const StoryTranscript = ({ transcript }) => {
  return (
    transcript && (
      <div className="border-t border-midgray border-solid ">
        <Block
          className="p-5 font-base font-normal leading-large"
          body={transcript}
        />
      </div>
    )
  )
}

const Story = props => {
  const [story] = useState(props)
  const { title, body, audio, video, transcript, preview } = story
  const { setPageID } = useContext(AppContext)

  const hasMedia = audio || video

  useEffect(() => setPageID(story.parentID), [])

  return (
    <>
      <StoryStyled bgColour="white">
        {preview && <p className="mb-4">{preview}</p>}
        {body && (
          <Block body={body} className="font-base font-normal leading-large" />
        )}
        {hasMedia && <StoryMedia audio={audio} video={video} />}
      </StoryStyled>
      {transcript && <StoryTranscript transcript={transcript} />}
    </>
  )
}

Story.getInitialProps = async ctx => {
  const data = await client.fetch(GET_STORY, {
    slug: ctx.query.story,
  })

  return {
    ...data,
    pageTitle: data._type,
    title: data.title,
  }
}

export default Story
