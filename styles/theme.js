import * as R from 'ramda' //eslint-disable-line

const cssTheme = strPath => props => {
  const [key, ...rest] = R.split('.', strPath)
  const value = R.join('.', rest)

  return R.path([key, value], props.theme)
}

module.exports = cssTheme
export default cssTheme
