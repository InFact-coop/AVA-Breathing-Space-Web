import styled from 'styled-components'

const Container = styled.div.attrs(({ bgColour, shadow = true }) => ({
  className: `p-5 bg-${bgColour} ${shadow ? 'shadow' : ''} h-full max-w-256`,
}))``

export default Container
