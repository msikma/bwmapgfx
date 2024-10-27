# @dada78641/bwmapgfx

Contains the **StarCraft: Brood War** map graphics used for generating screenshots of **maps** (.scm, .scx) and **replays** (.rep).

Only the old style pixel art graphics are included, but any valid map or replay is properly supported including Remastered era maps.

> [!CAUTION]
> These files are the property of Blizzard Entertainment and are provided for convenience reasons only.
>
> Only files part of the free-to-play version are included.

## Usage

What you'll want to do is load these graphics using [bw-chk](https://github.com/ShieldBattery/bw-chk) by passing in the base directory.

```ts
import {getBwGraphicsPath} from '@dada78641/bwmapgfx'
import Chk from 'bw-chk'

const graphicsPath = getBwGraphicsPath() // e.g. "/home/me/MyProject/node_modules/bwmapgfx/resources"

const graphicsObj = Chk.fsFileAccess(graphicsPath)
```

## Included files

The following files are included:

* all files listed in [units.js](https://github.com/ShieldBattery/bw-chk/blob/master/units.js) and [sprites.js](https://github.com/ShieldBattery/bw-chk/blob/master/sprites.js) files from [bw-chk](https://github.com/ShieldBattery/bw-chk);
* for all tilesets `['badlands', 'platform', 'install', 'ashworld', 'jungle', 'desert', 'ice', 'twilight']`, all files of extension `['.cv5', '.vx4', '.vr4', '.wpe', '.vx4ex']`.

For compatibility reasons, all filenames have been changed to lowercase (as required by [bw-chk](https://github.com/ShieldBattery/bw-chk)).

## Links

* Download the [StarCraft map graphics](https://archive.org/details/StarCraftMapGraphics) as a .zip file (as alternative to using this module)
* [StarCraft: Remastered website](https://starcraft.blizzard.com/)

## Copyright

© 1998-2017 Blizzard Entertainment, Inc.
