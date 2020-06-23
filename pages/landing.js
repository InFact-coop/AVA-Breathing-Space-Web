import styled from 'styled-components'
import Link from 'next/link'
import Container from '../components/Container'
import { Button } from '../components/Button'

const LandingStyled = styled(Container).attrs({
  className:
    'text-teal text-center bg-teallilac flex flex-col h-screen w-screen justify-between',
})``

const Title = styled.p.attrs({
  className: 'font-header font-title mb-5',
})``

const Subtitle = styled.p.attrs({
  className: 'font-lg font-serif px-5',
})``

const Landing = () => (
  <LandingStyled>
    <div className="mt-43">
      <Title>Breathing Space</Title>
      <Subtitle>Helping you find the right support at the right time</Subtitle>
    </div>
    <Link href="/">
      <Button className="bg-white w-full">Get started</Button>
    </Link>
  </LandingStyled>
)

export default Landing

Landing.getInitialProps = () => ({
  title: 'Landing',
})
