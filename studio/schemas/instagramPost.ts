import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

/** Pull the shortcode out of any Instagram post/reel link */
export function instagramCode(url = '') {
  const m = String(url).match(/instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/)
  return m ? m[1] : null
}

export default defineType({
  name: 'instagramPost',
  title: 'Instagram post',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'instagramPost'}),
    defineField({
      name: 'url',
      title: 'Instagram post link',
      description:
        'Open the post on Instagram, tap Share → Copy link, and paste it here. Posts and Reels both work. The post has to be public.',
      type: 'url',
      validation: (r) =>
        r.required().custom((value) =>
          !value || instagramCode(value)
            ? true
            : 'That does not look like an Instagram post link — it should look like instagram.com/p/XXXXXXX/',
        ),
    }),
    defineField({
      name: 'note',
      title: 'Note to yourself',
      description: 'Optional — just so you can tell posts apart in this list.',
      type: 'string',
    }),
    defineField({
      name: 'hidden',
      title: 'Hide from the website',
      description: 'Keeps the post here but takes it off the site.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'note', url: 'url', hidden: 'hidden'},
    prepare: ({title, url, hidden}: any) => ({
      title: title || instagramCode(url) || 'Instagram post',
      subtitle: (hidden ? 'Hidden · ' : '') + (url || ''),
    }),
  },
})
