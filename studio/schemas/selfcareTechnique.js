import { GiHeartInside } from 'react-icons/gi'

export default {
  name: 'selfcareTechnique',
  title: 'Self-Care Technique',
  type: 'document',
  icon: GiHeartInside,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'selfcareCategory' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      accept: '.mp4',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'author',
          type: 'string',
          title: 'Author',
        },
      ],
    },
    {
      name: 'audio',
      title: 'Audio',
      type: 'file',
      accept: '.mp3, .ogg, .wav',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'author',
          type: 'string',
          title: 'Author',
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'published',
      title: 'Is this technique ready to publish?',
      type: 'boolean',
    },
    {
      name: 'likes',
      title: 'Number of likes',
      type: 'number',
      readOnly: 'true',
    },
  ],

  //   preview: {
  //     select: {
  //       title: 'title',
  //       media: 'mainImage'
  //     },
  //     prepare(selection) {
  //       const { author } = selection
  //       return ({ ...selection,
  //         subtitle: author && `by ${author}`,
  //       )
  //     },
  //   },
}
