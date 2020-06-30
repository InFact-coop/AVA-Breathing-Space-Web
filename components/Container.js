import styled from 'styled-components'

const Container = styled.div.attrs(({ bgColour }) => ({
  className: `p-5 bg-${bgColour} h-full max-w-256`,
}))``

export default Container
