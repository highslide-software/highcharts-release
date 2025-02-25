!/**
 * Highstock JS v12.1.2-modified (2025-02-25)
 * @module highcharts/indicators/macd
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(s,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(s._Highcharts,s._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/macd",["highcharts/highcharts"],function(s){return e(s,s.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/macd"]=e(s._Highcharts,s._Highcharts.SeriesRegistry):s.Highcharts=e(s.Highcharts,s.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(s,e)=>(()=>{"use strict";var o={512:s=>{s.exports=e},944:e=>{e.exports=s}},t={};function i(s){var e=t[s];if(void 0!==e)return e.exports;var n=t[s]={exports:{}};return o[s](n,n.exports,i),n.exports}i.n=s=>{var e=s&&s.__esModule?()=>s.default:()=>s;return i.d(e,{a:e}),e},i.d=(s,e)=>{for(var o in e)i.o(e,o)&&!i.o(s,o)&&Object.defineProperty(s,o,{enumerable:!0,get:e[o]})},i.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e);var n={};i.d(n,{default:()=>x});var r=i(944),a=i.n(r),l=i(512),p=i.n(l);let{noop:h}=a(),{column:d,sma:c}=p().seriesTypes,{extend:g,correctFloat:y,defined:u,merge:m}=a();class f extends c{init(){p().seriesTypes.sma.prototype.init.apply(this,arguments);let s=this.color;this.options&&(u(this.colorIndex)&&(this.options.signalLine&&this.options.signalLine.styles&&!this.options.signalLine.styles.lineColor&&(this.options.colorIndex=this.colorIndex+1,this.getCyclic("color",void 0,this.chart.options.colors),this.options.signalLine.styles.lineColor=this.color),this.options.macdLine&&this.options.macdLine.styles&&!this.options.macdLine.styles.lineColor&&(this.options.colorIndex=this.colorIndex+1,this.getCyclic("color",void 0,this.chart.options.colors),this.options.macdLine.styles.lineColor=this.color)),this.macdZones={zones:this.options.macdLine.zones,startIndex:0},this.signalZones={zones:this.macdZones.zones.concat(this.options.signalLine.zones),startIndex:this.macdZones.zones.length}),this.color=s}toYData(s){return[s.y,s.signal,s.MACD]}translate(){let s=this,e=["plotSignal","plotMACD"];a().seriesTypes.column.prototype.translate.apply(s),s.points.forEach(function(o){[o.signal,o.MACD].forEach(function(t,i){null!==t&&(o[e[i]]=s.yAxis.toPixels(t,!0))})})}destroy(){this.graph=null,this.graphmacd=this.graphmacd&&this.graphmacd.destroy(),this.graphsignal=this.graphsignal&&this.graphsignal.destroy(),p().seriesTypes.sma.prototype.destroy.apply(this,arguments)}drawGraph(){let s=this,e=s.points,o=s.options,t=s.zones,i={options:{gapSize:o.gapSize}},n=[[],[]],r,a=e.length;for(;a--;)u((r=e[a]).plotMACD)&&n[0].push({plotX:r.plotX,plotY:r.plotMACD,isNull:!u(r.plotMACD)}),u(r.plotSignal)&&n[1].push({plotX:r.plotX,plotY:r.plotSignal,isNull:!u(r.plotMACD)});["macd","signal"].forEach((e,t)=>{s.points=n[t],s.options=m(o[`${e}Line`]?.styles||{},i),s.graph=s[`graph${e}`],s.zones=(s[`${e}Zones`].zones||[]).slice(s[`${e}Zones`].startIndex||0),p().seriesTypes.sma.prototype.drawGraph.call(s),s[`graph${e}`]=s.graph}),s.points=e,s.options=o,s.zones=t}applyZones(){let s=this.zones;this.zones=this.signalZones.zones,p().seriesTypes.sma.prototype.applyZones.call(this),this.graphmacd&&this.options.macdLine.zones.length&&this.graphmacd.hide(),this.zones=s}getValues(s,e){let o=e.longPeriod-e.shortPeriod,t=[],i=[],n=[],r,a,l,h=0,d=[];if(!(s.xData.length<e.longPeriod+e.signalPeriod)){for(l=0,r=p().seriesTypes.ema.prototype.getValues(s,{period:e.shortPeriod,index:e.index}),a=p().seriesTypes.ema.prototype.getValues(s,{period:e.longPeriod,index:e.index}),r=r.values,a=a.values;l<=r.length;l++)u(a[l])&&u(a[l][1])&&u(r[l+o])&&u(r[l+o][0])&&t.push([r[l+o][0],0,null,r[l+o][1]-a[l][1]]);for(l=0;l<t.length;l++)i.push(t[l][0]),n.push([0,null,t[l][3]]);for(l=0,d=(d=p().seriesTypes.ema.prototype.getValues({xData:i,yData:n},{period:e.signalPeriod,index:2})).values;l<t.length;l++)t[l][0]>=d[0][0]&&(t[l][2]=d[h][1],n[l]=[0,d[h][1],t[l][3]],null===t[l][3]?(t[l][1]=0,n[l][0]=0):(t[l][1]=y(t[l][3]-d[h][1]),n[l][0]=y(t[l][3]-d[h][1])),h++);return{values:t,xData:i,yData:n}}}}f.defaultOptions=m(c.defaultOptions,{params:{shortPeriod:12,longPeriod:26,signalPeriod:9,period:26},signalLine:{zones:[],styles:{lineWidth:1,lineColor:void 0}},macdLine:{zones:[],styles:{lineWidth:1,lineColor:void 0}},threshold:0,groupPadding:.1,pointPadding:.1,crisp:!1,states:{hover:{halo:{size:0}}},tooltip:{pointFormat:'<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Value: {point.MACD}<br/>Signal: {point.signal}<br/>Histogram: {point.y}<br/>'},dataGrouping:{approximation:"averages"},minPointLength:0}),g(f.prototype,{nameComponents:["longPeriod","shortPeriod","signalPeriod"],pointArrayMap:["y","signal","MACD"],parallelArrays:["x","y","signal","MACD"],pointValKey:"y",markerAttribs:h,getColumnMetrics:a().seriesTypes.column.prototype.getColumnMetrics,crispCol:a().seriesTypes.column.prototype.crispCol,drawPoints:a().seriesTypes.column.prototype.drawPoints}),p().registerSeriesType("macd",f);let x=a();return n.default})());