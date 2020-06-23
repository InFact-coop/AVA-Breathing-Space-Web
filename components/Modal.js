import styled from 'styled-components'

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
        className="rounded-bl-2.5  border-lightgray b"
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

export { SingleButtonModal, DoubleButtonModal }
