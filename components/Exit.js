import { useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import AppContext from '../lib/AppContext'
import ExitIcon from '../public/icons/exit-white.svg'
import Arrow from '../public/icons/arrow.svg'

const ExitStyled = styled.a.attrs({
  className:
    'bg-teal text-white font-sm p-3 pr-5 rounded-r-25 rounded-l-25 flex items-center text-bold font-bold shadow-exit',
})`
  z-index: 5;
  height: fit-content;
  min-width: 142px;
`

const Icon = styled(motion.img).attrs({
  className: 'h-7.5 mr-3',
})``

const ContainerStyled = styled.div.attrs({
  className: 'flex fixed bottom-2.5 left-2.5 items-end',
})`
  z-index: 5;
`

const ExitButton = ({ arrow, quickExitPage }) => (
  <ExitStyled href={`https://${quickExitPage}`} arrow={arrow}>
    <Icon src={ExitIcon} alt="Exit icon" />
    Quick Exit
  </ExitStyled>
)

const ExitArrow = () => (
  <Icon
    src={Arrow}
    alt="Arrow to exit icon"
    className="mb-3.5 ml-2"
    animate={{
      x: ['0%', '0%', '40%', '0%', '10%', '0%', '40%', '0%', '0%'],
    }}
    transition={{ duration: 2, yoyo: 2, ease: 'easeInOut' }}
  />
)

const Exit = ({ arrow }) => {
  const { quickExitPage } = useContext(AppContext)
  return (
    <ContainerStyled>
      <ExitButton quickExitPage={quickExitPage} />
      {arrow && <ExitArrow />}
    </ContainerStyled>
  )
}

export default Exit
