/*
 Highstock JS v9.2.1 (2021-08-19)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawel Fus, Sebastian Bochan

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/indicators",["highcharts","highcharts/modules/stock"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,e,n,b){a.hasOwnProperty(e)||(a[e]=b.apply(null,n))}a=a?a._modules:{};f(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var e=a.error;
return{isParentLoaded:function(a,b,f,h,k){if(a)return h?h(a):!0;e(k||this.generateMessage(f,b));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});f(a,"Stock/Indicators/SMA/SMAComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e){var f=a.series,b=a.seriesTypes.ohlc.prototype;a=e.addEvent;var l=e.extend;a(f,"init",function(a){a=
a.options;a.useOhlcData&&"highcharts-navigator-series"!==a.id&&l(this,{pointValKey:b.pointValKey,pointArrayMap:b.pointArrayMap,toYData:b.toYData})});a(f,"afterSetOptions",function(a){a=a.options;var b=a.dataGrouping;b&&a.useOhlcData&&"highcharts-navigator-series"!==a.id&&(b.approximation="ohlc")})});f(a,"Stock/Indicators/SMA/SMAIndicator.js",[a["Core/Chart/Chart.js"],a["Mixins/IndicatorRequired.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e,f,b){var l=this&&this.__extends||
function(){var a=function(b,g){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var g in c)c.hasOwnProperty(g)&&(a[g]=c[g])};return a(b,g)};return function(b,g){function d(){this.constructor=b}a(b,g);b.prototype=null===g?Object.create(g):(d.prototype=g.prototype,new d)}}(),h=f.seriesTypes.line,k=b.addEvent,p=b.error,n=b.extend,q=b.isArray,r=b.merge,t=b.pick,u=b.splat,v=e.generateMessage;e=function(b){function e(){var a=null!==b&&b.apply(this,
arguments)||this;a.data=void 0;a.dataEventsToUnbind=void 0;a.linkedParent=void 0;a.options=void 0;a.points=void 0;return a}l(e,b);e.prototype.destroy=function(){this.dataEventsToUnbind.forEach(function(a){a()});b.prototype.destroy.apply(this,arguments)};e.prototype.getName=function(){var a=this.name,d=[];a||((this.nameComponents||[]).forEach(function(a,b){d.push(this.options.params[a]+t(this.nameSuffixes[b],""))},this),a=(this.nameBase||this.type.toUpperCase())+(this.nameComponents?" ("+d.join(", ")+
")":""));return a};e.prototype.getValues=function(a,d){var c=d.period,b=a.xData;a=a.yData;var e=a.length,g=0,f=0,h=[],k=[],n=[],m=-1;if(!(b.length<c)){for(q(a[0])&&(m=d.index?d.index:0);g<c-1;)f+=0>m?a[g]:a[g][m],g++;for(d=g;d<e;d++){f+=0>m?a[d]:a[d][m];var l=[b[d],f/c];h.push(l);k.push(l[0]);n.push(l[1]);f-=0>m?a[d-g]:a[d-g][m]}return{values:h,xData:k,yData:n}}};e.prototype.init=function(g,d){var c=this,e=c.requireIndicators();if(!e.allLoaded)return p(v(c.type,e.needed));b.prototype.init.call(c,
g,d);d=k(a,"afterLinkSeries",function(){var a=!!c.dataEventsToUnbind.length;if(c.linkedParent)if(a||c.dataEventsToUnbind.push(k(c.bindTo.series?c.linkedParent:c.linkedParent.xAxis,c.bindTo.eventName,function(){c.recalculateValues()})),"init"===c.calculateOn)c.processedYData||c.recalculateValues();else{if(!a)var d=k(c.chart,c.calculateOn,function(){c.recalculateValues();d()})}else return p("Series "+c.options.linkedTo+" not found! Check `linkedTo`.",!1,g)},{order:0});c.dataEventsToUnbind=[];c.eventsToUnbind.push(d)};
e.prototype.recalculateValues=function(){var a=this.points||[],d=(this.xData||[]).length,c=this.getValues(this.linkedParent,this.options.params)||{values:[],xData:[],yData:[]},b=[],e=!0;if(d&&!this.hasGroupedData&&this.visible&&this.points)if(this.cropped){if(this.xAxis){var f=this.xAxis.min;var h=this.xAxis.max}d=this.cropData(c.xData,c.yData,f,h);for(f=0;f<d.xData.length;f++)b.push([d.xData[f]].concat(u(d.yData[f])));d=c.xData.indexOf(this.xData[0]);f=c.xData.indexOf(this.xData[this.xData.length-
1]);-1===d&&f===c.xData.length-2&&b[0][0]===a[0].x&&b.shift();this.updateData(b)}else c.xData.length!==d-1&&c.xData.length!==d+1&&(e=!1,this.updateData(c.values));e&&(this.xData=c.xData,this.yData=c.yData,this.options.data=c.values);!1===this.bindTo.series&&(delete this.processedXData,this.isDirty=!0,this.redraw());this.isDirtyData=!1};e.prototype.processData=function(){var a=this.options.compareToMain,d=this.linkedParent;b.prototype.processData.apply(this,arguments);d&&d.compareValue&&a&&(this.compareValue=
d.compareValue)};e.prototype.requireIndicators=function(){var a={allLoaded:!0};this.requiredIndicators.forEach(function(b){f.seriesTypes[b]?f.seriesTypes[b].prototype.requireIndicators():(a.allLoaded=!1,a.needed=b)});return a};e.defaultOptions=r(h.defaultOptions,{name:void 0,tooltip:{valueDecimals:4},linkedTo:void 0,compareToMain:!1,params:{index:0,period:14}});return e}(h);n(e.prototype,{bindTo:{series:!0,eventName:"updatedData"},calculateOn:"init",hasDerivedData:!0,nameComponents:["period"],nameSuffixes:[],
requiredIndicators:[],useCommonDataGrouping:!0});f.registerSeriesType("sma",e);"";return e});f(a,"masters/indicators/indicators.src.js",[],function(){})});
//# sourceMappingURL=indicators.js.map