import * as R from 'ramda'
import styled from 'styled-components'
import cycleColours from '../lib/cycleColours'
import Container from '../components/Container'
import client from '../client'

const Button = styled.a.attrs({
  className:
    'bg-white border border-lightgray py-4.5 rounded-2.5 block text-center tc font-sm mb-2.5',
})``

const GET_SUPPORT_BY_CATEGORY =
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
    <CategoryStyled
      key={`category-${index}`}
      href={`/support/${slug}`}
      colour={colour}
    >
      {title}
    </CategoryStyled>
  )
}

const SupportStyled = styled(Container).attrs({
  className: 'p-2.5',
})``

const Support = ({ categories }) => (
  <SupportStyled>
    <Button href="/am-i-in-an-abusive-relationship">
      Am I in an abusive relationship?
    </Button>
    <Categories>{R.addIndex(R.map)(Category)(categories)}</Categories>
  </SupportStyled>
)

Support.getInitialProps = async () => {
  const categories = await client.fetch(GET_SUPPORT_BY_CATEGORY)
  return { categories }
}

export default Support
