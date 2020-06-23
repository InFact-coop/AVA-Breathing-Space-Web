import { useState } from 'react'

const useForm = (initialState, callback, callbackHelper) => {
  const [inputs, setInputs] = useState(initialState) // keep track of input values inside form

  const handleSubmit = e => {
    if (e) {
      e.preventDefault() // prevents default browser refresh
    }

    callback(e, inputs, setInputs, initialState, callbackHelper) // function passed to useForm called whenever form submitted
  }

  const handleInputChange = e => {
    e.persist()
    // updates state with user input
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return [inputs, setInputs, handleInputChange, handleSubmit]
}

export default useForm
