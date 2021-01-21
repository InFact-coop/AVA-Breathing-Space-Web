import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import * as R from 'ramda'
import useModal from 'use-react-modal'
import useForm from '../lib/useForm'
import toCamelCase from '../lib/toCamelCase'
import { FEEDBACK_SENT, FEEDBACK_ERROR } from '../lib/constants'

import client from '../client'

import Modal from '../components/Modal'
import Container from '../components/Container'
import { PurpleButton } from '../components/Button'
import { Input } from '../components/Form'
import Block from '../components/Block'

const GET_FEEDBACK_FORM = `*[_type == "form" && slug.current == "feedback"][0]{
  _type, 
  title, 
  body, 
  subtitle, 
  "inputsFromSanity": inputs[]->{ title, required, type, placeholder },
  confirmationText
}`

const onSubmit = onResponse => async (inputs, setInputs, initialState) => {
  const feedback = {
    _id: `${uuidv4()}`,
    _type: 'feedback',
    from: R.isEmpty(inputs[`yourName(Optional)`])
      ? 'anonymous'
      : inputs[`yourName(Optional)`],
    email: R.isEmpty(inputs[`yourEmail(Optional)`])
      ? 'anonymous'
      : inputs[`yourEmail(Optional)`],
    feedback: [
      {
        _type: 'block',
        _key: `${uuidv4()}`,
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: `${uuidv4()}`,
            text: inputs.yourMessage,
            marks: [],
          },
        ],
      },
    ],
  }

  try {
    await client.create(feedback)
    onResponse(FEEDBACK_SENT)
    setInputs(initialState)
  } catch (e) {
    console.error('error submitting message', e) //eslint-disable-line
    onResponse(FEEDBACK_ERROR)
  }
}

const SubmitButton = styled(PurpleButton).attrs(({ formCompleted }) => ({
  as: 'button',
  className: `mb-2.5 mt-1 w-full ${formCompleted ? '' : 'opacity-50'}`,
  type: 'Sent message',
  children: 'Submit',
}))``

const FormContainer = styled.form.attrs({
  id: 'feedback',
  key: 'form',
})``

const FeedbackForm = ({ inputsFromSanity, confirmationText }) => {
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
    onSubmit(openAndUpdateModal),
  )

  useEffect(() => updateFormCompleted(!!inputs.yourMessage), [
    inputs.yourMessage,
  ])

  const passDownInput = props => (
    <Input {...props} {...{ handleInputChange, inputs, label: true }} />
  )

  return (
    <FormContainer onSubmit={handleSubmit}>
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

const Title = styled.h2.attrs({
  className: 'font-serif text-lg leading-base mb-2.5',
})``

const FeedbackStyled = styled(Container).attrs({
  className: '',
})``

const Feedback = ({ body, inputsFromSanity, subtitle, confirmationText }) => {
  return (
    <FeedbackStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-sm font-normal text-gray"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <FeedbackForm
        {...{
          inputsFromSanity,
          confirmationText,
        }}
      />
    </FeedbackStyled>
  )
}

export default Feedback

Feedback.getInitialProps = () => client.fetch(GET_FEEDBACK_FORM)
