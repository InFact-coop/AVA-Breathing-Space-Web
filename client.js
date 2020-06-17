const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'is8j72h6',
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  withCredentials: true,
})

module.exports = client
