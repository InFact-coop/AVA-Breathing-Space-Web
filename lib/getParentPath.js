export default path => {
  let trimmedPath

  if (path.split('/').length == 5) {
    trimmedPath = path.replace('articles', '').replace('people', '')
  } else {
    trimmedPath = path
  }

  trimmedPath.replace(/\/\s*$/, '')

  const lastSlash = trimmedPath.lastIndexOf('/')

  return trimmedPath.substring(0, lastSlash)
}
