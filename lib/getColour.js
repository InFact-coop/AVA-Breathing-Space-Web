import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js' //eslint-disable-line
const { theme } = resolveConfig(tailwindConfig)

const getColour = str => {
  const newString = str.replace(/\s/g, '').toLowerCase()
  const colors = theme.colors

  return colors[newString]
}

export default getColour
