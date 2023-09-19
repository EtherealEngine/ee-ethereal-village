import type { ProjectConfigInterface } from '@etherealengine/projects/ProjectConfigInterface'

import commonConfig from '@etherealengine/common/src/config'

const config: ProjectConfigInterface = {
  onEvent: undefined,
  thumbnail: commonConfig.client.fileServer + '/projects/ee-ethereal-village/thumbnail.jpg',
  routes: {},
  services: undefined,
  databaseSeed: undefined
}

export default config
