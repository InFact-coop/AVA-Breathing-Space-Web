import styled from 'styled-components'
import { useState, useEffect } from 'react'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'
import useModal from 'use-react-modal'

import client from '../client'

import useForm from '../lib/useForm'
import toCamelCase from '../lib/toCamelCase'

import Container from '../components/Container'
import { PurpleButton } from '../components/Button'
import { SingleButtonModal } from '../components/Modal'
import Block from '../components/Block'
import { FormFieldWithLabel } from '../components/Form'

const GET_CONTACT_FORM = `*[_type == "form" && slug.current == "contact-us"][0]{
  _type, 
  title, 
  body, 
  subtitle, 
  "inputsFromSanity": inputs[]->{ title, required, type },
  confirmationText
}`

const uploadMessageToSanity = (openModal, updateModalType) => (
  e,
  inputs,
  setInputs,
  initialState,
) => {
  const message = {
    _id: `drafts.${uuidv4()}`,
    _type: 'message',
    from: `${R.isEmpty(inputs.yourName) ? 'anonymous' : inputs.yourName}`,
    email: `${R.isEmpty(inputs.yourEmail) ? 'anonymous' : inputs.yourEmail}`,
    message: [
      {
        _type: 'block',
        markDefs: [],
        children: [{ _type: 'span', text: `${inputs.yourMessage}`, marks: [] }],
      },
    ],
  }

  client
    .create(message)
    .then(() => {
      updateModalType('messageSent')
      openModal(e)
      setInputs(initialState)
    })
    .catch(error => {
      console.log('error submitting message', error) //eslint-disable-line
      updateModalType('error')
      openModal(e)
    })
}

const ContactStyled = styled(Container).attrs({
  className: '',
})``

const Title = styled.h2.attrs({
  className: 'font-serif text-lg leading-base mb-2.5',
})``

const ModalChildren = ({
  modalType,
  updateModalType,
  closeModal,
  confirmationText,
  updateFormCompleted,
}) => {
  switch (modalType) {
    case 'messageSent':
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
            updateFormCompleted(true)
            closeModal()
            updateModalType('')
          }}
        />
      )
    default:
      return <div />
  }
}

const ContactUs = ({ body, inputsFromSanity, subtitle, confirmationText }) => {
  const initialState = R.pipe(
    R.map(input => ({ [toCamelCase(input.title)]: '' })),
    R.mergeAll,
  )(inputsFromSanity)

  const { isOpen, openModal, closeModal, Modal } = useModal()
  const [modalType, updateModalType] = useState('')
  const [formCompleted, updateFormCompleted] = useState(false)
  const [inputs, setInputs, handleInputChange, handleSubmit] = useForm(
    initialState,
    uploadMessageToSanity(openModal, updateModalType),
  )

  useEffect(
    () =>
      inputs.yourMessage
        ? updateFormCompleted(true)
        : updateFormCompleted(false),
    [inputs.yourMessage],
  )

  return (
    <ContactStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-sm font-normal text-gray"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <form key="form" onSubmit={e => handleSubmit(e)}>
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
          as="button"
          className={
            formCompleted ? 'mb-2.5 w-full' : 'w-full mb-2.5 opacity-50'
          }
          type="submit"
          onClick={() => updateFormCompleted(false)}
        >
          Send message
        </PurpleButton>
        {isOpen && (
          <Modal>
            <ModalChildren
              modalType={modalType}
              updateModalType={updateModalType}
              closeModal={closeModal}
              setInputs={setInputs}
              initialState={initialState}
              confirmationText={confirmationText}
              updateFormCompleted={updateFormCompleted}
            />
          </Modal>
        )}
      </form>
    </ContactStyled>
  )
}

export default ContactUs

ContactUs.getInitialProps = () => client.fetch(GET_CONTACT_FORM)
