import Link from 'next/link'
import * as R from 'ramda'
import styled from 'styled-components'
import client from '../../client'
import { InformationStayingMum } from '../../components/Information'
import { StayingMumContainer } from '../../components/Container'
import nextIcon from '../../public/icons/next.svg'
import getColour from '../../lib/getColour'

const GET_STAYING_MUM_LANDING = `*[_type == "page" && slug.current == "staying-mum"][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const GET_TOPICS = `*[_type == "topic" && onHomepage]{
  _type,
  summaryTitle,
  quoteTitle,
  "slug": slug.current, 
  "illustration": illustration.asset->url, 
  "background": *[ _type == "colourAndIllustration" && _id == ^.colourAndBackgroundIllustration._ref ][0] { "url": file.asset->url, color }, 
}`

// const TopicWithBackgroundIllustration = styled.div.attrs(({ colour }) => ({
//   className: `w-100 mt-4 bg-${colour} p-2.5 pb-4.5`,
// }))`
//   background-image: ${({ bgIllustration, colour }) =>
//     `url(${bgIllustration}), ${colour}`};
//   background-position: 100px 100%, right bottom;
//   background-repeat: no-repeat;
//   background-size: cover;
// `

const TopicWithBackgroundIllustration = styled.div.attrs({
  className: `w-100 mt-4 p-2.5 pb-4.5 rounded-1.5`,
})`
  background-image: ${({ colour }) => ` ${colour}`};
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
`

const TopicCard = props => {
  const { quoteTitle, summaryTitle, illustration, background, slug } = props

  return (
    <Link
      href="/staying-mum/[topic]"
      as={`/staying-mum/${slug}`}
      passHref
      key={slug}
    >
      <TopicWithBackgroundIllustration
        colour={getColour(background.color)}
        bgIllustration={background.url}
        key={`topic-${summaryTitle}`}
      >
        <div className="flex rounded-1.5 font-bold justify-between py-3.5 px-4 bg-white">
          <img
            src={illustration}
            className="h-13.5 mr-4"
            alt="drawn illustration"
          />
          <p>{quoteTitle}</p>
        </div>
        <div className="mt-3 flex justify-between underline">
          <p>{summaryTitle}</p>
          <img src={nextIcon} alt="click to go here" />
        </div>
      </TopicWithBackgroundIllustration>
    </Link>
  )
}

const StayingMum = props => (
  <>
    <InformationStayingMum props={props} />
    <StayingMumContainer>
      <Link href="/staying-mum/support">
        <button className="p-4.5 flex justify-between w-full rounded-2.5 cursor-pointer text-left bg-opaquelightblue border-0.5 border-gray text-black">
          <span>Need support?</span>
          <img src={nextIcon} alt="click to go here" />
        </button>
      </Link>
      {props.topics && R.map(TopicCard)(props.topics)}
    </StayingMumContainer>
  </>
)

export default StayingMum

StayingMum.getInitialProps = async () => {
  const page = await client.fetch(GET_STAYING_MUM_LANDING)
  const topics = await client.fetch(GET_TOPICS)

  return { ...page, topics }
}
