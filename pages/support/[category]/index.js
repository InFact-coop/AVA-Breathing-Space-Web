import styled from 'styled-components'
import * as R from 'ramda'
import Container from '../../../components/Container'
import { ServicePreview } from '../../../components/Service'
import client from '../../../client'

const GET_CATEGORY_SERVICE_PREVIEW = `*[_type == "supportCategory" && slug.current == $slug][0] {
  title,
  _type,
  "slug": slug.current,
  "services": *[ _type == "supportService" && references(^._id) ] {name, "logo": logo.asset->url, "tags": tags[]->title, "slug": "support/" + $slug + "/" + slug.current},
}`

const Services = styled.section.attrs({
  className: '',
})``

const CategoryStyled = styled(Container).attrs({
  className: '',
})``

const Category = ({ services }) => {
  return (
    <CategoryStyled>
      <Services>{R.addIndex(R.map)(ServicePreview)(services)}</Services>
    </CategoryStyled>
  )
}

export default Category
Category.getInitialProps = ctx => {
  return client.fetch(GET_CATEGORY_SERVICE_PREVIEW, {
    slug: ctx.query.category,
  })
}
