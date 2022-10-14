import client from '../../client'
import Information from '../../components/Information'

const GET_STAYING_MUM_LANDING = `*[_type == "page" && slug.current == "staying-mum"][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const StayingMum = props => {
  return <Information background="" props={props} />
}

export default StayingMum

StayingMum.getInitialProps = () => client.fetch(GET_STAYING_MUM_LANDING)
