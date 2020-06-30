import client from '../client'
import Information from '../components/Information'

const GET_QUESTIONNAIRE = `*[_type == "page" && slug.current == "am-i-in-an-abusive-relationship"][0]`

const Questionnaire = props => {
  return <Information background="bg-white" props={props} />
}

export default Questionnaire

Questionnaire.getInitialProps = () => client.fetch(GET_QUESTIONNAIRE)
