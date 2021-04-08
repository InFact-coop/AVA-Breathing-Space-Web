import { useEffect, useState } from 'react'
import styled from 'styled-components'
import client from '../client'
import { Block } from './BlockSerializers'

const GET_WELCOME_STEP = `*[_type == "page" && title == "Welcome"][0]`

const WelcomeStep = () => {
  const [props, updateProps] = useState()
  useEffect(() => {
    const getWelcomeStep = async () => {
      const welcomeProps = await client.fetch(GET_WELCOME_STEP)
      updateProps(welcomeProps)
    }

    getWelcomeStep()
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

export default WelcomeStep
