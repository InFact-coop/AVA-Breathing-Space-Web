import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'

import client from '../client'
import AppContext from '../lib/AppContext'

import { Block } from './BlockSerializers'
import Exit from './Exit'

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

const QuickExitForm = ({ inputsFromSanity }) => {
  const { quickExitPage, setQuickExitPage } = useContext(AppContext)

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
          <label className="font-med" htmlFor={input.title}>
            {input.title}
          </label>
        </div>
      ))(inputsFromSanity)}
    </FormContainer>
  )
}

const QuickExitStyled = styled.div.attrs({
  className: '',
})``

const QuickExit = () => {
  const [{ body, title, subtitle, inputsFromSanity }, setForm] = useState({
    title: null,
    body: null,
    subtitle: null,
    inputsFromSanity: null,
  })
  useEffect(() => {
    const getQuickExitForm = async () => {
      const response = await client.fetch(GET_QUICK_EXIT_FORM)
      setForm(response)
    }

    getQuickExitForm()
  }, [])
  return (
    inputsFromSanity && (
      <>
        <QuickExitStyled>
          <Title>{title || subtitle}</Title>
          <Block
            body={body}
            className="mb-5"
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
          />
          <QuickExitForm inputsFromSanity={inputsFromSanity} />
        </QuickExitStyled>
        <Exit arrow={true} />
      </>
    )
  )
}

const Title = styled.h1.attrs({
  className: 'font-serif font-xl mb-2.5',
})``

export default QuickExit
