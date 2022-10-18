import styled from 'styled-components'
import * as R from 'ramda'
import rightArrow from '../public/icons/right-arrow.svg'

const Logo = styled.img.attrs({
  className: 'w-100',
})`
  filter: grayscale(100%);
`

const LogoContainer = styled.div.attrs({
  className: 'w-1/4 max-w-16.25 flex flex-col items-end',
})`
  max-height: 42px;
`

const Link = styled.a.attrs({
  className: 'font-med flex',
})``

const Arrow = styled.img.attrs({
  className: 'ml-1.25',
  src: rightArrow,
  alt: 'Right arrow',
})``

const TagStyled = styled.span.attrs({
  className: 'font-med ml-3',
})``

const Tag = ({ title, icon = '' }, index) => (
  <div className="flex items-center mb-2" key={`tag-${index}`}>
    <span className="lightgrey" dangerouslySetInnerHTML={{ __html: icon }} />
    <TagStyled>{title}</TagStyled>
  </div>
)

const Tags = styled.div.attrs({
  className: 'mb-4 text-gray',
})``

const PreviewStyled = styled.div.attrs({
  className: 'px-2.5 py-4 shadow mb-2 bg-white rounded w-full',
})``

const DetailsStyled = styled.div.attrs({
  className: 'w-full',
})``

export const ServicePreview = ({ name, logo, tags, slug }, index) => {
  return (
    <Link href={`/${slug}`} key={`service-preview-${index}`}>
      <PreviewStyled key={`ServicePreview-${index}`}>
        <div className="flex justify-between">
          <p className="font-lg mb-4">{name}</p>
          <LogoContainer>
            {logo && <Logo src={logo} alt={`${name} logo`} />}
          </LogoContainer>
        </div>
        {tags && <Tags>{R.addIndex(R.map)(Tag)(tags)}</Tags>}
        <div className="flex">
          View details <Arrow />
        </div>
      </PreviewStyled>
    </Link>
  )
}

export const ServicePreviewStayingMum = (
  {
    name,
    logo,
    slug,
    category: {
      slug: { current },
    },
  },
  index,
) => {
  return (
    <a
      href={`https://www.breathingspace-ava.org.uk/support/${current}/${slug}`}
      rel="noopener noreferrer"
      target="_blank"
      key={`service-preview-${index}`}
    >
      <PreviewStyled
        className="rounded-2.5 mb-3"
        key={`ServicePreview-${index}`}
      >
        <div className="flex justify-between">
          <p className="mb-4">{name}</p>
          <LogoContainer>
            {logo && <Logo src={logo} alt={`${name} logo`} />}
          </LogoContainer>
        </div>
        <div className="flex font-sm">
          View details <Arrow />
        </div>
      </PreviewStyled>
    </a>
  )
}

export const ServiceDetails = ({ title, logo, tags }) => {
  return (
    <DetailsStyled>
      <div className="flex justify-between">
        <p className="font-xl mb-3">{title}</p>
        <LogoContainer>
          {logo && <Logo src={logo} alt={`${title} logo`} />}
        </LogoContainer>
      </div>
      {tags && <Tags>{R.addIndex(R.map)(Tag)(tags)}</Tags>}
    </DetailsStyled>
  )
}
