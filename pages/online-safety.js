import client from '../client'
import Information from '../components/Information'

const GET_ONLINE_SAFETY = `*[_type == "page" && slug.current == "online-safety"][0]`

const OnlineSafety = props => <Information background="" props={props} />

export default OnlineSafety

OnlineSafety.getInitialProps = () => client.fetch(GET_ONLINE_SAFETY)
