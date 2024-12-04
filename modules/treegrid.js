!/**
 * Highcharts Gantt JS v12.0.2 (2024-12-04)
 * @module highcharts/modules/treegrid
 * @requires highcharts
 *
 * Tree Grid
 *
 * (c) 2016-2024 Jon Arild Nygard
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.StackItem,t._Highcharts.Axis,t._Highcharts.Color):"function"==typeof define&&define.amd?define("highcharts/modules/treegrid",["highcharts/highcharts"],function(t){return e(t,t.StackItem,t.Axis,t.Color)}):"object"==typeof exports?exports["highcharts/modules/treegrid"]=e(t._Highcharts,t._Highcharts.StackItem,t._Highcharts.Axis,t._Highcharts.Color):t.Highcharts=e(t.Highcharts,t.Highcharts.StackItem,t.Highcharts.Axis,t.Highcharts.Color)}("undefined"==typeof window?this:window,(t,e,i,s)=>(()=>{"use strict";let o;var r,n,a={532:t=>{t.exports=i},620:t=>{t.exports=s},184:t=>{t.exports=e},944:e=>{e.exports=t}},l={};function h(t){var e=l[t];if(void 0!==e)return e.exports;var i=l[t]={exports:{}};return a[t](i,i.exports,h),i.exports}h.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return h.d(e,{a:e}),e},h.d=(t,e)=>{for(var i in e)h.o(e,i)&&!h.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},h.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var d={};h.d(d,{default:()=>tV});var c=h(944),p=/*#__PURE__*/h.n(c),f=h(184),u=/*#__PURE__*/h.n(f);let{addEvent:g,find:m,fireEvent:k,isArray:x,isNumber:b,pick:y}=p();!function(t){function e(){void 0!==this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)}function i(){this.brokenAxis?.hasBreaks&&(this.options.ordinal=!1)}function s(){let t=this.brokenAxis;if(t?.hasBreaks){let e=this.tickPositions,i=this.tickPositions.info,s=[];for(let i=0;i<e.length;i++)t.isInAnyBreak(e[i])||s.push(e[i]);this.tickPositions=s,this.tickPositions.info=i}}function o(){this.brokenAxis||(this.brokenAxis=new h(this))}function r(){let{isDirty:t,options:{connectNulls:e},points:i,xAxis:s,yAxis:o}=this;if(t){let t=i.length;for(;t--;){let r=i[t],n=!(null===r.y&&!1===e)&&(s?.brokenAxis?.isInAnyBreak(r.x,!0)||o?.brokenAxis?.isInAnyBreak(r.y,!0));r.visible=!n&&!1!==r.options.visible}}}function n(){this.drawBreaks(this.xAxis,["x"]),this.drawBreaks(this.yAxis,y(this.pointArrayMap,["y"]))}function a(t,e){let i,s,o;let r=this,n=r.points;if(t?.brokenAxis?.hasBreaks){let a=t.brokenAxis;e.forEach(function(e){i=a?.breakArray||[],s=t.isXAxis?t.min:y(r.options.threshold,t.min);let l=t?.options?.breaks?.filter(function(t){let e=!0;for(let s=0;s<i.length;s++){let o=i[s];if(o.from===t.from&&o.to===t.to){e=!1;break}}return e});n.forEach(function(r){o=y(r["stack"+e.toUpperCase()],r[e]),i.forEach(function(e){if(b(s)&&b(o)){let i="";s<e.from&&o>e.to||s>e.from&&o<e.from?i="pointBreak":(s<e.from&&o>e.from&&o<e.to||s>e.from&&o>e.to&&o<e.from)&&(i="pointInBreak"),i&&k(t,i,{point:r,brk:e})}}),l?.forEach(function(e){k(t,"pointOutsideOfBreak",{point:r,brk:e})})})})}}function l(){let t=this.currentDataGrouping,e=t?.gapSize,i=this.points.slice(),s=this.yAxis,o=this.options.gapSize,r=i.length-1;if(o&&r>0){let t,n;for("value"!==this.options.gapUnit&&(o*=this.basePointRange),e&&e>o&&e>=this.basePointRange&&(o=e);r--;)if(n&&!1!==n.visible||(n=i[r+1]),t=i[r],!1!==n.visible&&!1!==t.visible){if(n.x-t.x>o){let e=(t.x+n.x)/2;i.splice(r+1,0,{isNull:!0,x:e}),s.stacking&&this.options.stacking&&((s.stacking.stacks[this.stackKey][e]=new(u())(s,s.options.stackLabels,!1,e,this.stack)).total=0)}n=t}}return this.getGraphPath(i)}t.compose=function(t,h){if(!t.keepProps.includes("brokenAxis")){t.keepProps.push("brokenAxis"),g(t,"init",o),g(t,"afterInit",e),g(t,"afterSetTickPositions",s),g(t,"afterSetOptions",i);let d=h.prototype;d.drawBreaks=a,d.gappedPath=l,g(h,"afterGeneratePoints",r),g(h,"afterRender",n)}return t};class h{static isInBreak(t,e){let i=t.repeat||1/0,s=t.from,o=t.to-t.from,r=e>=s?(e-s)%i:i-(s-e)%i;return t.inclusive?r<=o:r<o&&0!==r}static lin2Val(t){let e=this.brokenAxis,i=e&&e.breakArray;if(!i||!b(t))return t;let s=t,o,r;for(r=0;r<i.length&&!((o=i[r]).from>=s);r++)o.to<s?s+=o.len:h.isInBreak(o,s)&&(s+=o.len);return s}static val2Lin(t){let e=this.brokenAxis,i=e&&e.breakArray;if(!i||!b(t))return t;let s=t,o,r;for(r=0;r<i.length;r++)if((o=i[r]).to<=t)s-=o.len;else if(o.from>=t)break;else if(h.isInBreak(o,t)){s-=t-o.from;break}return s}constructor(t){this.hasBreaks=!1,this.axis=t}findBreakAt(t,e){return m(e,function(e){return e.from<t&&t<e.to})}isInAnyBreak(t,e){let i=this.axis,s=i.options.breaks||[],o=s.length,r,n,a;if(o&&b(t)){for(;o--;)h.isInBreak(s[o],t)&&(r=!0,n||(n=y(s[o].showPoints,!i.isXAxis)));a=r&&e?r&&!n:r}return a}setBreaks(t,e){let i=this,s=i.axis,o=s.chart.time,r=x(t)&&!!t.length&&!!Object.keys(t[0]).length;s.isDirty=i.hasBreaks!==r,i.hasBreaks=r,t?.forEach(t=>{t.from=o.parse(t.from)||0,t.to=o.parse(t.to)||0}),t!==s.options.breaks&&(s.options.breaks=s.userOptions.breaks=t),s.forceRedraw=!0,s.series.forEach(function(t){t.isDirty=!0}),r||s.val2lin!==h.val2Lin||(delete s.val2lin,delete s.lin2val),r&&(s.userOptions.ordinal=!1,s.lin2val=h.lin2Val,s.val2lin=h.val2Lin,s.setExtremes=function(t,e,o,r,n){if(i.hasBreaks){let s;let o=this.options.breaks||[];for(;s=i.findBreakAt(t,o);)t=s.to;for(;s=i.findBreakAt(e,o);)e=s.from;e<t&&(e=t)}s.constructor.prototype.setExtremes.call(this,t,e,o,r,n)},s.setAxisTranslation=function(){if(s.constructor.prototype.setAxisTranslation.call(this),i.unitLength=void 0,i.hasBreaks){let t=s.options.breaks||[],e=[],o=[],r=y(s.pointRangePadding,0),n=0,a,l,d=s.userMin||s.min,c=s.userMax||s.max,p,f;t.forEach(function(t){l=t.repeat||1/0,b(d)&&b(c)&&(h.isInBreak(t,d)&&(d+=t.to%l-d%l),h.isInBreak(t,c)&&(c-=c%l-t.from%l))}),t.forEach(function(t){if(p=t.from,l=t.repeat||1/0,b(d)&&b(c)){for(;p-l>d;)p-=l;for(;p<d;)p+=l;for(f=p;f<c;f+=l)e.push({value:f,move:"in"}),e.push({value:f+t.to-t.from,move:"out",size:t.breakSize})}}),e.sort(function(t,e){return t.value===e.value?("in"===t.move?0:1)-("in"===e.move?0:1):t.value-e.value}),a=0,p=d,e.forEach(function(t){1===(a+="in"===t.move?1:-1)&&"in"===t.move&&(p=t.value),0===a&&b(p)&&(o.push({from:p,to:t.value,len:t.value-p-(t.size||0)}),n+=t.value-p-(t.size||0))}),i.breakArray=o,b(d)&&b(c)&&b(s.min)&&(i.unitLength=c-d-n+r,k(s,"afterBreaks"),s.staticScale?s.transA=s.staticScale:i.unitLength&&(s.transA*=(c-s.min+r)/i.unitLength),r&&(s.minPixelPadding=s.transA*(s.minPointOffset||0)),s.min=d,s.max=c)}}),y(e,!0)&&s.chart.redraw()}}t.Additions=h}(r||(r={}));let v=r;var P=h(532),A=/*#__PURE__*/h.n(P);let{dateFormats:G}=p(),{addEvent:O,defined:B,erase:T,find:I,isArray:w,isNumber:E,merge:N,pick:C,timeUnits:L,wrap:S}=p();function M(t){return p().isObject(t,!0)}function W(t,e){let i={width:0,height:0};if(e.forEach(function(e){let s=t[e],o=0,r=0,n;M(s)&&(o=(n=M(s.label)?s.label:{}).getBBox?n.getBBox().height:0,n.textStr&&!E(n.textPxLength)&&(n.textPxLength=n.getBBox().width),r=E(n.textPxLength)?Math.round(n.textPxLength):0,n.textStr&&(r=Math.round(n.getBBox().width)),i.height=Math.max(o,i.height),i.width=Math.max(r,i.width))}),"treegrid"===this.type&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode){let t=this.treeGrid.mapOfPosToGridNode[-1].height||0;i.width+=this.options.labels.indentation*(t-1)}return i}function z(t){let{grid:e}=this,i=3===this.side;if(i||t.apply(this),!e?.isColumn){let t=e?.columns||[];i&&(t=t.slice().reverse()),t.forEach(t=>{t.getOffset()})}i&&t.apply(this)}function H(t){if(!0===(this.options.grid||{}).enabled){let{axisTitle:e,height:i,horiz:s,left:o,offset:r,opposite:a,options:l,top:h,width:d}=this,c=this.tickSize(),p=e&&e.getBBox().width,f=l.title.x,u=l.title.y,g=C(l.title.margin,s?5:10),m=e?this.chart.renderer.fontMetrics(e).f:0,k=(s?h+i:o)+(s?1:-1)*(a?-1:1)*(c?c[0]/2:0)+(this.side===n.bottom?m:0);t.titlePosition.x=s?o-(p||0)/2-g+f:k+(a?d:0)+r+f,t.titlePosition.y=s?k-(a?i:0)+(a?m:-m)/2+r+u:h-g+u}}function R(){let{chart:t,options:{grid:e={}},userOptions:i}=this;if(e.enabled&&function(t){let e=t.options;e.labels.align=C(e.labels.align,"center"),t.categories||(e.showLastLabel=!1),t.labelRotation=0,e.labels.rotation=0,e.minTickInterval=1}(this),e.columns){let s=this.grid.columns=[],o=this.grid.columnIndex=0;for(;++o<e.columns.length;){let r=N(i,e.columns[o],{isInternal:!0,linkedTo:0,scrollbar:{enabled:!1}},{grid:{columns:void 0}}),n=new(A())(this.chart,r,"yAxis");n.grid.isColumn=!0,n.grid.columnIndex=o,T(t.axes,n),T(t[this.coll]||[],n),s.push(n)}}}function D(){let{axisTitle:t,grid:e,options:i}=this;if(!0===(i.grid||{}).enabled){let s=this.min||0,o=this.max||0,r=this.ticks[this.tickPositions[0]];if(t&&!this.chart.styledMode&&r?.slotWidth&&!this.options.title.style.width&&t.css({width:`${r.slotWidth}px`}),this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions),this.rightWall&&this.rightWall.destroy(),this.grid&&this.grid.isOuterAxis()&&this.axisLine){let t=i.lineWidth;if(t){let e=this.getLinePath(t),r=e[0],a=e[1],l=(this.tickSize("tick")||[1])[0]*(this.side===n.top||this.side===n.left?-1:1);if("M"===r[0]&&"L"===a[0]&&(this.horiz?(r[2]+=l,a[2]+=l):(r[1]+=l,a[1]+=l)),!this.horiz&&this.chart.marginRight){let t=["L",this.left,r[2]||0],e=[r,t],n=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(o+this.tickmarkOffset)],l=[["M",a[1]||0,this.toPixels(o+this.tickmarkOffset)],n];this.grid.upperBorder||s%1==0||(this.grid.upperBorder=this.grid.renderBorder(e)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:i.lineColor,"stroke-width":i.lineWidth}),this.grid.upperBorder.animate({d:e})),this.grid.lowerBorder||o%1==0||(this.grid.lowerBorder=this.grid.renderBorder(l)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:i.lineColor,"stroke-width":i.lineWidth}),this.grid.lowerBorder.animate({d:l}))}this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:i.lineColor,"stroke-width":i.lineWidth}),this.grid.axisLineExtra.animate({d:e})):this.grid.axisLineExtra=this.grid.renderBorder(e),this.axisLine[this.showAxis?"show":"hide"]()}}if((e&&e.columns||[]).forEach(t=>t.render()),!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)&&this.tickPositions.length){let t,e;let i=this.tickmarkOffset,r=this.tickPositions[this.tickPositions.length-1],n=this.tickPositions[0];for(;(t=this.hiddenLabels.pop())&&t.element;)t.show();for(;(e=this.hiddenMarks.pop())&&e.element;)e.show();(t=this.ticks[n].label)&&(s-n>i?this.hiddenLabels.push(t.hide()):t.show()),(t=this.ticks[r].label)&&(r-o>i?this.hiddenLabels.push(t.hide()):t.show());let a=this.ticks[r].mark;a&&r-o<i&&r-o>0&&this.ticks[r].isLast&&this.hiddenMarks.push(a.hide())}}}function j(){let t=this.tickPositions&&this.tickPositions.info,e=this.options,i=e.grid||{},s=this.userOptions.labels||{};i.enabled&&(this.horiz?(this.series.forEach(t=>{t.options.pointRange=0}),t&&e.dateTimeLabelFormats&&e.labels&&!B(s.align)&&(!1===e.dateTimeLabelFormats[t.unitName].range||t.count>1)&&(e.labels.align="left",B(s.x)||(e.labels.x=3))):"treegrid"!==this.type&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function _(t){let e;let i=this.options,s=t.userOptions,o=i&&M(i.grid)?i.grid:{};!0===o.enabled&&(e=N(!0,{className:"highcharts-grid-axis "+(s.className||""),dateTimeLabelFormats:{hour:{list:["%[HM]","%[H]"]},day:{list:["%[AeB]","%[aeb]","%[E]"]},week:{list:["Week %W","W%W"]},month:{list:["%[B]","%[b]","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"0.9em"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0,style:{textOverflow:"ellipsis"}},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},s),"xAxis"!==this.coll||(B(s.linkedTo)&&!B(s.tickPixelInterval)&&(e.tickPixelInterval=350),!(!B(s.tickPixelInterval)&&B(s.linkedTo))||B(s.tickPositioner)||B(s.tickInterval)||B(s.units)||(e.tickPositioner=function(t,i){let s=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(s){let o=e.units||[],r,n=1,a="year";for(let t=0;t<o.length;t++){let e=o[t];if(e&&e[0]===s.unitName){r=t;break}}let l=E(r)&&o[r+1];if(l){a=l[0]||"year";let t=l[1];n=t&&t[0]||1}else"year"===s.unitName&&(n=10*s.count);let h=L[a];return this.tickInterval=h*n,this.chart.time.getTimeTicks({unitRange:h,count:n,unitName:a},t,i,this.options.startOfWeek)}})),N(!0,this.options,e),this.horiz&&(i.minPadding=C(s.minPadding,0),i.maxPadding=C(s.maxPadding,0)),E(i.grid.borderWidth)&&(i.tickWidth=i.lineWidth=o.borderWidth))}function F(t){let e=t.userOptions,i=e&&e.grid||{},s=i.columns;i.enabled&&s&&N(!0,this.options,s[0])}function X(){(this.grid.columns||[]).forEach(t=>t.setScale())}function q(t){let{horiz:e,maxLabelDimensions:i,options:{grid:s={}}}=this;if(s.enabled&&i){let o=2*this.options.labels.distance,r=e?s.cellHeight||o+i.height:o+i.width;w(t.tickSize)?t.tickSize[0]=r:t.tickSize=[r,0]}}function V(){this.axes.forEach(t=>{(t.grid&&t.grid.columns||[]).forEach(t=>{t.setAxisSize(),t.setAxisTranslation()})})}function U(t){let{grid:e}=this;(e.columns||[]).forEach(e=>e.destroy(t.keepEvents)),e.columns=void 0}function $(t){let e=t.userOptions||{},i=e.grid||{};i.enabled&&B(i.borderColor)&&(e.tickColor=e.lineColor=i.borderColor),this.grid||(this.grid=new Z(this)),this.hiddenLabels=[],this.hiddenMarks=[]}function K(t){let e=this.label,i=this.axis,s=i.reversed,o=i.chart,r=i.options.grid||{},a=i.options.labels,l=a.align,h=n[i.side],d=t.tickmarkOffset,c=i.tickPositions,p=this.pos-d,f=E(c[t.index+1])?c[t.index+1]-d:(i.max||0)+d,u=i.tickSize("tick"),g=u?u[0]:0,m=u?u[1]/2:0;if(!0===r.enabled){let r,n,d,c;if("top"===h?n=(r=i.top+i.offset)-g:"bottom"===h?r=(n=o.chartHeight-i.bottom+i.offset)+g:(r=i.top+i.len-(i.translate(s?f:p)||0),n=i.top+i.len-(i.translate(s?p:f)||0)),"right"===h?c=(d=o.chartWidth-i.right+i.offset)+g:"left"===h?d=(c=i.left+i.offset)-g:(d=Math.round(i.left+(i.translate(s?f:p)||0))-m,c=Math.min(Math.round(i.left+(i.translate(s?p:f)||0))-m,i.left+i.len)),this.slotWidth=c-d,t.pos.x="left"===l?d:"right"===l?c:d+(c-d)/2,t.pos.y=n+(r-n)/2,e){let i=o.renderer.fontMetrics(e),s=e.getBBox().height;if(a.useHTML)t.pos.y+=i.b+-(s/2);else{let e=Math.round(s/i.h);t.pos.y+=(i.b-(i.h-i.f))/2+-((e-1)*i.h/2)}}t.pos.x+=i.horiz&&a.x||0}}function Y(t){let{axis:e,value:i}=t;if(e.options.grid&&e.options.grid.enabled){let s;let o=e.tickPositions,r=(e.linkedParent||e).series[0],n=i===o[0],a=i===o[o.length-1],l=r&&I(r.options.data,function(t){return t[e.isXAxis?"x":"y"]===i});l&&r.is("gantt")&&(s=N(l),p().seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(s,e.chart)),t.isFirst=n,t.isLast=a,t.point=s}}function J(){let t=this.options,e=t.grid||{},i=this.categories,s=this.tickPositions,o=s[0],r=s[1],n=s[s.length-1],a=s[s.length-2],l=this.linkedParent&&this.linkedParent.min,h=this.linkedParent&&this.linkedParent.max,d=l||this.min,c=h||this.max,p=this.tickInterval,f=E(d)&&d>=o+p&&d<r,u=E(d)&&o<d&&o+p>d,g=E(c)&&n>c&&n-p<c,m=E(c)&&c<=n-p&&c>a;!0===e.enabled&&!i&&(this.isXAxis||this.isLinked)&&((u||f)&&!t.startOnTick&&(s[0]=d),(g||m)&&!t.endOnTick&&(s[s.length-1]=c))}function Q(t){var e;let{options:{grid:i={}}}=this;return!0===i.enabled&&this.categories?this.tickInterval:t.apply(this,(e=arguments,Array.prototype.slice.call(e,1)))}!function(t){t[t.top=0]="top",t[t.right=1]="right",t[t.bottom=2]="bottom",t[t.left=3]="left"}(n||(n={}));class Z{constructor(t){this.axis=t}isOuterAxis(){let t=this.axis,e=t.chart,i=t.grid.columnIndex,s=t.linkedParent?.grid.columns||t.grid.columns||[],o=i?t.linkedParent:t,r=-1,n=0;return 3===t.side&&!e.inverted&&s.length?!t.linkedParent:((e[t.coll]||[]).forEach((e,i)=>{e.side!==t.side||e.options.isInternal||(n=i,e!==o||(r=i))}),n===r&&(!E(i)||s.length===i))}renderBorder(t){let e=this.axis,i=e.chart.renderer,s=e.options,o=i.path(t).addClass("highcharts-axis-line").add(e.axisGroup);return i.styledMode||o.attr({stroke:s.lineColor,"stroke-width":s.lineWidth,zIndex:7}),o}}G.E=function(t){return this.dateFormat("%a",t,!0).charAt(0)},G.W=function(t){let e=this.toParts(t),i=(e[7]+6)%7,s=e.slice(0);s[2]=e[2]-i+3;let o=this.toParts(this.makeTime(s[0],0,1));return 4!==o[7]&&(e[1]=0,e[2]=1+(11-o[7])%7),(1+Math.floor((this.makeTime(s[0],s[1],s[2])-this.makeTime(o[0],o[1],o[2]))/6048e5)).toString()};let tt={compose:function(t,e,i){return t.keepProps.includes("grid")||(t.keepProps.push("grid"),t.prototype.getMaxLabelDimensions=W,S(t.prototype,"unsquish",Q),S(t.prototype,"getOffset",z),O(t,"init",$),O(t,"afterGetTitlePosition",H),O(t,"afterInit",R),O(t,"afterRender",D),O(t,"afterSetAxisTranslation",j),O(t,"afterSetOptions",_),O(t,"afterSetOptions",F),O(t,"afterSetScale",X),O(t,"afterTickSize",q),O(t,"trimTicks",J),O(t,"destroy",U),O(e,"afterSetChartSize",V),O(i,"afterGetLabelPosition",K),O(i,"labelFormat",Y)),t}},{extend:te,isNumber:ti,pick:ts}=p();function to(t,e,i,s,o,r){let n=r&&r.after,a=r&&r.before,l={data:s,depth:i-1,id:t,level:i,parent:e||""},h=0,d=0,c,p;"function"==typeof a&&a(l,r);let f=(o[t]||[]).map(e=>{let s=to(e.id,t,i+1,e,o,r),n=e.start||NaN,a=!0===e.milestone?n:e.end||NaN;return c=!ti(c)||n<c?n:c,p=!ti(p)||a>p?a:p,h=h+1+s.descendants,d=Math.max(s.height+1,d),s});return s&&(s.start=ts(s.start,c),s.end=ts(s.end,p)),te(l,{children:f,descendants:h,height:d}),"function"==typeof n&&n(l,r),l}let tr={getNode:to,getTree:function(t,e){return to("",null,1,null,function(t){let e=[],i=t.reduce((t,i)=>{let{parent:s="",id:o}=i;return void 0===t[s]&&(t[s]=[]),t[s].push(i),o&&e.push(o),t},{});return Object.keys(i).forEach(t=>{if(""!==t&&-1===e.indexOf(t)){let e=i[t].map(function(t){let{...e}=t;return e});i[""].push(...e),delete i[t]}}),i}(t),e)}},{addEvent:tn,removeEvent:ta,isObject:tl,isNumber:th,pick:td,wrap:tc}=p();function tp(){this.treeGrid||(this.treeGrid=new tg(this))}function tf(t,e,i,s,o,r,n,a,l){let h,d,c;let p=td(this.options&&this.options.labels,r),f=this.pos,u=this.axis,g="treegrid"===u.type,m=t.apply(this,[e,i,s,o,p,n,a,l]);if(g){let{width:t=0,padding:e=u.linkedParent?0:5}=p&&tl(p.symbol,!0)?p.symbol:{},i=p&&th(p.indentation)?p.indentation:0;c=(d=(h=u.treeGrid.mapOfPosToGridNode)&&h[f])&&d.depth||1,m.x+=t+2*e+(c-1)*i}return m}function tu(t){let e,i,s;let{pos:o,axis:r,label:n,treeGrid:a,options:l}=this,h=a?.labelIcon,d=n?.element,{treeGrid:c,options:p,chart:f,tickPositions:u}=r,g=c.mapOfPosToGridNode,m=td(l?.labels,p?.labels),k=m&&tl(m.symbol,!0)?m.symbol:{},x=g&&g[o],{descendants:b,depth:y}=x||{},v=x&&b&&b>0,P="treegrid"===r.type&&d,A=u.indexOf(o)>-1,G="highcharts-treegrid-node-",O=G+"level-",B=f.styledMode;P&&x&&n.removeClass(RegExp(O+".*")).addClass(O+y),t.apply(this,Array.prototype.slice.call(arguments,1)),P&&v?(e=c.isCollapsed(x),function(t,e){let i=t.treeGrid,s=!i.labelIcon,o=e.renderer,r=e.xy,n=e.options,a=n.width||0,l=n.height||0,h=n.padding??t.axis.linkedParent?0:5,d={x:r.x-a/2-h,y:r.y-l/2},c=e.collapsed?90:180,p=e.show&&th(d.y),f=i.labelIcon;f||(i.labelIcon=f=o.path(o.symbols[n.type](n.x||0,n.y||0,a,l)).addClass("highcharts-label-icon").add(e.group)),f[p?"show":"hide"](),o.styledMode||f.attr({cursor:"pointer",fill:td(e.color,"#666666"),"stroke-width":1,stroke:n.lineColor,strokeWidth:n.lineWidth||0}),f[s?"attr":"animate"]({translateX:d.x,translateY:d.y,rotation:c})}(this,{color:!B&&n.styles.color||"",collapsed:e,group:n.parentGroup,options:k,renderer:n.renderer,show:A,xy:n.xy}),i=G+(e?"collapsed":"expanded"),s=G+(e?"expanded":"collapsed"),n.addClass(i).removeClass(s),B||n.css({cursor:"pointer"}),[n,h].forEach(t=>{t&&!t.attachedTreeGridEvents&&(tn(t.element,"mouseover",function(){n.addClass("highcharts-treegrid-node-active"),n.renderer.styledMode||n.css({textDecoration:"underline"})}),tn(t.element,"mouseout",function(){!function(t,e){let i=tl(e.style)?e.style:{};t.removeClass("highcharts-treegrid-node-active"),t.renderer.styledMode||t.css({textDecoration:i.textDecoration||"none"})}(n,m)}),tn(t.element,"click",function(){a.toggleCollapse()}),t.attachedTreeGridEvents=!0)})):h&&(ta(d),n?.css({cursor:"default"}),h.destroy())}class tg{static compose(t){let e=t.prototype;e.toggleCollapse||(tn(t,"init",tp),tc(e,"getLabelPosition",tf),tc(e,"renderLabel",tu),e.collapse=function(t){this.treeGrid.collapse(t)},e.expand=function(t){this.treeGrid.expand(t)},e.toggleCollapse=function(t){this.treeGrid.toggleCollapse(t)})}constructor(t){this.tick=t}collapse(t){let e=this.tick,i=e.axis,s=i.brokenAxis;if(s&&i.treeGrid.mapOfPosToGridNode){let o=e.pos,r=i.treeGrid.mapOfPosToGridNode[o],n=i.treeGrid.collapse(r);s.setBreaks(n,td(t,!0))}}destroy(){this.labelIcon&&this.labelIcon.destroy()}expand(t){let{pos:e,axis:i}=this.tick,{treeGrid:s,brokenAxis:o}=i,r=s.mapOfPosToGridNode;if(o&&r){let i=r[e],n=s.expand(i);o.setBreaks(n,td(t,!0))}}toggleCollapse(t){let e=this.tick,i=e.axis,s=i.brokenAxis;if(s&&i.treeGrid.mapOfPosToGridNode){let o=e.pos,r=i.treeGrid.mapOfPosToGridNode[o],n=i.treeGrid.toggleCollapse(r);s.setBreaks(n,td(t,!0))}}}var tm=h(620),tk=/*#__PURE__*/h.n(tm);let{extend:tx,isArray:tb,isNumber:ty,isObject:tv,merge:tP,pick:tA,relativeLength:tG}=p(),{getLevelOptions:tO}={getColor:function(t,e){let i,s,o,r,n,a;let l=e.index,h=e.mapOptionsToLevel,d=e.parentColor,c=e.parentColorIndex,p=e.series,f=e.colors,u=e.siblings,g=p.points,m=p.chart.options.chart;return t&&(i=g[t.i],s=h[t.level]||{},i&&s.colorByPoint&&(r=i.index%(f?f.length:m.colorCount),o=f&&f[r]),p.chart.styledMode||(n=tA(i&&i.options.color,s&&s.color,o,d&&(t=>{let e=s&&s.colorVariation;return e&&"brightness"===e.key&&l&&u?tk().parse(t).brighten(e.to*(l/u)).get():t})(d),p.color)),a=tA(i&&i.options.colorIndex,s&&s.colorIndex,r,c,e.colorIndex)),{color:n,colorIndex:a}},getLevelOptions:function(t){let e,i,s,o,r,n;let a={};if(tv(t))for(o=ty(t.from)?t.from:1,n=t.levels,i={},e=tv(t.defaults)?t.defaults:{},tb(n)&&(i=n.reduce((t,i)=>{let s,r,n;return tv(i)&&ty(i.level)&&(r=tA((n=tP({},i)).levelIsConstant,e.levelIsConstant),delete n.levelIsConstant,delete n.level,tv(t[s=i.level+(r?0:o-1)])?tP(!0,t[s],n):t[s]=n),t},{})),r=ty(t.to)?t.to:1,s=0;s<=r;s++)a[s]=tP({},e,tv(i[s])?i[s]:{});return a},getNodeWidth:function(t,e){let{chart:i,options:s}=t,{nodeDistance:o=0,nodeWidth:r=0}=s,{plotSizeX:n=1}=i;if("auto"===r){if("string"==typeof o&&/%$/.test(o))return n/(e+parseFloat(o)/100*(e-1));let t=Number(o);return(n+t)/(e||1)-t}return tG(r,n)},setTreeValues:function t(e,i){let s=i.before,o=i.idRoot,r=i.mapIdToNode[o],n=!1!==i.levelIsConstant,a=i.points[e.i],l=a&&a.options||{},h=[],d=0;e.levelDynamic=e.level-(n?0:r.level),e.name=tA(a&&a.name,""),e.visible=o===e.id||!0===i.visible,"function"==typeof s&&(e=s(e,i)),e.children.forEach((s,o)=>{let r=tx({},i);tx(r,{index:o,siblings:e.children.length,visible:e.visible}),s=t(s,r),h.push(s),s.visible&&(d+=s.val)});let c=tA(l.value,d);return e.visible=c>=0&&(d>0||e.visible),e.children=h,e.childrenTotal=d,e.isLeaf=e.visible&&!d,e.val=c,e},updateRootId:function(t){let e,i;return tv(t)&&(i=tv(t.options)?t.options:{},e=tA(t.rootNode,i.rootId,""),tv(t.userOptions)&&(t.userOptions.rootId=e),t.rootNode=e),e}},{addEvent:tB,isArray:tT,splat:tI,find:tw,fireEvent:tE,isObject:tN,isString:tC,merge:tL,pick:tS,removeEvent:tM,wrap:tW}=p();function tz(t,e){let i=t.collapseEnd||0,s=t.collapseStart||0;return i>=e&&(s-=.5),{from:s,to:i,showPoints:!1}}function tH(t,e,i){let s=[],o=[],r={},n=e||!1,a={},l=-1,h=tr.getTree(t,{after:function(t){let e=a[t.pos],i=0,s=0;e.children.forEach(function(t){s+=(t.descendants||0)+1,i=Math.max((t.height||0)+1,i)}),e.descendants=s,e.height=i,e.collapsed&&o.push(e)},before:function(t){let e,i;let o=tN(t.data,!0)?t.data:{},h=tC(o.name)?o.name:"",d=r[t.parent],c=tN(d,!0)?a[d.pos]:null;n&&tN(c,!0)&&(e=tw(c.children,function(t){return t.name===h}))?(i=e.pos,e.nodes.push(t)):i=l++,!a[i]&&(a[i]=e={depth:c?c.depth+1:0,name:h,id:o.id,nodes:[t],children:[],pos:i},-1!==i&&s.push(h),tN(c,!0)&&c.children.push(e)),tC(t.id)&&(r[t.id]=t),e&&!0===o.collapsed&&(e.collapsed=!0),t.pos=i}});return{categories:s,mapOfIdToNode:r,mapOfPosToGridNode:a=function(t,e){let i=function(t,s,o){let r=t.nodes,n=s+(-1===s?0:e-1),a=(n-s)/2,l=s+a;return r.forEach(function(t){let e=t.data;tN(e,!0)&&(e.y=s+(e.seriesIndex||0),delete e.seriesIndex),t.pos=l}),o[l]=t,t.pos=l,t.tickmarkOffset=a+.5,t.collapseStart=n+.5,t.children.forEach(function(t){i(t,n+1,o),n=(t.collapseEnd||0)-.5}),t.collapseEnd=n+.5,o};return i(t["-1"],-1,{})}(a,i),collapsedNodes:o,tree:h}}function tR(t){let e=t.target;e.axes.filter(t=>"treegrid"===t.type).forEach(function(i){let s=i.options||{},o=s.labels,r=i.uniqueNames,n=e.time.parse(s.max),a=!i.treeGrid.mapOfPosToGridNode||i.series.some(function(t){return!t.hasRendered||t.isDirtyData||t.isDirty}),l=0,h,d;if(a){let s=[];if(h=i.series.reduce(function(t,i){let o=i.options.data||[],n=o[0],a=Array.isArray(n)&&!n.find(t=>"object"==typeof t);return s.push(a),i.visible&&(o.forEach(function(s){(a||i.options.keys&&i.options.keys.length)&&(s=i.pointClass.prototype.optionsToObject.call({series:i},s),i.pointClass.setGanttPointAliases(s,e)),tN(s,!0)&&(s.seriesIndex=l,t.push(s))}),!0===r&&l++),t},[]),n&&h.length<n)for(let t=h.length;t<=n;t++)h.push({name:t+"​"});d=tH(h,r||!1,!0===r?l:1),i.categories=d.categories,i.treeGrid.mapOfPosToGridNode=d.mapOfPosToGridNode,i.hasNames=!0,i.treeGrid.tree=d.tree,i.series.forEach(function(t,e){let i=(t.options.data||[]).map(function(i){return(s[e]||tT(i)&&t.options.keys&&t.options.keys.length)&&h.forEach(function(t){let e=tI(i);e.indexOf(t.x||0)>=0&&e.indexOf(t.x2||0)>=0&&(i=t)}),tN(i,!0)?tL(i):i});t.visible&&t.setData(i,!1)}),i.treeGrid.mapOptionsToLevel=tO({defaults:o,from:1,levels:o&&o.levels,to:i.treeGrid.tree&&i.treeGrid.tree.height}),"beforeRender"===t.type&&(i.treeGrid.collapsedNodes=d.collapsedNodes)}})}function tD(t,e){let i=this.treeGrid.mapOptionsToLevel||{},s="treegrid"===this.type,r=this.ticks,n=r[e],a,l,h;s&&this.treeGrid.mapOfPosToGridNode?((a=i[(h=this.treeGrid.mapOfPosToGridNode[e]).depth])&&(l={labels:a}),!n&&o?r[e]=n=new o(this,e,void 0,void 0,{category:h.name,tickmarkOffset:h.tickmarkOffset,options:l}):(n.parameters.category=h.name,n.options=l,n.addLabel())):t.apply(this,Array.prototype.slice.call(arguments,1))}function tj(t,e,i,s){let o=this,r="treegrid"===i.type;o.treeGrid||(o.treeGrid=new tX(o)),r&&(tB(e,"beforeRender",tR),tB(e,"beforeRedraw",tR),tB(e,"addSeries",function(t){if(t.options.data){let e=tH(t.options.data,i.uniqueNames||!1,1);o.treeGrid.collapsedNodes=(o.treeGrid.collapsedNodes||[]).concat(e.collapsedNodes)}}),tB(o,"foundExtremes",function(){o.treeGrid.collapsedNodes&&o.treeGrid.collapsedNodes.forEach(function(t){let e=o.treeGrid.collapse(t);o.brokenAxis&&(o.brokenAxis.setBreaks(e,!1),o.treeGrid.collapsedNodes&&(o.treeGrid.collapsedNodes=o.treeGrid.collapsedNodes.filter(e=>t.collapseStart!==e.collapseStart||t.collapseEnd!==e.collapseEnd)))})}),tB(o,"afterBreaks",function(){"yAxis"===o.coll&&!o.staticScale&&o.chart.options.chart.height&&(o.isDirty=!0)}),i=tL({grid:{enabled:!0},labels:{align:"left",levels:[{level:void 0},{level:1,style:{fontWeight:"bold"}}],symbol:{type:"triangle",x:-5,y:-5,height:10,width:10}},uniqueNames:!1},i,{reversed:!0})),t.apply(o,[e,i,s]),r&&(o.hasNames=!0,o.options.showLastLabel=!0)}function t_(t){let e=this.options,i=this.chart.time,s="number"==typeof e.linkedTo?this.chart[this.coll]?.[e.linkedTo]:void 0;if("treegrid"===this.type){if(this.min=this.userMin??i.parse(e.min)??this.dataMin,this.max=this.userMax??i.parse(e.max)??this.dataMax,tE(this,"foundExtremes"),this.setAxisTranslation(),this.tickInterval=1,this.tickmarkOffset=.5,this.tickPositions=this.treeGrid.mapOfPosToGridNode?this.treeGrid.getTickPositions():[],s){let t=s.getExtremes();this.min=tS(t.min,t.dataMin),this.max=tS(t.max,t.dataMax),this.tickPositions=s.tickPositions}this.linkedParent=s}else t.apply(this,Array.prototype.slice.call(arguments,1))}function tF(t){let e=this;"treegrid"===this.type&&e.visible&&e.tickPositions.forEach(function(t){let i=e.ticks[t];i.label&&i.label.attachedTreeGridEvents&&(tM(i.label.element),i.label.attachedTreeGridEvents=!1)}),t.apply(e,Array.prototype.slice.call(arguments,1))}class tX{static compose(t,e,i,s){if(!t.keepProps.includes("treeGrid")){let e=t.prototype;t.keepProps.push("treeGrid"),tW(e,"generateTick",tD),tW(e,"init",tj),tW(e,"setTickInterval",t_),tW(e,"redraw",tF),e.utils={getNode:tr.getNode},o||(o=s)}return tt.compose(t,e,s),v.compose(t,i),tg.compose(s),t}constructor(t){this.axis=t}setCollapsedStatus(t){let e=this.axis,i=e.chart;e.series.forEach(function(e){let s=e.options.data;if(t.id&&s){let o=i.get(t.id),r=s[e.data.indexOf(o)];o&&r&&(o.collapsed=t.collapsed,r.collapsed=t.collapsed)}})}collapse(t){let e=this.axis,i=e.options.breaks||[],s=tz(t,e.max);return i.push(s),t.collapsed=!0,e.treeGrid.setCollapsedStatus(t),i}expand(t){let e=this.axis,i=e.options.breaks||[],s=tz(t,e.max);return t.collapsed=!1,e.treeGrid.setCollapsedStatus(t),i.reduce(function(t,e){return(e.to!==s.to||e.from!==s.from)&&t.push(e),t},[])}getTickPositions(){let t=this.axis,e=Math.floor(t.min/t.tickInterval)*t.tickInterval,i=Math.ceil(t.max/t.tickInterval)*t.tickInterval;return Object.keys(t.treeGrid.mapOfPosToGridNode||{}).reduce(function(s,o){let r=+o;return r>=e&&r<=i&&!(t.brokenAxis&&t.brokenAxis.isInAnyBreak(r))&&s.push(r),s},[])}isCollapsed(t){let e=this.axis,i=e.options.breaks||[],s=tz(t,e.max);return i.some(function(t){return t.from===s.from&&t.to===s.to})}toggleCollapse(t){return this.isCollapsed(t)?this.expand(t):this.collapse(t)}}let tq=p();tX.compose(tq.Axis,tq.Chart,tq.Series,tq.Tick);let tV=p();return d.default})());