import styled from 'styled-components'

const Button = styled.a.attrs({
  className: 'py-4.5 rounded-2.5 block text-center tc font-sm ',
})``

const PurpleButton = styled(Button).attrs({
  className: 'bg-lightviolet',
})``

const CoralButton = styled(Button).attrs({
  className: 'bg-coral',
})``

export { Button, PurpleButton, CoralButton }
