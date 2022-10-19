import styled from 'styled-components'
import client from '../../../client'
import { InformationStayingMum } from '../../../components/Information'
import { StayingMumContainer } from '../../../components/Container'
import nextIcon from '../../../public/icons/next.svg'

const GET_WHO_IS_WHO = `*[_type == "page" && slug.current == "whos-who" ][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const GET_PEOPLE = `*[_type == "person" ]{
  title,
  "slug": "staying-mum/whos-who/" + slug.current
}`

const PersonItem = ({ slug, title }) => {
  return (
    <a href={`/${slug}`}>
      <li className="font-bold p-4 flex justify-between items-center">
        <p className="mr-4">{title}</p>
        <img src={nextIcon} alt="Next icon" />
      </li>
    </a>
  )
}

const PeopleList = styled.div.attrs({})`
  a:not(:last-of-type) {
    li {
      border-bottom: 0.25px solid #453e53;
    }
  }
`

const WhosWho = props => {
  return (
    <>
      <InformationStayingMum background="" props={props} />
      <StayingMumContainer>
        <PeopleList className="mt-4 py-2.5 border-gray border-0.5 rounded-2.5">
          {props.people.map(({ title, slug }) => {
            return <PersonItem key={title} title={title} slug={slug} />
          })}
        </PeopleList>
      </StayingMumContainer>
    </>
  )
}

export default WhosWho

WhosWho.getInitialProps = async () => {
  const data = await client.fetch(GET_WHO_IS_WHO)
  const people = await client.fetch(GET_PEOPLE)

  return { ...data, people }
}
