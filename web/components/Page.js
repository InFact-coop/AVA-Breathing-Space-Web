import styled from 'styled-components'
import Navbar from './Navbar'

const PageStyled = styled.main.attrs({
  className: 'p-5',
})``

const Page = ({ children }) => (
  <>
    <Navbar />
    <PageStyled>{children}</PageStyled>
  </>
)

export default Page
