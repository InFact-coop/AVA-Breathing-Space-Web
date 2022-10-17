import client from '../../client'
import { InformationStayingMum } from '../../components/Information'

const GET_STAYING_MUM_ABOUT = `*[_type == "page" && slug.current == "about-staying-mum"][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const AboutStayingMum = props => {
  return <InformationStayingMum background="" props={props} />
}

export default AboutStayingMum

AboutStayingMum.getInitialProps = () => client.fetch(GET_STAYING_MUM_ABOUT)
