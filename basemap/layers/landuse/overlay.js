/**
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License
 is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 or implied. See the License for the specific language governing permissions and limitations under
 the License.
 **/
import {asLayerObject, withFillSortKey} from "../../utils/utils.js";
import colorScheme from "../../themes/default.js";
let directives = [
    {
        filter: ['==', ['get', 'landuse'], 'grass'],
        'fill-color': colorScheme.landuseOverlayGrassFillColor,
    },
    {
        filter: ['==', ['get', 'landuse'], 'forest'],
        'fill-color': colorScheme.landuseOverlayForestFillColor,
    },
    {
        filter: ['==', ['get', 'landuse'], 'greenhouse_horticulture'],
        'fill-color': colorScheme.landuseOverlayGreenhouseHorticultureFillColor,
    },
    {
        filter: ['==', ['get', 'landuse'], 'orchard'],
        'fill-color': colorScheme.landuseOverlayOrchardFillColor,
    },
];

export default asLayerObject(withFillSortKey(directives), {
    id: 'landuse_overlay',
    type: 'fill',
    source: 'baremaps',
    'source-layer': 'landuse',
    layout: {
        visibility: 'visible',
    },
    paint: {
        'fill-antialias': true,
    },
});
