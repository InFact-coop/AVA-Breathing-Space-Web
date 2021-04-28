import { useApolloClient } from '@apollo/react-hooks'
import Link from 'next/link'
import * as R from 'ramda'
import styled from 'styled-components'
import cycleColours from '../lib/cycleColours'
import Container from '../components/Container'
import { OutlineButton, Button } from '../components/Button'
import client from '../client'
import { updateNavbarColour } from '../components/Navbar'

import crisisRelief from '../public/illustrations/support/crisisRelief.svg'
import familyAndChildren from '../public/illustrations/support/familyAndChildren.svg'
import financialSupport from '../public/illustrations/support/financialSupport.svg'
import housing from '../public/illustrations/support/housing.svg'
import legalSupport from '../public/illustrations/support/legalSupport.svg'
import mentalAndPhysical from '../public/illustrations/support/mentalAndPhysical.svg'
import substanceUse from '../public/illustrations/support/substanceUse.svg'
import bmeMigrant from '../public/illustrations/support/bmeMigrant.svg'

const GET_SUPPORT_CATEGORIES =
  '*[ _type == "supportCategory" ] {title, "slug": slug.current}'

const CategoryStyled = styled.a.attrs({
  className: `font-serif font-lg h-25 rounded-2.5 p-2.5
  `,
})`
  background-image: ${({ colour, illustration }) =>
    `url(${illustration}), ${colour}`};
  background-position: right bottom;
  background-repeat: no-repeat;
`

const Categories = styled.section.attrs({
  className: 'grid grid-cols-2 gap-2.5',
})``

const Category = ({ title, slug, theme }, index) => {
  const apollo = useApolloClient()

  const colour = cycleColours(index, [
    'tealcoral',
    'teallilac',
    'lighttealgrayviolet',
    'graylilac',
    'cornflowergrayviolet',
    'grayteal',
    'palebluecornflower',
  ])

  const illustration = x => {
    switch (x) {
      case 'crisis-relief':
        return crisisRelief
      case 'family-and-children':
        return familyAndChildren
      case 'financial-support':
        return financialSupport
      case 'housing':
        return housing
      case 'legal-support':
        return legalSupport
      case 'mental-and-physical':
        return mentalAndPhysical
      case 'substance-use':
        return substanceUse
      case 'bme-and-migrant':
        return bmeMigrant
      default:
        return crisisRelief
    }
  }

  return (
    <Link
      href="/support/[category]"
      as={`/support/${slug}`}
      passHref
      key={`category-${index}`}
    >
      <CategoryStyled
        colour={theme.colors[colour]}
        illustration={illustration(slug)}
        onClick={updateNavbarColour({ apollo, colour })}
      >
        {title}
      </CategoryStyled>
    </Link>
  )
}

const SupportStyled = styled(Container).attrs({
  className: 'p-2.5',
})``

const Support = ({ categories, theme }) => {
  const categoriesWithTheme = R.map(category => ({ theme, ...category }))(
    categories,
  )

  return (
    <SupportStyled>
      <Link href="/need-immediate-help">
        <Button className="bg-darkpurple text-white mb-2.5">
          Need immediate help?
        </Button>
      </Link>
      <Link href="/relationship-questionnaire">
        <OutlineButton className="shadow-button">
          Relationship Questionnaire
        </OutlineButton>
      </Link>
      <Categories>
        {R.addIndex(R.map)(Category)(categoriesWithTheme)}
      </Categories>
    </SupportStyled>
  )
}
Support.getInitialProps = async () => {
  const categories = await client.fetch(GET_SUPPORT_CATEGORIES)
  return { pageTitle: 'support', categories }
}

export default Support
