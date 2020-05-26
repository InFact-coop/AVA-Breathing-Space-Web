import { FaShapes } from 'react-icons/fa'

export default {
  name: 'selfcareCategory',
  title: 'Self-Care Category',
  type: 'document',
  icon: FaShapes,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
