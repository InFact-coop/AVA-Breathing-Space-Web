import styled from 'styled-components'

const Container = styled.div.attrs(({ bgColour }) => ({
  className: `p-5 bg-${bgColour} h-full`,
}))``

export default Container
