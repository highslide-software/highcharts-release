!/**
 * Highstock JS v11.4.4 (2024-07-02)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/williams-r",["highcharts","modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function i(t,i,s,r){t.hasOwnProperty(i)||(t[i]=r.apply(null,s),"function"==typeof CustomEvent&&e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:i,module:t[i]}})))}i(t,"Stock/Indicators/ArrayUtilities.js",[],function(){return{getArrayExtremes:function(e,t,i){return e.reduce((e,s)=>[Math.min(e[0],s[t]),Math.max(e[1],s[i])],[Number.MAX_VALUE,-Number.MAX_VALUE])}}}),i(t,"Stock/Indicators/WilliamsR/WilliamsRIndicator.js",[t["Stock/Indicators/ArrayUtilities.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t,i){let{sma:s}=t.seriesTypes,{extend:r,isArray:a,merge:n}=i;class o extends s{getValues(t,i){let s,r,n,o,l,u;let c=i.period,d=t.xData,h=t.yData,m=h?h.length:0,f=[],p=[],y=[];if(!(d.length<c)&&a(h[0])&&4===h[0].length){for(u=c-1;u<m;u++)s=h.slice(u-c+1,u+1),l=(r=e.getArrayExtremes(s,2,1))[0],n=-(((o=r[1])-h[u][3])/(o-l)*100),d[u]&&(f.push([d[u],n]),p.push(d[u]),y.push(n));return{values:f,xData:p,yData:y}}}}return o.defaultOptions=n(s.defaultOptions,{params:{index:void 0,period:14}}),r(o.prototype,{nameBase:"Williams %R"}),t.registerSeriesType("williamsr",o),o}),i(t,"masters/indicators/williams-r.src.js",[t["Core/Globals.js"]],function(e){return e})});