/* eslint-disable react/display-name */

import styled from 'styled-components'

const StyledList = styled.ul.attrs({
  className: 'pt-2.5',
})`
  > li:not(:last-of-type) {
    padding-bottom: 10px;
  }
`

const StyledListItem = styled.li.attrs({
  className: '',
})`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;

  span {
    margin-left: -6px;
  }
`

const serializers = {
  list: ({ children }) => {
    return <StyledList>{children}</StyledList>
  },
  listItem: ({ children }) => {
    return (
      <StyledListItem>
        <span>{children}</span>
      </StyledListItem>
    )
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark
      const href = `/${slug.current}`
      return <a href={href}>{children}</a>
    },
    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
  },
}

export default serializers
