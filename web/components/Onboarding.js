import { useState } from 'react'
import styled from 'styled-components'
import Exit from './Exit'

const OnboardingStyled = styled.section.attrs({
  className:
    'w-screen h-screen left-0 top-0 fixed bg-white opacity-95 z-10 pt-10 p-5',
})``

const Title = styled.h1.attrs({ className: 'font-serif font-xl mb-2.5' })``
const Copy = styled.p.attrs({ className: 'mb-5' })``
const EmergencyCopy = styled.p.attrs({ className: 'font-bold pb-0.5' })``
const Call = styled.a.attrs({ className: 'border-b' })``

const Onboarding = () => {
  const [onboarding, setonboarding] = useState(true)
  const closeOnboarding = () => setonboarding(false)

  if (!onboarding) return null
  return (
    <OnboardingStyled onClick={closeOnboarding}>
      <Title>Welcome.</Title>
      <Copy>
        Remember that the abuse is not your fault and there is help available.
      </Copy>
      <EmergencyCopy>
        If you need urgent help, <Call href="tel:999">call 999</Call>.
      </EmergencyCopy>
      <Exit onboarding={onboarding} />
    </OnboardingStyled>
  )
}

export default Onboarding
