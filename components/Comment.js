import { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import moment from 'moment'
import client from '../client'
import Container from './Container'
import { OutlineButton } from './Button'

const GET_COMMENTS = `*[_type == $_type && slug.current == $slug][0] {
  "newComments": comments[0...$commentLength]->[publishInApp == true]{ comment, publishedAt },
  "newCommentTotal": count(comments[]->[publishInApp == true])
  }`

const CommentStyled = styled.div.attrs({
  className: 'px-2.5 py-3.75 border-b border-lightgray',
})`
  &:first-child {
    border-top-width: 1px;
  }

  &:last-of-type {
    border-bottom-width: 0px;
  }
`

const CommentDate = styled.div.attrs({
  className: 'font-sm text-gray font-bold mb-2.5',
})``

const CommentBody = styled.div.attrs({
  className: 'font-sm text-black',
})``

const Comment = ({ comment, publishedAt }) => (
  <CommentStyled key={`comment-${publishedAt}`}>
    <CommentDate>{moment(publishedAt).format('D MMMM YYYY')}</CommentDate>
    <CommentBody>{comment}</CommentBody>
  </CommentStyled>
)

const LoadCommentsButton = styled(OutlineButton).attrs(
  ({ commentLength, updateCommentLength }) => ({
    as: 'button',
    className: 'w-full mt-2.5',
    children: 'Load more comments',
    onClick: () => updateCommentLength(commentLength + 5),
  }),
)``

const CommentsContainer = styled(Container).attrs({
  className: '',
})``

const Comments = ({ slug, _type }) => {
  const [comments, updateComments] = useState([])
  const [commentLength, updateCommentLength] = useState(5)
  const [commentTotal, updateCommentTotal] = useState(0)

  useEffect(() => {
    const getComments = async () => {
      const { newComments, newCommentTotal } = await client.fetch(
        GET_COMMENTS,
        {
          slug,
          _type,
          commentLength,
        },
      )

      updateComments(newComments || [])
      updateCommentTotal(newCommentTotal || 0)
    }

    getComments()
  }, [commentLength])

  if (R.isEmpty(comments)) return null
  return (
    <CommentsContainer>
      {R.map(Comment)(comments)}
      {comments.length < commentTotal && (
        <LoadCommentsButton {...{ commentLength, updateCommentLength }} />
      )}
    </CommentsContainer>
  )
}

export default Comments
