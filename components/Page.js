import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Head from 'next/head'

import fromCamelCase from '../lib/fromCamelCase'

import Navbar, { getNavbarOptions } from './Navbar'
import { ModalContext } from './Modal'
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
      <PageStyled>{children}</PageStyled>
    </>
  ) : (
    <>
      <Head>
        <title>{headTitleContent()}</title>
      </Head>
      <Onboarding />
      <ModalContext.Provider value={{ modal, setModal }}>
        <Navbar {...navbarOptions} />
        <Exit />
        <PageStyled style={{ minHeight: `${windowHeight}` }}>
          {children}
        </PageStyled>
      </ModalContext.Provider>
      <Footer />
    </>
  )
}

export default Page
