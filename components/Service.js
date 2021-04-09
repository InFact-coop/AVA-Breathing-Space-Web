import styled from 'styled-components'
import * as R from 'ramda'
import rightArrow from '../public/icons/right-arrow.svg'

const Name = styled.div.attrs({
  className: 'font-lg mb-3.75',
})``

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

const Tag = ({ title, icon = '' }, index) => {
  return (
    <div className="flex items-center mb-2" key={`tag-${index}`}>
      <span className="lightgrey" dangerouslySetInnerHTML={{ __html: icon }} />
      <TagStyled>{title}</TagStyled>
    </div>
  )
}
const Tags = styled.ul.attrs({
  className: 'mb-3.75 list-disc list-outside text-gray',
})``

const PreviewStyled = styled.div.attrs({
  className:
    'px-2.5 py-4 shadow mb-2 bg-white rounded flex justify-between w-full',
})``

const DetailsStyled = styled.div.attrs({
  className: 'flex justify-between',
})``

export const ServicePreview = ({ name, logo, tags, slug }, index) => (
  <Link href={`/${slug}`} key={`service-preview-${index}`}>
    <PreviewStyled key={`ServicePreview-${index}`}>
      <div className="flex justify-between">
        <Name>{name}</Name>
        <LogoContainer>
          {logo && <Logo src={logo} alt={`${name} logo`} />}
        </LogoContainer>
      </div>
      {tags && <Tags>{R.addIndex(R.map)(Tag)(tags)}</Tags>}
      <div className="flex">
        More details <Arrow />
      </div>
    </PreviewStyled>
  </Link>
)

export const ServiceDetails = ({ title, logo, tags }) => {
  return (
    <DetailsStyled>
      <div>
        <Name>{title}</Name>
        {tags && <Tags>{R.addIndex(R.map)(Tag)(tags)}</Tags>}
      </div>
      <LogoContainer>
        {logo && <Logo src={logo} alt={`${title} logo`} />}
      </LogoContainer>
    </DetailsStyled>
  )
}
