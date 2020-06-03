const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'is8j72h6',
  dataset: process.env.NODE_ENV === 'production' ? 'production' : 'staging',
  token: '', // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
})

module.exports = client
