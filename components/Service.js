import styled from 'styled-components'
import * as R from 'ramda'
import rightArrow from '../public/icons/right-arrow.svg'

const Logo = styled.img.attrs({
  className: 'max-w-22.5 w-full',
})`
  filter: grayscale(100%);
`

const LogoContainer = styled.div.attrs({
  className: 'w-1/4 flex flex-col items-end',
})``

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

export const ServicePreview = ({ name, logo, tags, slug }, index) => (
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
