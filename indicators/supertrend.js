/*
 Highstock JS v10.3.0 (2022-10-31)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/supertrend",["highcharts","highcharts/modules/stock"],function(n){a(n);a.Highcharts=n;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function n(a,g,n,t){a.hasOwnProperty(g)||(a[g]=t.apply(null,n),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:a[g]}})))}
a=a?a._modules:{};n(a,"Stock/Indicators/Supertrend/SupertrendIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Core/Chart/StockChart.js"]],function(a,g,n){function t(a,e,c){return{index:e,close:a.yData[e][c],x:a.xData[e]}}var C=this&&this.__extends||function(){var a=function(e,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,c){b.__proto__=c}||function(b,c){for(var a in c)c.hasOwnProperty(a)&&(b[a]=c[a])};return a(e,c)};return function(e,c){function b(){this.constructor=
e}a(e,c);e.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)}}(),y=a.seriesTypes,D=y.atr,z=y.sma,E=g.addEvent,B=g.correctFloat,F=g.isArray;y=g.extend;var x=g.merge,G=g.objectEach;g=function(a){function e(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.linkedParent=void 0;c.options=void 0;c.points=void 0;return c}C(e,a);e.prototype.init=function(){var c;z.prototype.init.apply(this,arguments);var b=this,a=E(n,"afterLinkSeries",function(){if(b.options){var A=b.options;
c=b.linkedParent.options;A.cropThreshold=c.cropThreshold-(A.params.period-1)}a()},{order:1})};e.prototype.drawGraph=function(){var c=this,b=c.options,a=c.linkedParent,e=a?a.points:[],g=c.points,n=c.graph,u=g.length,v=e.length-u;v=0<v?v:0;for(var H={options:{gapSize:b.gapSize}},m={top:[],bottom:[],intersect:[]},w={top:{styles:{lineWidth:b.lineWidth,lineColor:b.fallingTrendColor||b.color,dashStyle:b.dashStyle}},bottom:{styles:{lineWidth:b.lineWidth,lineColor:b.risingTrendColor||b.color,dashStyle:b.dashStyle}},
intersect:b.changeTrendLine},d,l,f,h,k,p,q,r;u--;)d=g[u],l=g[u-1],f=e[u-1+v],h=e[u-2+v],k=e[u+v],p=e[u+v+1],q=d.options.color,r={x:d.x,plotX:d.plotX,plotY:d.plotY,isNull:!1},!h&&f&&a.yData[f.index-1]&&(h=t(a,f.index-1,3)),!p&&k&&a.yData[k.index+1]&&(p=t(a,k.index+1,3)),!f&&h&&a.yData[h.index+1]?f=t(a,h.index+1,3):!f&&k&&a.yData[k.index-1]&&(f=t(a,k.index-1,3)),d&&f&&k&&h&&d.x!==f.x&&(d.x===k.x?(h=f,f=k):d.x===h.x?(f=h,h={close:a.yData[f.index-1][3],x:a.xData[f.index-1]}):p&&d.x===p.x&&(f=p,h=k)),
l&&h&&f?(k={x:l.x,plotX:l.plotX,plotY:l.plotY,isNull:!1},d.y>=f.close&&l.y>=h.close?(d.color=q||b.fallingTrendColor||b.color,m.top.push(r)):d.y<f.close&&l.y<h.close?(d.color=q||b.risingTrendColor||b.color,m.bottom.push(r)):(m.intersect.push(r),m.intersect.push(k),m.intersect.push(x(k,{isNull:!0})),d.y>=f.close&&l.y<h.close?(d.color=q||b.fallingTrendColor||b.color,l.color=q||b.risingTrendColor||b.color,m.top.push(r),m.top.push(x(k,{isNull:!0}))):d.y<f.close&&l.y>=h.close&&(d.color=q||b.risingTrendColor||
b.color,l.color=q||b.fallingTrendColor||b.color,m.bottom.push(r),m.bottom.push(x(k,{isNull:!0}))))):f&&(d.y>=f.close?(d.color=q||b.fallingTrendColor||b.color,m.top.push(r)):(d.color=q||b.risingTrendColor||b.color,m.bottom.push(r)));G(m,function(a,b){c.points=a;c.options=x(w[b].styles,H);c.graph=c["graph"+b+"Line"];z.prototype.drawGraph.call(c);c["graph"+b+"Line"]=c.graph});c.points=g;c.options=b;c.graph=n};e.prototype.getValues=function(a,b){var c=b.period;b=b.multiplier;var e=a.xData,g=a.yData,n=
[],u=[],v=[],t=0===c?0:c-1,m=[],w=[],d;if(!(e.length<=c||!F(g[0])||4!==g[0].length||0>c)){a=D.prototype.getValues.call(this,a,{period:c}).yData;for(d=0;d<a.length;d++){var l=g[t+d];var f=g[t+d-1]||[];var h=m[d-1];var k=w[d-1];var p=v[d-1];0===d&&(h=k=p=0);c=B((l[1]+l[2])/2+b*a[d]);var q=B((l[1]+l[2])/2-b*a[d]);m[d]=c<h||f[3]>h?c:h;w[d]=q>k||f[3]<k?q:k;if(p===h&&l[3]<m[d]||p===k&&l[3]<w[d])var r=m[d];else if(p===h&&l[3]>m[d]||p===k&&l[3]>w[d])r=w[d];n.push([e[t+d],r]);u.push(e[t+d]);v.push(r)}return{values:n,
xData:u,yData:v}}};e.defaultOptions=x(z.defaultOptions,{params:{index:void 0,multiplier:3,period:10},risingTrendColor:"#06b535",fallingTrendColor:"#f21313",changeTrendLine:{styles:{lineWidth:1,lineColor:"#333333",dashStyle:"LongDash"}}});return e}(z);y(g.prototype,{nameBase:"Supertrend",nameComponents:["multiplier","period"]});a.registerSeriesType("supertrend",g);"";return g});n(a,"masters/indicators/supertrend.src.js",[],function(){})});
//# sourceMappingURL=supertrend.js.map