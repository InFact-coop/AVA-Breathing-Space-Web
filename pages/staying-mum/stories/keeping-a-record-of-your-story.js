import { useState } from 'react'
import client from '../../../client'
import { Block } from '../../../components/BlockSerializers'
import { StayingMumContainer } from '../../../components/Container'

const GET_KEEPING_A_RECORD = `*[_type == "article" && slug.current == "keeping-a-record-of-your-story"][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const KeepingARecord = props => {
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

export default KeepingARecord

KeepingARecord.getInitialProps = async () => {
  const data = await client.fetch(GET_KEEPING_A_RECORD)

  return { pageTitle: data._type, ...data }
}
