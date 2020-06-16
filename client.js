const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'is8j72h6',
  dataset: process.env.SANITY_DATASET,
  token: '', // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
})

module.exports = client
