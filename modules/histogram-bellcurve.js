/*
  Highcharts JS v7.0.2 (2019-01-17)

 (c) 2010-2019 Highsoft AS
 Author: Sebastian Domas

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define(function(){return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){var g=function(a){var b=a.Series,e=a.addEvent;return{init:function(){b.prototype.init.apply(this,arguments);this.initialised=!1;this.baseSeries=null;this.eventRemovers=[];this.addEvents()},setDerivedData:a.noop,setBaseSeries:function(){var k=this.chart,a=this.options.baseSeries;
this.baseSeries=a&&(k.series[a]||k.get(a))||null},addEvents:function(){var a=this,b;b=e(this.chart,"afterLinkSeries",function(){a.setBaseSeries();a.baseSeries&&!a.initialised&&(a.setDerivedData(),a.addBaseSeriesEvents(),a.initialised=!0)});this.eventRemovers.push(b)},addBaseSeriesEvents:function(){var a=this,b,d;b=e(a.baseSeries,"updatedData",function(){a.setDerivedData()});d=e(a.baseSeries,"destroy",function(){a.baseSeries=null;a.initialised=!1});a.eventRemovers.push(b,d)},destroy:function(){this.eventRemovers.forEach(function(a){a()});
b.prototype.destroy.apply(this,arguments)}}}(b);(function(a,b){function e(a){return function(c){for(var b=1;a[b]<=c;)b++;return a[--b]}}var k=a.objectEach,h=a.seriesType,d=a.correctFloat,q=a.isNumber,p=a.arrayMax,r=a.arrayMin;a=a.merge;var f={"square-root":function(a){return Math.round(Math.sqrt(a.options.data.length))},sturges:function(a){return Math.ceil(Math.log(a.options.data.length)*Math.LOG2E)},rice:function(a){return Math.ceil(2*Math.pow(a.options.data.length,1/3))}};h("histogram","column",
{binsNumber:"square-root",binWidth:void 0,pointPadding:0,groupPadding:0,grouping:!1,pointPlacement:"between",tooltip:{headerFormat:"",pointFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name} \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e'}},a(b,{setDerivedData:function(){var a=this.derivedData(this.baseSeries.yData,this.binsNumber(),this.options.binWidth);this.setData(a,!1)},derivedData:function(a,
b,f){var c=p(a),l=r(a),n=[],m={},h=[],g;f=this.binWidth=d(q(f)?f||1:(c-l)/b);for(b=l;b<c;b=d(b+f))n.push(b),m[b]=0;0!==m[l]&&(n.push(d(l)),m[d(l)]=0);g=e(n.map(function(a){return parseFloat(a)}));a.forEach(function(a){a=d(g(a));m[a]++});k(m,function(a,b){h.push({x:Number(b),y:a,x2:d(Number(b)+f)})});h.sort(function(a,b){return a.x-b.x});return h},binsNumber:function(){var a=this.options.binsNumber,b=f[a]||"function"===typeof a&&a;return Math.ceil(b&&b(this.baseSeries)||(q(a)?a:f["square-root"](this.baseSeries)))}}))})(b,
g);(function(a,b){function e(a){var b=a.length;a=a.reduce(function(a,b){return a+b},0);return 0<b&&a/b}function k(a,b){var c=a.length;b=p(b)?b:e(a);a=a.reduce(function(a,c){c-=b;return a+c*c},0);return 1<c&&Math.sqrt(a/(c-1))}function h(a,b,c){a-=b;return Math.exp(-(a*a)/(2*c*c))/(c*Math.sqrt(2*Math.PI))}var d=a.seriesType,g=a.correctFloat,p=a.isNumber;a=a.merge;d("bellcurve","areaspline",{intervals:3,pointsInInterval:3,marker:{enabled:!1}},a(b,{setMean:function(){this.mean=g(e(this.baseSeries.yData))},
setStandardDeviation:function(){this.standardDeviation=g(k(this.baseSeries.yData,this.mean))},setDerivedData:function(){1<this.baseSeries.yData.length&&(this.setMean(),this.setStandardDeviation(),this.setData(this.derivedData(this.mean,this.standardDeviation),!1))},derivedData:function(a,b){var c=this.options.intervals,d=this.options.pointsInInterval,e=a-c*b,c=c*d*2+1,d=b/d,g=[],f;for(f=0;f<c;f++)g.push([e,h(e,a,b)]),e+=d;return g}}))})(b,g)});
//# sourceMappingURL=histogram-bellcurve.js.map