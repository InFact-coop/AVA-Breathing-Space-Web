import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import AppContext from '../lib/AppContext'
import useLocalStorage from '../lib/useLocalStorage'

import fromCamelCase from '../lib/fromCamelCase'

import Navbar, { getNavbarOptions } from './Navbar'
import StayingMumNav from './StayingMumNav'
import TitleCard, { getTitleCardOptions } from './TitleCard'
import Exit from './Exit'
import Onboarding from './Onboarding'
import Footer from './Footer'

const PageStyled = styled.main.attrs({
  className: '',
})``

const Page = ({ _type, title, pageTitle, children, colour, illustration }) => {
  const [modal, setModal] = useState({
    targetRef: undefined,
    isOpen: undefined,
    openModal: undefined,
    closeModal: undefined,
    Modal: undefined,
  })

  const [pageID, setPageID] = useState(undefined)
  const [navOpen, setNavOpen] = useState(false)
  const [likedPageIDs, setLikedPageIDs] = useLocalStorage('likedPageIDs', [])

  const [quickExitPage, setQuickExitPage] = useLocalStorage(
    'quickExit',
    'google.com',
  )

  const [region, setRegion] = useLocalStorage('region', null)
  const [windowHeight, setWindowHeight] = useState('100vh')
  const navbarOptions = getNavbarOptions({ _type, title })
  const titleCardOptions = getTitleCardOptions({
    _type,
    title,
    colour,
    illustration,
  })
  const [whichApp, setWhichApp] = useState('Breathing Space')

  useEffect(() => {
    if (_type === 'supportCategory') {
      setWindowHeight(`${window.innerHeight - 200 - 103}px`)
    }
    // footer = 200px, top navbar = 60px
    else setWindowHeight(`${window.innerHeight - 200 - 60}px`)
  })

  useEffect(() => {
    if (window.location.pathname.includes('staying-mum')) {
      setWhichApp('Staying Mum')
    }
  })

  const headTitleContent = () => {
    switch (whichApp) {
      case 'Breathing Space':
        if (_type === 'page' || _type === 'form') {
          return `Breathing Space - ${title}`
        } else if (pageTitle) {
          return `Breathing Space - ${fromCamelCase(pageTitle)}`
        } else return 'Breathing Space'

      case 'Staying Mum':
        return `Staying Mum - ${fromCamelCase(pageTitle)}`

      default:
        return `${title}`
    }
  }

  const WhichNav = () =>
    whichApp === 'Breathing Space' ? (
      <Navbar {...navbarOptions} />
    ) : (
      <>
        <StayingMumNav navOpen={navOpen} setNavOpen={setNavOpen} />
        <TitleCard {...titleCardOptions} />
      </>
    )

  if (title === 'Landing') {
    return (
      <>
        <Head>
          <title>{headTitleContent()}</title>
        </Head>
        <AppContext.Provider
          value={{ modal, setModal, quickExitPage, setQuickExitPage }}
        >
          <PageStyled>{children}</PageStyled>
        </AppContext.Provider>
      </>
    )
  } else
    return (
      <>
        <Head>
          <title>{headTitleContent()}</title>
        </Head>
        <AppContext.Provider
          value={{
            modal,
            setModal,
            quickExitPage,
            setQuickExitPage,
            region,
            setRegion,
            pageID,
            setPageID,
            likedPageIDs,
            setLikedPageIDs,
          }}
        >
          <Onboarding
            quickExitPage={quickExitPage}
            setQuickExitPage={setQuickExitPage}
          />
          <WhichNav />
          <Exit quickExitPage={quickExitPage} />
          <PageStyled style={{ minHeight: `${windowHeight}` }}>
            {children}
          </PageStyled>
        </AppContext.Provider>
        {whichApp === 'Breathing Space' && <Footer />}
      </>
    )
}

export default Page
