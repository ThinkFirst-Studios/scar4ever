import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  groups: [
    {name: 'follow', title: 'Instagram & YouTube', default: true},
    {name: 'contact', title: 'Contact'},
    {name: 'sessions', title: 'Session terms'},
  ],
  fields: [
    defineField({
      name: 'featuredVideoUrl',
      title: 'Featured YouTube video',
      description: 'Paste the full YouTube link of the video you want on the homepage.',
      type: 'url',
      group: 'follow',
    }),
    defineField({name: 'featuredVideoTitle', title: 'Video caption', type: 'string', group: 'follow'}),
    defineField({name: 'instagramHandle', title: 'Instagram handle', type: 'string', group: 'follow'}),
    defineField({name: 'youtubeHandle', title: 'YouTube handle', type: 'string', group: 'follow'}),
    defineField({name: 'email', title: 'Email shown on the site', type: 'string', group: 'contact'}),
    defineField({name: 'responseTime', title: 'Response time line', type: 'string', group: 'contact'}),
    defineField({
      name: 'markets',
      title: 'Cities',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      group: 'contact',
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Booking link',
      description: 'Where "book a session" should go once your booking tool is set up.',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'sessionTerms',
      title: 'Shared session terms',
      type: 'array',
      of: [{type: 'string'}],
      group: 'sessions',
    }),
  ],
  preview: {prepare: () => ({title: 'Site settings'})},
})
