import { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import useModal from 'use-react-modal'
import useForm from '../lib/useForm'
import toCamelCase from '../lib/toCamelCase'

import client from '../client'

import Modal from '../components/Modal'
import Container from '../components/Container'
import { PurpleButton } from '../components/Button'
import { Input } from '../components/Form'
import Block from '../components/Block'
import { QUICK_EXIT_UPDATED } from '../lib/constants'

const GET_QUICK_EXIT_FORM = `*[_type == "form" && slug.current == "quick-exit"][0]{
  _type, 
  title, 
  body, 
  subtitle, 
  "inputsFromSanity": inputs[]->{ title, required, type, placeholder },
  confirmationText
}`

const onSubmit = onResponse => (inputs, setInputs, initialState) => {
  setInputs(initialState)
  onResponse(QUICK_EXIT_UPDATED)
}

const SubmitButton = styled(PurpleButton).attrs(({ formCompleted }) => ({
  as: 'button',
  className: `mb-2.5 mt-1 w-full ${formCompleted ? '' : 'opacity-50'}`,
  type: 'Sent message',
  children: 'Submit',
}))``

const FormContainer = styled.form.attrs({
  id: 'quick-exit',
  key: 'form',
})``

const QuickExitForm = ({
  inputsFromSanity,
  confirmationText,
  setQuickExitPage,
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
    setQuickExitPage(inputs[`customiseExitPage(Optional)`])
    updateModalAction(action)
    openModal()
  }

  const [inputs, setInputs, handleInputChange, handleSubmit] = useForm(
    initialState,
    onSubmit(openAndUpdateModal),
  )

  useEffect(
    () => updateFormCompleted(!!inputs[`customiseExitPage(Optional)`]),
    [inputs[`customiseExitPage(Optional)`]],
  )

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
              setQuickExitPage,
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

const QuickExitStyled = styled(Container).attrs({
  className: '',
})``

const QuickExit = ({
  body,
  inputsFromSanity,
  subtitle,
  confirmationText,
  setQuickExitPage,
}) => {
  return (
    <QuickExitStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-sm font-normal text-gray"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <QuickExitForm
        {...{
          inputsFromSanity,
          confirmationText,
          setQuickExitPage,
        }}
      />
    </QuickExitStyled>
  )
}

export default QuickExit

QuickExit.getInitialProps = () => client.fetch(GET_QUICK_EXIT_FORM)
