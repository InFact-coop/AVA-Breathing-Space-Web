import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useLocalStorage from '../lib/useLocalStorage'
import Exit from './Exit'
import Landing from './Landing'

const OnboardingStyled = styled.section.attrs({
  className:
    'w-screen h-screen left-0 top-0 fixed bg-white opacity-95 z-10 pt-10 p-5',
})``

const Title = styled.h1.attrs({ className: 'font-serif font-xl mb-2.5' })``
const Copy = styled.p.attrs({ className: 'mb-5' })``
const EmergencyCopy = styled.p.attrs({ className: 'font-bold pb-0.5' })``
const Call = styled.a.attrs({ className: 'border-b' })``

const Onboarding = () => {
  const [onboarding, setOnboarding] = useLocalStorage('onboarding', null)
  const [landing, setLanding] = useState(true)
  const closeOnboarding = () => setOnboarding(false)

  useEffect(() => {
    if (onboarding === null) {
      setOnboarding(true)
    }
  }, [])

  const landingToOnboarding = () => {
    setLanding(false)

    window.setTimeout(() => setOnboarding(false), 5000)
  }

  if (!onboarding) return null
  return landing ? (
    <Landing
      title="Breathing Space"
      subtitle="Helping you find the right support at the right time"
      buttonClick={landingToOnboarding}
    />
  ) : (
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
