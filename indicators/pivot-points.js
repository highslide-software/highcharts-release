/*
 Highstock JS v10.3.0 (2022-10-31)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawe Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/pivot-points",["highcharts","highcharts/modules/stock"],function(k){a(k);a.Highcharts=k;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function k(a,d,c,f){a.hasOwnProperty(d)||(a[d]=f.apply(null,c),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:d,module:a[d]}})))}
a=a?a._modules:{};k(a,"Stock/Indicators/PivotPoints/PivotPointsPoint.js",[a["Core/Series/SeriesRegistry.js"]],function(a){function d(f,e){var n=f.series.pointArrayMap,d=n.length;for(a.seriesTypes.sma.prototype.pointClass.prototype[e].call(f);d--;)e="dataLabel"+n[d],f[e]&&f[e].element&&f[e].destroy(),f[e]=null}var c=this&&this.__extends||function(){var a=function(e,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var d in e)e.hasOwnProperty(d)&&
(a[d]=e[d])};return a(e,d)};return function(e,d){function f(){this.constructor=e}a(e,d);e.prototype=null===d?Object.create(d):(f.prototype=d.prototype,new f)}}();return function(a){function e(){var d=null!==a&&a.apply(this,arguments)||this;d.P=void 0;d.pivotLine=void 0;d.series=void 0;return d}c(e,a);e.prototype.destroyElements=function(){d(this,"destroyElements")};e.prototype.destroy=function(){d(this,"destroyElements")};return e}(a.seriesTypes.sma.prototype.pointClass)});k(a,"Stock/Indicators/PivotPoints/PivotPointsIndicator.js",
[a["Stock/Indicators/PivotPoints/PivotPointsPoint.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d,c){var f=this&&this.__extends||function(){var a=function(d,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var g in a)a.hasOwnProperty(g)&&(b[g]=a[g])};return a(d,b)};return function(d,b){function g(){this.constructor=d}a(d,b);d.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)}}(),e=d.seriesTypes.sma,
k=c.merge,v=c.extend,u=c.defined,w=c.isArray;c=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;b.endPoint=void 0;b.plotEndPoint=void 0;return b}f(c,a);c.prototype.toYData=function(b){return[b.P]};c.prototype.translate=function(){var b=this;d.seriesTypes.sma.prototype.translate.apply(b);b.points.forEach(function(a){b.pointArrayMap.forEach(function(g){u(a[g])&&(a["plot"+g]=b.yAxis.toPixels(a[g],!0))})});b.plotEndPoint=b.xAxis.toPixels(b.endPoint,
!0)};c.prototype.getGraphPath=function(b){for(var a=this,e=b.length,c=[[],[],[],[],[],[],[],[],[]],f=[],p=a.plotEndPoint,x=a.pointArrayMap.length,q,h,l;e--;){h=b[e];for(l=0;l<x;l++)q=a.pointArrayMap[l],u(h[q])&&c[l].push({plotX:h.plotX,plotY:h["plot"+q],isNull:!1},{plotX:p,plotY:h["plot"+q],isNull:!1},{plotX:p,plotY:null,isNull:!0});p=h.plotX}c.forEach(function(b){f=f.concat(d.seriesTypes.sma.prototype.getGraphPath.call(a,b))});return f};c.prototype.drawDataLabels=function(){var b=this,a=b.pointArrayMap,
e,c,f;if(b.options.dataLabels.enabled){var p=b.points.length;a.concat([!1]).forEach(function(g,r){for(f=p;f--;)c=b.points[f],g?(c.y=c[g],c.pivotLine=g,c.plotY=c["plot"+g],e=c["dataLabel"+g],r&&(c["dataLabel"+a[r-1]]=c.dataLabel),c.dataLabels||(c.dataLabels=[]),c.dataLabels[0]=c.dataLabel=e=e&&e.element?e:null):c["dataLabel"+a[r-1]]=c.dataLabel;d.seriesTypes.sma.prototype.drawDataLabels.call(b)})}};c.prototype.getValues=function(b,a){var c=a.period,g=b.xData,d=(b=b.yData)?b.length:0;a=this[a.algorithm+
"Placement"];var e=[],f=[],k=[],h;if(!(g.length<c)&&w(b[0])&&4===b[0].length){for(h=c+1;h<=d+c;h+=c){var l=g.slice(h-c-1,h);var m=b.slice(h-c-1,h);var n=l.length;var t=l[n-1];m=this.getPivotAndHLC(m);m=a(m);m=e.push([t].concat(m));f.push(t);k.push(e[m-1].slice(1))}this.endPoint=l[0]+(t-l[0])/n*c;return{values:e,xData:f,yData:k}}};c.prototype.getPivotAndHLC=function(b){var a=-Infinity,c=Infinity,d=b[b.length-1][3];b.forEach(function(b){a=Math.max(a,b[1]);c=Math.min(c,b[2])});return[(a+c+d)/3,a,c,d]};
c.prototype.standardPlacement=function(b){var a=b[1]-b[2];return[null,null,b[0]+a,2*b[0]-b[2],b[0],2*b[0]-b[1],b[0]-a,null,null]};c.prototype.camarillaPlacement=function(b){var a=b[1]-b[2];return[b[3]+1.5*a,b[3]+1.25*a,b[3]+1.1666*a,b[3]+1.0833*a,b[0],b[3]-1.0833*a,b[3]-1.1666*a,b[3]-1.25*a,b[3]-1.5*a]};c.prototype.fibonacciPlacement=function(a){var b=a[1]-a[2];return[null,a[0]+b,a[0]+.618*b,a[0]+.382*b,a[0],a[0]-.382*b,a[0]-.618*b,a[0]-b,null]};c.defaultOptions=k(e.defaultOptions,{params:{index:void 0,
period:28,algorithm:"standard"},marker:{enabled:!1},enableMouseTracking:!1,dataLabels:{enabled:!0,format:"{point.pivotLine}"},dataGrouping:{approximation:"averages"}});return c}(e);v(c.prototype,{nameBase:"Pivot Points",pointArrayMap:"R4 R3 R2 R1 P S1 S2 S3 S4".split(" "),pointValKey:"P",pointClass:a});d.registerSeriesType("pivotpoints",c);"";return c});k(a,"masters/indicators/pivot-points.src.js",[],function(){})});
//# sourceMappingURL=pivot-points.js.map