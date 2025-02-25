/**
 * @license Highcharts Gantt JS v12.1.2-modified (2025-02-25)
 * @module highcharts/modules/current-date-indicator
 * @requires highcharts
 *
 * CurrentDateIndicator
 *
 * (c) 2010-2024 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import CurrentDateIndication from '../../Extensions/CurrentDateIndication.js';
const G = Highcharts;
CurrentDateIndication.compose(G.Axis, G.PlotLineOrBand);
export default Highcharts;
