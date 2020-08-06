import Router from 'next/router'
const Support = () => null

Support.getInitialProps = ({ req, res }) => {
  if (req) {
    res.writeHead(302, { Location: `/` })
    res.end()
  } else {
    Router.push(`/`)
  }
}

export default Support
