/*
 Highcharts JS v11.0.0 (2023-04-26)

 Series on point module

 (c) 2010-2022 Highsoft AS
 Author: Rafal Sebestjanski and Piotr Madej

 License: www.highcharts.com/license
*/
'use strict';(function(d){"object"===typeof module&&module.exports?(d["default"]=d,module.exports=d):"function"===typeof define&&define.amd?define("highcharts/modules/series-on-point",["highcharts"],function(g){d(g);d.Highcharts=g;return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){function g(d,e,a,g){d.hasOwnProperty(e)||(d[e]=g.apply(null,a),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:d[e]}})))}var a=
d?d._modules:{};g(a,"Series/SeriesOnPointComposition.js",[a["Core/Series/Point.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"]],function(d,e,a,g,k){a=a.seriesTypes;var n=a.bubble,r=a.pie,h=k.addEvent,l=k.defined,t=k.find,u=k.isNumber,m;(function(a){var m=[];a.compose=function(d,p){var b=q.prototype,c=b.chartGetZData,f=b.seriesAfterInit,a=b.seriesAfterRender,v=b.seriesGetCenter,g=b.seriesShowOrHide;b=b.seriesTranslate;
r.prototype.onPointSupported=!0;k.pushUnique(m,d)&&(h(e,"afterInit",f),h(e,"afterRender",a),h(e,"afterGetCenter",v),h(e,"hide",g),h(e,"show",g),h(e,"translate",b));k.pushUnique(m,p)&&(h(p,"beforeRender",c),h(p,"beforeRedraw",c));return d};var q=function(){function a(a){this.getRadii=n.prototype.getRadii;this.getRadius=n.prototype.getRadius;this.getPxExtremes=n.prototype.getPxExtremes;this.getZExtremes=n.prototype.getZExtremes;this.chart=a.chart;this.series=a;this.options=a.options.onPoint}a.prototype.drawConnector=
function(){this.connector||(this.connector=this.series.chart.renderer.path().addClass("highcharts-connector-seriesonpoint").attr({zIndex:-1}).add(this.series.markerGroup));var a=this.getConnectorAttributes();a&&this.connector.animate(a)};a.prototype.getConnectorAttributes=function(){var a=this.series.chart,b=this.options;if(b){var c=b.connectorOptions||{},f=b.position,e=a.get(b.id);if(e instanceof d&&f&&l(e.plotX)&&l(e.plotY)){b=l(f.x)?f.x:e.plotX;var h=l(f.y)?f.y:e.plotY,k=c.width||1;e=c.stroke||
this.series.color;c=c.dashstyle;f={d:g.prototype.crispLine([["M",b,h],["L",b+(f.offsetX||0),h+(f.offsetY||0)]],k,"ceil"),"stroke-width":k};a.styledMode||(f.stroke=e,f.dashstyle=c);return f}}};a.prototype.seriesAfterInit=function(){this.onPointSupported&&this.options.onPoint&&(this.useMapGeometry=this.bubblePadding=!0,this.onPoint=new a(this))};a.prototype.seriesAfterRender=function(){delete this.chart.bubbleZExtremes;this.onPoint&&this.onPoint.drawConnector()};a.prototype.seriesGetCenter=function(a){var b=
this.options.onPoint,c=a.positions;if(b){var f=this.chart.get(b.id);f instanceof d&&l(f.plotX)&&l(f.plotY)&&(c[0]=f.plotX,c[1]=f.plotY);if(b=b.position)l(b.x)&&(c[0]=b.x),l(b.y)&&(c[1]=b.y),b.offsetX&&(c[0]+=b.offsetX),b.offsetY&&(c[1]+=b.offsetY)}b=this.radii&&this.radii[this.index];u(b)&&(c[2]=2*b);a.positions=c};a.prototype.seriesShowOrHide=function(){var a=this.chart.series;this.points.forEach(function(b){var c=t(a,function(a){return(a=((a.onPoint||{}).options||{}).id)?a===b.id:!1});c&&c.setVisible(!c.visible,
!1)})};a.prototype.seriesTranslate=function(){this.onPoint&&(this.onPoint.getRadii(),this.radii=this.onPoint.radii)};a.prototype.chartGetZData=function(){var a=[];this.series.forEach(function(b){b=b.options.onPoint;a.push(b&&b.z?b.z:null)});this.series.forEach(function(b){b.onPoint&&(b.onPoint.zData=b.zData=a)})};return a}();a.Additions=q})(m||(m={}));"";return m});g(a,"masters/modules/series-on-point.src.js",[a["Series/SeriesOnPointComposition.js"]],function(a){a.compose(d.Series,d.Chart)})});
//# sourceMappingURL=series-on-point.js.map