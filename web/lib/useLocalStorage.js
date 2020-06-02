import { useState } from 'react'

export default (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item =
        window && window.localStorage ? window.localStorage.getItem(key) : null

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
      if (window) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error) // eslint-disable-line
    }
  }

  return [storedValue, setValue]
}
