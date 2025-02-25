/**
 * @license Highcharts JS v12.1.2-modified (2025-02-25)
 * @module highcharts/modules/pattern-fill
 * @requires highcharts
 *
 * Module for adding patterns and images as point fills.
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Torstein Hønsi, Øystein Moseng
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import PatternFill from '../../Extensions/PatternFill.js';
const G = Highcharts;
G.patterns = PatternFill.patterns;
PatternFill.compose(G.Chart, G.Series, G.SVGRenderer);
export default Highcharts;
