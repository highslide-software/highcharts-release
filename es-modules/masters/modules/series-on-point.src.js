/**
 * @license Highcharts JS v10.3.0 (2022-10-31)
 * @module highcharts/modules/series-on-point
 * @requires highcharts
 *
 * Series on point module
 *
 * (c) 2010-2022 Highsoft AS
 * Author: Rafal Sebestjanski and Piotr Madej
 *
 * License: www.highcharts.com/license
 */
'use strict';
import SeriesOnPointComposition from '../../Series/SeriesOnPointComposition.js';
var G = Highcharts;
SeriesOnPointComposition.compose(G.Series, G.Chart);
