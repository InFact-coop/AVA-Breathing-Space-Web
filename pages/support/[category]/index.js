import styled from 'styled-components'
import Container from '../components/Container'

const CategoryStyled = styled.section.attrs({
  className: '',
})``

const Category = () => (
  <Container bgColour="lightgrey">
    <CategoryStyled>Category</CategoryStyled>
  </Container>
)

export default Category
