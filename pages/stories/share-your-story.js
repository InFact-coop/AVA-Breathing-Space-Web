import styled from 'styled-components'
import { useState } from 'react'
import * as R from 'ramda'

import client from '../../client'

import Container from '../../components/Container'
import { PurpleButton, CoralButton } from '../../components/Button'
import Block from '../../components/Block'

const GET_SHARE_STORY_FORM = `*[_type == "form" && slug.current == "share-your-story"][0]{
  _type, 
  title, 
  body, 
  subtitle, 
  "inputs": inputs[]->{ title, required, type },
}`

const ShareStoryStyled = styled(Container).attrs({
  className: '',
})``

const Title = styled.h2.attrs({
  className: 'font-serif text-lg leading-base mb-2.5',
})``

const StyledInput = styled.input.attrs({
  className: 'border border-lightgray h-8.75 p-2.5 rounded-2.5',
})``

const StyledTextArea = styled.textarea.attrs({
  className: 'border border-lightgray rounded-2.5 p-2.5',
  rows: '9',
})``

const Label = styled.label.attrs({
  className: 'mb-1.25',
})``

const FormFieldWithLabel = ({ title, required, type }) => {
  const Field = () => {
    switch (type) {
      case 'input':
        return <StyledInput required={required} />
      case 'textarea':
        return <StyledTextArea required={required} />
      default:
        return <div />
    }
  }

  return (
    <div className="flex flex-col mb-5 font-sm">
      <Label>{title}</Label>
      <Field />
    </div>
  )
}

const ShareStory = ({ body, inputs, subtitle }) => {
  const [formCompleted] = useState(false)
  return (
    <ShareStoryStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-sm font-normal text-gray"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <form>
        {R.map(
          ({ title, required, type: [type] }) => (
            <FormFieldWithLabel
              key={title}
              required={required}
              title={title}
              type={type}
            />
          ),

          inputs,
        )}

        <PurpleButton
          className={formCompleted ? 'mb-2.5' : 'mb-2.5 opacity-50'}
          type="submit"
        >
          Submit story
        </PurpleButton>
        <CoralButton className={formCompleted ? '' : 'opacity-50'}>
          Delete story
        </CoralButton>
      </form>
    </ShareStoryStyled>
  )
}

export default ShareStory

ShareStory.getInitialProps = () => client.fetch(GET_SHARE_STORY_FORM)
