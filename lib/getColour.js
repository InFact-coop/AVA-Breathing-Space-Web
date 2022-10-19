const getColour = str => {
  const newString = str
    .replace('topic gradient', '')
    .replace(/\s/g, '')
    .toLowerCase()

  return colourThemeObject[newString]
}

const colourThemeObject = {
  tealcoral: {
    solid: 'coral',
    border: 'softred',
    gradient: 'tealcoral',
    opacity: '30',
  },

  teallilac: {
    solid: 'lightviolet',
    border: 'lilac',
    gradient: 'lighttealgrayviolet',
    opacity: '20',
  },

  grayteal: {
    solid: 'lightteal',
    border: 'teal',
    gradient: 'grayteal',
    opacity: '30',
  },

  cornflowergrayviolet: {
    solid: 'darkpurple',
    border: 'darkpurple',
    gradient: 'cornflowergrayviolet',
    opacity: '10',
  },
}

export const defaultThemeColour = {
  solid: 'lightblue',
  border: 'gray',
  opacity: '30',
}

export default getColour
