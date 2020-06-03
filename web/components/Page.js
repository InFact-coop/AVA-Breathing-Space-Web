import styled from 'styled-components'
import Navbar from './Navbar'
import Exit from './Exit'
import Onboarding from './Onboarding'

const PageStyled = styled.main.attrs({
  className: 'p-5',
})``

const Page = ({ children }) => (
  <>
    <Onboarding />
    <Navbar />
    <Exit />
    <PageStyled>{children}</PageStyled>
  </>
)

export default Page
