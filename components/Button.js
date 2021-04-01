import styled from 'styled-components'

const Button = styled.a.attrs({
  className: 'py-4.5 rounded-2.5 block text-center tc font-med cursor-pointer',
})``

const PurpleButton = styled(Button).attrs({
  className: 'bg-lightviolet',
})``

const CoralButton = styled(Button).attrs({
  className: 'bg-coral',
})``

const OutlineButton = styled(Button).attrs({
  className: 'bg-white border border-lightgray mb-2.5',
})``

export { Button, PurpleButton, CoralButton, OutlineButton }
