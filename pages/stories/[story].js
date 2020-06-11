import styled from 'styled-components'
import { useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'

import client from '../../client'
import serializers from '../../components/serializers'
import formatAuthor from '../../lib/formatAuthor'

import Container from '../../components/Container'

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
    <StoryStyled bgColour="white">
      <StoryTitle>{story.title}</StoryTitle>
      <BlockContent
        blocks={story.body}
        className="font-base font-normal leading-large"
        renderContainerOnSingleChild={true}
        serializers={serializers}
        projectId="is8j72h6"
        dataset={process.env.SANITY_DATASET}
        {...client.config()}
      />{' '}
    </StoryStyled>
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
