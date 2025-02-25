!/**
 * Highstock JS v12.1.2-modified (2025-02-25)
 * @module highcharts/indicators/pivot-points
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Paweł Fus
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/pivot-points",["highcharts/highcharts"],function(t){return e(t,t.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/pivot-points"]=e(t._Highcharts,t._Highcharts.SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(t,e)=>(()=>{"use strict";var a={512:t=>{t.exports=e},944:e=>{e.exports=t}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var l=r[t]={exports:{}};return a[t](l,l.exports,o),l.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var l={};o.d(l,{default:()=>b});var n=o(944),s=o.n(n),i=o(512),p=o.n(i);let d=p().seriesTypes.sma.prototype.pointClass;function h(t,e){let a=t.series.pointArrayMap,r,o=a.length;for(p().seriesTypes.sma.prototype.pointClass.prototype[e].call(t);o--;)t[r="dataLabel"+a[o]]&&t[r].element&&t[r].destroy(),t[r]=null}let{sma:c}=p().seriesTypes,{merge:u,extend:f,defined:y,isArray:g}=s();class m extends c{toYData(t){return[t.P]}translate(){let t=this;super.translate.apply(t),t.points.forEach(function(e){t.pointArrayMap.forEach(function(a){y(e[a])&&(e["plot"+a]=t.yAxis.toPixels(e[a],!0))})}),t.plotEndPoint=t.xAxis.toPixels(t.endPoint,!0)}getGraphPath(t){let e=this,a=[[],[],[],[],[],[],[],[],[]],r=e.pointArrayMap.length,o=e.plotEndPoint,l=[],n,s,i=t.length,p;for(;i--;){for(p=0,s=t[i];p<r;p++)y(s[n=e.pointArrayMap[p]])&&a[p].push({plotX:s.plotX,plotY:s["plot"+n],isNull:!1},{plotX:o,plotY:s["plot"+n],isNull:!1},{plotX:o,plotY:null,isNull:!0});o=s.plotX}return a.forEach(t=>{l=l.concat(super.getGraphPath.call(e,t))}),l}drawDataLabels(){let t,e,a,r;let o=this,l=o.pointArrayMap;o.options.dataLabels.enabled&&(e=o.points.length,l.concat([!1]).forEach((n,s)=>{for(r=e;r--;)a=o.points[r],n?(a.y=a[n],a.pivotLine=n,a.plotY=a["plot"+n],t=a["dataLabel"+n],s&&(a["dataLabel"+l[s-1]]=a.dataLabel),a.dataLabels||(a.dataLabels=[]),a.dataLabels[0]=a.dataLabel=t=t&&t.element?t:null):a["dataLabel"+l[s-1]]=a.dataLabel;super.drawDataLabels.call(o)}))}getValues(t,e){let a,r,o,l,n,s,i;let p=e.period,d=t.xData,h=t.yData,c=h?h.length:0,u=this[e.algorithm+"Placement"],f=[],y=[],m=[];if(!(d.length<p)&&g(h[0])&&4===h[0].length){for(i=p+1;i<=c+p;i+=p)o=d.slice(i-p-1,i),l=h.slice(i-p-1,i),r=o.length,a=o[r-1],s=u(this.getPivotAndHLC(l)),n=f.push([a].concat(s)),y.push(a),m.push(f[n-1].slice(1));return this.endPoint=o[0]+(a-o[0])/r*p,{values:f,xData:y,yData:m}}}getPivotAndHLC(t){let e=t[t.length-1][3],a=-1/0,r=1/0;return t.forEach(function(t){a=Math.max(a,t[1]),r=Math.min(r,t[2])}),[(a+r+e)/3,a,r,e]}standardPlacement(t){let e=t[1]-t[2];return[null,null,t[0]+e,2*t[0]-t[2],t[0],2*t[0]-t[1],t[0]-e,null,null]}camarillaPlacement(t){let e=t[1]-t[2];return[t[3]+1.5*e,t[3]+1.25*e,t[3]+1.1666*e,t[3]+1.0833*e,t[0],t[3]-1.0833*e,t[3]-1.1666*e,t[3]-1.25*e,t[3]-1.5*e]}fibonacciPlacement(t){let e=t[1]-t[2];return[null,t[0]+e,t[0]+.618*e,t[0]+.382*e,t[0],t[0]-.382*e,t[0]-.618*e,t[0]-e,null]}}m.defaultOptions=u(c.defaultOptions,{params:{index:void 0,period:28,algorithm:"standard"},marker:{enabled:!1},enableMouseTracking:!1,dataLabels:{enabled:!0,format:"{point.pivotLine}"},dataGrouping:{approximation:"averages"}}),f(m.prototype,{nameBase:"Pivot Points",pointArrayMap:["R4","R3","R2","R1","P","S1","S2","S3","S4"],pointValKey:"P",pointClass:class extends d{destroyElements(){h(this,"destroyElements")}destroy(){h(this,"destroyElements")}}}),p().registerSeriesType("pivotpoints",m);let b=s();return l.default})());