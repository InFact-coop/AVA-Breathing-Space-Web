import styled from 'styled-components'
import Navbar from './Navbar'
import Exit from './Exit'
import Onboarding from './Onboarding'
import Footer from './Footer'

const PageStyled = styled.main.attrs({
  className: 'min-h-content',
})``

const Page = ({ children }) => (
  <>
    <Onboarding />
    <Navbar />
    <Exit />
    <PageStyled>{children}</PageStyled>
    <Footer />
  </>
)

export default Page
