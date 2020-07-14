import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.label.attrs({
  className:
    'block flex justify-between px-2.5 py-2.5 border-b border-lightgray v-middle',
})`
  &:first-of-type {
    border-top-width: 1px;
  }

  &:last-of-type {
    border-bottom-width: 0px;
  }
`

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`
const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
  className:
    'absolute b-0 p-0 h-px w-px -m-px overflow-hidden whitespace-no-wrap',
})`
  clip: rect(0 0 0 0);
  clippath: inset(50%);
`

const StyledCheckbox = styled.div.attrs(({ checked }) => ({
  className: `inline-block w-4 h-4 ${checked ? 'salmon' : 'papayawhip'}`,
}))`
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

const Checkbox = ({ className, checked, label, ...props }) => (
  <CheckboxContainer className={className} name={label}>
    <span className="text-black">{label}</span>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
