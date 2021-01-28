import styled from 'styled-components'
import * as R from 'ramda'

import client from '../client'

import Container from '../components/Container'
import Block from '../components/Block'

const GET_QUICK_EXIT_FORM = `*[_type == "form" && slug.current == "quick-exit"][0]{
  _type, 
  title, 
  body, 
  subtitle, 
  "inputsFromSanity": inputs[]->{ title, required, type },
}`

const FormContainer = styled.form.attrs({
  id: 'quick-exit',
  key: 'form',
  className: 'flex flex-col',
})``

const QuickExitForm = ({
  inputsFromSanity,
  setQuickExitPage,
  quickExitPage,
}) => {
  return (
    <FormContainer>
      <h2 className="font-bold text-med mb-4">
        Customise exit page (optional)
      </h2>
      {R.map(input => (
        <div
          onClick={() => setQuickExitPage(input.title)}
          onKeyDown={() => setQuickExitPage(input.title)}
          key={input.title}
        >
          <input
            type="radio"
            id={input.title}
            value={input.title}
            name="quick-exit-site"
            className="mr-2.5 mb-4"
            checked={input.title === quickExitPage}
          />
          <label htmlFor={input.title}>{input.title}</label>
        </div>
      ))(inputsFromSanity)}
    </FormContainer>
  )
}

const Title = styled.h2.attrs({
  className: 'font-serif text-lg leading-base mb-2.5',
})``

const QuickExitStyled = styled(Container).attrs({
  className: '',
})``

const QuickExit = ({
  body,
  inputsFromSanity,
  subtitle,
  confirmationText,
  setQuickExitPage,
  quickExitPage,
}) => {
  return (
    <QuickExitStyled>
      <Title>{subtitle}</Title>
      <Block
        body={body}
        className="font-sm font-normal text-gray"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <QuickExitForm
        {...{
          inputsFromSanity,
          confirmationText,
          setQuickExitPage,
          quickExitPage,
        }}
      />
    </QuickExitStyled>
  )
}

export default QuickExit

QuickExit.getInitialProps = () => client.fetch(GET_QUICK_EXIT_FORM)
