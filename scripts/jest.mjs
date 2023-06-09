import jest from 'jest'

import { handleError, paths } from './utils.mjs'

const options = {
  projects: [paths.base],
}

jest.runCLI(options, options.projects).catch((error) => handleError(error))
