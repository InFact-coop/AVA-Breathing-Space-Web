import BlockContent from '@sanity/block-content-to-react'
import client from '../client'
import serializers from './serializers'

const Block = ({ className, body, imageOptions }) => (
  <BlockContent
    blocks={body}
    className={className}
    renderContainerOnSingleChild={true}
    imageOptions={imageOptions}
    serializers={serializers}
    projectId="is8j72h6"
    dataset={process.env.SANITY_DATASET}
    {...client.config()}
  />
)

export default Block
