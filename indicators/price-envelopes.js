/*
 Highstock JS v11.0.1 (2023-05-08)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawe Fus

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/price-envelopes",["highcharts","highcharts/modules/stock"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,g,l,f){a.hasOwnProperty(g)||(a[g]=f.apply(null,l),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,
module:a[g]}})))}a=a?a._modules:{};f(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,g){const {sma:{prototype:l}}=a.seriesTypes,{defined:f,error:m,merge:r}=g;var h;(function(a){function x(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}function z(b,c){const d=[];(b.pointArrayMap||[]).forEach(b=>{b!==c&&d.push(x(b))});return d}function h(){const b=this,c=b.linesApiNames;var d=b.areaLinesNames;const a=b.points,k=b.options,
g=b.graph,h={options:{gapSize:k.gapSize}},e=[];var n=z(b,b.pointValKey);let y=a.length,p;n.forEach((b,c)=>{for(e[c]=[];y--;)p=a[y],e[c].push({x:p.x,plotX:p.plotX,plotY:p[b],isNull:!f(p[b])});y=a.length});if(b.userOptions.fillColor&&d.length){var q=n.indexOf(x(d[0]));q=e[q];d=1===d.length?a:e[n.indexOf(x(d[1]))];n=b.color;b.points=d;b.nextPoints=q;b.color=b.userOptions.fillColor;b.options=r(a,h);b.graph=b.area;b.fillGraph=!0;l.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;
b.color=n}c.forEach((c,a)=>{e[a]?(b.points=e[a],k[c]?b.options=r(k[c].styles,h):m('Error: "There is no '+c+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),b.graph=b["graph"+c],l.drawGraph.call(b),b["graph"+c]=b.graph):m('Error: "'+c+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=a;b.options=k;b.graph=g;l.drawGraph.call(b)}function e(b){var c;let a=[];b=b||this.points;if(this.fillGraph&&
this.nextPoints){if((c=l.getGraphPath.call(this,this.nextPoints))&&c.length){c[0][0]="L";a=l.getGraphPath.call(this,b);c=c.slice(0,a.length);for(let b=c.length-1;0<=b;b--)a.push(c[b])}}else a=l.getGraphPath.apply(this,arguments);return a}function A(b){const c=[];(this.pointArrayMap||[]).forEach(a=>{c.push(b[a])});return c}function q(){const b=this.pointArrayMap;let a=[],d;a=z(this);l.translate.apply(this,arguments);this.points.forEach(c=>{b.forEach((b,e)=>{d=c[b];this.dataModify&&(d=this.dataModify.modifyValue(d));
null!==d&&(c[a[e]]=this.yAxis.toPixels(d,!0))})})}const B=[],u=["bottomLine"],v=["top","bottom"],w=["top"];a.compose=function(b){if(g.pushUnique(B,b)){const a=b.prototype;a.linesApiNames=a.linesApiNames||u.slice();a.pointArrayMap=a.pointArrayMap||v.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||w.slice();a.drawGraph=h;a.getGraphPath=e;a.toYData=A;a.translate=q}return b}})(h||(h={}));return h});f(a,"Stock/Indicators/PriceEnvelopes/PriceEnvelopesIndicator.js",[a["Stock/Indicators/MultipleLinesComposition.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,g,l){const {sma:f}=g.seriesTypes,{extend:m,isArray:r,merge:h}=l;class e extends f{constructor(){super(...arguments);this.points=this.options=this.data=void 0}init(){super.init.apply(this,arguments);this.options=h({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)}getValues(a,e){const f=e.period,g=e.topBand,l=e.bottomBand,h=a.xData,m=(a=a.yData)?a.length:0,u=[],v=[],w=[];let b,c;let d;
if(!(h.length<f)&&r(a[0])&&4===a[0].length){for(d=f;d<=m;d++){var t=h.slice(d-f,d);var k=a.slice(d-f,d);k=super.getValues({xData:t,yData:k},e);t=k.xData[0];k=k.yData[0];b=k*(1+g);c=k*(1-l);u.push([t,b,k,c]);v.push(t);w.push([b,k,c])}return{values:u,xData:v,yData:w}}}}e.defaultOptions=h(f.defaultOptions,{marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>'},params:{period:20,
topBand:.1,bottomBand:.1},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1}},dataGrouping:{approximation:"averages"}});m(e.prototype,{areaLinesNames:["top","bottom"],linesApiNames:["topLine","bottomLine"],nameComponents:["period","topBand","bottomBand"],nameBase:"Price envelopes",pointArrayMap:["top","middle","bottom"],parallelArrays:["x","y","top","bottom"],pointValKey:"middle"});a.compose(e);g.registerSeriesType("priceenvelopes",e);"";return e});f(a,"masters/indicators/price-envelopes.src.js",
[],function(){})});
//# sourceMappingURL=price-envelopes.js.map