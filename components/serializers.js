import styled from 'styled-components'

const StyledList = styled.ul.attrs({
  className: '',
})``

const StyledListItem = styled.li.attrs({
  className: 'pb-2d5',
})`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;

  ::marker {
    margin-right: 10px;
  }
`

const serializers = {
  list: props => <StyledList props={props} />, //eslint-disable-line react/display-name
  listItem: props => <StyledListItem props={props} />, //eslint-disable-line react/display-name
}

// const serializers = {
//   list: StyledList,
//   listItem: StyledListItem,
// }

export default serializers
