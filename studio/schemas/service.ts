import {defineField, defineType} from 'sanity'

export const GROUPS = [
  {title: 'Photography', value: 'photography'},
  {title: 'Video + Content', value: 'video'},
  {title: 'Branding + Social Media', value: 'branding'},
  {title: 'Graphic + Marketing Design', value: 'graphic'},
  {title: 'Websites', value: 'websites'},
]

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Service name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'group',
      title: 'Category',
      type: 'string',
      options: {list: GROUPS, layout: 'radio'},
      validation: (r) => r.required(),
    }),
    defineField({name: 'price', title: 'Price', type: 'string', description: 'e.g. "from $150" or "$200"'}),
    defineField({name: 'priceNote', title: 'Note next to the price', type: 'string', description: 'e.g. "· 4-8 week timeline"'}),
    defineField({name: 'tier', title: 'Little tag above the name', type: 'string', description: 'e.g. "my fav" or "3 tiers"'}),
    defineField({name: 'lead', title: 'Opening line', type: 'text', rows: 3}),
    defineField({name: 'body', title: 'More detail', type: 'text', rows: 4}),
    defineField({
      name: 'includes',
      title: "What's included",
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'options',
      title: 'Options / packages / ways to pay',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'option',
          fields: [
            {name: 'label', title: 'Option', type: 'string'},
            {name: 'price', title: 'Price', type: 'string'},
            {name: 'highlight', title: 'Highlight this one', type: 'boolean', initialValue: false},
          ],
          preview: {select: {title: 'label', subtitle: 'price'}},
        },
      ],
    }),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'alt', title: 'Image description', type: 'string'}),
    defineField({name: 'showSessionTerms', title: 'Show the shared session terms', type: 'boolean', initialValue: false}),
    defineField({name: 'featured', title: 'Show on the homepage', type: 'boolean', initialValue: false}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'price', media: 'image'},
  },
})
