/*
 Highcharts JS v9.2.0 (2021-08-18)

 Timeline series

 (c) 2010-2021 Highsoft AS
 Author: Daniel Studencki

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/timeline",["highcharts"],function(k){a(k);a.Highcharts=k;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function k(a,q,p,k){a.hasOwnProperty(q)||(a[q]=k.apply(null,p))}a=a?a._modules:{};k(a,"Series/Timeline/TimelinePoint.js",[a["Core/Series/Point.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],
function(a,q,p){var k=this&&this.__extends||function(){var a=function(c,m){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(m,a){m.__proto__=a}||function(m,a){for(var c in a)a.hasOwnProperty(c)&&(m[c]=a[c])};return a(c,m)};return function(c,m){function v(){this.constructor=c}a(c,m);c.prototype=null===m?Object.create(m):(v.prototype=m.prototype,new v)}}(),x=q.seriesTypes.pie.prototype.pointClass,g=p.defined,A=p.isNumber,r=p.merge,y=p.objectEach,t=p.pick;return function(e){function c(){var a=
null!==e&&e.apply(this,arguments)||this;a.options=void 0;a.series=void 0;return a}k(c,e);c.prototype.alignConnector=function(){var a=this.series,c=this.connector,l=this.dataLabel,e=this.dataLabel.options=r(a.options.dataLabels,this.options.dataLabels),h=this.series.chart,d=c.getBBox(),b=d.x+l.translateX;d=d.y+l.translateY;h.inverted?d-=l.options.connectorWidth/2:b+=l.options.connectorWidth/2;h=h.isInsidePlot(b,d);c[h?"animate":"attr"]({d:this.getConnectorPath()});a.chart.styledMode||c.attr({stroke:e.connectorColor||
this.color,"stroke-width":e.connectorWidth,opacity:l[g(l.newOpacity)?"newOpacity":"opacity"]})};c.prototype.drawConnector=function(){var a=this.series;this.connector||(this.connector=a.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel));this.series.chart.isInsidePlot(this.dataLabel.x,this.dataLabel.y)&&this.alignConnector()};c.prototype.getConnectorPath=function(){var a=this.series.chart,c=this.series.xAxis.len,l=a.inverted,e=l?"x2":"y2",h=this.dataLabel,d=h.targetPosition,
b={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:A(d.y)?d.y:h.y},f=(h.alignAttr||h)[e[0]]<this.series.yAxis.len/2;l&&(b={x1:this.plotY,y1:c-this.plotX,x2:d.x||h.x,y2:c-this.plotX});f&&(b[e]+=h[l?"width":"height"]);y(b,function(f,a){b[a]-=(h.alignAttr||h)[a[0]]});return a.renderer.crispLine([["M",b.x1,b.y1],["L",b.x2,b.y2]],h.options.connectorWidth)};c.prototype.init=function(){var a=e.prototype.init.apply(this,arguments);a.name=t(a.name,"Event");a.y=1;return a};c.prototype.isValid=function(){return null!==
this.options.y};c.prototype.setState=function(){var a=e.prototype.setState;this.isNull||a.apply(this,arguments)};c.prototype.setVisible=function(a,c){var e=this.series;c=t(c,e.options.ignoreHiddenPoint);x.prototype.setVisible.call(this,a,!1);e.processData();c&&e.chart.redraw()};c.prototype.applyOptions=function(c,g){c=a.prototype.optionsToObject.call(this,c);this.userDLOptions=r(this.userDLOptions,c.dataLabels);return e.prototype.applyOptions.call(this,c,g)};return c}(q.series.prototype.pointClass)});
k(a,"Series/Timeline/TimelineSeries.js",[a["Core/Legend/LegendSymbol.js"],a["Core/Color/Palette.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Series/Timeline/TimelinePoint.js"],a["Core/Utilities.js"]],function(a,k,p,z,x,g){var q=this&&this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var f in a)a.hasOwnProperty(f)&&(b[f]=a[f])};return a(c,b)};return function(c,b){function f(){this.constructor=
c}a(c,b);c.prototype=null===b?Object.create(b):(f.prototype=b.prototype,new f)}}(),r=p.seriesTypes,y=r.column,t=r.line,e=g.addEvent,c=g.arrayMax,m=g.arrayMin,v=g.defined;r=g.extend;var l=g.merge,w=g.pick;g=function(a){function d(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;b.userOptions=void 0;b.visibilityMap=void 0;return b}q(d,a);d.prototype.alignDataLabel=function(b,f,c,e){var n=this.chart.inverted,d=this.visibilityMap.filter(function(b){return b}),
u=this.visiblePointsCount,g=d.indexOf(b);d=this.options.dataLabels;var k=b.userDLOptions||{};g=d.alternate?g&&g!==u-1?2:1.5:1;u=Math.floor(this.xAxis.len/u);var h=f.padding;if(b.visible){var l=Math.abs(k.x||b.options.dataLabels.x);n?(n=2*(l-h)-b.itemHeight/2,n={width:n+"px",textOverflow:f.width/n*f.height/2>u*g?"ellipsis":"none"}):n={width:(k.width||d.width||u*g-2*h)+"px"};f.css(n);this.chart.styledMode||f.shadow(d.shadow)}a.prototype.alignDataLabel.apply(this,arguments)};d.prototype.bindAxes=function(){var b=
this;a.prototype.bindAxes.call(b);["xAxis","yAxis"].forEach(function(a){"xAxis"!==a||b[a].userOptions.type||(b[a].categories=b[a].hasNames=!0)})};d.prototype.distributeDL=function(){var a=this,f=a.options.dataLabels,c=1;if(f){var d=f.distance||0;a.points.forEach(function(b){var n;b.options.dataLabels=l((n={},n[a.chart.inverted?"x":"y"]=f.alternate&&c%2?-d:d,n),b.userDLOptions);c++})}};d.prototype.generatePoints=function(){var b=this;a.prototype.generatePoints.apply(b);b.points.forEach(function(a,
c){a.applyOptions({x:b.xData[c]},b.xData[c])})};d.prototype.getVisibilityMap=function(){return(this.data.length?this.data:this.userOptions.data).map(function(a){return a&&!1!==a.visible&&!a.isNull?a:!1})};d.prototype.getXExtremes=function(a){var b=this;a=a.filter(function(a,c){return b.points[c].isValid()&&b.points[c].visible});return{min:m(a),max:c(a)}};d.prototype.init=function(){var b=this;a.prototype.init.apply(b,arguments);b.eventsToUnbind.push(e(b,"afterTranslate",function(){var a,c=Number.MAX_VALUE;
b.points.forEach(function(b){b.isInside=b.isInside&&b.visible;b.visible&&!b.isNull&&(v(a)&&(c=Math.min(c,Math.abs(b.plotX-a))),a=b.plotX)});b.closestPointRangePx=c}));b.eventsToUnbind.push(e(b,"drawDataLabels",function(){b.distributeDL()}));b.eventsToUnbind.push(e(b,"afterDrawDataLabels",function(){var a;b.points.forEach(function(b){if(a=b.dataLabel)return a.animate=function(a){this.targetPosition&&(this.targetPosition=a);return z.prototype.animate.apply(this,arguments)},a.targetPosition||(a.targetPosition=
{}),b.drawConnector()})}));b.eventsToUnbind.push(e(b.chart,"afterHideOverlappingLabel",function(){b.points.forEach(function(a){a.connector&&a.dataLabel&&a.dataLabel.oldOpacity!==a.dataLabel.newOpacity&&a.alignConnector()})}))};d.prototype.markerAttribs=function(b,c){var d=this.options.marker,f=b.marker||{},e=f.symbol||d.symbol,g=w(f.width,d.width,this.closestPointRangePx),k=w(f.height,d.height),h=0;if(this.xAxis.dateTime)return a.prototype.markerAttribs.call(this,b,c);c&&(d=d.states[c]||{},c=f.states&&
f.states[c]||{},h=w(c.radius,d.radius,h+(d.radiusPlus||0)));b.hasImage=e&&0===e.indexOf("url");return{x:Math.floor(b.plotX)-g/2-h/2,y:b.plotY-k/2-h/2,width:g+h,height:k+h}};d.prototype.processData=function(){var b=0,c;this.visibilityMap=this.getVisibilityMap();this.visibilityMap.forEach(function(a){a&&b++});this.visiblePointsCount=b;for(c=0;c<this.xData.length;c++)this.yData[c]=1;a.prototype.processData.call(this,arguments)};d.defaultOptions=l(t.defaultOptions,{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,
legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,alternate:!0,backgroundColor:k.backgroundColor,borderWidth:1,borderColor:k.neutralColor40,borderRadius:3,color:k.neutralColor80,connectorWidth:1,distance:100,formatter:function(){var a=this.series.chart.styledMode?"<span>\u25cf </span>":
'<span style="color:'+this.point.color+'">\u25cf </span>';return a+='<span class="highcharts-strong">'+(this.key||"")+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1,colorKey:"x"});return d}(t);r(g.prototype,{drawLegendSymbol:a.drawRectangle,drawTracker:y.prototype.drawTracker,pointClass:x,trackerGroups:["markerGroup","dataLabelsGroup"]});
p.registerSeriesType("timeline",g);"";"";return g});k(a,"masters/modules/timeline.src.js",[],function(){})});
//# sourceMappingURL=timeline.js.map