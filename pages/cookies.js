import client from '../client'
import Information from '../components/Information'

const GET_COOKIES_PAGE = `*[_type == "page" && slug.current == "cookies"][0]`

const Cookies = props => {
  return <Information background="" props={props} />
}

export default Cookies

Cookies.getInitialProps = () => client.fetch(GET_COOKIES_PAGE)
