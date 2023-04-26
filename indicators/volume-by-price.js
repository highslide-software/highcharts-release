/*
 Highstock JS v11.0.0 (2023-04-26)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Pawe Dalek

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/indicators/volume-by-price",["highcharts","highcharts/modules/stock"],function(h){b(h);b.Highcharts=h;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function h(b,n,h,u){b.hasOwnProperty(n)||(b[n]=u.apply(null,h),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:n,
module:b[n]}})))}b=b?b._modules:{};h(b,"Stock/Indicators/VBP/VBPPoint.js",[b["Core/Series/SeriesRegistry.js"]],function(b){({sma:{prototype:{pointClass:b}}}=b.seriesTypes);class n extends b{destroy(){this.negativeGraphic&&(this.negativeGraphic=this.negativeGraphic.destroy());super.destroy.apply(this,arguments)}}return n});h(b,"Stock/Indicators/VBP/VBPIndicator.js",[b["Stock/Indicators/VBP/VBPPoint.js"],b["Core/Animation/AnimationUtilities.js"],b["Core/Globals.js"],b["Core/Series/SeriesRegistry.js"],
b["Core/Utilities.js"],b["Core/Chart/StockChart.js"]],function(b,n,h,u,H,I){const {animObject:J}=n;({noop:n}=h);const {column:{prototype:w},sma:C}=u.seriesTypes,{addEvent:y,arrayMax:D,arrayMin:K,correctFloat:z,defined:E,error:A,extend:F,isArray:L,merge:M}=H,v=Math.abs;class x extends C{constructor(){super(...arguments);this.zoneLinesSVG=this.zoneStarts=this.volumeDataArray=this.rangeStep=this.priceZones=this.posWidths=this.points=this.options=this.negWidths=this.data=void 0}init(c){const d=this;super.init.apply(d,
arguments);const a=y(I,"afterLinkSeries",function(){if(d.options){const a=d.linkedParent,b=c.get(d.options.params.volumeSeriesID);d.addCustomEvents(a,b)}a()},{order:1});return d}addCustomEvents(c,d){const a=this,q=()=>{a.chart.redraw();a.setData([]);a.zoneStarts=[];a.zoneLinesSVG&&(a.zoneLinesSVG=a.zoneLinesSVG.destroy())};a.dataEventsToUnbind.push(y(c,"remove",function(){q()}));d&&a.dataEventsToUnbind.push(y(d,"remove",function(){q()}));return a}animate(c){const d=this,a=d.chart.inverted,q=d.group,
b={};!c&&q&&(c=a?d.yAxis.top:d.xAxis.left,a?(q["forceAnimate:translateY"]=!0,b.translateY=c):(q["forceAnimate:translateX"]=!0,b.translateX=c),q.animate(b,F(J(d.options.animation),{step:function(c,a){d.group.attr({scaleX:Math.max(.001,a.pos)})}})))}drawPoints(){this.options.volumeDivision.enabled&&(this.posNegVolume(!0,!0),w.drawPoints.apply(this,arguments),this.posNegVolume(!1,!1));w.drawPoints.apply(this,arguments)}posNegVolume(c,d){const a=d?["positive","negative"]:["negative","positive"],b=this.options.volumeDivision,
m=this.points.length;let t=[],k=[],e=0,g,f,p,l;c?(this.posWidths=t,this.negWidths=k):(t=this.posWidths,k=this.negWidths);for(;e<m;e++)l=this.points[e],l[a[0]+"Graphic"]=l.graphic,l.graphic=l[a[1]+"Graphic"],c&&(g=l.shapeArgs.width,f=this.priceZones[e],(p=f.wholeVolumeData)?(t.push(g/p*f.positiveVolumeData),k.push(g/p*f.negativeVolumeData)):(t.push(0),k.push(0))),l.color=d?b.styles.positiveColor:b.styles.negativeColor,l.shapeArgs.width=d?this.posWidths[e]:this.negWidths[e],l.shapeArgs.x=d?l.shapeArgs.x:
this.posWidths[e]}translate(){const c=this;var d=c.options;const a=c.chart,b=c.yAxis;var m=b.min;const t=c.options.zoneLines,k=c.priceZones;let e=0,g,f,p,l,n,B,r,G,h;w.translate.apply(c);const u=c.points;u.length&&(B=.5>d.pointPadding?d.pointPadding:.1,d=c.volumeDataArray,g=D(d),f=a.plotWidth/2,r=a.plotTop,p=v(b.toPixels(m)-b.toPixels(m+c.rangeStep)),l=v(b.toPixels(m)-b.toPixels(m+c.rangeStep)),B&&(m=v(p*(1-2*B)),e=v((p-m)/2),p=v(m)),u.forEach(function(a,d){G=a.barX=a.plotX=0;h=a.plotY=b.toPixels(k[d].start)-
r-(b.reversed?p-l:p)-e;n=z(f*k[d].wholeVolumeData/g);a.pointWidth=n;a.shapeArgs=c.crispCol.apply(c,[G,h,n,p]);a.volumeNeg=k[d].negativeVolumeData;a.volumePos=k[d].positiveVolumeData;a.volumeAll=k[d].wholeVolumeData}),t.enabled&&c.drawZones(a,b,c.zoneStarts,t.styles))}getValues(b,d){const a=b.processedXData,c=b.processedYData,m=this.chart,t=d.ranges,k=[],e=[],g=[],f=m.get(d.volumeSeriesID);if(b.chart)if(f&&f.processedXData.length)if((d=L(c[0]))&&4!==c[0].length)A("Type of "+b.name+" series is different than line, OHLC or candlestick.",
!0,m);else return(this.priceZones=this.specifyZones(d,a,c,t,f)).forEach(function(b,a){k.push([b.x,b.end]);e.push(k[a][0]);g.push(k[a][1])}),{values:k,xData:e,yData:g};else A("Series "+d.volumeSeriesID+(f&&!f.processedXData.length?" does not contain any data.":" not found! Check `volumeSeriesID`."),!0,m);else A("Base series not found! In case it has been removed, add a new one.",!0,m)}specifyZones(b,d,a,q,m){if(b){var c=a.length;for(var k=a[0][3],e=k,g=1,f;g<c;g++)f=a[g][3],f<k&&(k=f),f>e&&(e=f);c=
{min:k,max:e}}else c=!1;g=c;c=this.zoneStarts=[];k=[];e=g?g.min:K(a);f=g?g.max:D(a);let p=0;g=1;var l=this.linkedParent;!this.options.compareToMain&&l.dataModify&&(e=l.dataModify.modifyValue(e),f=l.dataModify.modifyValue(f));if(!E(e)||!E(f))return this.points.length&&(this.setData([]),this.zoneStarts=[],this.zoneLinesSVG&&(this.zoneLinesSVG=this.zoneLinesSVG.destroy())),[];l=this.rangeStep=z(f-e)/q;for(c.push(e);p<q-1;p++)c.push(z(c[p]+l));c.push(f);for(q=c.length;g<q;g++)k.push({index:g-1,x:d[0],
start:c[g-1],end:c[g]});return this.volumePerZone(b,k,m,d,a)}volumePerZone(b,d,a,q,m){const c=this,k=a.processedXData,e=a.processedYData,g=d.length-1,f=m.length;a=e.length;let p,l,n,h,r;v(f-a)&&(q[0]!==k[0]&&e.unshift(0),q[f-1]!==k[a-1]&&e.push(0));c.volumeDataArray=[];d.forEach(function(a){a.wholeVolumeData=0;a.positiveVolumeData=0;for(r=a.negativeVolumeData=0;r<f;r++){n=l=!1;h=b?m[r][3]:m[r];p=r?b?m[r-1][3]:m[r-1]:h;const d=c.linkedParent;!c.options.compareToMain&&d.dataModify&&(h=d.dataModify.modifyValue(h),
p=d.dataModify.modifyValue(p));h<=a.start&&0===a.index&&(l=!0);h>=a.end&&a.index===g&&(n=!0);(h>a.start||l)&&(h<a.end||n)&&(a.wholeVolumeData+=e[r],p>h?a.negativeVolumeData+=e[r]:a.positiveVolumeData+=e[r])}c.volumeDataArray.push(a.wholeVolumeData)});return d}drawZones(b,d,a,h){const c=b.renderer,n=b.plotWidth,k=b.plotTop;let e=this.zoneLinesSVG,g=[],f;a.forEach(function(a){f=d.toPixels(a)-k;g=g.concat(b.renderer.crispLine([["M",0,f],["L",n,f]],h.lineWidth))});e?e.animate({d:g}):e=this.zoneLinesSVG=
c.path(g).attr({"stroke-width":h.lineWidth,stroke:h.color,dashstyle:h.dashStyle,zIndex:this.group.zIndex+.1}).add(this.group)}}x.defaultOptions=M(C.defaultOptions,{params:{index:void 0,period:void 0,ranges:12,volumeSeriesID:"volume"},zoneLines:{enabled:!0,styles:{color:"#0A9AC9",dashStyle:"LongDash",lineWidth:1}},volumeDivision:{enabled:!0,styles:{positiveColor:"rgba(144, 237, 125, 0.8)",negativeColor:"rgba(244, 91, 91, 0.8)"}},animationLimit:1E3,enableMouseTracking:!1,pointPadding:0,zIndex:-1,crisp:!0,
dataGrouping:{enabled:!1},dataLabels:{allowOverlap:!0,enabled:!0,format:"P: {point.volumePos:.2f} | N: {point.volumeNeg:.2f}",padding:0,style:{fontSize:"0.5em"},verticalAlign:"top"}});F(x.prototype,{nameBase:"Volume by Price",nameComponents:["ranges"],calculateOn:{chart:"render",xAxis:"afterSetExtremes"},pointClass:b,markerAttribs:n,drawGraph:n,getColumnMetrics:w.getColumnMetrics,crispCol:w.crispCol});u.registerSeriesType("vbp",x);"";return x});h(b,"masters/indicators/volume-by-price.src.js",[],function(){})});
//# sourceMappingURL=volume-by-price.js.map