import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import * as R from 'ramda'
import useModal from 'use-react-modal'
import useForm from '../../lib/useForm'
import toCamelCase from '../../lib/toCamelCase'
import scrollToTop from '../../lib/scrollToTop'
import * as gtag from '../../lib/gtag'

import { SHARE_STORY, DELETE_STORY, STORY_SHARED } from '../../lib/constants'

import Modal from '../../components/Modal'
import Container from '../../components/Container'
import { PurpleButton, CoralButton } from '../../components/Button'
import Block from '../../components/Block'
import { Input } from '../../components/Form'

import client from '../../client'

const GET_SHARE_STORY_FORM = `*[_type == "form" && slug.current == "share-your-story"][0]{
  _type, 
  title, 
  body, 
  subtitle, 
  "inputsFromSanity": inputs[]->{ title, required, type },
  confirmationText
}`

const onSubmit = onResponse => async (inputs, setInputs, initialState) => {
  const story = {
    _id: `drafts.${uuidv4()}`,
    _type: 'story',
    author: R.isEmpty(inputs.yourName) ? 'anonymous' : inputs.yourName,
    email: R.isEmpty(inputs.yourEmail) ? 'anonymous' : inputs.yourEmail,
    body: [
      {
        _type: 'block',
        markDefs: [],
        children: [{ _type: 'span', text: inputs.yourStory, marks: [] }],
      },
    ],
  }

  try {
    await client.create(story)
    onResponse(STORY_SHARED)
    setInputs(initialState)
  } catch (error) {
    onResponse(error)
  }
}

const ShareButton = styled(PurpleButton).attrs(
  ({ formCompleted, openModal, updateModalAction }) => ({
    className: `mb-2.5 cursor-pointer w-full ${
      formCompleted ? '' : 'opacity-50'
    }`,
    children: 'Share your story',
    onClick: e => {
      scrollToTop()
      updateModalAction(SHARE_STORY)
      openModal(e)
    },
  }),
)``

const DeleteButton = styled(CoralButton).attrs(
  ({ formCompleted, openModal, updateModalAction }) => ({
    className: `mb-2.5 cursor-pointer w-full ${
      formCompleted ? '' : 'opacity-50'
    }`,
    children: 'Delete your story',
    onClick: e => {
      scrollToTop()
      gtag.event({
        action: 'clear_form',
        category: 'Story',
        label: 'delete story',
      })
      updateModalAction(DELETE_STORY)
      openModal(e)
    },
  }),
)``

const ShareStoryForm = ({ inputsFromSanity, confirmationText }) => {
  const initialState = R.pipe(
    R.map(input => ({ [toCamelCase(input.title)]: '' })),
    R.mergeAll,
  )(inputsFromSanity)

  const { isOpen, openModal, closeModal, Modal: ModalContainer } = useModal()
  const [modalAction, updateModalAction] = useState('')
  const [formCompleted, updateFormCompleted] = useState(false)

  const [inputs, setInputs, handleInputChange, handleSubmit] = useForm(
    initialState,
    onSubmit(updateModalAction),
  )

  useEffect(() => updateFormCompleted(!!inputs.yourStory), [inputs.yourStory])

  const passDownInput = props => (
    <Input {...props} {...{ handleInputChange, inputs, label: true }} />
  )

  return (
    <form id="share-story" key="form" onSubmit={handleSubmit}>
      {R.map(passDownInput)(inputsFromSanity)}
      <ShareButton {...{ openModal, formCompleted, updateModalAction }} />
      <DeleteButton {...{ openModal, formCompleted, updateModalAction }} />
      {isOpen && (
        <ModalContainer>
          <Modal
            {...{
              modalAction,
              updateModalAction,
              closeModal,
              setInputs,
              initialState,
              confirmationText,
            }}
          />
        </ModalContainer>
      )}
    </form>
  )
}

const Title = styled.h2.attrs({
  className: 'font-serif text-lg leading-base mb-2.5',
})``

const ShareStoryStyled = styled(Container).attrs({
  className: '',
})``

const ShareStory = ({ body, inputsFromSanity, subtitle, confirmationText }) => {
  return (
    <ShareStoryStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-sm font-normal text-gray"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <ShareStoryForm {...{ inputsFromSanity, confirmationText }} />
    </ShareStoryStyled>
  )
}

export default ShareStory
ShareStory.getInitialProps = () => client.fetch(GET_SHARE_STORY_FORM)
