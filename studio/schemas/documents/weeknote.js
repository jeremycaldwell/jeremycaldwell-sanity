import {format} from 'date-fns'

export default {
  name: 'weeknote',
  type: 'document',
  title: 'Week Notes',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'work',
      type: 'bodyPortableText',
      title: 'Work'
    },
    {
      name: 'personal',
      type: 'bodyPortableText',
      title: 'Personal'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title A–>Z',
      by: [
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'titleDesc',
      title: 'Title Z->A',
      by: [
        {
          field: 'title',
          direction: 'desc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY-MM-DD')
      const path = `/weeknotes/${dateSegment}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
