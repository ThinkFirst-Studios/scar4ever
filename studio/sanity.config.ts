import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schemaTypes} from './schemas'
import {CATEGORIES} from './schemas/portfolioItem'
import {GROUPS} from './schemas/service'

export default defineConfig({
  name: 'scar4ever',
  title: 'SCAR',
  projectId: 'ouk6ju6k',
  dataset: 'production',
  // self-hosted alongside the site
  basePath: process.env.SANITY_STUDIO_BASEPATH || '/',
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('SCAR')
          .items([
            S.listItem()
              .title('Portfolio')
              .child(
                S.list()
                  .title('Portfolio')
                  .items(
                    CATEGORIES.map((cat) =>
                      orderableDocumentListDeskItem({
                        type: 'portfolioItem',
                        id: `portfolio-${cat.value}`,
                        title: cat.title,
                        filter: 'category == $category',
                        params: {category: cat.value},
                        S,
                        context,
                      }),
                    ),
                  ),
              ),
            S.listItem()
              .title('Services')
              .child(
                S.list()
                  .title('Services')
                  .items(
                    GROUPS.map((g) =>
                      orderableDocumentListDeskItem({
                        type: 'service',
                        id: `services-${g.value}`,
                        title: g.title,
                        filter: 'group == $group',
                        params: {group: g.value},
                        S,
                        context,
                      }),
                    ),
                  ),
              ),
            S.divider(),
            S.listItem()
              .title('Site settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => prev.filter((t) => t.schemaType !== 'siteSettings'),
  },
})
