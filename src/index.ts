// @dada78641/bwmapgfx <https://github.com/msikma/bwmapgfx>

import {fileURLToPath} from 'node:url'
import {dirname, resolve} from 'node:path'

/**
 * Returns the path to the StarCraft: Brood War graphics.
 *
 * The path is calculated based on the file structure of the module.
 */
export function getBwGraphicsPath(): string {
  return resolve(dirname(fileURLToPath(import.meta.url)), '..', 'resources')
}
