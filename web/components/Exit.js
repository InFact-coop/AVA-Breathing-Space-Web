import styled from 'styled-components'
import ExitIcon from '../public/icons/exit-white.svg'

const ExitStyled = styled.a.attrs({
  className:
    'bg-teal fixed text-white font-sm p-3 pr-5 rounded-r-25 rounded-l-25 bottom-2.5 left-2.5 flex items-center text-bold font-bold',
})``

const Icon = styled.img.attrs({
  className: 'h-7.5 mr-3',
})``

const Exit = () => (
  <ExitStyled href="https://www.bbc.co.uk/">
    <Icon src={ExitIcon} alt="Exit icon" />
    Close app
  </ExitStyled>
)

export default Exit
