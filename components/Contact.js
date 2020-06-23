import styled from 'styled-components'

import phoneIcon from '../public/icons/phone.svg'
import clockIcon from '../public/icons/clock.svg'
import infoIcon from '../public/icons/info.svg'
import urlIcon from '../public/icons/url.svg'
import emailIcon from '../public/icons/email.svg'

import Container from './Container'

const ContactTitle = styled.div.attrs({
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
    <ContactStyled className={className} key={`contact-${title}`}>
      {title && <ContactTitle>{title}</ContactTitle>}
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

export default Contact
