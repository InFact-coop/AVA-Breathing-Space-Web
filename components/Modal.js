import { createContext } from 'react'
import styled from 'styled-components'
import {
  SHARE_STORY,
  DELETE_STORY,
  STORY_SHARED,
  STORY_ERROR,
  SINGLE,
  DOUBLE,
  SERVICE_COMMENT_SHARED,
  SERVICE_COMMENT_ERROR,
  CONTACT_US_SENT,
  CONTACT_US_ERROR,
} from '../lib/constants'

const ModalContainer = styled.div.attrs({
  className: 'bg-white shadow rounded-2.5 w-75',
})``

const ModalText = styled.p.attrs({
  className: 'font-sm p-5',
})``

const PurpleButton = styled.div.attrs({
  className: 'w-100 bg-lightviolet p-5 text-center rounded-b-2.5',
})``

const HalfButton = styled.div.attrs({
  className:
    'border-t border-lightgray border-solid w-1/2 text-center p-5 bg-lightestgray ',
})``

const SingleButtonModal = ({
  modalText,
  confirmButtonText,
  confirmButtonAction,
  form,
  type,
}) => (
  <ModalContainer>
    <ModalText>{modalText}</ModalText>
    <PurpleButton
      as={type === 'submit' ? 'button' : 'div'}
      form={form}
      type={type}
      onClick={confirmButtonAction}
    >
      {confirmButtonText}
    </PurpleButton>
  </ModalContainer>
)

const DoubleButtonModal = ({
  modalText,
  confirmButtonText,
  confirmButtonAction,
  undoButtonText,
  undoButtonAction,
  form,
  type,
}) => (
  <ModalContainer>
    <ModalText>{modalText}</ModalText>
    <div className="flex">
      <HalfButton
        className="rounded-bl-2.5 border-lightgray b"
        onClick={undoButtonAction}
      >
        {undoButtonText}
      </HalfButton>
      <div className="bg-lightgray w-0.125 h-100" />
      <HalfButton
        className="rounded-br-2.5 border-lightgray "
        as={type === 'submit' ? 'button' : 'div'}
        form={form}
        type={type}
        onClick={confirmButtonAction}
      >
        {confirmButtonText}
      </HalfButton>
    </div>
  </ModalContainer>
)

const getModalProps = ({
  modalAction,
  updateModalAction,
  closeModal,
  setInputs,
  initialState,
  confirmationText,
}) => {
  const closeAndResetModal = () => {
    updateModalAction('')
    closeModal()
  }

  const resetForm = () => {
    setInputs(initialState)
    closeAndResetModal()
  }

  switch (modalAction) {
    case SHARE_STORY:
      return {
        type: 'submit',
        modalLayout: DOUBLE,
        form: 'share-story',
        modalText:
          "Are you sure you want to submit your story? You can't undo this action.",
        confirmButtonText: 'Share',
        undoButtonText: 'Cancel',
        undoButtonAction: closeAndResetModal,
      }
    case DELETE_STORY:
      return {
        modalText:
          "Are you sure you want to delete your story? You can't undo this action.",
        modalLayout: DOUBLE,
        confirmButtonText: 'Delete',
        confirmButtonAction: resetForm,
        undoButtonText: 'Cancel',
        undoButtonAction: closeAndResetModal,
      }
    case STORY_SHARED:
      return {
        modalText: confirmationText,
        modalLayout: SINGLE,
        confirmButtonText: 'OK',
        confirmButtonAction: closeAndResetModal,
      }
    case CONTACT_US_SENT:
      return {
        modalLayout: SINGLE,
        modalText: confirmationText,
        confirmButtonText: 'OK',
        confirmButtonAction: resetForm,
      }
    case SERVICE_COMMENT_SHARED:
      return {
        modalText: confirmationText,
        modalLayout: SINGLE,
        confirmButtonText: 'OK',
        confirmButtonAction: closeAndResetModal,
      }
    case SERVICE_COMMENT_ERROR:
      return {
        modalLayout: SINGLE,
        modalText:
          "Something went wrong, your comment hasn't been sent yet. Please close this window and try again.",
        confirmButtonText: 'OK',
        confirmButtonAction: closeAndResetModal,
      }
    case STORY_ERROR:
      return {
        modalLayout: SINGLE,
        modalText:
          "Something went wrong, your story hasn't been sent yet. Please close this window and try again.",
        confirmButtonText: 'OK',
        confirmButtonAction: closeAndResetModal,
      }
    case CONTACT_US_ERROR:
      return {
        modalLayout: SINGLE,
        modalText:
          "Something went wrong, your message hasn't been sent yet. Please close this window and try again.",
        confirmButtonText: 'OK',
        confirmButtonAction: closeAndResetModal,
      }
    default:
      return { modalLayout: null }
  }
}

const Modal = props => {
  const { modalLayout, ...modalProps } = getModalProps(props)

  if (!modalLayout) return null
  if (modalLayout === SINGLE) return <SingleButtonModal {...modalProps} />
  if (modalLayout === DOUBLE) return <DoubleButtonModal {...modalProps} />
}

export const ModalContext = createContext({
  modal: undefined,
  setModal: undefined,
})

export default Modal
