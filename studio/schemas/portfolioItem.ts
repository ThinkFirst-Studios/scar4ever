import {defineField, defineType} from 'sanity'

export const CATEGORIES = [
  {title: 'Photo & Styling', value: 'photo'},
  {title: 'Graphics', value: 'graphics'},
  {title: 'Logo Design', value: 'logo'},
  {title: 'Merch', value: 'merch'},
]

export default defineType({
  name: 'portfolioItem',
  title: 'Portfolio piece',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (client or project name)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Sub-text',
      description: 'The smaller line under the title, e.g. "Summer BBQ · photography & styling"',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Leave empty if you are not sure',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {list: CATEGORIES, layout: 'radio'},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Image description',
      description: 'Describes the image for screen readers and Google. One short sentence.',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Show on the homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'subtext', media: 'image', cat: 'category'},
    prepare: ({title, subtitle, media, cat}: any) => ({
      title,
      subtitle: [CATEGORIES.find((c) => c.value === cat)?.title, subtitle].filter(Boolean).join(' — '),
      media,
    }),
  },
})
