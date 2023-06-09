import path from 'path'

const __dirname = process.cwd()
const __moduledir = path.dirname(process.argv[1])

export const paths = {
  base: __dirname,
  defaults: path.join(__moduledir, `../defaults/`),
}

const errorColor = '\x1b[31m'
const defaultColor = '\x1b[0m'

export const handleError = (error) => {
  if (error) {
    console.error(`${errorColor}An error occurred:${defaultColor}\n`)
    throw error
  }
}
