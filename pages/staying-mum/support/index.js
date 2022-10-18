import client from '../../../client'
import { InformationStayingMum } from '../../../components/Information'

const GET_ARTICLE = `*[_type == "article" && slug.current == $slug][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const Article = props => {
  return <InformationStayingMum background="" props={props} />
}

export default Article

Article.getInitialProps = async ctx => {
  const data = await client.fetch(GET_ARTICLE, {
    slug: ctx.query.article,
  })

  return { pageTitle: data._type, ...data }
}
