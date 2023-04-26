/*
 Highcharts JS v11.0.0 (2023-04-26)

 Highcharts funnel module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/funnel",["highcharts"],function(m){a(m);a.Highcharts=m;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function m(a,n,h,B){a.hasOwnProperty(n)||(a[n]=B.apply(null,h),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:n,module:a[n]}})))}a=a?a._modules:
{};m(a,"Series/Funnel/FunnelSeries.js",[a["Core/Chart/Chart.js"],a["Core/Globals.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,n,h,B){const {noop:m}=n,{series:A,seriesTypes:{pie:F}}=h,{addEvent:J,extend:K,fireEvent:L,isArray:M,merge:N,pick:I}=B;class v extends F{constructor(){super(...arguments);this.points=this.options=this.data=void 0}alignDataLabel(p,a,b,f,c){var k=p.series;f=k.options.reversed;let d=p.dlBox||p.shapeArgs,l=b.align,e=b.verticalAlign,m=((k.options||{}).dataLabels||
{}).inside;var g=k.center[1];k=k.getWidthAt((f?2*g-p.plotY:p.plotY)-d.height/2+a.height);k="middle"===e?(d.topWidth-d.bottomWidth)/4:(k-d.bottomWidth)/2;g=d.y;let q=d.x;const h=I(a.height,a.getBBox().height);"middle"===e?g=d.y-d.height/2+h/2:"top"===e&&(g=d.y-d.height+h+b.padding);if("top"===e&&!f||"bottom"===e&&f||"middle"===e)"right"===l?q=d.x-b.padding+k:"left"===l&&(q=d.x+b.padding-k);f={x:q,y:f?g-d.height:g,width:d.bottomWidth,height:d.height};b.verticalAlign="bottom";m&&!p.visible||A.prototype.alignDataLabel.call(this,
p,a,b,f,c);m&&(!p.visible&&p.dataLabel&&(p.dataLabel.placed=!1),p.contrastColor&&a.css({color:p.contrastColor}))}drawDataLabels(){let a=this.data,e=this.options.dataLabels.distance,b,f,c,k=a.length,d,l;for(this.center[2]-=2*e;k--;)c=a[k],f=(b=c.half)?1:-1,l=c.plotY,c.labelDistance=I(c.options.dataLabels&&c.options.dataLabels.distance,e),this.maxLabelDistance=Math.max(c.labelDistance,this.maxLabelDistance||0),d=this.getX(l,b,c),c.labelPosition={natural:{x:0,y:l},computed:{},alignment:b?"right":"left",
connectorPosition:{breakAt:{x:d+(c.labelDistance-5)*f,y:l},touchingSliceAt:{x:d+c.labelDistance*f,y:l}}};h.seriesTypes[this.options.dataLabels.inside?"column":"pie"].prototype.drawDataLabels.call(this)}translate(){function a(a,b){return/%$/.test(a)?b*parseInt(a,10)/100:parseInt(a,10)}let e=0,b=this;var f=b.chart;let c=b.options,k=c.reversed,d=c.ignoreHiddenPoint;var l=f.plotWidth;f=f.plotHeight;let h=0,n=c.center,g=a(n[0],l),q=a(n[1],f),B=a(c.width,l),w,x=a(c.height,f),C=a(c.neckWidth,l),A=a(c.neckHeight,
f),D=q-x/2+x-A;l=b.data;let v,G,F="left"===c.dataLabels.position?1:0,E,r,H,y,t,z,u;b.getWidthAt=function(a){const b=q-x/2;return a>D||x===A?C:C+(B-C)*(1-(a-b)/(x-A))};b.getX=function(a,c,d){return g+(c?-1:1)*(b.getWidthAt(k?2*q-a:a)/2+d.labelDistance)};b.center=[g,q,x];b.centerX=g;l.forEach(function(a){!a.y||!a.isValid()||d&&!1===a.visible||(e+=a.y)});l.forEach(function(a){u=null;G=e?a.y/e:0;r=q-x/2+h*x;t=r+G*x;w=b.getWidthAt(r);E=g-w/2;H=E+w;w=b.getWidthAt(t);y=g-w/2;z=y+w;r>D?(E=y=g-C/2,H=z=g+C/
2):t>D&&(u=t,w=b.getWidthAt(D),y=g-w/2,z=y+w,t=D);k&&(r=2*q-r,t=2*q-t,null!==u&&(u=2*q-u));v=[["M",E,r],["L",H,r],["L",z,t]];null!==u&&v.push(["L",z,u],["L",y,u]);v.push(["L",y,t],["Z"]);a.shapeType="path";a.shapeArgs={d:v};a.percentage=100*G;a.plotX=g;a.plotY=(r+(u||t))/2;a.tooltipPos=[g,a.plotY];a.dlBox={x:y,y:r,topWidth:H-E,bottomWidth:z-y,height:Math.abs(I(u,t)-r),width:NaN};a.slice=m;a.half=F;!a.isValid()||d&&!1===a.visible||(h+=G)});L(b,"afterTranslate")}sortByAngle(a){a.sort(function(a,b){return a.plotY-
b.plotY})}}v.defaultOptions=N(F.defaultOptions,{animation:!1,center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,size:!0,dataLabels:{connectorWidth:1,verticalAlign:"middle"},states:{select:{color:"#cccccc",borderColor:"#000000"}}});K(v.prototype,{animate:m});J(a,"afterHideAllOverlappingLabels",function(){this.series.forEach(function(a){let e=a.options&&a.options.dataLabels;M(e)&&(e=e[0]);a.is("pie")&&a.placeDataLabels&&e&&!e.inside&&a.placeDataLabels()})});
h.registerSeriesType("funnel",v);"";return v});m(a,"Series/Pyramid/PyramidSeries.js",[a["Series/Funnel/FunnelSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,m,h){({merge:h}=h);class n extends a{constructor(){super(...arguments);this.points=this.options=this.data=void 0}}n.defaultOptions=h(a.defaultOptions,{neckWidth:"0%",neckHeight:"0%",reversed:!0});m.registerSeriesType("pyramid",n);"";return n});m(a,"masters/modules/funnel.src.js",[],function(){})});
//# sourceMappingURL=funnel.js.map