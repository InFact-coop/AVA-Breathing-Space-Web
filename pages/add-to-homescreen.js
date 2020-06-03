import styled from 'styled-components'
import Container from '../components/Container'
import client from '../client'
import Information from '../components/Information'

const AddToHomescreenStyled = styled(Container).attrs({
  className: '',
})``

const GET_HOMESCREEN_PAGE = `*[_type == "page" && slug.current == "add-to-homescreen"][0]`

const AddToHomescreen = props => {
  return (
    <AddToHomescreenStyled>
      <Information {...props} />
    </AddToHomescreenStyled>
  )
}

export default AddToHomescreen

AddToHomescreen.getInitialProps = () => client.fetch(GET_HOMESCREEN_PAGE)
