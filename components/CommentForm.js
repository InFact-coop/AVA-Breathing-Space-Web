import { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'
import useModal from 'use-react-modal'
import useForm from '../lib/useForm'
import toCamelCase from '../lib/toCamelCase'
import { SERVICE_COMMENT_SHARED, SERVICE_COMMENT_ERROR } from '../lib/constants'
import Modal from '../components/Modal'
import { PurpleButton } from '../components/Button'
import { Input } from '../components/Form'

import client from '../client'

const onSubmit = (onResponse, parentID) => async (
  inputs,
  setInputs,
  initialState,
) => {
  const commentData = {
    _key: uuidv4(),
    _type: 'comment',
    comment: inputs.comment,
    publishedAt: new Date().toISOString(),
    publishInApp: false,
  }

  try {
    const { _id } = await client.create(commentData)

    await client
      .patch(parentID)
      .setIfMissing({ comments: [] })
      .append('comments', [
        {
          _type: 'reference',
          _key: uuidv4(),
          _ref: _id,
        },
      ])
      .commit()
    onResponse(SERVICE_COMMENT_SHARED)
    setInputs(initialState)
  } catch (e) {
    console.error('error submitting service comment', e) //eslint-disable-line
    onResponse(SERVICE_COMMENT_ERROR)
  }
}

const Title = styled.h2.attrs({
  className: 'font-sans text-base mt-5 font-bold leading-base mb-1.25',
})``

const Subtitle = styled.h3.attrs({
  className: 'text-gray font-base mb-2.5',
})``

const SubmitButton = styled(PurpleButton).attrs(({ formCompleted }) => ({
  as: 'button',
  className: `mb-2.5 mt-1 w-full ${
    formCompleted ? '' : 'pointer-events-none opacity-50'
  }`,
  type: 'submit',
  children: 'Submit',
}))``

const FormContainer = styled.form.attrs({
  id: 'share-service-comment',
  key: 'form',
  className: 'p-5 bg-lightestgray max-w-256',
})``

const CommentForm = ({
  inputsFromSanity,
  confirmationText,
  parentID,
  title,
  subtitle,
}) => {
  const initialState = R.pipe(
    R.map(input => ({ [toCamelCase(input.title)]: '' })),
    R.mergeAll,
  )(inputsFromSanity)

  const {
    targetRef: ref,
    isOpen,
    openModal,
    closeModal,
    Modal: ModalContainer,
  } = useModal()
  const [modalAction, updateModalAction] = useState('')
  const [formCompleted, updateFormCompleted] = useState(false)

  const openAndUpdateModal = action => {
    updateModalAction(action)
    openModal()
  }

  const [inputs, setInputs, handleInputChange, handleSubmit] = useForm(
    initialState,
    onSubmit(openAndUpdateModal, parentID),
  )

  useEffect(() => updateFormCompleted(!!inputs.comment), [inputs.comment])

  const passDownInput = props => (
    <Input {...props} {...{ handleInputChange, inputs, label: false }} />
  )

  return (
    <FormContainer
      shadow={true}
      bgColour="lightestgray"
      onSubmit={handleSubmit}
    >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {R.map(passDownInput)(inputsFromSanity)}
      <SubmitButton {...{ formCompleted, ref }} />
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
    </FormContainer>
  )
}

export default CommentForm
