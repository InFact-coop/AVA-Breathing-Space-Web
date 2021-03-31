import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import clsx from 'clsx'
import AppContext from '../lib/AppContext'
import useLocalStorage from '../lib/useLocalStorage'
import { RegionSelect } from './LocationFilter'
import Navbar, { getNavbarOptions } from './Navbar'
import QuickExitStep from './QuickExitStep'
import Exit from './Exit'
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

const EmergencyCopy = styled.p.attrs({
  className:
    'font-bold mb-5 py-2.5 px-5 col-span-full bg-darkpurple text-white flex',
})`
  grid-column: 1 / -1;
`
const Call = styled.a.attrs({ className: 'underline' })``

const Onboarding = () => {
  const [onboarding, setOnboarding] = useLocalStorage('onboarding', null)
  const [moduleIdx, setModuleIdx] = useState(0)
  const [landing, setLanding] = useState(true)

  const Modules = [Welcome, OnlineSafety, QuickExitStep, CustomiseLocation]
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

const Welcome = () => (
  <>
    <Title>Welcome</Title>
    <Copy>
      Remember that the abuse is not your fault and there is help available.
    </Copy>
    <EmergencyCopy>
      <img src="/icons/info.svg" className="w-5 h-5" alt="Info icon" />
      <span className="pl-2.5">If you are in urgent danger, call 999.</span>
    </EmergencyCopy>
    <Copy>
      If you are not able to speak the operator can transfer you to the ‘silent
      solution’ where you will be prompted to press ‘55’ to indicate you need
      help.
    </Copy>
    <Copy>
      You can also contact the national domestic violence helpline on{' '}
      <Call href="tel:08082000247">0808 2000 247</Call> or via their{' '}
      <Call
        href="https://www.nationaldahelpline.org.uk/Chat-to-us-online"
        target="_blank"
        rel="noopener noreferrer"
      >
        live chat service.
      </Call>
    </Copy>
  </>
)
const OnlineSafety = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <Title>Online Safety</Title>
      <Copy>
        Many perpertrators of abuse monitor website and phone use to further
        control their victims.
      </Copy>
      <Copy className="font-bold">
        Make sure that you are using{' '}
        <ShowMoreButton onClick={() => setShowMore(true)} bold={true}>
          private mode
        </ShowMoreButton>{' '}
        to view this website.
      </Copy>
      <ShowMoreButton onClick={() => setShowMore(!showMore)}>
        Learn more
      </ShowMoreButton>
      {showMore && (
        <>
          <Copy className="mt-5">
            Most internet browsers will save certain information when you use
            them.
          </Copy>
          <Copy>
            This includes a history of what site you used or visited, images
            from websites, and information entered into search engines.
          </Copy>
          <Copy>
            You can use <span className="font-bold">private mode</span> in most
            browsers. This will reduce the chances of someone knowing that you
            use this tool or any other support website.
          </Copy>
          <Copy>
            This is a good first step in stopping any traces of your activity on
            your computer, phone or tablet.
          </Copy>
          <div className="mt-5">
            <Title>How to turn on Private Browsing</Title>
            <Copy className="mb-7">
              <div className="font-bold mb-2.5">Chrome</div>
              <ol className="list-decimal list-inside">
                <li className="mb-5">
                  Click the Menu button with three vertical dots.
                </li>
                <li>Select &ldquo;New Incognito Window&rdquo;.</li>
              </ol>
            </Copy>
            <Copy className="mb-7">
              <div className="font-bold mb-2.5">Safari</div>
              <ol className="list-decimal list-inside">
                <li className="mb-5">Tap the New page button.</li>
                <li>
                  Tap &ldquo;Private&rdquo;, and then tap &ldquo;Done&rdquo;.
                </li>
              </ol>
            </Copy>
            <Copy className="mb-7">
              <div className="font-bold mb-2.5">Firefox</div>
              <ol className="list-decimal list-inside">
                <li className="mb-5">
                  Click the Menu button with three horizontal lines.
                </li>
                <li>Select &ldquo;New Private Window&rdquo;.</li>
              </ol>
            </Copy>
            <Copy className="mb-7">
              <div className="font-bold mb-2.5">Internet Explorer</div>
              <ol className="list-decimal list-inside">
                <li className="mb-5">Go to the Safety menu.</li>
                <li>Select &ldquo;Tools&rdquo;.</li>
              </ol>
            </Copy>
          </div>
        </>
      )}
    </>
  )
}

const CustomiseLocation = ({ closeOnboarding }) => {
  const { setRegion } = useContext(AppContext)
  const [selectedRegion, setSelectedRegion] = useState(null)
  return (
    <>
      <Title>Customise Location</Title>
      <Copy>
        Help us give the best advice possible by selecting your location.
      </Copy>
      <Copy>We won’t save this or share it with anyone.</Copy>

      <h2 className="font-bold text-med mb-4">Select your region (optional)</h2>
      <div className="flex items-center justify-between">
        <RegionSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          className="w-full h-full"
          classNamePrefix="onboarding_location"
        />
        <button
          onClick={() => {
            setRegion(selectedRegion)
            closeOnboarding()
          }}
          className="uppercase bg-lightviolet rounded-2.5 py-4 px-4 ml-2.5"
        >
          OK
        </button>
      </div>
      <Exit />
    </>
  )
}

const ShowMoreButton = ({ children, bold, onClick }) => (
  <button
    onClick={onClick}
    className={clsx(bold && 'font-bold', 'text-left underline inline-block')}
  >
    {children}
  </button>
)

export const Title = styled.h1.attrs({
  className: 'font-serif font-xl mb-2.5',
})``
export const Copy = styled.p.attrs({ className: 'mb-5' })``

export default Onboarding
