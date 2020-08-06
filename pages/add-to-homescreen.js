import client from '../client'
import Information from '../components/Information'

const GET_HOMESCREEN_PAGE = `*[_type == "page" && slug.current == "add-to-homescreen"][0]`

const AddToHomescreen = props => {
  return <Information background="" props={props} />
}

export default AddToHomescreen

AddToHomescreen.getInitialProps = () => client.fetch(GET_HOMESCREEN_PAGE)
