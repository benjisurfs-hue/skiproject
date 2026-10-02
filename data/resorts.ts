import type { Resort } from "./resort";
import { burkeMountain } from "./resorts/burke-mountain";
import { middleburySnowBowl } from "./resorts/middlebury-snow-bowl";
import { saskadenaSix } from "./resorts/saskadena-six";
import { boltonValley } from "./resorts/bolton-valley";
import { magicMountain } from "./resorts/magic-mountain";
import { madRiverGlen } from "./resorts/mad-river-glen";
import { picoMountain } from "./resorts/pico-mountain";
import { bromleyMountain } from "./resorts/bromley-mountain";
import { jayPeak } from "./resorts/jay-peak";
import { smugglersNotch } from "./resorts/smugglers-notch";
import { killington } from "./resorts/killington";
import { stowe } from "./resorts/stowe";
import { sugarbush } from "./resorts/sugarbush";
import { mountSnow } from "./resorts/mount-snow";
import { okemo } from "./resorts/okemo";
import { stratton } from "./resorts/stratton";
import { ascutney } from "./resorts/ascutney";
import { windham } from "./resorts/windham";
import { catamount } from "./resorts/catamount";
import { jiminyPeak } from "./resorts/jiminy-peak";
import { hunter } from "./resorts/hunter";



// Vermont V1: static facts, MAKE.md overrides, and preserved editorial content.
// No runtime data fetching. Null means not verified; [] passes means no tracked multi-pass.
export const resorts: Resort[] = [
  ascutney,
  burkeMountain,
  middleburySnowBowl,
  saskadenaSix,
  boltonValley,
  magicMountain,
  madRiverGlen,
  picoMountain,
  bromleyMountain,
  jayPeak,
  smugglersNotch,
  killington,
  stowe,
  sugarbush,
  mountSnow,
  okemo,
  stratton,
  windham,
  catamount,
  jiminyPeak,
  hunter,
];
