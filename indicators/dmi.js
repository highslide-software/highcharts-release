/*
 Highstock JS v9.2.1 (2021-08-19)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Rafal Sebestjanski

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/dmi",["highcharts","highcharts/modules/stock"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,h,g,c){a.hasOwnProperty(h)||(a[h]=c.apply(null,g))}a=a?a._modules:{};g(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,h){var g=
h.defined,c=h.error,w=h.merge,u=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(b){var a=[];(this.pointArrayMap||[]).forEach(function(f){f!==b&&a.push("plot"+f.charAt(0).toUpperCase()+f.slice(1))});return a},toYData:function(b){var a=[];(this.pointArrayMap||[]).forEach(function(f){a.push(b[f])});return a},translate:function(){var b=this,a=b.pointArrayMap,f=[],c,l=b.modifyValue;f=b.getTranslatedLinesNames();u.prototype.translate.apply(b,
arguments);b.points.forEach(function(v){a.forEach(function(d,e){c=v[d];l&&(c=l.call(b,c));null!==c&&(v[f[e]]=b.yAxis.toPixels(c,!0))})})},drawGraph:function(){var b=this,a=b.linesApiNames,f=b.points,h=f.length,l=b.options,v=b.graph,d={options:{gapSize:l.gapSize}},e=[],m;b.getTranslatedLinesNames(b.pointValKey).forEach(function(d,a){for(e[a]=[];h--;)m=f[h],e[a].push({x:m.x,plotX:m.plotX,plotY:m[d],isNull:!g(m[d])});h=f.length});a.forEach(function(a,m){e[m]?(b.points=e[m],l[a]?b.options=w(l[a].styles,
d):c('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),b.graph=b["graph"+a],u.prototype.drawGraph.call(b),b["graph"+a]=b.graph):c('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=f;b.options=l;b.graph=v;u.prototype.drawGraph.call(b)}}});g(a,"Stock/Indicators/DMI/DMIIndicator.js",[a["Mixins/MultipleLines.js"],a["Core/Color/Palette.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,h,g,c){var w=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var b in d)d.hasOwnProperty(b)&&(a[b]=d[b])};return a(b,d)};return function(b,d){function e(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(e.prototype=d.prototype,new e)}}(),u=g.seriesTypes.sma,b=c.correctFloat,x=c.extend,f=c.isArray,y=c.merge;
c=function(a){function c(){return null!==a&&a.apply(this,arguments)||this}w(c,a);c.prototype.calculateDM=function(a,e,c){var d=a[e][1],m=a[e][2],f=a[e-1][1];a=a[e-1][2];return b(d-f>a-m?c?Math.max(d-f,0):0:c?0:Math.max(a-m,0))};c.prototype.calculateDI=function(a,b){return a/b*100};c.prototype.calculateDX=function(a,e){return b(Math.abs(a-e)/Math.abs(a+e)*100)};c.prototype.smoothValues=function(a,e,c){return b(a-a/c+e)};c.prototype.getTR=function(a,c){return b(Math.max(a[1]-a[2],c?Math.abs(a[1]-c[3]):
0,c?Math.abs(a[2]-c[3]):0))};c.prototype.getValues=function(a,b){b=b.period;var c=a.xData,d=(a=a.yData)?a.length:0,e=[],g=[],h=[];if(!(c.length<=b)&&f(a[0])&&4===a[0].length){var l=0,r=0,t=0,k;for(k=1;k<d;k++)if(k<=b){var n=this.calculateDM(a,k,!0);var p=this.calculateDM(a,k);var q=this.getTR(a[k],a[k-1]);l+=n;r+=p;t+=q;k===b&&(q=this.calculateDI(l,t),p=this.calculateDI(r,t),n=this.calculateDX(l,r),e.push([c[k],n,q,p]),g.push(c[k]),h.push([n,q,p]))}else n=this.calculateDM(a,k,!0),p=this.calculateDM(a,
k),q=this.getTR(a[k],a[k-1]),l=this.smoothValues(l,n,b),r=this.smoothValues(r,p,b),t=this.smoothValues(t,q,b),q=this.calculateDI(l,t),p=this.calculateDI(r,t),n=this.calculateDX(l,r),e.push([c[k],n,q,p]),g.push(c[k]),h.push([n,q,p]);return{values:e,xData:g,yData:h}}};c.defaultOptions=y(u.defaultOptions,{params:{index:void 0},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color: {point.color}">\u25cf</span><b> {series.name}</b><br/><span style="color: {point.color}">DX</span>: {point.y}<br/><span style="color: {point.series.options.plusDILine.styles.lineColor}">+DI</span>: {point.plusDI}<br/><span style="color: {point.series.options.minusDILine.styles.lineColor}">-DI</span>: {point.minusDI}<br/>'},
plusDILine:{styles:{lineWidth:1,lineColor:h.positiveColor}},minusDILine:{styles:{lineWidth:1,lineColor:h.negativeColor}},dataGrouping:{approximation:"averages"}});return c}(u);x(c.prototype,{nameBase:"DMI",pointArrayMap:["y","plusDI","minusDI"],parallelArrays:["x","y","plusDI","minusDI"],pointValKey:"y",linesApiNames:["plusDILine","minusDILine"],drawGraph:a.drawGraph,getTranslatedLinesNames:a.getTranslatedLinesNames,translate:a.translate,toYData:a.toYData});g.registerSeriesType("dmi",c);"";return c});
g(a,"masters/indicators/dmi.src.js",[],function(){})});
//# sourceMappingURL=dmi.js.map