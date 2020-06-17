import styled from 'styled-components'
import { useState, useEffect } from 'react'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'

import client from '../../client'

import useForm from '../../lib/useForm'
import toCamelCase from '../../lib/toCamelCase'

import Container from '../../components/Container'
import { PurpleButton, CoralButton } from '../../components/Button'
import Block from '../../components/Block'
import { FormFieldWithLabel } from '../../components/Form'

const GET_SHARE_STORY_FORM = `*[_type == "form" && slug.current == "share-your-story"][0]{
  _type, 
  title, 
  body, 
  subtitle, 
  "inputsFromSanity": inputs[]->{ title, required, type },
  confirmationText
}`

const ShareStoryStyled = styled(Container).attrs({
  className: '',
})``

const Title = styled.h2.attrs({
  className: 'font-serif text-lg leading-base mb-2.5',
})``

const ShareStory = ({ body, inputsFromSanity, subtitle, confirmationText }) => {
  const uploadStoryToSanity = (inputs, setInputs, initialState) => {
    const story = {
      _id: `drafts.${uuidv4()}`,
      _type: 'story',
      author: `${R.isEmpty(inputs.yourName) ? 'anonymous' : inputs.yourName}`,
      email: `${R.isEmpty(inputs.yourEmail) ? 'anonymous' : inputs.yourEmail}`,
      body: [
        {
          _type: 'block',
          markDefs: [],
          children: [{ _type: 'span', text: `${inputs.yourStory}`, marks: [] }],
        },
      ],
    }

    client
      .create(story)
      .then(() => {
        // trigger confirmation modal here
        setInputs(initialState)
        toggleSubmissionModal(true)
      })
      .catch(e => console.log('error uploading story', e)) //eslint-disable-line
  }

  const [formCompleted, updateFormCompleted] = useState(false)
  const [inputs, handleInputChange, handleSubmit] = useForm(
    R.mergeAll(
      R.map(input => R.objOf(toCamelCase(input.title), ''), inputsFromSanity),
    ),
    uploadStoryToSanity,
  )

  useEffect(
    () =>
      inputs.yourStory === ''
        ? updateFormCompleted(false)
        : updateFormCompleted(true),
    [inputs.yourStory],
  )

  // const [confirmationModal, toggleConfirmationModal] = useState(false)
  const [submissionModal, toggleSubmissionModal] = useState(false)

  return (
    <ShareStoryStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-sm font-normal text-gray"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <form key="form" onSubmit={handleSubmit}>
        {R.map(
          ({ title, required, type: [type] }) => (
            <FormFieldWithLabel
              name={toCamelCase(title)}
              value={inputs[toCamelCase(title)]}
              onChange={handleInputChange}
              key={toCamelCase(title)}
              required={required}
              title={title}
              type={type}
            />
          ),
          inputsFromSanity,
        )}
        {/* TODO : add confirmation modal and final submission */}
        <PurpleButton
          as="button"
          className={
            formCompleted ? 'mb-2.5 w-full' : 'w-full mb-2.5 opacity-50'
          }
          type="submit"
        >
          Share your story
        </PurpleButton>
        {/* TODO : add delete modal and functionality */}
        <CoralButton className={formCompleted ? '' : 'opacity-50'}>
          Delete your story
        </CoralButton>
      </form>
      {submissionModal && <p>{confirmationText}</p>}
    </ShareStoryStyled>
  )
}

export default ShareStory

ShareStory.getInitialProps = () => client.fetch(GET_SHARE_STORY_FORM)
