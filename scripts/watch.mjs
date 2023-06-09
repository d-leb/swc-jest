import jest from 'jest'

import { handleError, paths } from './utils.mjs'

const options = {
  projects: [paths.base],
  watchAll: true,
}

jest.runCLI(options, options.projects).catch((error) => handleError(error))
