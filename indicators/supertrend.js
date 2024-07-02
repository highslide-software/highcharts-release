!/**
 * Highstock JS v11.4.4 (2024-07-02)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(o){"object"==typeof module&&module.exports?(o.default=o,module.exports=o):"function"==typeof define&&define.amd?define("highcharts/indicators/supertrend",["highcharts","modules/stock"],function(e){return o(e),o.Highcharts=e,o}):o("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(o){"use strict";var e=o?o._modules:{};function t(e,t,r,l){e.hasOwnProperty(t)||(e[t]=l.apply(null,r),"function"==typeof CustomEvent&&o.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}t(e,"Stock/Indicators/Supertrend/SupertrendIndicator.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(o,e){let{atr:t,sma:r}=o.seriesTypes,{addEvent:l,correctFloat:i,isArray:n,extend:s,merge:a,objectEach:p}=e;function d(o,e,t){return{index:e,close:o.yData[e][t],x:o.xData[e]}}class c extends r{init(){let o=this;super.init.apply(o,arguments);let e=l(this.chart.constructor,"afterLinkSeries",()=>{if(o.options){let e=o.options,t=o.linkedParent.options;e.cropThreshold=t.cropThreshold-(e.params.period-1)}e()},{order:1})}drawGraph(){let o=this,e=o.options,t=o.linkedParent,l=t?t.points:[],i=o.points,n=o.graph,s=l.length-i.length,c=s>0?s:0,h={options:{gapSize:e.gapSize}},u={top:[],bottom:[],intersect:[]},y={top:{styles:{lineWidth:e.lineWidth,lineColor:e.fallingTrendColor||e.color,dashStyle:e.dashStyle}},bottom:{styles:{lineWidth:e.lineWidth,lineColor:e.risingTrendColor||e.color,dashStyle:e.dashStyle}},intersect:e.changeTrendLine},g,f,x,m,C,T,S,D,b,v=i.length;for(;v--;)g=i[v],f=i[v-1],x=l[v-1+c],m=l[v-2+c],C=l[v+c],T=l[v+c+1],S=g.options.color,D={x:g.x,plotX:g.plotX,plotY:g.plotY,isNull:!1},!m&&x&&t.yData[x.index-1]&&(m=d(t,x.index-1,3)),!T&&C&&t.yData[C.index+1]&&(T=d(t,C.index+1,3)),!x&&m&&t.yData[m.index+1]?x=d(t,m.index+1,3):!x&&C&&t.yData[C.index-1]&&(x=d(t,C.index-1,3)),g&&x&&C&&m&&g.x!==x.x&&(g.x===C.x?(m=x,x=C):g.x===m.x?(x=m,m={close:t.yData[x.index-1][3],x:t.xData[x.index-1]}):T&&g.x===T.x&&(x=T,m=C)),f&&m&&x?(b={x:f.x,plotX:f.plotX,plotY:f.plotY,isNull:!1},g.y>=x.close&&f.y>=m.close?(g.color=S||e.fallingTrendColor||e.color,u.top.push(D)):g.y<x.close&&f.y<m.close?(g.color=S||e.risingTrendColor||e.color,u.bottom.push(D)):(u.intersect.push(D),u.intersect.push(b),u.intersect.push(a(b,{isNull:!0})),g.y>=x.close&&f.y<m.close?(g.color=S||e.fallingTrendColor||e.color,f.color=S||e.risingTrendColor||e.color,u.top.push(D),u.top.push(a(b,{isNull:!0}))):g.y<x.close&&f.y>=m.close&&(g.color=S||e.risingTrendColor||e.color,f.color=S||e.fallingTrendColor||e.color,u.bottom.push(D),u.bottom.push(a(b,{isNull:!0}))))):x&&(g.y>=x.close?(g.color=S||e.fallingTrendColor||e.color,u.top.push(D)):(g.color=S||e.risingTrendColor||e.color,u.bottom.push(D)));p(u,function(e,t){o.points=e,o.options=a(y[t].styles,h),o.graph=o["graph"+t+"Line"],r.prototype.drawGraph.call(o),o["graph"+t+"Line"]=o.graph}),o.points=i,o.options=e,o.graph=n}getValues(o,e){let r=e.period,l=e.multiplier,s=o.xData,a=o.yData,p=[],d=[],c=[],h=0===r?0:r-1,u=[],y=[],g=[],f,x,m,C,T,S,D,b,v;if(!(s.length<=r)&&n(a[0])&&4===a[0].length&&!(r<0)){for(v=0,g=t.prototype.getValues.call(this,o,{period:r}).yData;v<g.length;v++)b=a[h+v],D=a[h+v-1]||[],C=u[v-1],T=y[v-1],S=c[v-1],0===v&&(C=T=S=0),f=i((b[1]+b[2])/2+l*g[v]),x=i((b[1]+b[2])/2-l*g[v]),f<C||D[3]>C?u[v]=f:u[v]=C,x>T||D[3]<T?y[v]=x:y[v]=T,S===C&&b[3]<u[v]||S===T&&b[3]<y[v]?m=u[v]:(S===C&&b[3]>u[v]||S===T&&b[3]>y[v])&&(m=y[v]),p.push([s[h+v],m]),d.push(s[h+v]),c.push(m);return{values:p,xData:d,yData:c}}}}return c.defaultOptions=a(r.defaultOptions,{params:{index:void 0,multiplier:3,period:10},risingTrendColor:"#06b535",fallingTrendColor:"#f21313",changeTrendLine:{styles:{lineWidth:1,lineColor:"#333333",dashStyle:"LongDash"}}}),s(c.prototype,{nameBase:"Supertrend",nameComponents:["multiplier","period"]}),o.registerSeriesType("supertrend",c),c}),t(e,"masters/indicators/supertrend.src.js",[e["Core/Globals.js"]],function(o){return o})});