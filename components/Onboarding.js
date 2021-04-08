import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useLocalStorage from '../lib/useLocalStorage'
import Navbar, { getNavbarOptions } from './Navbar'
import QuickExitStep from './QuickExitStep'
import WelcomeStep from './WelcomeStep'
import OnlineSafetyStep from './OnlineSafetyStep'
import LocationStep from './LocationStep'
import Landing from './Landing'

const OnboardingStyled = styled.section.attrs({
  className:
    'w-screen h-screen left-0 top-0 fixed bg-white z-10 overflow-scroll',
})``

const Content = styled.div.attrs({ className: 'grid pt-5 font-base' })`
  grid-template-columns: 1.25rem 1fr 1.25rem;

  & > * {
    grid-column: 2;
  }
`

const Onboarding = () => {
  const [onboarding, setOnboarding] = useLocalStorage('onboarding', null)
  const [moduleIdx, setModuleIdx] = useState(0)
  const [landing, setLanding] = useState(true)

  const Modules = [WelcomeStep, OnlineSafetyStep, QuickExitStep, LocationStep]
  const CurrentModule = Modules[moduleIdx]

  const closeOnboarding = () => setOnboarding(false)
  const nextModuleIdx = () => {
    if (moduleIdx + 1 === Modules.length) closeOnboarding()
    setModuleIdx(moduleIdx + 1)
  }

  const navBarOptions = getNavbarOptions({
    _type: 'onboarding',
    title: `Step ${moduleIdx + 1} of ${Modules.length}`,
    next: nextModuleIdx,
  })

  useEffect(() => {
    if (onboarding === null) {
      setOnboarding(true)
      document.body.style.overflow = 'hidden'
    }

    return () => (document.body.style.overflow = 'auto')
  }, [])

  const landingToOnboarding = () => {
    setLanding(false)
    document.body.style.overflow = 'auto'
  }

  if (!onboarding) return null
  return landing ? (
    <Landing
      title="Breathing Space"
      subtitle="Helping you find the right support at the right time"
      buttonClick={landingToOnboarding}
    />
  ) : (
    <OnboardingStyled>
      <Navbar {...navBarOptions} />
      <Content>
        <CurrentModule closeOnboarding={closeOnboarding} />
      </Content>
    </OnboardingStyled>
  )
}

export default Onboarding
