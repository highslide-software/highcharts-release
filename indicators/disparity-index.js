!/**
 * Highstock JS v12.1.2-modified (2025-02-25)
 * @module highcharts/indicators/disparity-index
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2024 Rafal Sebestjanski
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/disparity-index",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/disparity-index"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var s=a[e]={exports:{}};return r[e](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};i.d(s,{default:()=>x});var n=i(944),o=i.n(n),p=i(512),d=i.n(p);let{sma:h}=d().seriesTypes,{correctFloat:c,defined:g,extend:u,isArray:l,merge:y}=o();class f extends h{init(){let e=arguments,t=e[1].params,r=t&&t.average?t.average:void 0;this.averageIndicator=d().seriesTypes[r]||h,this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,t){return c(e-t)/t*100}getValues(e,t){let r=t.index,a=e.xData,i=e.yData,s=i?i.length:0,n=[],o=[],p=[],d=this.averageIndicator,h=l(i[0]),c=d.prototype.getValues(e,t),u=c.yData,y=a.indexOf(c.xData[0]);if(u&&0!==u.length&&g(r)&&!(i.length<=y)){for(let e=y;e<s;e++){let t=this.calculateDisparityIndex(h?i[e][r]:i[e],u[e-y]);n.push([a[e],t]),o.push(a[e]),p.push(t)}return{values:n,xData:o,yData:p}}}}f.defaultOptions=y(h.defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),u(f.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),d().registerSeriesType("disparityindex",f);let x=o();return s.default})());