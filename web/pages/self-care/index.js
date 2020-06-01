import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import * as R from 'ramda'
import styled from 'styled-components'

const GET_SELF_CARE_TECHNIQUES = gql`
  query GET_SELF_CARE_TECHNIQUES {
    allSelfcareTechnique {
      title
      summary
      slug {
        current
      }
      categories {
        title
      }
    }
  }
`

const TechniqueStyled = styled.a.attrs({
  className: 'bg-coral w-32 h-40 flex-shrink-0 rounded-2d5 mr-2d5 shadow',
})``

const TechniqueTitle = styled.h2.attrs({
  className: 'font-sm h-15 p-2d5 flex items-end',
})``
const Preview = styled.div.attrs({ className: 'h-25 bg-whiteoverlay' })``

const Technique = ({ title, slug: { current } }) => (
  <TechniqueStyled key={current} href={`/self-care/${current}`}>
    <Preview />
    <TechniqueTitle>{title}</TechniqueTitle>
  </TechniqueStyled>
)

const SelfCareStyled = styled.section.attrs({
  className: '',
})``

const CategoryStyled = styled.section.attrs({
  className: 'flex flex-wrap mb-10',
})``

const CategoryTitle = styled.h1.attrs({
  className: 'font-serif font-lg mb-2d5',
})``

const Category = ({ name, children }) => (
  <>
    <CategoryTitle>{name}</CategoryTitle>
    <CategoryStyled>{children}</CategoryStyled>
  </>
)

const SelfCare = () => {
  const { data, error, loading } = useQuery(GET_SELF_CARE_TECHNIQUES)
  if (loading) return <p>LOADING...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <SelfCareStyled>
      <Category name="Crisis relief">
        {R.map(Technique)(data.allSelfcareTechnique)}
      </Category>
      <Category name="Meditation">
        {R.map(Technique)(data.allSelfcareTechnique)}
      </Category>
      <Category name="Health and fitness">
        {R.map(Technique)(data.allSelfcareTechnique)}
      </Category>
    </SelfCareStyled>
  )
}

export default SelfCare
