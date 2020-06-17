import styled from 'styled-components'
import * as R from 'ramda'

const StyledInput = styled.input.attrs({
  className: 'border border-lightgray h-8.75 p-2.5 rounded-2.5',
})``

const StyledTextArea = styled.textarea.attrs({
  className: 'border border-lightgray rounded-2.5 p-2.5',
  rows: '9',
})``

const Label = styled.label.attrs({
  className: 'mb-1.25',
})``

const Field = ({ type, title, value, onChange, required, name }) => {
  switch (type) {
    case 'input':
      return (
        <StyledInput
          name={name}
          value={value}
          type={R.isEmpty(R.match(/email/, title)) ? 'text' : 'email'}
          onChange={onChange}
          required={required}
        />
      )
    case 'textarea':
      return (
        <StyledTextArea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )
    default:
      return <div />
  }
}

const FormFieldWithLabel = ({
  title,
  required,
  type,
  onChange,
  name,
  value,
}) => {
  return (
    <div className="flex flex-col mb-5 font-sm">
      <Label>{title}</Label>
      <Field
        title={title}
        type={type}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export { StyledInput, StyledTextArea, Label, FormFieldWithLabel }