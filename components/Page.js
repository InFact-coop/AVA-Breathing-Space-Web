import styled from 'styled-components'
import Navbar, { getNavbarOptions } from './Navbar'
import Exit from './Exit'
import Onboarding from './Onboarding'
import Footer from './Footer'

const PageStyled = styled.main.attrs({
  className: 'min-h-content',
})``

const Page = ({ _type, title, children }) => {
  const navbarOptions = getNavbarOptions({ _type, title })

  return (
    <>
      <Onboarding />
      <Navbar {...navbarOptions} />
      <Exit />
      <PageStyled>{children}</PageStyled>
      <Footer />
    </>
  )
}

export default Page
