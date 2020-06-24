import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import * as R from 'ramda'
import useModal from 'use-react-modal'
import useForm from '../../../lib/useForm'
import toCamelCase from '../../../lib/toCamelCase'
import {
  SERVICE_COMMENT_SHARED,
  SERVICE_COMMENT_ERROR,
} from '../../../lib/constants'

import Modal from '../../../components/Modal'
import Container from '../../../components/Container'
import Contact from '../../../components/Contact'
import Comments from '../../../components/Comment'
import { PurpleButton } from '../../../components/Button'
import { Input } from '../../../components/Form'
import { ServiceDetails } from '../../../components/Service'

import client from '../../../client'

const GET_SERVICE_DETAILS = `*[_type == "supportService" && slug.current == $slug][0] {
  _type,
  "title": name,
  "service": { 
    "serviceID": _id,
    "title": name,
    shortName,
    "logo": logo.asset->url,
    "tags": tags[]->title,
    summary,
    link,
    email,
    publishedAt,
    phonelines,
    likes,
  },
  "form": *[_type == "form" && slug.current == "service-comment"][0]{
    _type, 
    title, 
    body, 
    subtitle, 
    "inputsFromSanity": inputs[]->{ title, required, type },
    confirmationText
  }
}`

const GET_COMMENTS = `*[_type == "supportService" && slug.current == $slug][0] {
  comments[0..$commentLength]->[publishInApp == true]{ comment, publishedAt },
  "commentTotal": count(comments[]->[publishInApp == true])
  }`

const onSubmit = (onResponse, serviceID) => async (
  inputs,
  setInputs,
  initialState,
) => {
  const commentData = {
    _key: uuidv4(),
    _type: 'comment',
    comment: inputs.serviceComment,
    publishedAt: new Date().toISOString(),
    publishInApp: false,
  }

  try {
    const { _id } = await client.create(commentData)

    await client
      .patch(serviceID)
      .setIfMissing({ comments: [] })
      .append('comments', [
        {
          _type: 'reference',
          _key: uuidv4(),
          _ref: _id,
        },
      ])
      .commit()
    onResponse(SERVICE_COMMENT_SHARED)
    setInputs(initialState)
  } catch (e) {
    console.error('error submitting service comment', e) //eslint-disable-line
    onResponse(SERVICE_COMMENT_ERROR)
  }
}

const SubmitButton = styled(PurpleButton).attrs(({ formCompleted }) => ({
  as: 'button',
  className: `mb-2.5 mt-1 w-full ${formCompleted ? '' : 'opacity-50'}`,
  type: 'submit',
  children: 'Submit',
}))``

const FormContainer = styled(Container).attrs({
  as: 'form',
  id: 'share-service-comment',
  key: 'form',
})``

const ServiceCommentForm = ({
  inputsFromSanity,
  confirmationText,
  serviceID,
  formTitle,
  subtitle,
}) => {
  const initialState = R.pipe(
    R.map(input => ({ [toCamelCase(input.title)]: '' })),
    R.mergeAll,
  )(inputsFromSanity)

  const {
    targetRef: ref,
    isOpen,
    openModal,
    closeModal,
    Modal: ModalContainer,
  } = useModal()
  const [modalAction, updateModalAction] = useState('')
  const [formCompleted, updateFormCompleted] = useState(false)

  const openAndUpdateModal = action => {
    updateModalAction(action)
    openModal()
  }

  const [inputs, setInputs, handleInputChange, handleSubmit] = useForm(
    initialState,
    onSubmit(openAndUpdateModal, serviceID),
  )

  useEffect(() => updateFormCompleted(!!inputs.serviceComment), [
    inputs.serviceComment,
  ])

  const passDownInput = props => (
    <Input {...props} {...{ handleInputChange, inputs, label: false }} />
  )

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{formTitle}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {R.map(passDownInput)(inputsFromSanity)}
      <SubmitButton {...{ formCompleted, ref }} />
      {isOpen && (
        <ModalContainer>
          <Modal
            {...{
              modalAction,
              updateModalAction,
              closeModal,
              setInputs,
              initialState,
              confirmationText,
            }}
          />
        </ModalContainer>
      )}
    </FormContainer>
  )
}

const Title = styled.h2.attrs({
  className: 'font-serif text-lg leading-base mb-1.25',
})``

const Subtitle = styled.h3.attrs({
  className: 'text-gray font-base mb-2.5',
})``

const ServiceSummary = styled.div.attrs({
  className: 'text-black font-base',
})``

const ServiceStyled = styled(Container).attrs({
  className: 'bg-white border-b border-lightgray',
})``

const Service = ({
  query,
  service: {
    title: serviceTitle,
    logo,
    tags,
    link,
    email,
    phonelines,
    summary,
    serviceID,
  },
  form: { title: formTitle, subtitle, inputsFromSanity, confirmationText },
}) => {
  const [comments, updateComments] = useState([])
  const [commentLength, updateCommentLength] = useState(1)
  const [commentTotal, updateCommentTotal] = useState(0)

  useEffect(() => {
    const getComments = async () => {
      const {
        comments: newComments,
        commentTotal: newCommentTotal,
      } = await client.fetch(GET_COMMENTS, {
        commentLength,
        slug: query.service,
      })

      updateComments(newComments)
      updateCommentTotal(newCommentTotal)
    }

    getComments()
  }, [commentLength])

  return (
    <>
      <ServiceStyled>
        <ServiceDetails title={serviceTitle} logo={logo} tags={tags} />
        {summary && <ServiceSummary>{summary}</ServiceSummary>}
      </ServiceStyled>
      {phonelines && R.map(Contact)(phonelines)}
      {link && <Contact link={link} className="py-7.5" />}
      {email && <Contact email={email} className="py-7.5" />}
      <ServiceCommentForm
        {...{
          inputsFromSanity,
          serviceID,
          formTitle,
          subtitle,
          confirmationText,
        }}
      />
      {!R.isEmpty(comments) && (
        <Comments
          {...{ comments, commentLength, updateCommentLength, commentTotal }}
        />
      )}
    </>
  )
}

export default Service
Service.getInitialProps = ctx =>
  client.fetch(GET_SERVICE_DETAILS, {
    slug: ctx.query.service,
  })
