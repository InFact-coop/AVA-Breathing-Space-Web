import styled from 'styled-components'

const Container = styled.div.attrs(({ bgColour, shadow = true }) => ({
  className: `p-2.5 bg-${bgColour} ${shadow ? 'shadow' : ''} max-w-256`,
}))`
  /* min-height: inherit; */
  height: 100%;
`

export default Container
