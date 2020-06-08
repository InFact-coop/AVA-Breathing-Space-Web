import styled from 'styled-components'
import Container from '../../components/Container'

const StoryStyled = styled.section.attrs({
  className: '',
})``

const Story = () => (
  <Container bgColour="white">
    <StoryStyled>Story</StoryStyled>
  </Container>
)

export default Story
