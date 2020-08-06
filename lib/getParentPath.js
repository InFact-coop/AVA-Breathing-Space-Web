export default path => {
  const trimmedPath = path.replace(/\/\s*$/, '')
  const lastSlash = trimmedPath.lastIndexOf('/')

  return trimmedPath.substring(0, lastSlash)
}
