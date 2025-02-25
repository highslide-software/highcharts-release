!/**
 * Highcharts Stock JS v12.1.2-modified (2025-02-25)
 * @module highcharts/indicators/klinger
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Karol Kolodziej
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/klinger",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/klinger"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t)=>(()=>{"use strict";var r,i={512:e=>{e.exports=t},944:t=>{t.exports=e}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return i[e](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};s.d(a,{default:()=>w});var n=s(944),l=s.n(n),p=s(512),h=s.n(p);let{sma:{prototype:g}}=h().seriesTypes,{defined:u,error:c,merge:d}=l();!function(e){let t=["bottomLine"],r=["top","bottom"],i=["top"];function o(e){return"plot"+e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t){let r=[];return(e.pointArrayMap||[]).forEach(e=>{e!==t&&r.push(o(e))}),r}function a(){let e=this,t=e.pointValKey,r=e.linesApiNames,i=e.areaLinesNames,a=e.points,n=e.options,l=e.graph,p={options:{gapSize:n.gapSize}},h=[],f=s(e,t),y=a.length,m;if(f.forEach((e,t)=>{for(h[t]=[];y--;)m=a[y],h[t].push({x:m.x,plotX:m.plotX,plotY:m[e],isNull:!u(m[e])});y=a.length}),e.userOptions.fillColor&&i.length){let t=h[f.indexOf(o(i[0]))],r=1===i.length?a:h[f.indexOf(o(i[1]))],s=e.color;e.points=r,e.nextPoints=t,e.color=e.userOptions.fillColor,e.options=d(a,p),e.graph=e.area,e.fillGraph=!0,g.drawGraph.call(e),e.area=e.graph,delete e.nextPoints,delete e.fillGraph,e.color=s}r.forEach((t,r)=>{h[r]?(e.points=h[r],n[t]?e.options=d(n[t].styles,p):c('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),e.graph=e["graph"+t],g.drawGraph.call(e),e["graph"+t]=e.graph):c('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),e.points=a,e.options=n,e.graph=l,g.drawGraph.call(e)}function n(e){let t,r=[],i=[];if(e=e||this.points,this.fillGraph&&this.nextPoints){if((t=g.getGraphPath.call(this,this.nextPoints))&&t.length){t[0][0]="L",r=g.getGraphPath.call(this,e),i=t.slice(0,r.length);for(let e=i.length-1;e>=0;e--)r.push(i[e])}}else r=g.getGraphPath.apply(this,arguments);return r}function l(e){let t=[];return(this.pointArrayMap||[]).forEach(r=>{t.push(e[r])}),t}function p(){let e=this.pointArrayMap,t=[],r;t=s(this),g.translate.apply(this,arguments),this.points.forEach(i=>{e.forEach((e,o)=>{r=i[e],this.dataModify&&(r=this.dataModify.modifyValue(r)),null!==r&&(i[t[o]]=this.yAxis.toPixels(r,!0))})})}e.compose=function(e){let o=e.prototype;return o.linesApiNames=o.linesApiNames||t.slice(),o.pointArrayMap=o.pointArrayMap||r.slice(),o.pointValKey=o.pointValKey||"top",o.areaLinesNames=o.areaLinesNames||i.slice(),o.drawGraph=a,o.getGraphPath=n,o.toYData=l,o.translate=p,e}}(r||(r={}));let f=r,{ema:y,sma:m}=h().seriesTypes,{correctFloat:v,error:A,extend:P,isArray:x,merge:M}=l();class S extends m{calculateTrend(e,t){return e[t][1]+e[t][2]+e[t][3]>e[t-1][1]+e[t-1][2]+e[t-1][3]?1:-1}isValidData(e){let t=this.chart,r=this.options,i=this.linkedParent,o=x(e)&&4===e.length,s=this.volumeSeries||(this.volumeSeries=t.get(r.params.volumeSeriesID));return s||A("Series "+r.params.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,i.chart),!!([i,s].every(function(e){return e&&e.dataTable.rowCount>=r.params.slowAvgPeriod})&&o)}getCM(e,t,r,i,o){return v(t+(r===i?e:o))}getDM(e,t){return v(e-t)}getVolumeForce(e){let t=[],r=0,i,o=1,s=0,a=e[0][1]-e[0][2],n=0,l;for(;o<e.length;o++)l=this.calculateTrend(e,o),i=this.getDM(e[o][1],e[o][2]),r=this.getCM(s,i,l,n,a),t.push([this.volumeSeries.getColumn("y")[o]*l*Math.abs(2*(i/r-1))*100]),n=l,s=r,a=i;return t}getEMA(e,t,r,i,o,s,a){return y.prototype.calculateEma(a||[],e,void 0===s?1:s,i,t,void 0===o?-1:o,r)}getSMA(e,t,r){return y.prototype.accumulatePeriodPoints(e,t,r)/e}getValues(e,t){let r=[],i=e.xData,o=e.yData,s=[],a=[],n=[],l,p=0,h=0,g,u,c,d=null;if(!this.isValidData(o[0]))return;let f=this.getVolumeForce(o),y=this.getSMA(t.fastAvgPeriod,0,f),m=this.getSMA(t.slowAvgPeriod,0,f),A=2/(t.fastAvgPeriod+1),P=2/(t.slowAvgPeriod+1);for(;p<o.length;p++)p>=t.fastAvgPeriod&&(u=h=this.getEMA(f,u,y,A,0,p,i)[1]),p>=t.slowAvgPeriod&&(c=g=this.getEMA(f,c,m,P,0,p,i)[1],n.push(l=v(h-g)),n.length>=t.signalPeriod&&(d=n.slice(-t.signalPeriod).reduce((e,t)=>e+t)/t.signalPeriod),r.push([i[p],l,d]),s.push(i[p]),a.push([l,d]));return{values:r,xData:s,yData:a}}}S.defaultOptions=M(m.defaultOptions,{params:{fastAvgPeriod:34,slowAvgPeriod:55,signalPeriod:13,volumeSeriesID:"volume"},signalLine:{styles:{lineWidth:1,lineColor:"#ff0000"}},dataGrouping:{approximation:"averages"},tooltip:{pointFormat:'<span style="color: {point.color}">●</span><b> {series.name}</b><br/><span style="color: {point.color}">Klinger</span>: {point.y}<br/><span style="color: {point.series.options.signalLine.styles.lineColor}">Signal</span>: {point.signal}<br/>'}}),P(S.prototype,{areaLinesNames:[],linesApiNames:["signalLine"],nameBase:"Klinger",nameComponents:["fastAvgPeriod","slowAvgPeriod"],pointArrayMap:["y","signal"],parallelArrays:["x","y","signal"],pointValKey:"y"}),f.compose(S),h().registerSeriesType("klinger",S);let w=l();return a.default})());