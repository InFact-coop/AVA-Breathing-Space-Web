import client from '../../../client'
import { AccordionButton } from '../../../components/Button'
import { InformationStayingMum } from '../../../components/Information'
import { StayingMumContainer } from '../../../components/Container'

const GET_SUPPORT = `*[_type == "page" && slug.current == "support" ][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const GET_TOPICS = `*[_type == "topic" && onHomepage == false ]{
  quoteTitle, 
  summaryTitle , 
 "articles": *[ _type == "article" && references(^._id) ] { title, "slug": "staying-mum/support/" + slug.current },

}`

const Support = props => {
  return (
    <>
      <InformationStayingMum background="" props={props} />
      <StayingMumContainer>
        {props.topics.map(({ quoteTitle, summaryTitle, articles }) => {
          return (
            <AccordionButton
              themeColour={{
                solid: 'lightblue',
                border: 'gray',
                opacity: '30',
              }}
              key={`topic-${quoteTitle ? quoteTitle : summaryTitle}`}
              buttonText={quoteTitle ? quoteTitle : summaryTitle}
              content={articles}
              newTab={false}
              introText=""
            />
          )
        })}
      </StayingMumContainer>
    </>
  )
}

export default Support

Support.getInitialProps = async () => {
  const data = await client.fetch(GET_SUPPORT)
  const topics = await client.fetch(GET_TOPICS)

  return { ...data, topics }
}
