import { useApolloClient } from '@apollo/react-hooks'
import Link from 'next/link'

import * as R from 'ramda'
import styled from 'styled-components'
import cycleColours from '../lib/cycleColours'
import Container from '../components/Container'
import { OutlineButton } from '../components/Button'
import client from '../client'
import { updateNavbarColour } from '../components/Navbar'

const GET_SUPPORT_CATEGORIES =
  '*[ _type == "supportCategory" ] {title, "slug": slug.current}'

const CategoryStyled = styled.a.attrs(({ colour }) => ({
  className: `font-serif font-lg h-25 rounded-2.5 p-2.5
  bg-${colour} 
  `,
}))``

const Categories = styled.section.attrs({
  className: 'grid grid-cols-2 gap-2.5',
})``

const Category = ({ title, slug }, index) => {
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

  return (
    <Link
      href="/support/[category]"
      as={`/support/${slug}`}
      passHref
      key={`category-${index}`}
    >
      <CategoryStyled
        colour={colour}
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

const Support = ({ categories }) => (
  <SupportStyled>
    <Link href="/am-i-in-an-abusive-relationship">
      <OutlineButton>Am I in an abusive relationship?</OutlineButton>
    </Link>
    <Categories>{R.addIndex(R.map)(Category)(categories)}</Categories>
  </SupportStyled>
)

Support.getInitialProps = async () => {
  const categories = await client.fetch(GET_SUPPORT_CATEGORIES)
  return { pageTitle: 'support', categories }
}

export default Support
