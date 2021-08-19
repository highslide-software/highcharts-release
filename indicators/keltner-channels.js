/*
 Highstock JS v9.2.1 (2021-08-19)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Daniel Studencki

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/keltner-channels",["highcharts","highcharts/modules/stock"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,g,h,d){a.hasOwnProperty(g)||(a[g]=d.apply(null,h))}a=a?a._modules:{};d(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,
g){var h=g.defined,d=g.error,w=g.merge,l=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(f){var a=[];(this.pointArrayMap||[]).forEach(function(b){b!==f&&a.push("plot"+b.charAt(0).toUpperCase()+b.slice(1))});return a},toYData:function(f){var a=[];(this.pointArrayMap||[]).forEach(function(b){a.push(f[b])});return a},translate:function(){var f=this,a=f.pointArrayMap,b=[],e,c=f.modifyValue;b=f.getTranslatedLinesNames();
l.prototype.translate.apply(f,arguments);f.points.forEach(function(m){a.forEach(function(a,n){e=m[a];c&&(e=c.call(f,e));null!==e&&(m[b[n]]=f.yAxis.toPixels(e,!0))})})},drawGraph:function(){var a=this,g=a.linesApiNames,b=a.points,e=b.length,c=a.options,m=a.graph,x={options:{gapSize:c.gapSize}},n=[],r;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,c){for(n[c]=[];e--;)r=b[e],n[c].push({x:r.x,plotX:r.plotX,plotY:r[a],isNull:!h(r[a])});e=b.length});g.forEach(function(b,e){n[e]?(a.points=n[e],
c[b]?a.options=w(c[b].styles,x):d('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],l.prototype.drawGraph.call(a),a["graph"+b]=a.graph):d('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=b;a.options=c;a.graph=m;l.prototype.drawGraph.call(a)}}});d(a,"Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js",
[a["Mixins/MultipleLines.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,g,d){var h=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),p=g.seriesTypes.sma,l=d.correctFloat,f=
d.extend,q=d.merge;d=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}h(b,a);b.prototype.init=function(){g.seriesTypes.sma.prototype.init.apply(this,arguments);this.options=q({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)};b.prototype.getValues=function(a,b){var c=b.period,d=b.periodATR,f=b.multiplierATR,e=a.yData;e=e?e.length:0;var h=[];b=g.seriesTypes.ema.prototype.getValues(a,
{period:c,index:b.index});var m=g.seriesTypes.atr.prototype.getValues(a,{period:d}),p=[],q=[],t;if(!(e<c)){for(t=c;t<=e;t++){var k=b.values[t-c];var u=m.values[t-d];var v=k[0];a=l(k[1]+f*u[1]);u=l(k[1]-f*u[1]);k=k[1];h.push([v,a,k,u]);p.push(v);q.push([a,k,u])}return{values:h,xData:p,yData:q}}};b.defaultOptions=q(p.defaultOptions,{params:{period:20,periodATR:10,multiplierATR:2},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'},
marker:{enabled:!1},dataGrouping:{approximation:"averages"},lineWidth:1});return b}(p);f(d.prototype,{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameBase:"Keltner Channels",nameComponents:["period","periodATR","multiplierATR"],linesApiNames:["topLine","bottomLine"],requiredIndicators:["ema","atr"],drawGraph:a.drawGraph,getTranslatedLinesNames:a.getTranslatedLinesNames,translate:a.translate,toYData:a.toYData});g.registerSeriesType("keltnerchannels",d);"";return d});d(a,"masters/indicators/keltner-channels.src.js",
[],function(){})});
//# sourceMappingURL=keltner-channels.js.map