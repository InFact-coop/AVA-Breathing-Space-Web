export default str =>
  str
    .replace(/([A-Z]+)/g, ' $1')
    .replace(/([A-Z][a-z])/g, ' $1')
    .replace(/(\b[a-z](?!\s))/g, x => x.toUpperCase())
