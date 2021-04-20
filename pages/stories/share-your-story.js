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
import { Block } from '../../components/BlockSerializers'
import { Input } from '../../components/Form'

import checkbox from '../../public/icons/checkbox.svg'
import checkboxFilled from '../../public/icons/checkboxFilled.svg'

import client from '../../client'

const GET_SHARE_STORY_FORM = `*[_type == "form" && slug.current == "share-your-story"][0]{
  _type, 
  title, 
  body, 
  subtitle, 
  "inputsFromSanity": inputs[]->{ title, required, type, placeholder},
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
        _key: `${uuidv4()}`,
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: `${uuidv4()}`,
            text: inputs.yourStory,
            marks: [],
          },
        ],
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
      formCompleted ? 'pointer-events-auto' : 'opacity-50 pointer-events-none'
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
  const [permission, updatePermission] = useState(false)

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
      <p className="text-med leading-lg my-5">
        Stories submitted will be moderated by AVA’s team to prevent abusive
        content from being uploaded.
      </p>
      <p className="text-med font-bold leading-lg mb-5">
        It may take up to a month for your story to appear on the app.
      </p>
      <div
        className="w-100 m-w-[200] flex justify-start items-start mb-5"
        onClick={() => updatePermission(!permission)}
        onKeyDown={() => updatePermission(!permission)}
      >
        <img
          alt="checkbox to give permission for sharing story"
          className="w-6 mr-2.5"
          src={permission ? checkboxFilled : checkbox}
        />
        <span>Do you consent to us publishing this?</span>
      </div>
      {permission && (
        <ShareButton {...{ openModal, formCompleted, updateModalAction }} />
      )}
      <p className="font-xl mb-5 mt-7.5 font-serif">
        Sometimes you just need to let your story go instead.{' '}
      </p>
      <p className="text-med leading-lg my-5">
        Tap the button below to delete this story forever.
      </p>
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
  className: 'font-serif text-xl leading-base mb-2.5',
})``

const ShareStoryStyled = styled(Container).attrs({
  className: 'px-5 py-5',
})``

const ShareStory = ({ body, inputsFromSanity, subtitle, confirmationText }) => {
  return (
    <ShareStoryStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-med font-normal text-gray min-h-2.5"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <ShareStoryForm {...{ inputsFromSanity, confirmationText }} />
    </ShareStoryStyled>
  )
}

export default ShareStory
ShareStory.getInitialProps = async () => {
  const data = await client.fetch(GET_SHARE_STORY_FORM)
  return {
    ...data,
    pageTitle: 'shareStory',
  }
}
