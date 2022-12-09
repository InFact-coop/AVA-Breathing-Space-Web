import { useState } from 'react'

import styled from 'styled-components'

import next from '../public/icons/next.svg'
import loading from '../public/icons/loading.svg'
import stayingMumIllustration from '../public/illustrations/stayingMumIllustration.png'

const AppCard = styled.div.attrs({
  className: `w-100 flex flex-col px-5.5 py-4.5 rounded-1.5 flex flex-col justify-center`,
})`
  height: 255px;
`

const SelectAppStep = ({ setOnboarding, handleKeyPress }) => {
  const [loadingStayingMum, setLoadingStayingMum] = useState(false)
  const [loadingBreathingSpace, setLoadingBreathingSpace] = useState(false)

  const goToStayingMum = () => {
    if (window.location.pathname.includes('staying-mum')) {
      setOnboarding(false)
      return
    }
    setLoadingStayingMum(true)
    window.localStorage.setItem('onboarding', false)
    window.location.assign('/staying-mum')
  }

  const goToBreathingSpace = () => {
    if (!window.location.pathname.includes('staying-mum')) {
      setOnboarding(false)
      return
    }
    setLoadingBreathingSpace(true)
    window.localStorage.setItem('onboarding', false)
    window.location.assign('/')
  }

  return (
    <>
      <div onClick={goToStayingMum} onKeyPress={handleKeyPress}>
        <AppCard className="bg-tealcoral text-left mb-4.5 ">
          {loadingStayingMum ? (
            <img className="h-25" src={loading} alt="loading spinner" />
          ) : (
            <>
              <h2 className="font-serif text-xxl mb-1.75 leading-base">
                Staying Mum
              </h2>
              <p className="font-sans text-base w-75">
                Survivors’ guide for mothers experiencing domestic abuse and
                child removal
              </p>
              <div className="w-100 flex justify-between items-baseline mt-3.5">
                <img
                  src={stayingMumIllustration}
                  alt="illustration of mothers with children"
                  className="h-17.5"
                />

                <img src={next} alt="next icon" />
              </div>
            </>
          )}
        </AppCard>
      </div>
      <div onClick={goToBreathingSpace} onKeyPress={handleKeyPress}>
        <AppCard className="bg-lighttealgrayviolet text-center">
          {loadingBreathingSpace ? (
            <img className="h-25" src={loading} alt="loading spinner" />
          ) : (
            <>
              <div className="p-7.5">
                <h2 className="font-title text-bold text-xxl text-teal mb-4 px-6 leading-base">
                  Breathing Space
                </h2>
                <p className="font-serif text-teal text-base px-3">
                  Helping you find the right support at the right time
                </p>
              </div>
              <div className="w-100 flex justify-end">
                <img src={next} alt="next icon" />
              </div>
            </>
          )}
        </AppCard>
      </div>
    </>
  )
}

export default SelectAppStep
