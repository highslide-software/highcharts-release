/**
 * Highstock JS v11.3.0 (2024-01-10)
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Sebastian Domas
 *
 * License: www.highcharts.com/license
 */!function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/cmf",["highcharts","highcharts/modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function s(e,t,s,i){e.hasOwnProperty(t)||(e[t]=i.apply(null,s),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}s(t,"Stock/Indicators/CMF/CMFIndicator.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){let{sma:s}=e.seriesTypes,{merge:i}=t;class n extends s{constructor(){super(...arguments),this.nameBase="Chaikin Money Flow"}isValid(){let e=this.chart,t=this.options,s=this.linkedParent,i=this.volumeSeries||(this.volumeSeries=e.get(t.params.volumeSeriesID)),n=s&&s.yData&&4===s.yData[0].length;function o(e){return e.xData&&e.xData.length>=t.params.period}return!!(s&&i&&o(s)&&o(i)&&n)}getValues(e,t){if(this.isValid())return this.getMoneyFlow(e.xData,e.yData,this.volumeSeries.yData,t.period)}getMoneyFlow(e,t,s,i){let n=t.length,o=[],r=[],a=[],u=[],l,h,c=-1,d=0,f=0;function p(e,t){let s=e[1],i=e[2],n=e[3];return null!==t&&null!==s&&null!==i&&null!==n&&s!==i?(n-i-(s-n))/(s-i)*t:(c=l,null)}if(i>0&&i<=n){for(l=0;l<i;l++)o[l]=p(t[l],s[l]),d+=s[l],f+=o[l];for(r.push(e[l-1]),a.push(l-c>=i&&0!==d?f/d:null),u.push([r[0],a[0]]);l<n;l++)o[l]=p(t[l],s[l]),d-=s[l-i],d+=s[l],f-=o[l-i],f+=o[l],h=[e[l],l-c>=i?f/d:null],r.push(h[0]),a.push(h[1]),u.push([h[0],h[1]])}return{values:u,xData:r,yData:a}}}return n.defaultOptions=i(s.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),e.registerSeriesType("cmf",n),n}),s(t,"masters/indicators/cmf.src.js",[],function(){})});