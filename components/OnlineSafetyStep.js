import { useEffect, useState } from 'react'
import styled from 'styled-components'
import client from '../client'
import { Block } from './BlockSerializers'

const GET_ONLINE_SAFETY_STEP = `*[_type == "page" && slug.current == "online-safety"][0]`

const OnlineSafetyStep = () => {
  const [props, updateProps] = useState()
  useEffect(() => {
    const getOnlineSafetyStep = async () => {
      const OnlineSafetyProps = await client.fetch(GET_ONLINE_SAFETY_STEP)
      updateProps(OnlineSafetyProps)
    }

    getOnlineSafetyStep()
  }, [])

  return props ? (
    <>
      <Title>{props.title}</Title>
      <Block
        body={props.body}
        className="mb-5"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </>
  ) : (
    <div />
  )
}

const Title = styled.h1.attrs({
  className: 'font-serif font-xl mb-2.5',
})``

export default OnlineSafetyStep
