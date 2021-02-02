import client from '../client'
import Information from '../components/Information'

const GET_IMMEDIATE_HELP = `*[_type == "page" && slug.current == "need-immediate-help"][0]`

const ImmediateHelp = props => {
  return <Information background="bg-white" props={props} />
}

export default ImmediateHelp

ImmediateHelp.getInitialProps = () => client.fetch(GET_IMMEDIATE_HELP)
