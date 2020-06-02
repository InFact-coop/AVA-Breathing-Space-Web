import { useState, useEffect } from 'react'
import * as R from 'ramda'
import styled from 'styled-components'

import client from '../../client'
import cycleColours from '../../lib/cycleColours'

const GET_SELF_CARE_BY_CATEGORY =
  '*[ _type == "selfcareCategory" ] {title, "techniques": *[ _type == "selfcareTechnique" && references(^._id) ] { title, "slug": slug.current } }'

const TechniqueStyled = styled.a.attrs(({ colour }) => ({
  className: `w-32 h-40 flex-shrink-0 rounded-2.5 mr-2.5 shadow
  bg-${colour} 
  `,
}))``

const TechniqueTitle = styled.h2.attrs({
  className: 'font-sm h-15 p-2.5 flex items-end',
})``

const Preview = styled.div.attrs({ className: 'h-25 bg-whiteoverlay' })``

const Technique = ({ title, colour, slug }) => (
  <TechniqueStyled href={`/self-care/${slug}`} colour={colour} key={slug}>
    <Preview />
    <TechniqueTitle>{title}</TechniqueTitle>
  </TechniqueStyled>
)

const SelfCareStyled = styled.section.attrs({
  className: '',
})``

const Carousel = styled.div.attrs({
  className: 'flex flex-wrap mb-10',
})``

const CategoryTitle = styled.h1.attrs({
  className: 'font-serif font-lg mb-2.5',
})``

const CategoryStyled = styled.section.attrs({
  className: '',
})``

const Category = ({ title, techniques }, index) => {
  if (R.isEmpty(techniques)) return undefined

  const colour = cycleColours(index)

  const Techniques = R.pipe(
    R.map(R.assoc('colour', colour)),
    R.map(Technique),
  )(techniques)

  return (
    <CategoryStyled key={`category-${index}`}>
      <CategoryTitle>{title}</CategoryTitle>
      <Carousel>{Techniques}</Carousel>
    </CategoryStyled>
  )
}

const SelfCare = () => {
  const [categories, setCategories] = useState()
  useEffect(() => {
    const getCategories = async () => {
      const selfCareCategories = await client.fetch(GET_SELF_CARE_BY_CATEGORY)
      setCategories(selfCareCategories)
    }

    getCategories()
  }, [])

  if (!categories) return <div />
  return (
    <SelfCareStyled>{R.addIndex(R.map)(Category)(categories)}</SelfCareStyled>
  )
}

export default SelfCare
