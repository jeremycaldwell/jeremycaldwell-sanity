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
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'publishedAt',
      type: 'date',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'publishedAt',
        maxLength: 96
      }
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
      const path = `/weeknote/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
