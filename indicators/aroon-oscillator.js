/*
 Highstock JS v10.3.0 (2022-10-31)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/aroon-oscillator",["highcharts","highcharts/modules/stock"],function(h){a(h);a.Highcharts=h;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function h(a,c,f,h){a.hasOwnProperty(c)||(a[c]=h.apply(null,f),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,
module:a[c]}})))}a=a?a._modules:{};h(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,c){var f=a.seriesTypes.sma.prototype,h=c.defined,l=c.error,v=c.merge,g;(function(a){function u(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}function e(b,m){var a=[];(b.pointArrayMap||[]).forEach(function(b){b!==m&&a.push(u(b))});return a}function d(){var b=this,a=b.linesApiNames,d=b.areaLinesNames,n=b.points,c=b.options,t=b.graph,w={options:{gapSize:c.gapSize}},
g=[],r=e(b,b.pointValKey),p=n.length,q;r.forEach(function(b,a){for(g[a]=[];p--;)q=n[p],g[a].push({x:q.x,plotX:q.plotX,plotY:q[b],isNull:!h(q[b])});p=n.length});if(b.userOptions.fillColor&&d.length){var k=r.indexOf(u(d[0]));k=g[k];d=1===d.length?n:g[r.indexOf(u(d[1]))];r=b.color;b.points=d;b.nextPoints=k;b.color=b.userOptions.fillColor;b.options=v(n,w);b.graph=b.area;b.fillGraph=!0;f.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;b.color=r}a.forEach(function(a,m){g[m]?(b.points=
g[m],c[a]?b.options=v(c[a].styles,w):l('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),b.graph=b["graph"+a],f.drawGraph.call(b),b["graph"+a]=b.graph):l('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=n;b.options=c;b.graph=t;f.drawGraph.call(b)}function c(b){var a,d=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((a=f.getGraphPath.call(this,
this.nextPoints))&&a.length){a[0][0]="L";d=f.getGraphPath.call(this,b);a=a.slice(0,d.length);for(var e=a.length-1;0<=e;e--)d.push(a[e])}}else d=f.getGraphPath.apply(this,arguments);return d}function t(b){var a=[];(this.pointArrayMap||[]).forEach(function(d){a.push(b[d])});return a}function g(){var b=this,a=this.pointArrayMap,d=[],c;d=e(this);f.translate.apply(this,arguments);this.points.forEach(function(e){a.forEach(function(a,m){c=e[a];b.dataModify&&(c=b.dataModify.modifyValue(c));null!==c&&(e[d[m]]=
b.yAxis.toPixels(c,!0))})})}var p=[],y=["bottomLine"],k=["top","bottom"],x=["top"];a.compose=function(b){if(-1===p.indexOf(b)){p.push(b);var a=b.prototype;a.linesApiNames=a.linesApiNames||y.slice();a.pointArrayMap=a.pointArrayMap||k.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||x.slice();a.drawGraph=d;a.getGraphPath=c;a.toYData=t;a.translate=g}return b}})(g||(g={}));return g});h(a,"Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js",[a["Stock/Indicators/MultipleLinesComposition.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,c,f){var h=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var d in e)e.hasOwnProperty(d)&&(a[d]=e[d])};return a(c,e)};return function(c,e){function d(){this.constructor=c}a(c,e);c.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)}}(),l=c.seriesTypes.aroon,k=f.extend,g=f.merge;f=function(a){function c(){var c=
null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}h(c,a);c.prototype.getValues=function(c,d){var e=[],f=[],g=[];c=a.prototype.getValues.call(this,c,d);for(d=0;d<c.yData.length;d++){var h=c.yData[d][0];var k=c.yData[d][1];h-=k;e.push([c.xData[d],h]);f.push(c.xData[d]);g.push(h)}return{values:e,xData:f,yData:g}};c.defaultOptions=g(l.defaultOptions,{tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b>: {point.y}'}});
return c}(l);k(f.prototype,{nameBase:"Aroon Oscillator",linesApiNames:[],pointArrayMap:["y"],pointValKey:"y"});a.compose(l);c.registerSeriesType("aroonoscillator",f);"";return f});h(a,"masters/indicators/aroon-oscillator.src.js",[],function(){})});
//# sourceMappingURL=aroon-oscillator.js.map