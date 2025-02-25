!/**
 * Highcharts JS v12.1.2-modified (2025-02-25)
 * @module highcharts/modules/bullet
 * @requires highcharts
 *
 * Bullet graph series type for Highcharts
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.Color,t._Highcharts.Series,t._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/bullet",["highcharts/highcharts"],function(t){return e(t,t.Color,t.Series,t.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/bullet"]=e(t._Highcharts,t._Highcharts.Color,t._Highcharts.Series,t._Highcharts.SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.Color,t.Highcharts.Series,t.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(t,e,o,r)=>(()=>{"use strict";var s={620:t=>{t.exports=e},820:t=>{t.exports=o},512:t=>{t.exports=r},944:e=>{e.exports=t}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={exports:{}};return s[t](o,o.exports,a),o.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var n={};a.d(n,{default:()=>j});var l=a(944),h=a.n(l),p=a(620),d=a.n(p),c=a(820),g=a.n(c),u=a(512),y=a.n(u);let{animObject:f}=h(),{parse:m}=d(),{noop:x}=h(),{clamp:b,crisp:v,defined:M,extend:C,fireEvent:k,isArray:w,isNumber:T,merge:A,pick:P,objectEach:S}=h();class O extends g(){animate(t){let e,o;let r=this,s=this.yAxis,i=s.pos,a=s.reversed,n=r.options,{clipOffset:l,inverted:h}=this.chart,p={},d=h?"translateX":"translateY";t&&l?(p.scaleY=.001,o=b(s.toPixels(n.threshold||0),i,i+s.len),h?(o+=a?-Math.floor(l[0]):Math.ceil(l[2]),p.translateX=o-s.len):(o+=a?Math.ceil(l[0]):-Math.floor(l[2]),p.translateY=o),r.clipBox&&r.setClip(),r.group.attr(p)):(e=Number(r.group.attr(d)),r.group.animate({scaleY:1},C(f(r.options.animation),{step:function(t,o){r.group&&(p[d]=e+o.pos*(i-e),r.group.attr(p))}})))}init(t,e){super.init.apply(this,arguments);let o=this;(t=o.chart).hasRendered&&t.series.forEach(function(t){t.type===o.type&&(t.isDirty=!0)})}getColumnMetrics(){let t=this,e=t.options,o=t.xAxis,r=t.yAxis,s=o.options.reversedStacks,i=o.reversed&&!s||!o.reversed&&s,a={},n,l=0;!1===e.grouping?l=1:t.chart.series.forEach(function(e){let o;let s=e.yAxis,i=e.options;e.type===t.type&&e.reserveSpace()&&r.len===s.len&&r.pos===s.pos&&(i.stacking&&"group"!==i.stacking?(void 0===a[n=e.stackKey]&&(a[n]=l++),o=a[n]):!1!==i.grouping&&(o=l++),e.columnIndex=o)});let h=Math.min(Math.abs(o.transA)*(!o.brokenAxis?.hasBreaks&&o.ordinal?.slope||e.pointRange||o.closestPointRange||o.tickInterval||1),o.len),p=h*e.groupPadding,d=(h-2*p)/(l||1),c=Math.min(e.maxPointWidth||o.len,P(e.pointWidth,d*(1-2*e.pointPadding))),g=(t.columnIndex||0)+(i?1:0);return t.columnMetrics={width:c,offset:(d-c)/2+(p+g*d-h/2)*(i?-1:1),paddedWidth:d,columnCount:l},t.columnMetrics}crispCol(t,e,o,r){let s=this.borderWidth,i=this.chart.inverted;return r=v(e+r,s,i)-(e=v(e,s,i)),this.options.crisp&&(o=v(t+o,s)-(t=v(t,s))),{x:t,y:e,width:o,height:r}}adjustForMissingColumns(t,e,o,r){if(!o.isNull&&r.columnCount>1){let s=this.xAxis.series.filter(t=>t.visible).map(t=>t.index),i=0,a=0;S(this.xAxis.stacking?.stacks,t=>{let e="number"==typeof o.x?t[o.x.toString()]?.points:void 0,r=e?.[this.index],n={};if(e&&w(r)){let t=this.index,o=Object.keys(e).filter(t=>!t.match(",")&&e[t]&&e[t].length>1).map(parseFloat).filter(t=>-1!==s.indexOf(t)).filter(e=>{let o=this.chart.series[e].options,r=o.stacking&&o.stack;if(M(r)){if(T(n[r]))return t===e&&(t=n[r]),!1;n[r]=e}return!0}).sort((t,e)=>e-t);i=o.indexOf(t),a=o.length}}),i=this.xAxis.reversed?a-1-i:i;let n=(a-1)*r.paddedWidth+e;t=(o.plotX||0)+n/2-e-i*r.paddedWidth}return t}translate(){let t=this,e=t.chart,o=t.options,r=t.dense=t.closestPointRange*t.xAxis.transA<2,s=t.borderWidth=P(o.borderWidth,r?0:1),i=t.xAxis,a=t.yAxis,n=o.threshold,l=P(o.minPointLength,5),h=t.getColumnMetrics(),p=h.width,d=t.pointXOffset=h.offset,c=t.dataMin,u=t.dataMax,y=t.translatedThreshold=a.getThreshold(n),f=t.barW=Math.max(p,1+2*s);o.pointPadding&&o.crisp&&(f=Math.ceil(f)),g().prototype.translate.apply(t),t.points.forEach(function(r){let s=P(r.yBottom,y),g=999+Math.abs(s),m=r.plotX||0,x=b(r.plotY,-g,a.len+g),v,C=Math.min(x,s),k=Math.max(x,s)-C,w=p,A=m+d,S=f;l&&Math.abs(k)<l&&(k=l,v=!a.reversed&&!r.negative||a.reversed&&r.negative,T(n)&&T(u)&&r.y===n&&u<=n&&(a.min||0)<n&&(c!==u||(a.max||0)<=n)&&(v=!v,r.negative=!r.negative),C=Math.abs(C-y)>l?s-l:y-(v?l:0)),M(r.options.pointWidth)&&(A-=Math.round(((w=S=Math.ceil(r.options.pointWidth))-p)/2)),o.centerInCategory&&(A=t.adjustForMissingColumns(A,w,r,h)),r.barX=A,r.pointWidth=w,r.tooltipPos=e.inverted?[b(a.len+a.pos-e.plotLeft-x,a.pos-e.plotLeft,a.len+a.pos-e.plotLeft),i.len+i.pos-e.plotTop-A-S/2,k]:[i.left-e.plotLeft+A+S/2,b(x+a.pos-e.plotTop,a.pos-e.plotTop,a.len+a.pos-e.plotTop),k],r.shapeType=t.pointClass.prototype.shapeType||"roundedRect",r.shapeArgs=t.crispCol(A,r.isNull?y:C,S,r.isNull?0:k)}),k(this,"afterColumnTranslate")}drawGraph(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")}pointAttribs(t,e){let o=this.options,r=this.pointAttrToOptions||{},s=r.stroke||"borderColor",i=r["stroke-width"]||"borderWidth",a,n,l,h=t&&t.color||this.color,p=t&&t[s]||o[s]||h,d=t&&t.options.dashStyle||o.dashStyle,c=t&&t[i]||o[i]||this[i]||0,g=P(t&&t.opacity,o.opacity,1);t&&this.zones.length&&(n=t.getZone(),h=t.options.color||n&&(n.color||t.nonZonedColor)||this.color,n&&(p=n.borderColor||p,d=n.dashStyle||d,c=n.borderWidth||c)),e&&t&&(l=(a=A(o.states[e],t.options.states&&t.options.states[e]||{})).brightness,h=a.color||void 0!==l&&m(h).brighten(a.brightness).get()||h,p=a[s]||p,c=a[i]||c,d=a.dashStyle||d,g=P(a.opacity,g));let u={fill:h,stroke:p,"stroke-width":c,opacity:g};return d&&(u.dashstyle=d),u}drawPoints(t=this.points){let e;let o=this,r=this.chart,s=o.options,i=r.renderer,a=s.animationLimit||250;t.forEach(function(t){let n=t.plotY,l=t.graphic,h=!!l,p=l&&r.pointCount<a?"animate":"attr";T(n)&&null!==t.y?(e=t.shapeArgs,l&&t.hasNewShapeType()&&(l=l.destroy()),o.enabledDataSorting&&(t.startXPos=o.xAxis.reversed?-(e&&e.width||0):o.xAxis.width),!l&&(t.graphic=l=i[t.shapeType](e).add(t.group||o.group),l&&o.enabledDataSorting&&r.hasRendered&&r.pointCount<a&&(l.attr({x:t.startXPos}),h=!0,p="animate")),l&&h&&l[p](A(e)),r.styledMode||l[p](o.pointAttribs(t,t.selected&&"select")).shadow(!1!==t.allowShadow&&s.shadow),l&&(l.addClass(t.getClassName(),!0),l.attr({visibility:t.visible?"inherit":"hidden"}))):l&&(t.graphic=l.destroy())})}drawTracker(t=this.points){let e;let o=this,r=o.chart,s=r.pointer,i=function(t){s?.normalize(t);let e=s?.getPointFromEvent(t),i=!r.scrollablePlotArea||r.isInsidePlot(t.chartX-r.plotLeft,t.chartY-r.plotTop,{visiblePlotOnly:!0});s&&e&&o.options.enableMouseTracking&&i&&(s.isDirectTouch=!0,e.onMouseOver(t))};t.forEach(function(t){e=w(t.dataLabels)?t.dataLabels:t.dataLabel?[t.dataLabel]:[],t.graphic&&(t.graphic.element.point=t),e.forEach(function(e){(e.div||e.element).point=t})}),o._hasTracking||(o.trackerGroups.forEach(function(t){o[t]&&(o[t].addClass("highcharts-tracker").on("mouseover",i).on("mouseout",function(t){s?.onTrackerMouseOut(t)}).on("touchstart",i),!r.styledMode&&o.options.cursor&&o[t].css({cursor:o.options.cursor}))}),o._hasTracking=!0),k(this,"afterDrawTracker")}remove(){let t=this,e=t.chart;e.hasRendered&&e.series.forEach(function(e){e.type===t.type&&(e.isDirty=!0)}),g().prototype.remove.apply(t,arguments)}}O.defaultOptions=A(g().defaultOptions,{borderRadius:3,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"}),C(O.prototype,{directTouch:!0,getSymbol:x,negStacks:!0,trackerGroups:["group","dataLabelsGroup"]}),y().registerSeriesType("column",O);let W=O;class L extends W.prototype.pointClass{destroy(){this.targetGraphic&&(this.targetGraphic=this.targetGraphic.destroy()),super.destroy.apply(this,arguments)}}let{extend:R,isNumber:H,merge:E,pick:_,relativeLength:G}=h();class X extends W{drawPoints(){let t=this.chart,e=this.options,o=e.animationLimit||250;for(let r of(super.drawPoints.apply(this,arguments),this.points)){let s=r.options,i=r.target,a=r.y,n,l=r.targetGraphic,h,p,d,c;if(H(i)&&null!==i){p=(d=E(e.targetOptions,s.targetOptions)).height;let g=r.shapeArgs;r.dlBox&&g&&!H(g.width)&&(g=r.dlBox),h=G(d.width,g.width),c=this.yAxis.translate(i,!1,!0,!1,!0)-d.height/2-.5,n=this.crispCol.apply({chart:t,borderWidth:d.borderWidth,options:{crisp:e.crisp}},[g.x+g.width/2-h/2,c,h,p]),l?(l[t.pointCount<o?"animate":"attr"](n),H(a)&&null!==a?l.element.point=r:l.element.point=void 0):r.targetGraphic=l=t.renderer.rect().attr(n).add(this.group),t.styledMode||l.attr({fill:_(d.color,s.color,this.zones.length&&(r.getZone.call({series:this,x:r.x,y:i,options:{}}).color||this.color)||void 0,r.color,this.color),stroke:_(d.borderColor,r.borderColor,this.options.borderColor),"stroke-width":d.borderWidth,r:d.borderRadius}),H(a)&&null!==a&&(l.element.point=r),l.addClass(r.getClassName()+" highcharts-bullet-target",!0)}else l&&(r.targetGraphic=l.destroy())}}getExtremes(t){let e=super.getExtremes.call(this,t),o=this.targetData;if(o&&o.length){let t=super.getExtremes.call(this,o);H(t.dataMin)&&(e.dataMin=Math.min(_(e.dataMin,1/0),t.dataMin)),H(t.dataMax)&&(e.dataMax=Math.max(_(e.dataMax,-1/0),t.dataMax))}return e}}X.defaultOptions=E(W.defaultOptions,{targetOptions:{width:"140%",height:3,borderWidth:0,borderRadius:0},tooltip:{pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b>. Target: <b>{point.target}</b><br/>'}}),R(X.prototype,{parallelArrays:["x","y","target"],pointArrayMap:["y","target"]}),X.prototype.pointClass=L,y().registerSeriesType("bullet",X);let j=h();return n.default})());