/*
 Highcharts JS v10.3.0 (2022-10-31)

 Timeline series

 (c) 2010-2021 Highsoft AS
 Author: Daniel Studencki

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/timeline",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,k,n,b){a.hasOwnProperty(k)||(a[k]=b.apply(null,n),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:k,module:a[k]}})))}a=a?a._modules:{};b(a,
"Series/Timeline/TimelinePoint.js",[a["Core/Series/Point.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,k,b){var x=this&&this.__extends||function(){var a=function(d,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var d in e)e.hasOwnProperty(d)&&(a[d]=e[d])};return a(d,e)};return function(d,e){function t(){this.constructor=d}a(d,e);d.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}(),n=k.seriesTypes.pie.prototype.pointClass,
f=b.defined,A=b.isNumber,m=b.merge,v=b.objectEach,p=b.pick;return function(b){function d(){var e=null!==b&&b.apply(this,arguments)||this;e.options=void 0;e.series=void 0;return e}x(d,b);d.prototype.alignConnector=function(){var e=this.series,a=this.connector,b=this.dataLabel,d=this.dataLabel.options=m(e.options.dataLabels,this.options.dataLabels),h=this.series.chart,l=a.getBBox(),c=l.x+b.translateX;l=l.y+b.translateY;h.inverted?l-=b.options.connectorWidth/2:c+=b.options.connectorWidth/2;h=h.isInsidePlot(c,
l);a[h?"animate":"attr"]({d:this.getConnectorPath()});e.chart.styledMode||a.attr({stroke:d.connectorColor||this.color,"stroke-width":d.connectorWidth,opacity:b[f(b.newOpacity)?"newOpacity":"opacity"]})};d.prototype.drawConnector=function(){var a=this.series;this.connector||(this.connector=a.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel));this.series.chart.isInsidePlot(this.dataLabel.x,this.dataLabel.y)&&this.alignConnector()};d.prototype.getConnectorPath=function(){var a=
this.series.chart,b=this.series.xAxis.len,d=a.inverted,f=d?"x2":"y2",h=this.dataLabel,l=h.targetPosition,c={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:A(l.y)?l.y:h.y},g=(h.alignAttr||h)[f[0]]<this.series.yAxis.len/2;d&&(c={x1:this.plotY,y1:b-this.plotX,x2:l.x||h.x,y2:b-this.plotX});g&&(c[f]+=h[d?"width":"height"]);v(c,function(g,a){c[a]-=(h.alignAttr||h)[a[0]]});return a.renderer.crispLine([["M",c.x1,c.y1],["L",c.x2,c.y2]],h.options.connectorWidth)};d.prototype.init=function(){var a=b.prototype.init.apply(this,
arguments);a.name=p(a.name,"Event");a.y=1;return a};d.prototype.isValid=function(){return null!==this.options.y};d.prototype.setState=function(){var a=b.prototype.setState;this.isNull||a.apply(this,arguments)};d.prototype.setVisible=function(a,b){var d=this.series;b=p(b,d.options.ignoreHiddenPoint);n.prototype.setVisible.call(this,a,!1);d.processData();b&&d.chart.redraw()};d.prototype.applyOptions=function(d,f){d=a.prototype.optionsToObject.call(this,d);this.userDLOptions=m(this.userDLOptions,d.dataLabels);
return b.prototype.applyOptions.call(this,d,f)};return d}(k.series.prototype.pointClass)});b(a,"Series/Timeline/TimelineSeriesDefaults.js",[],function(){"";return{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,alternate:!0,backgroundColor:"#ffffff",
borderWidth:1,borderColor:"#999999",borderRadius:3,color:"#333333",connectorWidth:1,distance:100,formatter:function(){var a=this.series.chart.styledMode?"<span>\u25cf </span>":'<span style="color:'+this.point.color+'">\u25cf </span>';return a+='<span class="highcharts-strong">'+(this.key||"")+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},
showInLegend:!1,colorKey:"x"}});b(a,"Series/Timeline/TimelineSeries.js",[a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Series/Timeline/TimelinePoint.js"],a["Series/Timeline/TimelineSeriesDefaults.js"],a["Core/Utilities.js"]],function(a,b,n,y,z,f){var k=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var g in a)a.hasOwnProperty(g)&&
(c[g]=a[g])};return a(b,c)};return function(b,c){function g(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(g.prototype=c.prototype,new g)}}(),m=b.seriesTypes,v=m.column,p=m.line,r=f.addEvent,d=f.arrayMax,e=f.arrayMin,t=f.defined;m=f.extend;var w=f.merge,u=f.pick;f=function(a){function b(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;c.userOptions=void 0;c.visibilityMap=void 0;return c}k(b,a);b.prototype.alignDataLabel=function(c,
b,d,B){var g=this.chart.inverted,q=this.visibilityMap.filter(function(c){return c}),e=this.visiblePointsCount,f=q.indexOf(c);q=this.options.dataLabels;var h=c.userDLOptions||{};f=q.alternate?f&&f!==e-1?2:1.5:1;e=Math.floor(this.xAxis.len/e);var k=b.padding;if(c.visible){var l=Math.abs(h.x||c.options.dataLabels.x);g?(g=2*(l-k)-c.itemHeight/2,g={width:g+"px",textOverflow:b.width/g*b.height/2>e*f?"ellipsis":"none"}):g={width:(h.width||q.width||e*f-2*k)+"px"};b.css(g);this.chart.styledMode||b.shadow(q.shadow)}a.prototype.alignDataLabel.apply(this,
arguments)};b.prototype.bindAxes=function(){var c=this;a.prototype.bindAxes.call(c);["xAxis","yAxis"].forEach(function(a){"xAxis"!==a||c[a].userOptions.type||(c[a].categories=c[a].hasNames=!0)})};b.prototype.distributeDL=function(){var a=this,b=a.options.dataLabels,d=1;if(b){var e=b.distance||0;a.points.forEach(function(c){var g;c.options.dataLabels=w((g={},g[a.chart.inverted?"x":"y"]=b.alternate&&d%2?-e:e,g),c.userDLOptions);d++})}};b.prototype.generatePoints=function(){var c=this;a.prototype.generatePoints.apply(c);
c.points.forEach(function(a,b){a.applyOptions({x:c.xData[b]},c.xData[b])})};b.prototype.getVisibilityMap=function(){return(this.data.length?this.data:this.userOptions.data).map(function(a){return a&&!1!==a.visible&&!a.isNull?a:!1})};b.prototype.getXExtremes=function(a){var c=this;a=a.filter(function(a,b){return c.points[b].isValid()&&c.points[b].visible});return{min:e(a),max:d(a)}};b.prototype.init=function(){var c=this;a.prototype.init.apply(c,arguments);c.eventsToUnbind.push(r(c,"afterTranslate",
function(){var a,b=Number.MAX_VALUE;c.points.forEach(function(c){c.isInside=c.isInside&&c.visible;c.visible&&!c.isNull&&(t(a)&&(b=Math.min(b,Math.abs(c.plotX-a))),a=c.plotX)});c.closestPointRangePx=b}));c.eventsToUnbind.push(r(c,"drawDataLabels",function(){c.distributeDL()}));c.eventsToUnbind.push(r(c,"afterDrawDataLabels",function(){var a;c.points.forEach(function(c){if(a=c.dataLabel)return a.animate=function(a){this.targetPosition&&(this.targetPosition=a);return n.prototype.animate.apply(this,arguments)},
a.targetPosition||(a.targetPosition={}),c.drawConnector()})}));c.eventsToUnbind.push(r(c.chart,"afterHideOverlappingLabel",function(){c.points.forEach(function(a){a.connector&&a.dataLabel&&a.dataLabel.oldOpacity!==a.dataLabel.newOpacity&&a.alignConnector()})}))};b.prototype.markerAttribs=function(c,b){var d=this.options.marker,e=c.marker||{},g=e.symbol||d.symbol,f=u(e.width,d.width,this.closestPointRangePx),h=u(e.height,d.height),k=0;if(this.xAxis.dateTime)return a.prototype.markerAttribs.call(this,
c,b);b&&(d=d.states[b]||{},b=e.states&&e.states[b]||{},k=u(b.radius,d.radius,k+(d.radiusPlus||0)));c.hasImage=g&&0===g.indexOf("url");return{x:Math.floor(c.plotX)-f/2-k/2,y:c.plotY-h/2-k/2,width:f+k,height:h+k}};b.prototype.processData=function(){var c=0,b;this.visibilityMap=this.getVisibilityMap();this.visibilityMap.forEach(function(a){a&&c++});this.visiblePointsCount=c;for(b=0;b<this.xData.length;b++)this.yData[b]=1;a.prototype.processData.call(this,arguments)};b.defaultOptions=w(p.defaultOptions,
z);return b}(p);m(f.prototype,{drawLegendSymbol:a.drawRectangle,drawTracker:v.prototype.drawTracker,pointClass:y,trackerGroups:["markerGroup","dataLabelsGroup"]});b.registerSeriesType("timeline",f);"";return f});b(a,"masters/modules/timeline.src.js",[],function(){})});
//# sourceMappingURL=timeline.js.map