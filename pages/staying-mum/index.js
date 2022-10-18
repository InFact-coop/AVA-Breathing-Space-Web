import Link from 'next/link'
import styled from 'styled-components'
import client from '../../client'
import { InformationStayingMum } from '../../components/Information'
import { StayingMumContainer } from '../../components/Container'
import nextIcon from '../../public/icons/next.svg'
import getColour from '../../lib/getColour'
import { useContext } from 'react'
import AppContext from '../../lib/AppContext'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js' //eslint-disable-line
const { theme } = resolveConfig(tailwindConfig)

const GET_STAYING_MUM_LANDING = `*[_type == "page" && slug.current == "staying-mum"][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const GET_TOPICS = `*[_type == "topic" && onHomepage == true ]{
  _type,
  summaryTitle,
  quoteTitle,
  onHomepage, 
  "slug": slug.current, 
  "illustration": illustration.asset->url, 
  "background": *[ _type == "colourAndIllustration" && _id == ^.colourAndBackgroundIllustration._ref ][0] { "url": file.asset->url, color }, 
}`

const TopicWithIllustration = styled.div.attrs({
  className: `w-100 mt-4 p-2.5 pb-4.5 rounded-1.5`,
})`
  background-image: ${({ gradient }) => `${theme.colors[gradient]}`};
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
`

const TopicCard = ({
  topic,
  setThemeColour,
  setTitleIllustration,
  setTitleBgIllustration,
}) => {
  const { quoteTitle, summaryTitle, illustration, background, slug } = topic

  const colour = getColour(background.color)
  const setTitleCardVars = () => {
    setThemeColour(colour)
    setTitleBgIllustration(background.url)
    setTitleIllustration(illustration)
  }

  return (
    <Link
      href="/staying-mum/[topic]"
      as={`/staying-mum/${slug}`}
      passHref
      key={slug}
    >
      <TopicWithIllustration
        onClick={setTitleCardVars}
        gradient={colour.gradient}
        bgIllustration={background.url}
        key={`topic-${summaryTitle}`}
      >
        <div className="flex rounded-1.5 font-bold justify-left py-3.5 px-4 bg-white">
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
      </TopicWithIllustration>
    </Link>
  )
}

const StayingMum = props => {
  const {
    setThemeColour,
    setTitleIllustration,
    setTitleBgIllustration,
    themeColour,
    titleIllustration,
    titleBgIllustration,
  } = useContext(AppContext)
  const { topics } = props

  return (
    <>
      <InformationStayingMum props={props} />
      <StayingMumContainer>
        <Link href="/staying-mum/support">
          <button className="p-4.5 flex justify-between w-full rounded-2.5 cursor-pointer text-left bg-opaquelightblue border-0.5 border-gray text-black">
            <span>Need support?</span>
            <img src={nextIcon} alt="click to go here" />
          </button>
        </Link>
        {topics &&
          topics.map(topic => (
            <TopicCard
              key={`topic-${topic.summaryTitle.replace(' ', '')}`}
              topic={topic}
              setThemeColour={setThemeColour}
              setTitleIllustration={setTitleIllustration}
              setTitleBgIllustration={setTitleBgIllustration}
              themeColour={themeColour}
              titleIllustration={titleIllustration}
              titleBgIllustration={titleBgIllustration}
            />
          ))}
      </StayingMumContainer>
    </>
  )
}

export default StayingMum

StayingMum.getInitialProps = async () => {
  const page = await client.fetch(GET_STAYING_MUM_LANDING)
  const topics = await client.fetch(GET_TOPICS)

  return { ...page, topics }
}
