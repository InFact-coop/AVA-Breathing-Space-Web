import { useApolloClient } from '@apollo/react-hooks'

import Link from 'next/link'

import * as R from 'ramda'
import styled from 'styled-components'
import Flickity from 'react-flickity-component'
import { updateNavbarColour } from '../../components/Navbar'

import client from '../../client'
import Container from '../../components/Container'

const GET_SELF_CARE_BY_CATEGORY = `*[ _type == "selfcareCategory" ] {
    title, 
    "techniques": *[ _type == "selfcareTechnique" && references(^._id) ] { title, "slug": slug.current }, 
    "illustration": *[ _type == "colourAndBackgroundIllustration" && _id == ^.colourAndBackgroundIllustration._ref ][0] { "url": file.asset->url, color }, 
  }`

const TechniqueStyled = styled.a.attrs(({ colour }) => ({
  className: `w-32 h-40 flex-shrink-0 rounded-2.5 mr-2.5 shadow
  bg-${colour} 
`,
}))``

const TechniqueTitle = styled.h2.attrs({
  className: 'font-med font-bold h-15 p-2.5 flex items-end bg-whiteoverlay',
})``

const Preview = styled.div.attrs({
  className: 'h-25 rounded-2.5',
})`
  background-image: ${({ illustration }) => `url(${illustration})`};
  background-position: ${({ cardNumber }) =>
    `${0 - 32 * cardNumber}px ${0 + 100 * cardNumber}px`};
  background-size: 100px;
  background-repeat: repeat;
`

const Technique = ({
  title,
  colour,
  illustration,
  slug,
  onClick,
  cardNumber,
}) => (
  <Link
    href="/self-care/[technique]"
    as={`/self-care/${slug}`}
    passHref
    key={slug}
  >
    <TechniqueStyled colour={colour} onClick={onClick}>
      <Preview cardNumber={cardNumber} illustration={illustration} />
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

const Category = ({ title, techniques, illustration }, index) => {
  const apollo = useApolloClient()
  if (R.isEmpty(techniques)) return null

  const indexedTechniques = techniques.map((tech, cardNumber) => ({
    cardNumber,
    ...tech,
  }))

  const colour = R.join('', R.split(' ', R.toLower(illustration.color)))
  const Techniques = R.pipe(
    R.map(R.assoc('colour', colour)),
    R.map(R.assoc('illustration', illustration.url)),
    R.map(R.assoc('onClick', updateNavbarColour({ apollo, colour }))),
    R.map(Technique),
  )(indexedTechniques)

  return (
    <CategoryStyled key={`category-${index}`}>
      <CategoryTitle>{title}</CategoryTitle>
      <Carousel>{Techniques}</Carousel>
    </CategoryStyled>
  )
}

const SelfCareStyled = styled(Container).attrs({
  className: 'px-5 py-5',
})``

const SelfCare = ({ categories }) => {
  if (!categories) return <div />
  return (
    <SelfCareStyled>{R.addIndex(R.map)(Category)(categories)}</SelfCareStyled>
  )
}

SelfCare.getInitialProps = async () => {
  const categories = await client.fetch(GET_SELF_CARE_BY_CATEGORY)
  return { pageTitle: 'selfcareCategories', categories }
}

export default SelfCare
