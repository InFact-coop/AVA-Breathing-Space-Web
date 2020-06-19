import styled from 'styled-components'
import { useState, useEffect } from 'react'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'
import useModal from 'use-react-modal'

import client from '../../client'

import useForm from '../../lib/useForm'
import toCamelCase from '../../lib/toCamelCase'

import Container from '../../components/Container'
import { PurpleButton, CoralButton } from '../../components/Button'
import { SingleButtonModal, DoubleButtonModal } from '../../components/Modal'
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

const uploadStoryToSanity = (
  inputs,
  setInputs,
  initialState,
  updateModalType,
) => {
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
      updateModalType('storyShared')
      setInputs(initialState)
    })
    .catch(e => updateModalType('error')) //eslint-disable-line
}

const ShareStoryStyled = styled(Container).attrs({
  className: '',
})``

const Title = styled.h2.attrs({
  className: 'font-serif text-lg leading-base mb-2.5',
})``

const ModalChildren = ({
  modalType,
  updateModalType,
  closeModal,
  setInputs,
  initialState,
  confirmationText,
}) => {
  switch (modalType) {
    case 'shareStory?':
      return (
        <DoubleButtonModal
          type="submit"
          form="share-story"
          modalText="Are you sure you want to submit your story? You can't undo this action."
          confirmButtonText="Share"
          undoButtonText="Cancel"
          undoButtonAction={() => {
            updateModalType('')
            closeModal()
          }}
        />
      )
    case 'deleteStory?':
      return (
        <DoubleButtonModal
          modalText="Are you sure you want to delete your story? You can't undo this action."
          confirmButtonText="Delete"
          confirmButtonAction={() => {
            setInputs(initialState)
            closeModal()
            updateModalType('')
          }}
          undoButtonText="Cancel"
          undoButtonAction={() => {
            updateModalType('')
            closeModal()
          }}
        />
      )
    case 'storyShared':
      return (
        <SingleButtonModal
          modalText={confirmationText}
          confirmButtonText="OK"
          confirmButtonAction={() => {
            closeModal()
            updateModalType('')
          }}
        />
      )
    case 'error':
      return (
        <SingleButtonModal
          modalText="Something went wrong, your story hasn't been sent yet. Please close this window and try again. "
          confirmButtonText="OK"
          confirmButtonAction={() => {
            closeModal()
            updateModalType('')
          }}
        />
      )
    default:
      return <div />
  }
}

const ShareStory = ({ body, inputsFromSanity, subtitle, confirmationText }) => {
  const initialState = R.pipe(
    R.map(input => ({ [toCamelCase(input.title)]: '' })),
    R.mergeAll,
  )(inputsFromSanity)

  const { isOpen, openModal, closeModal, Modal } = useModal()
  const [modalType, updateModalType] = useState('')
  const [formCompleted, updateFormCompleted] = useState(false)
  const [
    inputs,
    setInputs,
    handleInputChange,
    handleSubmit,
  ] = useForm(initialState, () =>
    uploadStoryToSanity(inputs, setInputs, initialState, updateModalType),
  )

  useEffect(
    () =>
      inputs.yourStory ? updateFormCompleted(true) : updateFormCompleted(false),
    [inputs.yourStory],
  )

  return (
    <ShareStoryStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-sm font-normal text-gray"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <form id="share-story" key="form" onSubmit={handleSubmit}>
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
        <PurpleButton
          className={
            formCompleted ? 'mb-2.5 w-full' : 'w-full mb-2.5 opacity-50'
          }
          onClick={e => {
            updateModalType('shareStory?')
            openModal(e)
          }}
        >
          Share your story
        </PurpleButton>
        <CoralButton
          onClick={e => {
            updateModalType('deleteStory?')
            openModal(e)
          }}
          className={formCompleted ? '' : 'opacity-50'}
        >
          Delete your story
        </CoralButton>
        {isOpen && (
          <Modal>
            <ModalChildren
              modalType={modalType}
              updateModalType={updateModalType}
              closeModal={closeModal}
              setInputs={setInputs}
              initialState={initialState}
              confirmationText={confirmationText}
            />
          </Modal>
        )}
      </form>
    </ShareStoryStyled>
  )
}

export default ShareStory

ShareStory.getInitialProps = () => client.fetch(GET_SHARE_STORY_FORM)
