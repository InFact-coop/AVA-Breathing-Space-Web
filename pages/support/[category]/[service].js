import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

import Container from '../../../components/Container'
import Contact from '../../../components/Contact'
import Comments from '../../../components/Comment'
import Likes from '../../../components/Likes'
import CommentForm from '../../../components/CommentForm'
import { ServiceDetails } from '../../../components/Service'

import AppContext from '../../../lib/AppContext'
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
    commentsToggle,
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
    likes,
    email,
    phonelines,
    summary,
    parentID,
    commentsToggle,
  },
  form: { formTitle, subtitle, inputsFromSanity, confirmationText },
}) => {
  const { setPageID } = useContext(AppContext)
  useEffect(() => setPageID(parentID), [])

  return (
    <>
      <ServiceStyled>
        <ServiceDetails title={serviceTitle} logo={logo} tags={tags} />
        {summary && <ServiceSummary>{summary}</ServiceSummary>}
      </ServiceStyled>
      {phonelines && R.map(Contact)(phonelines)}
      {link && <Contact link={link} className="py-7.5" />}
      {email && <Contact email={email} className="py-7.5" />}
      {commentsToggle ? (
        <>
          <CommentForm
            {...{
              inputsFromSanity,
              title: formTitle,
              subtitle,
              confirmationText,
              parentID,
            }}
          />
          <Likes likes={likes} />
          <Comments {...{ slug, _type: 'supportService' }} />{' '}
        </>
      ) : (
        <Likes likes={likes} className="mt-6" />
      )}
    </>
  )
}

export default Service
Service.getInitialProps = async ctx => {
  const data = await client.fetch(GET_SERVICE_DETAILS, {
    slug: ctx.query.service,
  })

  return { pageTitle: data._type, ...data }
}
