/*
 Highstock JS v9.2.0 (2021-08-18)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Daniel Studencki

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/acceleration-bands",["highcharts","highcharts/modules/stock"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,k,g,f){a.hasOwnProperty(k)||(a[k]=f.apply(null,g))}a=a?a._modules:{};f(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,
k){var g=k.defined,f=k.error,r=k.merge,m=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(h){var a=[];(this.pointArrayMap||[]).forEach(function(b){b!==h&&a.push("plot"+b.charAt(0).toUpperCase()+b.slice(1))});return a},toYData:function(h){var a=[];(this.pointArrayMap||[]).forEach(function(b){a.push(h[b])});return a},translate:function(){var h=this,a=h.pointArrayMap,b=[],d,c=h.modifyValue;b=h.getTranslatedLinesNames();
m.prototype.translate.apply(h,arguments);h.points.forEach(function(n){a.forEach(function(a,t){d=n[a];c&&(d=c.call(h,d));null!==d&&(n[b[t]]=h.yAxis.toPixels(d,!0))})})},drawGraph:function(){var a=this,k=a.linesApiNames,b=a.points,d=b.length,c=a.options,n=a.graph,y={options:{gapSize:c.gapSize}},t=[],w;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,c){for(t[c]=[];d--;)w=b[d],t[c].push({x:w.x,plotX:w.plotX,plotY:w[a],isNull:!g(w[a])});d=b.length});k.forEach(function(b,d){t[d]?(a.points=t[d],
c[b]?a.options=r(c[b].styles,y):f('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],m.prototype.drawGraph.call(a),a["graph"+b]=a.graph):f('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=b;a.options=c;a.graph=n;m.prototype.drawGraph.call(a)}}});f(a,"Stock/Indicators/ABands/ABandsIndicator.js",[a["Mixins/MultipleLines.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,f,g){var k=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),v=f.seriesTypes.sma,m=g.correctFloat,h=g.extend,r=g.merge;g=function(a){function b(){var c=
null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}k(b,a);b.prototype.getValues=function(c,b){var d=b.period,f=b.factor;b=b.index;var h=c.xData,g=(c=c.yData)?c.length:0,k=[],n=[],r=[],v=[],x=[],e;if(!(g<d)){for(e=0;e<=g;e++){if(e<g){var l=c[e][2];var p=c[e][1];var u=f;l=m(p-l)/(m(p+l)/2)*1E3*u;k.push(c[e][1]*m(1+2*l));n.push(c[e][2]*m(1-2*l))}if(e>=d){l=h.slice(e-d,e);var q=c.slice(e-d,e);u=a.prototype.getValues.call(this,{xData:l,yData:k.slice(e-d,e)},
{period:d});p=a.prototype.getValues.call(this,{xData:l,yData:n.slice(e-d,e)},{period:d});q=a.prototype.getValues.call(this,{xData:l,yData:q},{period:d,index:b});l=q.xData[0];u=u.yData[0];p=p.yData[0];q=q.yData[0];r.push([l,u,q,p]);v.push(l);x.push([u,q,p])}}return{values:r,xData:v,yData:x}}};b.defaultOptions=r(v.defaultOptions,{params:{period:20,factor:.001,index:3},lineWidth:1,topLine:{styles:{lineWidth:1}},bottomLine:{styles:{lineWidth:1}},dataGrouping:{approximation:"averages"}});return b}(v);
h(g.prototype,{drawGraph:a.drawGraph,getTranslatedLinesNames:a.getTranslatedLinesNames,linesApiNames:["topLine","bottomLine"],nameBase:"Acceleration Bands",nameComponents:["period","factor"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle",toYData:a.toYData,translate:a.translate});f.registerSeriesType("abands",g);"";return g});f(a,"masters/indicators/acceleration-bands.src.js",[],function(){})});
//# sourceMappingURL=acceleration-bands.js.map