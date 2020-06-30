import * as R from 'ramda'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Flickity from 'react-flickity-component'

import formatAuthor from '../../lib/formatAuthor'

import Arrow from '../../public/icons/forwardArrow.svg'

import client from '../../client'
import Container from '../../components/Container'
import { PurpleButton } from '../../components/Button'

const GET_STORIES = `*[ _type == "story" && !(_id in path('drafts.**'))]{
  _type,
  "title": author,
  "tags": tags[]->title,
  preview,
  "slug": slug.current
}
`

const GET_TAGS = `*[ _type == "storyTag" ]{
  title
}`

const StoryStyled = styled.div.attrs({
  className: `w-100 rounded-2.5 shadow mb-5 px-2.5 py-4 bg-white`,
})``

const StoryTitle = styled.h2.attrs({
  className: 'font-base flex items-end text-darkpurple font-bold mb-2.5',
})``

const Preview = styled.div.attrs({ className: 'font-lg font-serif mb-4' })``

const Story = ({ title, slug, preview }) => (
  <a href={`/stories/${slug}`} key={slug}>
    <StoryStyled>
      <StoryTitle>{title}</StoryTitle>
      <Preview>{preview}</Preview>
      <p className="font-sm">
        Read more <img className="inline-block" alt="arrow" src={Arrow} />
      </p>
    </StoryStyled>
  </a>
)

const Carousel = styled(Flickity).attrs({
  options: {
    prevNextButtons: false,
    pageDots: false,
    cellAlign: 'left',
    contain: true,
  },
  className: 'mb-5',
})`
  margin-left: -20px;
`

const StoriesStyled = styled(Container).attrs({
  className: '',
})``

const Tag = styled.button.attrs(({ selected }) => ({
  className: `rounded-full text-sm mr-1.5 border border-solid py-1.5 px-2.5 text-${
    selected ? 'black' : 'gray'
  } bg-${selected ? 'lightgray' : 'lightestgray'} border-${
    selected ? 'black' : 'gray'
  }`,
}))``

const Tags = ({ tags, updateTags }) => {
  const toggleTag = clickedTag => {
    return R.map(({ title }) => {
      if (title === clickedTag.title) {
        return { title, selected: !clickedTag.selected }
      }
      return { title, selected: false }
    })(tags)
  }
  return (
    <Carousel>
      {tags.map(tag => (
        <Tag
          selected={tag.selected}
          key={tag.title}
          onClick={() => updateTags(toggleTag(tag))}
        >
          {tag.title}
        </Tag>
      ))}
    </Carousel>
  )
}

const Stories = props => {
  const allTheStories = props.storiesWithTitle

  const [selectedStories, updateSelectedStories] = useState()
  const [tags, updateTags] = useState()

  useEffect(() => {
    updateTags(
      R.map(({ title }) => {
        return { title, selected: false }
      })(props.tags),
    )

    updateSelectedStories(props.storiesWithTitle)
  }, [])

  useEffect(() => {
    const selected = tags
      ? R.filter(tag => {
          return tag.selected === true
        }, tags)
      : null

    let filteredStories = allTheStories

    if (selected !== null && !R.isEmpty(selected)) {
      const [{ title }] = selected

      filteredStories = R.filter(story => R.contains(title, story.tags))(
        allTheStories,
      )
    }

    updateSelectedStories(filteredStories)
  }, [tags])

  if (!selectedStories || !tags) {
    return <div />
  }

  return (
    <StoriesStyled>
      <Tags tags={tags} updateTags={updateTags} />
      {selectedStories.map(({ title, slug, preview }) => (
        <Story title={title} slug={slug} preview={preview} key={slug} />
      ))}
      <PurpleButton href="/stories/share-your-story">
        Share your story
      </PurpleButton>
    </StoriesStyled>
  )
}

Stories.getInitialProps = async () => {
  const stories = await client.fetch(GET_STORIES)
  const tags = await client.fetch(GET_TAGS)

  const storiesWithTitle = R.map(story => {
    return { ...story, title: `${formatAuthor(story.title)} story` }
  }, stories)

  return { storiesWithTitle, tags }
}

export default Stories
