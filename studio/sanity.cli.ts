import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {projectId: 'ouk6ju6k', dataset: 'production'},
  studioHost: 'scar4ever',
  // no third-party bridge script: keeps the admin working behind ad/script blockers
  autoUpdates: false,
})
