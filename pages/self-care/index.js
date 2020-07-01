import { useApolloClient } from '@apollo/react-hooks'

import Link from 'next/link'

import * as R from 'ramda'
import styled from 'styled-components'
import Flickity from 'react-flickity-component'
import { updateNavbarColour } from '../../components/Navbar'

import client from '../../client'
import cycleColours from '../../lib/cycleColours'
import Container from '../../components/Container'

const GET_SELF_CARE_BY_CATEGORY =
  '*[ _type == "selfcareCategory" ] {title, "techniques": *[ _type == "selfcareTechnique" && references(^._id) ] { title, "slug": slug.current } }'

const TechniqueStyled = styled.a.attrs(({ colour }) => ({
  className: `w-32 h-40 flex-shrink-0 rounded-2.5 mr-2.5 shadow
  bg-${colour} 
`,
}))``

const TechniqueTitle = styled.h2.attrs({
  className: 'font-sm font-bold h-15 p-2.5 flex items-end',
})``

const Preview = styled.div.attrs({ className: 'h-25 bg-whiteoverlay' })``

const Technique = ({ title, colour, slug, onClick }) => (
  <Link
    href="/self-care/[technique]"
    as={`/self-care/${slug}`}
    passHref
    key={slug}
  >
    <TechniqueStyled colour={colour} onClick={onClick}>
      <Preview />
      <TechniqueTitle>{title}</TechniqueTitle>
    </TechniqueStyled>
  </Link>
)

const Carousel = styled(Flickity).attrs({
  options: {
    prevNextButtons: false,
    pageDots: false,
    cellAlign: 'left',
    contain: true,
  },
  className: 'mb-10',
})``

const CategoryTitle = styled.h1.attrs({
  className: 'font-serif font-lg mb-2.5',
})``

const CategoryStyled = styled.section.attrs({
  className: '',
})``

const Category = ({ title, techniques }, index) => {
  const apollo = useApolloClient()
  if (R.isEmpty(techniques)) return undefined

  const colour = cycleColours(index)
  const Techniques = R.pipe(
    R.map(R.assoc('colour', colour)),
    R.map(R.assoc('onClick', updateNavbarColour({ apollo, colour }))),
    R.map(Technique),
  )(techniques)

  return (
    <CategoryStyled key={`category-${index}`}>
      <CategoryTitle>{title}</CategoryTitle>
      <Carousel>{Techniques}</Carousel>
    </CategoryStyled>
  )
}

const SelfCareStyled = styled(Container).attrs({
  className: '',
})``

const SelfCare = ({ categories }) => {
  if (!categories) return <div />
  return (
    <SelfCareStyled>{R.addIndex(R.map)(Category)(categories)}</SelfCareStyled>
  )
}

SelfCare.getInitialProps = async () => {
  const categories = await client.fetch(GET_SELF_CARE_BY_CATEGORY)
  return { categories }
}

export default SelfCare
