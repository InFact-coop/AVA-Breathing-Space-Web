import client from '../../../client'
import { InformationStayingMum } from '../../../components/Information'
import { StayingMumContainer } from '../../../components/Container'
import nextIcon from '../../../public/icons/next.svg'
import newTabIcon from '../../../public/icons/newTab.svg'
import { StayingMumButton } from '../../../components/Button'

const GET_STORIES_PAGE = `*[_type == "page" && slug.current == "stories" ][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const GET_STORIES = `*[_type == "story" && !(_id in path('drafts.**')) && "Child Removal" in tags[]->title]{
  title,
  "slug": "staying-mum/whos-who/" + slug.current
}`

const LinkButton = ({ slug, title, newTab }) => (
  <StayingMumButton href={`/${slug}`}>
    <p className="mr-4">{title}</p>
    <img src={newTab ? newTabIcon : nextIcon} alt="Next icon" />
  </StayingMumButton>
)

const StoriesPage = props => {
  return (
    <>
      <InformationStayingMum background="" props={props} />
      <StayingMumContainer>
        <LinkButton
          title="Stories from other mums"
          slug="stories"
          newTab={false}
        />
        <LinkButton
          title="Keeping a record of your story"
          slug="staying-mum/stories/keeping-a-record-of-your-story"
          newTab={false}
        />
        <LinkButton
          title="Share your story"
          slug="stories/share-your-story"
          newTab={true}
        />
      </StayingMumContainer>
    </>
  )
}

export default StoriesPage

StoriesPage.getInitialProps = async () => {
  const data = await client.fetch(GET_STORIES_PAGE)
  const stories = await client.fetch(GET_STORIES)

  return { ...data, stories }
}
