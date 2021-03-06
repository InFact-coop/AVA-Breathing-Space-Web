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
  }font-med text-black whitespace-pre-line`,
}))`
  word-break: break-word;
`

const Icon = styled.img.attrs({
  className: 'w-4.5 h-4.5 mr-4.5',
})``

const ContactDetail = ({ icon, text, href }) => (
  <ContactDetailStyled>
    <Icon src={icon} />
    <ContactDetailText
      as={href ? 'a' : 'div'}
      href={href}
      underline={!!href}
      target={href && '_blank'}
    >
      {text}
    </ContactDetailText>
  </ContactDetailStyled>
)

const ContactStyled = styled(Container).attrs({
  className: 'bg-white px-5 py-5 border-b border-lightgray',
})``

const Contact = ({
  title,
  openingHours,
  phoneNumber,
  email,
  link,
  additionalInfo,
  className,
  padding,
}) => {
  return (
    <ContactStyled
      padding={padding}
      className={className}
      key={`contact-${title}`}
    >
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
