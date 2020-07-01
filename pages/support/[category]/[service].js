import styled from 'styled-components'
import * as R from 'ramda'

import Container from '../../../components/Container'
import Contact from '../../../components/Contact'
import Comments from '../../../components/Comment'
import CommentForm from '../../../components/CommentForm'
import { ServiceDetails } from '../../../components/Service'

import client from '../../../client'

const GET_SERVICE_DETAILS = `*[_type == "supportService" && slug.current == $slug][0] {
  _type,
  "title": name,
  "service": { 
    "parentID": _id,
    "title": name,
    shortName,
    "logo": logo.asset->url,
    "tags": tags[]->title,
    summary,
    link,
    email,
    publishedAt,
    phonelines,
    likes,
  },
  "form": *[_type == "form" && slug.current == "service-comment"][0]{
    "formTitle": title, 
    body, 
    subtitle, 
    "inputsFromSanity": inputs[]->{ title, required, type },
    confirmationText
  }
}`

const ServiceSummary = styled.div.attrs({
  className: 'text-black font-base',
})``

const ServiceStyled = styled(Container).attrs({
  className: 'bg-white border-b border-lightgray',
})``

const Service = ({
  query: { service: slug },
  service: {
    title: serviceTitle,
    logo,
    tags,
    link,
    email,
    phonelines,
    summary,
    parentID,
  },
  form: { formTitle, subtitle, inputsFromSanity, confirmationText },
}) => {
  return (
    <>
      <ServiceStyled>
        <ServiceDetails title={serviceTitle} logo={logo} tags={tags} />
        {summary && <ServiceSummary>{summary}</ServiceSummary>}
      </ServiceStyled>
      {phonelines && R.map(Contact)(phonelines)}
      {link && <Contact link={link} className="py-7.5" />}
      {email && <Contact email={email} className="py-7.5" />}
      <CommentForm
        {...{
          inputsFromSanity,
          title: formTitle,
          subtitle,
          confirmationText,
          parentID,
        }}
      />
      <Comments {...{ slug, _type: 'supportService' }} />
    </>
  )
}

export default Service
Service.getInitialProps = ctx =>
  client.fetch(GET_SERVICE_DETAILS, {
    slug: ctx.query.service,
  })
