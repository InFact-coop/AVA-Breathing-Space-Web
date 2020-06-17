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
  likes
}`

const StoryTitle = styled.h2.attrs({
  className: 'font-serif font-xl pb-4 text-darkpurple',
})``

const StoryStyled = styled(Container).attrs({
  className: '',
})``

const Story = props => {
  const [story] = useState(props)

  return (
    <>
      <StoryStyled bgColour="white">
        <StoryTitle>{story.title}</StoryTitle>
        <Block
          body={story.body}
          className="font-base font-normal leading-large"
        />{' '}
      </StoryStyled>
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
    title: `${formatAuthor(data.title)} story`,
  }
}

export default Story
