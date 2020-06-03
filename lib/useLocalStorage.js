import { useState } from 'react'

export default (key, initialValue) => {
  const onClientSide = typeof window !== 'undefined'

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = onClientSide && window.localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error) // eslint-disable-line
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (onClientSide) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error) // eslint-disable-line
    }
  }

  return [storedValue, setValue]
}
