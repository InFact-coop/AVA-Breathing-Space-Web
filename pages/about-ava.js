import client from '../client'
import Information from '../components/Information'

const GET_ABOUT_AVA_PAGE = `*[_type == "page" && slug.current == "about-ava"][0]`

const AboutAVA = props => {
  return <Information background="" props={props} />
}

export default AboutAVA

AboutAVA.getInitialProps = () => client.fetch(GET_ABOUT_AVA_PAGE)
