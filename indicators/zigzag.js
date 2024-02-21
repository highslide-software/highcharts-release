/**
 * Highstock JS v11.3.0 (2024-01-10)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */!function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/zigzag",["highcharts","highcharts/modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function i(e,t,i,s){e.hasOwnProperty(t)||(e[t]=s.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}i(t,"Stock/Indicators/Zigzag/ZigzagIndicator.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){let{sma:i}=e.seriesTypes,{merge:s,extend:o}=t;class n extends i{getValues(e,t){let i=t.lowIndex,s=t.highIndex,o=t.deviation/100,n={low:1+o,high:1-o},a=e.xData,h=e.yData,r=h?h.length:0,d=[],u=[],g=[],l,p,c,f,m=!1,v=!1;if(!a||a.length<=1||r&&(void 0===h[0][i]||void 0===h[0][s]))return;let y=h[0][i],x=h[0][s];for(l=1;l<r;l++)h[l][i]<=x*n.high?(d.push([a[0],x]),c=[a[l],h[l][i]],f=!0,m=!0):h[l][s]>=y*n.low&&(d.push([a[0],y]),c=[a[l],h[l][s]],f=!1,m=!0),m&&(u.push(d[0][0]),g.push(d[0][1]),p=l++,l=r);for(l=p;l<r;l++)f?(h[l][i]<=c[1]&&(c=[a[l],h[l][i]]),h[l][s]>=c[1]*n.low&&(v=s)):(h[l][s]>=c[1]&&(c=[a[l],h[l][s]]),h[l][i]<=c[1]*n.high&&(v=i)),!1!==v&&(d.push(c),u.push(c[0]),g.push(c[1]),c=[a[l],h[l][v]],f=!f,v=!1);let w=d.length;return 0!==w&&d[w-1][0]<a[r-1]&&(d.push(c),u.push(c[0]),g.push(c[1])),{values:d,xData:u,yData:g}}}return n.defaultOptions=s(i.defaultOptions,{params:{index:void 0,period:void 0,lowIndex:2,highIndex:1,deviation:1}}),o(n.prototype,{nameComponents:["deviation"],nameSuffixes:["%"],nameBase:"Zig Zag"}),e.registerSeriesType("zigzag",n),n}),i(t,"masters/indicators/zigzag.src.js",[],function(){})});