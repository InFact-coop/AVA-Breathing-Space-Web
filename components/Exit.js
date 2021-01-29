import styled from 'styled-components'
import ExitIcon from '../public/icons/exit-white.svg'
import Arrow from '../public/icons/arrow.svg'

const ExitTutorialStyled = styled.div.attrs({
  className: 'mb-7.5',
})``

const ExitTutorialCopy = styled.div.attrs({
  className: 'mb-2.5',
})``

const ExitStyled = styled.a.attrs(({ onboarding }) => ({
  className: `bg-teal text-white font-med p-3 pr-5 rounded-r-25 rounded-l-25 flex items-center text-bold font-bold shadow-exit
    ${onboarding ? 'mr-4' : 'mr-0'}`,
}))`
  z-index: 5;
  height: fit-content;
  min-width: 142px;
`

const Icon = styled.img.attrs({
  className: 'h-7.5 mr-3',
})``

const ContainerStyled = styled.div.attrs({
  className: 'flex fixed  bottom-2.5 left-2.5 items-end',
})`
  z-index: 5;
`

const ExitButton = ({ onboarding }) => (
  <ExitStyled href="https://www.google.co.uk/" onboarding={onboarding}>
    <Icon src={ExitIcon} alt="Exit icon" />
    Close app
  </ExitStyled>
)

const ExitTutorial = () => (
  <ExitTutorialStyled>
    <ExitTutorialCopy>Tap here to close this app instantly.</ExitTutorialCopy>
    <Icon src={Arrow} alt="Arrow to exit icon" />
  </ExitTutorialStyled>
)

const Exit = ({ onboarding }) => {
  return (
    <ContainerStyled>
      <ExitButton onboarding={onboarding} />
      {onboarding ? <ExitTutorial /> : null}
    </ContainerStyled>
  )
}

export default Exit
