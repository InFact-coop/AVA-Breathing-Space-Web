import styled from 'styled-components'

import Arrow from '../../../../public/icons/forwardArrow.svg'
import Sound from '../../../../public/icons/sound.svg'

import client from '../../../../client'
import { StayingMumContainer } from '../../../../components/Container'

const GET_STORIES = `*[_type == "story" && !(_id in path('drafts.**')) && "Child Removal" in tags[]->title]{  _type,
  "title": author,
  preview,
  "media": defined(audio) || defined(video), 
  "slug": slug.current
}
`

const StoryStyled = styled.div.attrs({
  className: `w-100 rounded-2.5 shadow mb-5 px-2.5 py-4 bg-white`,
})``

const StoryTitle = styled.h2.attrs({
  className: 'font-base flex items-end text-darkpurple font-bold',
})``

const Preview = styled.div.attrs({ className: 'font-lg font-serif mb-4' })``

const Story = ({ title, slug, preview, media }) => (
  <a href={`/staying-mum/stories/all-stories/${slug}`} key={slug}>
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

const StoriesStyled = styled(StayingMumContainer).attrs({
  className: '',
})``

const Stories = ({ stories }) => {
  return (
    <StoriesStyled>
      {stories.map(({ title, slug, preview, media }) => (
        <Story
          title={title}
          slug={slug}
          preview={preview}
          key={slug}
          media={media}
        />
      ))}
    </StoriesStyled>
  )
}

Stories.getInitialProps = async () => {
  const stories = await client.fetch(GET_STORIES)

  const pageData = {
    title: 'Stories',
    pageTitle: 'Stories',
    _type: 'page',
  }

  return { ...pageData, stories }
}

export default Stories
