import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import AppContext from '../lib/AppContext'
import useLocalStorage from '../lib/useLocalStorage'

import fromCamelCase from '../lib/fromCamelCase'

import Navbar, { getNavbarOptions } from './Navbar'
import Exit from './Exit'
import Onboarding from './Onboarding'
import Footer from './Footer'

const PageStyled = styled.main.attrs({
  className: '',
})``

const Page = ({ _type, title, pageTitle, children }) => {
  const [modal, setModal] = useState({
    targetRef: undefined,
    isOpen: undefined,
    openModal: undefined,
    closeModal: undefined,
    Modal: undefined,
  })

  const [quickExitPage, setQuickExitPage] = useLocalStorage(
    'quickExit',
    'google.com',
  )
  const [windowHeight, setWindowHeight] = useState('100vh')
  const navbarOptions = getNavbarOptions({ _type, title })

  useEffect(() => {
    if (_type === 'supportCategory') {
      setWindowHeight(`${window.innerHeight - 200 - 103}px`)
    }
    // footer = 200px, top navbar = 60px
    else setWindowHeight(`${window.innerHeight - 200 - 60}px`)
  })

  const headTitleContent = () => {
    if (_type === 'page' || _type === 'form') {
      return `Breathing Space - ${title}`
    } else if (pageTitle) {
      return `Breathing Space - ${fromCamelCase(pageTitle)}`
    } else return 'Breathing Space'
  }

  return title === 'Landing' ? (
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
  ) : (
    <>
      <Head>
        <title>{headTitleContent()}</title>
      </Head>
      <AppContext.Provider
        value={{ modal, setModal, quickExitPage, setQuickExitPage }}
      >
        <Onboarding
          quickExitPage={quickExitPage}
          setQuickExitPage={setQuickExitPage}
        />
        <Navbar {...navbarOptions} />
        <Exit quickExitPage={quickExitPage} />
        <PageStyled style={{ minHeight: `${windowHeight}` }}>
          {children}
        </PageStyled>
      </AppContext.Provider>
      <Footer />
    </>
  )
}

export default Page
