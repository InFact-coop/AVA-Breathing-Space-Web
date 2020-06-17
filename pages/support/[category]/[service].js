import styled from 'styled-components'
import * as R from 'ramda'
import Container from '../../../components/Container'
import { ServiceDetails } from '../../../components/Service'
import client from '../../../client'

import phoneIcon from '../../../public/icons/phone.svg'
import clockIcon from '../../../public/icons/clock.svg'
import infoIcon from '../../../public/icons/info.svg'
import urlIcon from '../../../public/icons/url.svg'
import emailIcon from '../../../public/icons/email.svg'

const GET_SERVICE_DETAILS = `*[_type == "supportService" && slug.current == $slug][0] {
  _type,
  "title": name,
  shortName,
  "logo": logo.asset->url,
  "tags": tags[]->title,
  summary,
  link,
  email,
  publishedAt,
  phonelines,
  likes
}`

const ServiceSummary = styled.div.attrs({
  className: 'text-black font-base',
})``

const ServiceStyled = styled(Container).attrs({
  className: 'bg-white border-b border-lightgray',
})``

const PhonelineTitle = styled.div.attrs({
  className: 'font-bold font-base mb-4',
})``

const ContactDetailStyled = styled.div.attrs({
  className: 'flex items-center mb-5',
})`
  &:last-child {
    margin-bottom: 0rem;
  }
`

const ContactDetailText = styled.div.attrs(({ underline }) => ({
  className: `${
    underline ? 'underline ' : ''
  }font-sm text-black whitespace-pre-line`,
}))`
  word-break: break-word;
`

const Icon = styled.img.attrs({
  className: 'w-4.5 h-4.5 mr-4.5',
})``

const ContactDetail = ({ icon, text, href }) => {
  return (
    <ContactDetailStyled>
      <Icon src={icon} />
      <ContactDetailText as={href ? 'a' : 'div'} href={href} underline={!!href}>
        {text}
      </ContactDetailText>
    </ContactDetailStyled>
  )
}
const ContactStyled = styled(Container).attrs({
  className: 'bg-white border-b border-lightgray',
})``

const Contact = ({
  title,
  openingHours,
  phoneNumber,
  email,
  link,
  additionalInfo,
  className,
}) => {
  return (
    <ContactStyled className={className}>
      {title && <PhonelineTitle>{title}</PhonelineTitle>}
      {phoneNumber && (
        <ContactDetail
          icon={phoneIcon}
          text={phoneNumber}
          href={`tel:${phoneNumber}`}
        />
      )}
      {email && (
        <ContactDetail icon={emailIcon} text={email} href={`mailto:${email}`} />
      )}
      {link && <ContactDetail icon={urlIcon} text={link} href={link} />}
      {openingHours && <ContactDetail icon={clockIcon} text={openingHours} />}
      {additionalInfo && (
        <ContactDetail icon={infoIcon} text={additionalInfo} />
      )}
    </ContactStyled>
  )
}

const Service = ({ title, logo, tags, link, email, phonelines, summary }) => {
  return (
    <>
      <ServiceStyled>
        <ServiceDetails title={title} logo={logo} tags={tags} />
        {summary && <ServiceSummary>{summary}</ServiceSummary>}
      </ServiceStyled>
      {phonelines && R.map(Contact)(phonelines)}
      {link && <Contact link={link} className="py-7.5" />}
      {email && <Contact email={email} className="py-7.5" />}
    </>
  )
}

export default Service
Service.getInitialProps = ctx => {
  return client.fetch(GET_SERVICE_DETAILS, {
    slug: ctx.query.service,
  })
}
