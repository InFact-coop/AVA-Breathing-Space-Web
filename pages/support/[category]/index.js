import styled from 'styled-components'
import * as R from 'ramda'
import Container from '../../../components/Container'
import client from '../../../client'

import rightArrow from '../../../public/icons/right-arrow.svg'

const GET_CATEGORY_SERVICE_SUMMARY = `*[_type == "supportCategory" && slug.current == $slug][0] {
  title,
  _type,
  "slug": slug.current,
  "services": *[ _type == "supportService" && references(^._id) ] {name, "logo": logo.asset->url, "tags": tags[]->title, "slug": "support/" + $slug + "/" + slug.current},
}`

const Services = styled.section.attrs({
  className: '',
})``

const SummaryStyled = styled.div.attrs({
  className: 'px-2.5 py-4 shadow mb-2 bg-white rounded flex justify-between',
})``

const SummaryName = styled.div.attrs({
  className: 'font-lg mb-3.75',
})``

const SummaryLogo = styled.img.attrs({
  className: 'max-w-22.5',
})`
  filter: grayscale(100%);
`

const SummaryLeft = styled.div.attrs({
  className: 'w-3/4',
})``

const SummaryRight = styled.div.attrs({
  className: 'w-1/4 flex flex-col items-end',
})``
const Link = styled.a.attrs({
  className: 'font-sm flex',
})``

const Arrow = styled.img.attrs({
  className: 'ml-1.25',
  src: rightArrow,
  alt: 'Right arrow',
})``

const TagStyled = styled.span.attrs({
  className: 'font-sm relative -left-1.25',
})``

const Tag = (tag, index) => (
  <li key={`tag-${index}`}>
    <TagStyled>{tag}</TagStyled>
  </li>
)
const Tags = styled.ul.attrs({
  className: 'mb-3.75 list-disc list-outside text-gray',
})`
  margin-left: 1.1rem;
`

const Summary = ({ name, logo, tags, slug }, index) => {
  return (
    <SummaryStyled key={`summary-${index}`}>
      <SummaryLeft>
        <SummaryName>{name}</SummaryName>
        {tags && <Tags>{R.addIndex(R.map)(Tag)(tags)}</Tags>}
        <Link href={`/${slug}`}>
          More details <Arrow />
        </Link>
      </SummaryLeft>
      <SummaryRight>
        {logo && <SummaryLogo src={logo} alt={`${name} logo`} />}
      </SummaryRight>
    </SummaryStyled>
  )
}

const CategoryStyled = styled(Container).attrs({
  className: '',
})``

const Category = ({ services }) => {
  return (
    <CategoryStyled>
      <Services>{R.addIndex(R.map)(Summary)(services)}</Services>
    </CategoryStyled>
  )
}

export default Category
Category.getInitialProps = ctx => {
  return client.fetch(GET_CATEGORY_SERVICE_SUMMARY, {
    slug: ctx.query.category,
  })
}
