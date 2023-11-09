import type { ProjectConfigInterface } from '@etherealengine/projects/ProjectConfigInterface'

import commonConfig from '@etherealengine/common/src/config'

const config: ProjectConfigInterface = {
  onEvent: './projectEventHooks.ts',
  thumbnail: commonConfig.client.fileServer + '/projects/ee-ethereal-village/thumbnail.png',
  routes: {},
  services: undefined,
  databaseSeed: undefined
}

export default config
