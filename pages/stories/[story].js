import styled from 'styled-components'
import { useState } from 'react'

import client from '../../client'
import formatAuthor from '../../lib/formatAuthor'

import Block from '../../components/Block'
import Container from '../../components/Container'
import { PurpleButton } from '../../components/Button'

const GET_STORY = `*[_type == "story" && slug.current == $slug][0]{
  _type,
  "title": author,
  tags, 
  body,
  "video": video.asset->url,
  "audio": audio.asset->url, 
  transcript,
  likes
}`

const StoryTitle = styled.h2.attrs({
  className: 'font-serif font-xl pb-5 text-darkpurple',
})``

const StoryStyled = styled(Container).attrs({
  className: 'px-5 pt-5 pb-5',
})``

const StoryMedia = ({ audio, video }) => {
  if (audio) {
    return (
      <div className="">
        <audio controls className="w-full">
          <source src={audio} />
        </audio>
      </div>
    )
  }

  if (video) {
    return <video className="w-full h-45" src={video} controls />
  }
}

const StoryTranscript = ({ transcript }) => {
  return (
    transcript && (
      <div className="border-t border-midgray border-solid bg-white shadow">
        <p className="px-5 font-bold mt-5 mb-2.5">Transcript</p>
        <Block
          className="px-5 pb-5 font-base font-normal leading-large"
          body={transcript}
        />
      </div>
    )
  )
}

const Story = props => {
  const [story] = useState(props)
  const { title, body, audio, video, transcript, likes } = story

  return (
    <>
      <StoryStyled bgColour="white">
        <StoryTitle>{title}</StoryTitle>
        {body && (
          <Block body={body} className="font-base font-normal leading-large" />
        )}
        <StoryMedia audio={audio} video={video} />
      </StoryStyled>
      <StoryTranscript transcript={transcript} />
      <PurpleButton href="/stories/share-your-story" className="mx-5 mt-7.5">
        Share your story
      </PurpleButton>
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
    title: `${formatAuthor(data.title)} story`,
  }
}

export default Story
