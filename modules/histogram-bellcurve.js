!/**
 * Highcharts JS v12.1.2-modified (2025-02-25)
 * @module highcharts/modules/histogram-bellcurve
 * @requires highcharts
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Sebastian Domas
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.Series,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/histogram-bellcurve",["highcharts/highcharts"],function(e){return t(e,e.Series,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/histogram-bellcurve"]=t(e._Highcharts,e._Highcharts.Series,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.Series,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t,s)=>(()=>{"use strict";var i,r={820:e=>{e.exports=t},512:e=>{e.exports=s},944:t=>{t.exports=e}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var s=a[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};n.d(o,{default:()=>q});var h=n(944),d=n.n(h),l=n(820),u=n.n(l);let{noop:p}=d(),{addEvent:c,defined:v}=d();!function(e){function t(){u().prototype.init.apply(this,arguments),this.initialised=!1,this.baseSeries=null,this.eventRemovers=[],this.addEvents()}function s(){let e=this.chart,t=this.options.baseSeries,s=v(t)&&(e.series[t]||e.get(t));this.baseSeries=s||null}function i(){this.eventRemovers.push(c(this.chart,"afterLinkSeries",()=>{this.setBaseSeries(),this.baseSeries&&!this.initialised&&(this.setDerivedData(),this.addBaseSeriesEvents(),this.initialised=!0)}))}function r(){this.eventRemovers.push(c(this.baseSeries,"updatedData",()=>{this.setDerivedData()}),c(this.baseSeries,"destroy",()=>{this.baseSeries=null,this.initialised=!1}))}function a(){this.eventRemovers.forEach(e=>{e()}),u().prototype.destroy.apply(this,arguments)}e.hasDerivedData=!0,e.setDerivedData=p,e.compose=function(e){let n=e.prototype;return n.addBaseSeriesEvents=r,n.addEvents=i,n.destroy=a,n.init=t,n.setBaseSeries=s,e},e.init=t,e.setBaseSeries=s,e.addEvents=i,e.addBaseSeriesEvents=r,e.destroy=a}(i||(i={}));let f=i;var g=n(512),m=n.n(g);let{column:b}=m().seriesTypes,{arrayMax:y,arrayMin:D,correctFloat:S,extend:x,isNumber:M,merge:H}=d(),O={"square-root":function(e){return Math.ceil(Math.sqrt(e.options.data.length))},sturges:function(e){return Math.ceil(Math.log(e.options.data.length)*Math.LOG2E)},rice:function(e){return Math.ceil(2*Math.pow(e.options.data.length,1/3))}};class R extends b{binsNumber(){let e=this.options.binsNumber,t=O[e]||"function"==typeof e&&e;return Math.ceil(t&&t(this.baseSeries)||(M(e)?e:O["square-root"](this.baseSeries)))}derivedData(e,t,s){var i;let r;let a=S(y(e)),n=S(D(e)),o=[],h={},d=[];for(s=this.binWidth=S(M(s)?s||1:(a-n)/t),this.options.pointRange=Math.max(s,0),r=n;r<a&&(this.userOptions.binWidth||S(a-r)>=s||0>=S(S(n+o.length*s)-r));r=S(r+s))o.push(r),h[r]=0;0!==h[n]&&(o.push(n),h[n]=0);let l=(i=o.map(e=>parseFloat(e)),function(e){let t=1;for(;i[t]<=e;)t++;return i[--t]});for(let t of e)h[S(l(t))]++;for(let e of Object.keys(h))d.push({x:Number(e),y:h[e],x2:S(Number(e)+s)});return d.sort((e,t)=>e.x-t.x),d[d.length-1].x2=a,d}setDerivedData(){let e=this.baseSeries?.getColumn("y");if(!e?.length){this.setData([]);return}let t=this.derivedData(e,this.binsNumber(),this.options.binWidth);this.setData(t,!1)}}R.defaultOptions=H(b.defaultOptions,{binsNumber:"square-root",binWidth:void 0,pointPadding:0,groupPadding:0,grouping:!1,pointPlacement:"between",tooltip:{headerFormat:"",pointFormat:'<span style="font-size: 0.8em">{point.x} - {point.x2}</span><br/><span style="color:{point.color}">●</span> {series.name} <b>{point.y}</b><br/>'}}),x(R.prototype,{hasDerivedData:f.hasDerivedData}),f.compose(R),m().registerSeriesType("histogram",R);let{areaspline:E}=m().seriesTypes,{correctFloat:_,isNumber:w,merge:N}=d();class j extends E{static mean(e){let t=e.length,s=e.reduce(function(e,t){return e+t},0);return t>0&&s/t}static standardDeviation(e,t){let s=e.length;t=w(t)?t:j.mean(e);let i=e.reduce((e,s)=>{let i=s-t;return e+i*i},0);return s>1&&Math.sqrt(i/(s-1))}static normalDensity(e,t,s){let i=e-t;return Math.exp(-(i*i)/(2*s*s))/(s*Math.sqrt(2*Math.PI))}derivedData(e,t){let s=this.options,i=s.intervals,r=s.pointsInInterval,a=i*r*2+1,n=t/r,o=[],h=e-i*t;for(let s=0;s<a;s++)o.push([h,j.normalDensity(h,e,t)]),h+=n;return o}setDerivedData(){this.baseSeries?.getColumn("y").length&&(this.setMean(),this.setStandardDeviation(),this.setData(this.derivedData(this.mean||0,this.standardDeviation||0),!1,void 0,!1))}setMean(){this.mean=_(j.mean(this.baseSeries?.getColumn("y")||[]))}setStandardDeviation(){this.standardDeviation=_(j.standardDeviation(this.baseSeries?.getColumn("y")||[],this.mean))}}j.defaultOptions=N(E.defaultOptions,{intervals:3,pointsInInterval:3,marker:{enabled:!1}}),f.compose(j),m().registerSeriesType("bellcurve",j);let q=d();return o.default})());