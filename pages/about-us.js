import client from '../client'
import Information from '../components/Information'

const GET_ABOUT_US_PAGE = `*[_type == "page" && slug.current == "about-us"][0]{
  ...,
  body[]{
    ...,
    _type == "audio" => {
      "audioURL": @.asset->url
    }
  }
}`

const AboutUs = props => {
  return <Information background="" props={props} />
}

export default AboutUs

AboutUs.getInitialProps = () => client.fetch(GET_ABOUT_US_PAGE)
