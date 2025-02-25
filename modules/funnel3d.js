!/**
 * Highcharts JS v12.1.2-modified (2025-02-25)
 * @module highcharts/modules/funnel3d
 * @requires highcharts
 * @requires highcharts/highcharts-3d
 * @requires highcharts/modules/cylinder
 *
 * Highcharts funnel module
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.Color,t._Highcharts.RendererRegistry,t._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/funnel3d",["highcharts/highcharts"],function(t){return e(t,t.Color,t.RendererRegistry,t.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/funnel3d"]=e(t._Highcharts,t._Highcharts.Color,t._Highcharts.RendererRegistry,t._Highcharts.SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.Color,t.Highcharts.RendererRegistry,t.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(t,e,i,r)=>(()=>{"use strict";var o={620:t=>{t.exports=e},608:t=>{t.exports=i},512:t=>{t.exports=r},944:e=>{e.exports=t}},n={};function s(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return o[t](i,i.exports,s),i.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var h={};s.d(h,{default:()=>Y});var d=s(944),a=s.n(d),l=s(620),p=s.n(l),g=s(608),c=s.n(g);let{parse:f}=p(),{charts:y}=a(),{Element3D:u}=c().getRendererType().prototype,{merge:x}=a(),w=class extends u{constructor(){super(...arguments),this.mainParts=["top","bottom"],this.parts=["top","bottom","frontUpper","backUpper","frontLower","backLower","rightUpper","rightLower"],this.sideGroups=["upperGroup","lowerGroup"],this.sideParts={upperGroup:["frontUpper","backUpper","rightUpper"],lowerGroup:["frontLower","backLower","rightLower"]},this.pathType="funnel3d"}opacitySetter(t){let e=parseFloat(t),i=this.parts,r=y[this.renderer.chartIndex],o="group-opacity-"+e+"-"+r.index;if(this.parts=this.mainParts,this.singleSetterForParts("opacity",e),this.parts=i,!r.renderer.filterId){for(let t of(r.renderer.definition({tagName:"filter",attributes:{id:o},children:[{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"table",tableValues:"0 "+e}}]}]}),this.sideGroups))this[t].attr({filter:"url(#"+o+")"});if(this.renderer.styledMode)for(let t of(r.renderer.definition({tagName:"style",textContent:".highcharts-"+o+" {filter:url(#"+o+")}"}),this.sideGroups))this[t].addClass("highcharts-"+o)}return this}fillSetter(t){let e=f(t),i=e.rgba[3],r={top:f(t).brighten(.1).get(),bottom:f(t).brighten(-.2).get()};if(i<1?(e.rgba[3]=1,e=e.get("rgb"),this.attr({opacity:i})):e=t,e.linearGradient||e.radialGradient||!this.gradientForSides||(e={linearGradient:{x1:0,x2:1,y1:1,y2:1},stops:[[0,f(t).brighten(-.2).get()],[.5,t],[1,f(t).brighten(-.2).get()]]}),e.linearGradient)for(let t of this.sideGroups){let i=this[t].gradientBox,o=e.linearGradient,n=x(e,{linearGradient:{x1:i.x+o.x1*i.width,y1:i.y+o.y1*i.height,x2:i.x+o.x2*i.width,y2:i.y+o.y2*i.height}});for(let e of this.sideParts[t])r[e]=n}else if(x(!0,r,{frontUpper:e,backUpper:e,rightUpper:e,frontLower:e,backLower:e,rightLower:e}),e.radialGradient)for(let t of this.sideGroups){let e=this[t].gradientBox,i=e.x+e.width/2,r=e.y+e.height/2,o=Math.min(e.width,e.height);for(let e of this.sideParts[t])this[e].setRadialReference([i,r,o])}if(this.singleSetterForParts("fill",null,r),this.color=this.fill=t,e.linearGradient)for(let t of[this.frontLower,this.frontUpper]){let e=t.element,i=e&&this.renderer.gradients[e.gradient];i&&"userSpaceOnUse"!==i.attr("gradientUnits")&&i.attr({gradientUnits:"userSpaceOnUse"})}return this}adjustForGradient(){let t;for(let e of this.sideGroups){let i={x:Number.MAX_VALUE,y:Number.MAX_VALUE},r={x:-Number.MAX_VALUE,y:-Number.MAX_VALUE};for(let o of this.sideParts[e])t=this[o].getBBox(!0),i={x:Math.min(i.x,t.x),y:Math.min(i.y,t.y)},r={x:Math.max(r.x,t.x+t.width),y:Math.max(r.y,t.y+t.height)};this[e].gradientBox={x:i.x,width:r.x-i.x,y:i.y,height:r.y-i.y}}}zIndexSetter(){return this.finishedOnAdd&&this.adjustForGradient(),this.renderer.Element.prototype.zIndexSetter.apply(this,arguments)}onAdd(){this.adjustForGradient(),this.finishedOnAdd=!0}},{charts:m}=a(),{error:b,extend:A,merge:z}=a();function C(t){let e=this.element3d("funnel3d",t),i=this.styledMode,r={"stroke-width":1,stroke:"none"};for(let t of(e.upperGroup=this.g("funnel3d-upper-group").attr({zIndex:e.frontUpper.zIndex}).add(e),[e.frontUpper,e.backUpper,e.rightUpper]))i||t.attr(r),t.add(e.upperGroup);for(let t of(e.lowerGroup=this.g("funnel3d-lower-group").attr({zIndex:e.frontLower.zIndex}).add(e),[e.frontLower,e.backLower,e.rightLower]))i||t.attr(r),t.add(e.lowerGroup);return e.gradientForSides=t.gradientForSides,e}function L(t){this.getCylinderEnd||b("A required Highcharts module is missing: cylinder.js",!0,m[this.chartIndex]);let e=m[this.chartIndex],i=t.alphaCorrection=90-Math.abs(e.options.chart.options3d.alpha%180-90),r=this.cuboidPath.call(this,z(t,{depth:t.width,width:(t.width+t.bottom.width)/2})),o=r.isTop,n=!r.isFront,s=!!t.middle,h=this.getCylinderEnd(e,z(t,{x:t.x-t.width/2,z:t.z-t.width/2,alphaCorrection:i})),d=t.bottom.width,a=z(t,{width:d,x:t.x-d/2,z:t.z-d/2,alphaCorrection:i}),l=this.getCylinderEnd(e,a,!0),p=d,g=a,c=l,f=l,y;s&&(p=t.middle.width,g=z(t,{y:t.y+t.middle.fraction*t.height,width:p,x:t.x-p/2,z:t.z-p/2}),c=this.getCylinderEnd(e,g,!1),f=this.getCylinderEnd(e,g,!1));let u={top:h,bottom:l,frontUpper:this.getCylinderFront(h,c),zIndexes:{group:r.zIndexes.group,top:0!==o?0:3,bottom:1!==o?0:3,frontUpper:n?2:1,backUpper:n?1:2,rightUpper:n?2:1}};return u.backUpper=this.getCylinderBack(h,c),y=Math.min(p,t.width)/Math.max(p,t.width)!=1,u.rightUpper=this.getCylinderFront(this.getCylinderEnd(e,z(t,{x:t.x-t.width/2,z:t.z-t.width/2,alphaCorrection:y?-i:0}),!1),this.getCylinderEnd(e,z(g,{alphaCorrection:y?-i:0}),!s)),s&&(y=Math.min(p,d)/Math.max(p,d)!=1,z(!0,u,{frontLower:this.getCylinderFront(f,l),backLower:this.getCylinderBack(f,l),rightLower:this.getCylinderFront(this.getCylinderEnd(e,z(a,{alphaCorrection:y?-i:0}),!0),this.getCylinderEnd(e,z(g,{alphaCorrection:y?-i:0}),!1)),zIndexes:{frontLower:n?2:1,backLower:n?1:2,rightLower:n?1:2}})),u}var v=s(512),U=s.n(v);let{seriesTypes:{column:G}}=U(),{extend:M}=a();class k extends G.prototype.pointClass{}M(k.prototype,{shapeType:"funnel3d"});let{deg2rad:S}=a(),{pick:F}=a();function H(t,e,i,r){let o=e.options.chart.options3d,n=F(r,!!i&&e.inverted),s={x:e.plotWidth/2,y:e.plotHeight/2,z:o.depth/2,vd:F(o.depth,1)*F(o.viewDistance,0)},h=e.scale3d||1,d=S*o.beta*(n?-1:1),a=S*o.alpha*(n?-1:1),l={cosA:Math.cos(a),cosB:Math.cos(-d),sinA:Math.sin(a),sinB:Math.sin(-d)};return i||(s.x+=e.plotLeft,s.y+=e.plotTop),t.map(function(t){var e,i,r;let o=(e=(n?t.y:t.x)-s.x,i=(n?t.x:t.y)-s.y,r=(t.z||0)-s.z,{x:l.cosB*e-l.sinB*r,y:-l.sinA*l.sinB*e+l.cosA*i-l.cosB*l.sinA*r,z:l.cosA*l.sinB*e+l.sinA*i+l.cosA*l.cosB*r}),d=B(o,s,s.vd);return d.x=d.x*h+s.x,d.y=d.y*h+s.y,d.z=o.z*h+s.z,{x:n?d.y:d.x,y:n?d.x:d.y,z:d.z}})}function B(t,e,i){let r=i>0&&i<Number.POSITIVE_INFINITY?i/(t.z+e.z+i):1;return{x:t.x*r,y:t.y*r}}function I(t){let e=0,i,r;for(i=0;i<t.length;i++)r=(i+1)%t.length,e+=t[i].x*t[r].y-t[r].x*t[i].y;return e/2}let{noop:R}=a(),{perspective:E}={perspective:H,perspective3D:B,pointCameraDistance:function(t,e){let i=e.options.chart.options3d,r={x:e.plotWidth/2,y:e.plotHeight/2,z:F(i.depth,1)*F(i.viewDistance,0)+i.depth};return Math.sqrt(Math.pow(r.x-F(t.plotX,t.x),2)+Math.pow(r.y-F(t.plotY,t.y),2)+Math.pow(r.z-F(t.plotZ,t.z),2))},shapeArea:I,shapeArea3D:function(t,e,i){return I(H(t,e,i))}},{series:P,seriesTypes:{column:_}}=U(),{extend:T,merge:W,pick:N,relativeLength:O}=a();class j extends _{alignDataLabel(t,e,i){let r=t.dlBoxRaw,o=this.chart.inverted,n=t.plotY>N(this.translatedThreshold,this.yAxis.len),s=N(i.inside,!!this.options.stacking),h={x:r.x,y:r.y,height:0};i.align=N(i.align,!o||s?"center":n?"right":"left"),i.verticalAlign=N(i.verticalAlign,o||s?"middle":n?"top":"bottom"),"top"!==i.verticalAlign&&(h.y+=r.bottom/("bottom"===i.verticalAlign?1:2)),h.width=this.getWidthAt(h.y),this.options.reversed&&(h.width=r.fullWidth-h.width),s?h.x-=h.width/2:"left"===i.align?(i.align="right",h.x-=1.5*h.width):"right"===i.align?(i.align="left",h.x+=h.width/2):h.x-=h.width/2,t.dlBox=h,_.prototype.alignDataLabel.apply(this,arguments)}bindAxes(){P.prototype.bindAxes.apply(this,arguments),T(this.xAxis.options,{gridLineWidth:0,lineWidth:0,title:void 0,tickPositions:[]}),W(!0,this.yAxis.options,{gridLineWidth:0,title:void 0,labels:{enabled:!1}})}translate(){P.prototype.translate.apply(this,arguments);let t=this.chart,e=this.options,i=e.reversed,r=e.ignoreHiddenPoint,o=t.plotWidth,n=t.plotHeight,s=e.center,h=O(s[0],o),d=O(s[1],n),a=O(e.width,o),l=O(e.height,n),p=O(e.neckWidth,o),g=O(e.neckHeight,n),c=d-l/2+l-g,f=this.points,y=0,u=0,x,w,m,b,A,z,C,L,v;for(let t of(this.getWidthAt=w=function(t){return t>c||l===g?p:p+(a-p)*(1-(t-(d-l/2))/(l-g))},this.center=[h,d,l],this.centerX=h,f))r&&!1===t.visible||(y+=t.y);for(let o of f)C=null,m=y?o.y/y:0,z=(A=d-l/2+u*l)+m*l,x=w(A),L=z-A,v={gradientForSides:N(o.options.gradientForSides,e.gradientForSides),x:h,y:A,height:L,width:x,z:1,top:{width:x}},x=w(z),v.bottom={fraction:m,width:x},A>=c?v.isCylinder=!0:z>c&&(C=z,x=w(c),z=c,v.bottom.width=x,v.middle={fraction:L?(c-A)/L:0,width:x}),i&&(v.y=A=d+l/2-(u+m)*l,v.middle&&(v.middle.fraction=1-(L?v.middle.fraction:0)),x=v.width,v.width=v.bottom.width,v.bottom.width=x),o.shapeArgs=T(o.shapeArgs,v),o.percentage=100*m,o.plotX=h,i?o.plotY=d+l/2-(u+m/2)*l:o.plotY=(A+(C||z))/2,b=E([{x:h,y:o.plotY,z:i?-(a-w(o.plotY))/2:-w(o.plotY)/2}],t,!0)[0],o.tooltipPos=[b.x,b.y],o.dlBoxRaw={x:h,width:w(o.plotY),y:A,bottom:v.height||0,fullWidth:a},r&&!1===o.visible||(u+=m)}}j.compose=function(t){let e=t.prototype;e.funnel3d||(e.Element3D.types.funnel3d=w,A(e,{funnel3d:C,funnel3dPath:L}))},j.defaultOptions=W(_.defaultOptions,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,gradientForSides:!0,animation:!1,edgeWidth:0,colorByPoint:!0,showInLegend:!1,dataLabels:{align:"right",crop:!1,inside:!1,overflow:"allow"}}),T(j.prototype,{pointClass:k,translate3dShapes:R}),U().registerSeriesType("funnel3d",j),j.compose(c().getRendererType());let Y=a();return h.default})());