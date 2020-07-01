import styled from 'styled-components'
import { useEffect, useState } from 'react'

import Navbar, { getNavbarOptions } from './Navbar'
import Exit from './Exit'
import Onboarding from './Onboarding'
import Footer from './Footer'

const PageStyled = styled.main.attrs({
  className: '',
})``

const Page = ({ _type, title, children }) => {
  const [windowHeight, setWindowHeight] = useState('100vh')
  const navbarOptions = getNavbarOptions({ _type, title })

  useEffect(() => {
    if (_type === 'supportCategory') {
      setWindowHeight(`${window.innerHeight - 200 - 103}px`)
    }
    // footer = 200px, top navbar = 60px
    else setWindowHeight(`${window.innerHeight - 200 - 60}px`)
  })

  return title === 'Landing' ? (
    <PageStyled>{children}</PageStyled>
  ) : (
    <>
      <Onboarding />
      <Navbar {...navbarOptions} />
      <Exit />
      <PageStyled style={{ minHeight: `${windowHeight}` }}>
        {children}
      </PageStyled>
      <Footer />
    </>
  )
}

export default Page
