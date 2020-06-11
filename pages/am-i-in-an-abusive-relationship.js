import styled from 'styled-components'
import Container from '../components/Container'

const QuestionnaireStyled = styled(Container).attrs({
  className: '',
})``

const Questionnaire = () => {
  return (
    <QuestionnaireStyled>Am I in an abusive relationship?</QuestionnaireStyled>
  )
}

export default Questionnaire
