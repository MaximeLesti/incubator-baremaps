/**
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License
 is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 or implied. See the License for the specific language governing permissions and limitations under
 the License.
 **/
import {asLayerObject, withSortKeys} from "../../utils/utils.js";
import colorScheme from "../../themes/default.js";

let directives = [
    {
        filter: ['==', ['geometry-type'], 'Polygon'],
        'fill-color': colorScheme.aerowayPolygonLineColor,
    },
];

export default asLayerObject(withSortKeys(directives), {
    id: 'aeroway_polygon',
    type: 'fill',
    source: 'baremaps',
    'source-layer': 'aeroway',
    layout: {
        visibility: 'visible',
    },
    paint: {
        'fill-antialias': true,
    },
});
