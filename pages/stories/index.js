import * as R from 'ramda'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Flickity from 'react-flickity-component'

import formatAuthor from '../../lib/formatAuthor'

import Arrow from '../../public/icons/forwardArrow.svg'
import Sound from '../../public/icons/sound.svg'

import client from '../../client'
import Container from '../../components/Container'
import { PurpleButton } from '../../components/Button'

const GET_STORIES = `*[ _type == "story" && !(_id in path('drafts.**'))]{
  _type,
  "title": author,
  "tags": tags[]->title,
  preview,
  "media": defined(audio) || defined(video), 
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
  className: 'font-base flex items-end text-darkpurple font-bold',
})``

const Preview = styled.div.attrs({ className: 'font-lg font-serif mb-4' })``

const Story = ({ title, slug, preview, media }) => (
  <a href={`/stories/${slug}`} key={slug}>
    <StoryStyled>
      <div className="flex justify-between items-start mb-2.5">
        <StoryTitle>{title}</StoryTitle>
        {media && (
          <img
            className="mr-2.5 mb-2.5"
            alt="Volume icon signifying that this story has media content"
            src={Sound}
          />
        )}
      </div>
      <Preview>{preview}</Preview>
      <p className="font-med">
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
  @media (max-width: 64rem) {
    margin-left: -20px;
    margin-right: -20px;
  }
`

const StoriesStyled = styled(Container).attrs({
  className: '',
})``

const Tag = styled.button.attrs(({ selected }) => ({
  className: `rounded-full whitespace-no-wrap text-med mr-1.5 border border-solid py-1.5 px-2.5 text-${
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

      filteredStories = R.filter(
        story => story.tags && R.includes(title, story.tags),
      )(allTheStories)
    }

    updateSelectedStories(filteredStories)
  }, [tags])

  if (!selectedStories || !tags) {
    return <div />
  }

  return (
    <StoriesStyled>
      <Tags tags={tags} updateTags={updateTags} />
      <p className="mb-5 leading-lg">
        Below are stories from suvivors about their experiences which you can
        filter using the tags above. These can be empowering by making you know
        you are not alone. However they could be triggering so please make sure
        you look after yourself when reading them. You can share yours using the
        button at the end.
      </p>
      {selectedStories.map(({ title, slug, preview, media }) => (
        <Story
          title={title}
          slug={slug}
          preview={preview}
          key={slug}
          media={media}
        />
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

  return { pageTitle: 'stories', storiesWithTitle, tags }
}

export default Stories
