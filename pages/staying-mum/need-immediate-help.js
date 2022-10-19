import client from '../../client'
import { InformationStayingMum } from '../../components/Information'

const GET_IMMEDIATE_HELP = `*[_type == "page" && slug.current == "get-immediate-help"][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const ImmediateHelp = props => {
  return <InformationStayingMum background="" props={props} />
}

export default ImmediateHelp

ImmediateHelp.getInitialProps = () => client.fetch(GET_IMMEDIATE_HELP)
