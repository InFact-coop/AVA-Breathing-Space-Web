import client from '../client'
import Information from '../components/Information'

const GET_PRIVACY_POLICY = `*[_type == "page" && slug.current == "privacy-policy"][0]`

const Privacy = props => <Information background="" props={props} />

export default Privacy

Privacy.getInitialProps = () => client.fetch(GET_PRIVACY_POLICY)
