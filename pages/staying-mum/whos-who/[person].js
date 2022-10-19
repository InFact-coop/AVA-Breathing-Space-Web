import { useState } from 'react'
import client from '../../../client'
import { Block } from '../../../components/BlockSerializers'
import { StayingMumContainer } from '../../../components/Container'

const GET_PERSON = `*[_type == "person" && slug.current == $slug][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const Content = props => {
  const [information] = useState(props)
  return (
    <StayingMumContainer>
      <Block
        body={information.body}
        className="font-base leading-lg h-full max-w-256 font-normal"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </StayingMumContainer>
  )
}

export default Content

Content.getInitialProps = async ctx => {
  const data = await client.fetch(GET_PERSON, {
    slug: ctx.query.person,
  })

  return { pageTitle: data._type, ...data }
}
