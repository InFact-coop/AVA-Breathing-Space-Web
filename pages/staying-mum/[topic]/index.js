import styled from 'styled-components'
import { useContext } from 'react'
import * as R from 'ramda'
import AppContext from '../../../lib/AppContext'

import { Block } from '../../../components/BlockSerializers'
import { AccordionButton } from '../../../components/Button'
import { ServicePreviewStayingMum } from '../../../components/Service'

import client from '../../../client'

const GET_TOPIC = `*[_type == "topic" && slug.current == $slug][0]{
  ...,
  "services": services[]->{ name, "logo": logo.asset->url, "category": categories[0]->{ slug { current }}, "slug": slug.current },
  "articles": *[ _type == "article" && references(^._id) ] { title, "slug": "staying-mum/" + $slug + "/articles/" + slug.current },
  "people": *[ _type == "person" && references(^._id) ] { title, "slug": "staying-mum/" + $slug + "/people/" + slug.current },  
  "stories": *[ _type == "story" && references(^._id) ] { "title": author, "slug": "stories/" + slug.current }, 
}`

const OuterContainer = styled.div.attrs({
  className: 'bg-white py-5 px-5',
})``

const Topic = ({ overview, articles, people, stories, services }) => {
  const { themeColour } = useContext(AppContext)

  return (
    <OuterContainer className="h-full bg-white">
      <Block
        body={overview}
        className="font-med font-normal"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <div className="mt-6.5">
        {themeColour && (
          <>
            <AccordionButton
              buttonText="Guidance"
              content={articles}
              introText=""
              themeColour={themeColour}
            />
            <AccordionButton
              buttonText="Who's who"
              themeColour={themeColour}
              content={people}
              introText="These are some of the people who may be involved in a decision about your children's future, including where your children live and who they have contact with. Click to learn more."
            />
            <AccordionButton
              themeColour={themeColour}
              buttonText="Stories"
              content={stories}
              introText=""
              newTab={true}
            />
          </>
        )}
      </div>
      {services && services.length !== 0 && (
        <>
          <p className="mt-10 mb-4 font-bold">Useful numbers</p>
          {R.addIndex(R.map)(ServicePreviewStayingMum)(services)}
        </>
      )}
    </OuterContainer>
  )
}

Topic.getInitialProps = async ctx => {
  const data = await client.fetch(GET_TOPIC, {
    slug: ctx.query.topic,
  })

  return { pageTitle: data._type, ...data }
}

export default Topic
