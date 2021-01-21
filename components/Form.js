import styled from 'styled-components'
import * as R from 'ramda'
import toCamelCase from '../lib/toCamelCase'

const StyledInput = styled.input.attrs({
  className: 'border border-lightgray h-8.75 p-2.5 rounded-2.5',
})``

const StyledTextArea = styled.textarea.attrs({
  className: 'border border-lightgray rounded-2.5 p-2.5 w-full',
  rows: '9',
})``

const Label = styled.label.attrs({
  className: 'mb-1.25',
})``

const Field = ({
  type,
  title,
  value,
  placeholder,
  onChange,
  required,
  name,
}) => {
  switch (type) {
    case 'input':
      return (
        <StyledInput
          name={name}
          value={value}
          type={R.isEmpty(R.match(/email/, title)) ? 'text' : 'email'}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )
    case 'textarea':
      return (
        <StyledTextArea
          name={name}
          value={value}
          placeholder={placeholder}
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
  placeholder,
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
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

const Input = ({
  title,
  required,
  type: [type],
  placeholder = '',
  inputs,
  handleInputChange,
  label,
}) => {
  const titleCamel = toCamelCase(title)
  const props = {
    name: titleCamel,
    value: inputs[titleCamel],
    onChange: handleInputChange,
    key: titleCamel,
    required,
    title,
    type,
    placeholder,
  }
  if (!label) return <Field {...props} />
  return <FormFieldWithLabel {...props} />
}

export { StyledInput, StyledTextArea, Label, FormFieldWithLabel, Field, Input }
