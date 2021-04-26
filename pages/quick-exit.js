import client from '../client'
import Information from '../components/Information'

const GET_QUICK_EXIT = `*[_type == "page" && slug.current == "quick-exit"][0]`

const QuickExit = props => <Information background="" props={props} />

export default QuickExit

QuickExit.getInitialProps = () => client.fetch(GET_QUICK_EXIT)
