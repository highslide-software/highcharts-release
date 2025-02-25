!/**
 * Highstock JS v12.1.2-modified (2025-02-25)
 * @module highcharts/indicators/regressions
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Kamil Kulig
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/regressions",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/regressions"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};n.d(i,{default:()=>H});var o=n(944),a=n.n(o),p=n(512),l=n.n(p);let{sma:g}=l().seriesTypes,{isArray:u,extend:d,merge:c}=a();class h extends g{getRegressionLineParameters(e,t){let r=this.options.params.index,s=function(e,t){return u(e)?e[t]:e},n=e.reduce(function(e,t){return t+e},0),i=t.reduce(function(e,t){return s(t,r)+e},0),o=n/e.length,a=i/t.length,p,l,g=0,d=0;for(l=0;l<e.length;l++)g+=(p=e[l]-o)*(s(t[l],r)-a),d+=Math.pow(p,2);let c=d?g/d:0;return{slope:c,intercept:a-c*o}}getEndPointY(e,t){return e.slope*t+e.intercept}transformXData(e,t){let r=e[0];return e.map(function(e){return(e-r)/t})}findClosestDistance(e){let t,r,s;for(s=1;s<e.length-1;s++)(t=e[s]-e[s-1])>0&&(void 0===r||t<r)&&(r=t);return r}getValues(e,t){let r,s,n,i,o,a,p,l,g;let d=e.xData,c=e.yData,h=t.period,f={xData:[],yData:[],values:[]},y=this.options.params.xAxisUnit||this.findClosestDistance(d);for(s=h-1;s<=d.length-1;s++)n=s-h+1,i=s+1,o=d[s],p=d.slice(n,i),l=c.slice(n,i),g=this.transformXData(p,y),r=this.getRegressionLineParameters(g,l),a=this.getEndPointY(r,g[g.length-1]),f.values.push({regressionLineParameters:r,x:o,y:a}),u(f.xData)&&f.xData.push(o),u(f.yData)&&f.yData.push(a);return f}}h.defaultOptions=c(g.defaultOptions,{params:{xAxisUnit:null},tooltip:{valueDecimals:4}}),d(h.prototype,{nameBase:"Linear Regression Indicator"}),l().registerSeriesType("linearRegression",h);let{linearRegression:f}=l().seriesTypes,{extend:y,merge:x}=a();class m extends f{getEndPointY(e){return e.slope}}m.defaultOptions=x(f.defaultOptions),y(m.prototype,{nameBase:"Linear Regression Slope Indicator"}),l().registerSeriesType("linearRegressionSlope",m);let{linearRegression:R}=l().seriesTypes,{extend:D,merge:v}=a();class O extends R{getEndPointY(e){return e.intercept}}O.defaultOptions=v(R.defaultOptions),D(O.prototype,{nameBase:"Linear Regression Intercept Indicator"}),l().registerSeriesType("linearRegressionIntercept",O);let{linearRegression:P}=l().seriesTypes,{extend:S,merge:T}=a();class b extends P{slopeToAngle(e){return 180/Math.PI*Math.atan(e)}getEndPointY(e){return this.slopeToAngle(e.slope)}}b.defaultOptions=T(P.defaultOptions,{tooltip:{pointFormat:'<span style="color:{point.color}">●</span>{series.name}: <b>{point.y}\xb0</b><br/>'}}),S(b.prototype,{nameBase:"Linear Regression Angle Indicator"}),l().registerSeriesType("linearRegressionAngle",b);let H=a();return i.default})());