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

const PageStyled = styled.main.attrs(({ stayingMum }) => ({
  className: `${stayingMum ? 'pb-30 bg-white' : ''}`,
}))``

// eslint-disable-next-line max-lines-per-function
const Page = ({ _type, title, children }) => {
  const { pageTitle, summaryTitle } = children.props

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
    summaryTitle,
  })
  const [whichApp, setWhichApp] = useLocalStorage('whichApp', null)
  const [themeColour, setThemeColour] = useLocalStorage(
    'themeColour',
    'tealcoral',
  )
  const [titleBgIllustration, setTitleBgIllustration] = useLocalStorage(
    'titleBgIllustration',
    '',
  )
  const [titleIllustration, setTitleIllustration] = useLocalStorage(
    'titleIllustration',
    '',
  )

  useEffect(() => {
    if (window.location.pathname.includes('staying-mum')) {
      setWhichApp('Staying Mum')
    } else setWhichApp('Breathing Space')
  })

  useEffect(() => {
    // breathing space support category page
    if (_type === 'supportCategory') {
      setWindowHeight(`${window.innerHeight - 200 - 103}px`)
    }
    // staying mum navbar only
    else if (
      whichApp === 'Staying Mum' &&
      title &&
      title.toLowerCase().includes('staying mum')
    ) {
      setWindowHeight(`${window.innerHeight - 78}px`)
    }
    // staying mum navbar and title card
    else if (whichApp === 'Staying Mum') {
      setWindowHeight(`${window.innerHeight - 208}px`)
    }
    // breathing space normal : footer = 200px, top navbar = 60px
    else setWindowHeight(`${window.innerHeight - 200 - 60}px`)
  })

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    }
    const unsetFixedBody = () => (document.body.style.overflow = 'auto')

    return unsetFixedBody
  }, [navOpen])

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
        <TitleCard
          titleCardOptions={titleCardOptions}
          themeColour={themeColour}
          titleIllustration={titleIllustration}
          titleBgIllustration={titleBgIllustration}
        />
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
            whichApp,
            setWhichApp,
            pageID,
            setPageID,
            likedPageIDs,
            setLikedPageIDs,
            themeColour,
            setThemeColour,
            titleBgIllustration,
            setTitleBgIllustration,
            titleIllustration,
            setTitleIllustration,
          }}
        >
          <Onboarding
            quickExitPage={quickExitPage}
            setQuickExitPage={setQuickExitPage}
            setWhichApp={setWhichApp}
          />
          <WhichNav />
          <Exit quickExitPage={quickExitPage} />
          <PageStyled
            stayingMum={whichApp === 'Staying Mum'}
            style={{ minHeight: `${windowHeight}` }}
          >
            {children}
          </PageStyled>
        </AppContext.Provider>
        {whichApp === 'Breathing Space' && <Footer />}
      </>
    )
}

export default Page
