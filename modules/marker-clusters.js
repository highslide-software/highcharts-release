!/**
 * Highcharts JS v12.1.2-modified (2025-02-25)
 * @module highcharts/modules/marker-clusters
 * @requires highcharts
 *
 * Marker clusters module for Highcharts
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/marker-clusters",["highcharts/highcharts"],function(t){return e(t)}):"object"==typeof exports?exports["highcharts/modules/marker-clusters"]=e(t._Highcharts):t.Highcharts=e(t.Highcharts)}("undefined"==typeof window?this:window,t=>(()=>{"use strict";let e;var i,s={944:e=>{e.exports=t}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return s[t](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var a={};o.d(a,{default:()=>tC});var n=o(944),l=o.n(n);let p={cluster:{enabled:!1,allowOverlap:!0,animation:{duration:500},drillToCluster:!0,minimumClusterSize:2,layoutAlgorithm:{gridSize:50,distance:40,kmeansThreshold:100},marker:{symbol:"cluster",radius:15,lineWidth:0,lineColor:"#ffffff"},dataLabels:{enabled:!0,format:"{point.clusterPointsAmount}",verticalAlign:"middle",align:"center",style:{color:"contrast"},inside:!0}},tooltip:{clusterFormat:"<span>Clustered points: {point.clusterPointsAmount}</span><br/>"}};!function(t){t.setLength=function(t,e,i){return Array.isArray(t)?(t.length=e,t):t[i?"subarray":"slice"](0,e)},t.splice=function(t,e,i,s,r=[]){if(Array.isArray(t))return Array.isArray(r)||(r=Array.from(r)),{removed:t.splice(e,i,...r),array:t};let o=Object.getPrototypeOf(t).constructor,a=t[s?"subarray":"slice"](e,e+i),n=new o(t.length-i+r.length);return n.set(t.subarray(0,e),0),n.set(r,e),n.set(t.subarray(e+i),e+r.length),{removed:a,array:n}}}(i||(i={}));let{setLength:u,splice:h}=i,{fireEvent:d,objectEach:c,uniqueKey:m}=l(),f=class{constructor(t={}){this.autoId=!t.id,this.columns={},this.id=t.id||m(),this.modified=this,this.rowCount=0,this.versionTag=m();let e=0;c(t.columns||{},(t,i)=>{this.columns[i]=t.slice(),e=Math.max(e,t.length)}),this.applyRowCount(e)}applyRowCount(t){this.rowCount=t,c(this.columns,(e,i)=>{e.length!==t&&(this.columns[i]=u(e,t))})}deleteRows(t,e=1){if(e>0&&t<this.rowCount){let i=0;c(this.columns,(s,r)=>{this.columns[r]=h(s,t,e).array,i=s.length}),this.rowCount=i}d(this,"afterDeleteRows",{rowIndex:t,rowCount:e}),this.versionTag=m()}getColumn(t,e){return this.columns[t]}getColumns(t,e){return(t||Object.keys(this.columns)).reduce((t,e)=>(t[e]=this.columns[e],t),{})}getRow(t,e){return(e||Object.keys(this.columns)).map(e=>this.columns[e]?.[t])}setColumn(t,e=[],i=0,s){this.setColumns({[t]:e},i,s)}setColumns(t,e,i){let s=this.rowCount;c(t,(t,e)=>{this.columns[e]=t.slice(),s=t.length}),this.applyRowCount(s),i?.silent||(d(this,"afterSetColumns"),this.versionTag=m())}setRow(t,e=this.rowCount,i,s){let{columns:r}=this,o=i?this.rowCount+1:e+1;c(t,(t,a)=>{let n=r[a]||s?.addColumns!==!1&&Array(o);n&&(i?n=h(n,e,0,!0,[t]).array:n[e]=t,r[a]=n)}),o>this.rowCount&&this.applyRowCount(o),s?.silent||(d(this,"afterSetRows"),this.versionTag=m())}},{animObject:g}=l(),{cluster:x}=p,{addEvent:y,defined:C,error:k,isArray:I,isFunction:b,isObject:M,isNumber:S,merge:w,objectEach:A,relativeLength:P,syncTimeout:X}=l(),Y={grid:function(t,e,i,s){let r,o,a,n,l;let p={},u=this.getGridOffset(),h=this.getScaledGridSize(s);for(l=0;l<t.length;l++){let s=tt(this,{x:t[l],y:e[l]});r=s.x-u.plotLeft,o=s.y-u.plotTop,a=Math.floor(r/h),p[n=Math.floor(o/h)+":"+a]??(p[n]=[]),p[n].push({dataIndex:i[l],x:t[l],y:e[l]})}return p},kmeans:function(t,e,i,s){let r=[],o=[],a={},n=s.processedDistance||x.layoutAlgorithm.distance,l=s.iterations,p=0,u=!0,h=0,d=0,c,m=[];s.processedGridSize=s.processedDistance;let f=this.markerClusterAlgorithms?this.markerClusterAlgorithms.grid.call(this,t,e,i,s):{};for(let t in f)f[t].length>1&&(c=R(f[t]),r.push({posX:c.x,posY:c.y,oldX:0,oldY:0,startPointsLen:f[t].length,points:[]}));for(;u;){for(let t of r)t.points.length=0;o.length=0;for(let s=0;s<t.length;s++)h=t[s],d=e[s],(m=this.getClusterDistancesFromPoint(r,h,d)).length&&m[0].distance<n?r[m[0].clusterIndex].points.push({x:h,y:d,dataIndex:i[s]}):o.push({x:h,y:d,dataIndex:i[s]});for(let t=0;t<r.length;t++)1===r[t].points.length&&(m=this.getClusterDistancesFromPoint(r,r[t].points[0].x,r[t].points[0].y))[1].distance<n&&(r[m[1].clusterIndex].points.push(r[t].points[0]),r[m[0].clusterIndex].points.length=0);u=!1;for(let t=0;t<r.length;t++)c=R(r[t].points),r[t].oldX=r[t].posX,r[t].oldY=r[t].posY,r[t].posX=c.x,r[t].posY=c.y,(r[t].posX>r[t].oldX+1||r[t].posX<r[t].oldX-1||r[t].posY>r[t].oldY+1||r[t].posY<r[t].oldY-1)&&(u=!0);l&&(u=p<l-1),p++}for(let t=0,e=r.length;t<e;++t)a["cluster"+t]=r[t].points;for(let t=0,e=o.length;t<e;++t)a["noise"+t]=[o[t]];return a},optimizedKmeans:function(t,e,i,s){let r=s.processedDistance||x.layoutAlgorithm.gridSize,o=this.getRealExtremes(),a=(this.options.cluster||{}).marker,n,l={},p,u;if(!this.markerClusterInfo||this.initMaxX&&this.initMaxX<o.maxX||this.initMinX&&this.initMinX>o.minX||this.initMaxY&&this.initMaxY<o.maxY||this.initMinY&&this.initMinY>o.minY)this.initMaxX=o.maxX,this.initMinX=o.minX,this.initMaxY=o.maxY,this.initMinY=o.minY,l=this.markerClusterAlgorithms?this.markerClusterAlgorithms.kmeans.call(this,t,e,i,s):{},this.baseClusters=null;else{for(let t of(this.baseClusters??(this.baseClusters={clusters:this.markerClusterInfo.clusters,noise:this.markerClusterInfo.noise}),this.baseClusters.clusters)){for(let e of(t.pointsOutside=[],t.pointsInside=[],t.data)){let i=tt(this,e),s=tt(this,t);n=Math.sqrt(Math.pow(i.x-s.x,2)+Math.pow(i.y-s.y,2)),p=r-(u=t.clusterZone?.marker?.radius?t.clusterZone.marker.radius:a?.radius?a.radius:x.marker.radius)>=0?r-u:u,n>u+p&&C(t.pointsOutside)?t.pointsOutside.push(e):C(t.pointsInside)&&t.pointsInside.push(e)}t.pointsInside.length&&(l[t.id]=t.pointsInside);let e=0;for(let i of t.pointsOutside)l[t.id+"_noise"+e++]=[i]}for(let t of this.baseClusters.noise)l[t.id]=t.data}return l}},L,z=[],D=0;function O(t,e,i){t.attr({opacity:e}).animate({opacity:1},i)}function T(t,e,i,s){for(let r of(v(t,s,i,!0,!0),e))r.point?.destroy?.()}function v(t,e,i,s,r){t.point&&(s&&t.point.graphic&&(t.point.graphic.show(),O(t.point.graphic,e,i)),r&&t.point.dataLabel&&(t.point.dataLabel.show(),O(t.point.dataLabel,e,i)))}function R(t){let e=t.length,i=0,s=0;for(let r=0;r<e;r++)i+=t[r].x,s+=t[r].y;return{x:i/e,y:s/e}}function V(t,e){let i=[];return i.length=e,t.clusters.forEach(function(t){t.data.forEach(function(t){i[t.dataIndex]=t})}),t.noise.forEach(function(t){i[t.data[0].dataIndex]=t.data[0]}),i}function j(){return Math.random().toString(36).substring(2,7)+"-"+D++}function E(t,e,i){t.point&&(e&&t.point.graphic&&t.point.graphic.hide(),i&&t.point.dataLabel&&t.point.dataLabel.hide())}function G(t){(t.point||t.target).firePointEvent("drillToCluster",t,function(t){let e=t.point||t.target,i=e.series,{xAxis:s,yAxis:r,chart:o}=i,{inverted:a,mapView:n,pointer:l}=o;if(i.options.cluster?.drillToCluster&&e.clusteredData){let t=e.clusteredData.map(t=>t.x).sort((t,e)=>t-e),i=e.clusteredData.map(t=>t.y).sort((t,e)=>t-e),p=t[0],u=t[t.length-1],h=i[0],d=i[i.length-1],c=Math.abs((u-p)*.1),m=Math.abs((d-h)*.1),f=Math.min(p,u)-c,g=Math.max(p,u)+c,x=Math.min(h,d)-m,y=Math.max(h,d)+m;if(n)n.fitToBounds({x1:f,x2:g,y1:x,y2:y});else if(s&&r){let t=s.toPixels(f),e=s.toPixels(g),i=r.toPixels(x),n=r.toPixels(y);a&&([t,e,i,n]=[i,n,t,e]),t>e&&([t,e]=[e,t]),i>n&&([i,n]=[n,i]),l&&(l.zoomX=!0,l.zoomY=!0),o.transform({from:{x:t,y:i,width:e-t,height:n-i}})}}})}function F(t,e){let{chart:i,xAxis:s,yAxis:r}=t;return i.mapView?i.mapView.pixelsToProjectedUnits(e):{x:s?s.toValue(e.x):0,y:r?r.toValue(e.y):0}}function H(t){let e=this.chart,i=e.mapView,s=g(this.options.cluster?.animation),r=s.duration||500,o=this.markerClusterInfo?.pointsState,a=o?.newState,n=o?.oldState,l=[],p,u,h,d=0,c=0,m=0,f=!1,x=!1;if(n&&a){let o=tt(this,u=a[t.stateId]);c=o.x-(i?0:e.plotLeft),m=o.y-(i?0:e.plotTop),1===u.parentsId.length?(p=n[a?.[t.stateId].parentsId[0]],u.point?.graphic&&p.point?.plotX&&p.point.plotY&&(p.point.plotX!==u.point.plotX||p.point.plotY!==u.point.plotY)&&(h=u.point.graphic.getBBox(),d=u.point.graphic?.isImg?0:h.width/2,u.point.graphic.attr({x:p.point.plotX-d,y:p.point.plotY-d}),u.point.graphic.animate({x:c-(u.point.graphic.radius||0),y:m-(u.point.graphic.radius||0)},s,function(){x=!0,p.point?.destroy?.()}),u.point.dataLabel?.alignAttr&&p.point.dataLabel?.alignAttr&&(u.point.dataLabel.attr({x:p.point.dataLabel.alignAttr.x,y:p.point.dataLabel.alignAttr.y}),u.point.dataLabel.animate({x:u.point.dataLabel.alignAttr.x,y:u.point.dataLabel.alignAttr.y},s)))):0===u.parentsId.length?(E(u,!0,!0),X(function(){v(u,.1,s,!0,!0)},r/2)):(E(u,!0,!0),u.parentsId.forEach(function(t){n?.[t]&&(p=n[t],l.push(p),p.point?.graphic&&(f=!0,p.point.graphic.show(),p.point.graphic.animate({x:c-(p.point.graphic.radius||0),y:m-(p.point.graphic.radius||0),opacity:.4},s,function(){x=!0,T(u,l,s,.7)}),p.point.dataLabel&&-9999!==p.point.dataLabel.y&&u.point?.dataLabel?.alignAttr&&(p.point.dataLabel.show(),p.point.dataLabel.animate({x:u.point.dataLabel.alignAttr.x,y:u.point.dataLabel.alignAttr.y,opacity:.4},s))))}),X(function(){x||T(u,l,s,.85)},r),f||X(function(){T(u,l,s,.1)},r/2))}}function W(){this.markerClusterSeriesData?.forEach(t=>{t?.destroy?.()}),this.markerClusterSeriesData=null}function Z(){let t,e,i,s,r,o,a,n,l,p,u,h,d,c,m;let g=this,{chart:k}=g,I=k.mapView,M=g.getColumn("x"),w=g.getColumn("y"),A=g.options.cluster,X=g.getRealExtremes(),Y=[],z=[],D=[];if(I&&g.is("mappoint")&&M&&w&&g.options.data?.forEach((t,e)=>{let i=g.projectPoint(t);i&&(M[e]=i.x,w[e]=i.y)}),A?.enabled&&M?.length&&w?.length&&!k.polar){u=A.layoutAlgorithm.type,(c=A.layoutAlgorithm).processedGridSize=P(c.gridSize||x.layoutAlgorithm.gridSize,k.plotWidth),c.processedDistance=P(c.distance||x.layoutAlgorithm.distance,k.plotWidth),s=c.kmeansThreshold||x.layoutAlgorithm.kmeansThreshold;let I=c.processedGridSize/2,O=F(g,{x:0,y:0}),T=F(g,{x:I,y:I});r=Math.abs(O.x-T.x),o=Math.abs(O.y-T.y);for(let t=0;t<M.length;t++)!g.dataMaxX&&(C(n)&&C(a)&&C(p)&&C(l)?S(w[t])&&S(p)&&S(l)&&(n=Math.max(M[t],n),a=Math.min(M[t],a),p=Math.max(w[t]||p,p),l=Math.min(w[t]||l,l)):(n=a=M[t],p=l=w[t])),M[t]>=X.minX-r&&M[t]<=X.maxX+r&&(w[t]||X.minY)>=X.minY-o&&(w[t]||X.maxY)<=X.maxY+o&&(Y.push(M[t]),z.push(w[t]),D.push(t));C(n)&&C(a)&&S(p)&&S(l)&&(g.dataMaxX=n,g.dataMinX=a,g.dataMaxY=p,g.dataMinY=l),h=(d=(b(u)?u:g.markerClusterAlgorithms?u&&g.markerClusterAlgorithms[u]?g.markerClusterAlgorithms[u]:Y.length<s?g.markerClusterAlgorithms.kmeans:g.markerClusterAlgorithms.grid:()=>!1).call(this,Y,z,D,c))?g.getClusteredData(d,A):d,A.animation&&g.markerClusterInfo?.pointsState?.oldState?(function(t){for(let e of Object.keys(t))t[e].point?.destroy?.()}(g.markerClusterInfo.pointsState.oldState),t=g.markerClusterInfo.pointsState.newState):t={},e=M.length,i=g.markerClusterInfo,h&&(g.dataTable.modified=new f({columns:{x:h.groupedXData,y:h.groupedYData}}),g.hasGroupedData=!0,g.markerClusterInfo=h,g.groupMap=h.groupMap),L.apply(this),h&&g.markerClusterInfo&&(g.markerClusterInfo.clusters?.forEach(t=>{(m=g.points[t.index]).isCluster=!0,m.clusteredData=t.data,m.clusterPointsAmount=t.data.length,t.point=m,y(m,"click",G)}),g.markerClusterInfo.noise?.forEach(t=>{t.point=g.points[t.index]}),A.animation&&g.markerClusterInfo&&(g.markerClusterInfo.pointsState={oldState:t,newState:g.getPointsState(h,i,e)}),A.animation?this.hideClusteredData():this.destroyClusteredData(),this.markerClusterSeriesData=this.hasGroupedData?this.points:null)}else L.apply(this)}function _(t,e,i){let s=[];for(let r=0;r<t.length;r++){let o=tt(this,{x:e,y:i}),a=tt(this,{x:t[r].posX,y:t[r].posY}),n=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2));s.push({clusterIndex:r,distance:n})}return s.sort((t,e)=>t.distance-e.distance)}function B(t,e){let i=this.options.data,s=[],r=[],o=[],a=[],n=[],l=Math.max(2,e.minimumClusterSize||2),p=0,u,h,d,c,m,f,g,y,C,S,A,P;if(b(e.layoutAlgorithm.type)&&!this.isValidGroupedDataObject(t))return k("Highcharts marker-clusters module: The custom algorithm result is not valid!",!1,this.chart),!1;for(let k in t)if(t[k].length>=l){if(d=t[k],u=j(),m=d.length,e.zones)for(let t=0;t<e.zones.length;t++)m>=e.zones[t].from&&m<=e.zones[t].to&&((A=e.zones[t]).zoneIndex=t,S=e.zones[t].marker,P=e.zones[t].className);C=R(d),"grid"!==e.layoutAlgorithm.type||e.allowOverlap?g={x:C.x,y:C.y}:(f=this.options.marker||{},g=this.preventClusterCollisions({x:C.x,y:C.y,key:k,groupedData:t,gridSize:this.getScaledGridSize(e.layoutAlgorithm),defaultRadius:f.radius||3+(f.lineWidth||0),clusterRadius:S&&S.radius?S.radius:(e.marker||{}).radius||x.marker.radius}));for(let t=0;t<m;t++)d[t].parentStateId=u;if(o.push({x:g.x,y:g.y,id:k,stateId:u,index:p,data:d,clusterZone:A,clusterZoneClassName:P}),s.push(g.x),r.push(g.y),n.push({options:{formatPrefix:"cluster",dataLabels:e.dataLabels,marker:w(e.marker,{states:e.states},S||{})}}),i?.length)for(let t=0;t<m;t++)M(i[d[t].dataIndex])&&(d[t].options=i[d[t].dataIndex]);p++,S=null}else for(let e=0;e<t[k].length;e++)h=t[k][e],u=j(),y=null,c=i?.[h.dataIndex],s.push(h.x),r.push(h.y),h.parentStateId=u,a.push({x:h.x,y:h.y,id:k,stateId:u,index:p,data:t[k]}),y=c&&"object"==typeof c&&!I(c)?w(c,{x:h.x,y:h.y}):{userOptions:c,x:h.x,y:h.y},n.push({options:y}),p++;return{clusters:o,noise:a,groupedXData:s,groupedYData:r,groupMap:n}}function q(){let{chart:t,xAxis:e,yAxis:i}=this,s=0;return{plotLeft:e&&this.dataMinX&&this.dataMaxX?e.reversed?e.toPixels(this.dataMaxX):e.toPixels(this.dataMinX):t.plotLeft,plotTop:i&&this.dataMinY&&this.dataMaxY?i.reversed?i.toPixels(this.dataMinY):i.toPixels(this.dataMaxY):t.plotTop}}function N(t,e,i){let s,r;let o=e?V(e,i):[],a=V(t,i),n={};z=[],t.clusters.forEach(t=>{n[t.stateId]={x:t.x,y:t.y,id:t.stateId,point:t.point,parentsId:[]}}),t.noise.forEach(t=>{n[t.stateId]={x:t.x,y:t.y,id:t.stateId,point:t.point,parentsId:[]}});for(let t=0;t<a.length;t++)s=a[t],r=o[t],s?.parentStateId&&r?.parentStateId&&n[s.parentStateId]?.parentsId.indexOf(r.parentStateId)===-1&&(n[s.parentStateId].parentsId.push(r.parentStateId),-1===z.indexOf(r.parentStateId)&&z.push(r.parentStateId));return n}function U(){let t=this.chart,e=t.mapView?0:t.plotLeft,i=F(this,{x:e,y:t.mapView?0:t.plotTop}),s=F(this,{x:e+t.plotWidth,y:e+t.plotHeight}),r=i.x,o=s.x,a=i.y,n=s.y;return{minX:Math.min(r,o),maxX:Math.max(r,o),minY:Math.min(a,n),maxY:Math.max(a,n)}}function K(t){let e=this.xAxis,i=this.chart.mapView,s=t.processedGridSize||x.layoutAlgorithm.gridSize,r=!0,o=1,a=1;this.gridValueSize||(i?this.gridValueSize=s/i.getScale():this.gridValueSize=Math.abs(e.toValue(s)-e.toValue(0)));let n=+(s/(i?this.gridValueSize*i.getScale():e.toPixels(this.gridValueSize)-e.toPixels(0))).toFixed(14);for(;r&&1!==n;){let t=Math.pow(2,o);n>.75&&n<1.25?r=!1:n>=1/t&&n<1/t*2?(r=!1,a=t):n<=t&&n>t/2&&(r=!1,a=1/t),o++}return s/a/n}function J(){let t=this.markerClusterSeriesData,e=this.markerClusterInfo?.pointsState?.oldState,i=z.map(t=>e?.[t].point?.id||"");t?.forEach(t=>{t&&i.indexOf(t.id)!==-1?(t.graphic&&t.graphic.hide(),t.dataLabel&&t.dataLabel.hide()):t?.destroy?.()})}function Q(t){let e=!1;return!!M(t)&&(A(t,t=>{if(e=!0,!I(t)||!t.length){e=!1;return}for(let i=0;i<t.length;i++)if(!M(t[i])||!t[i].x||!t[i].y){e=!1;return}}),e)}function $(t){let[e,i]=t.key.split(":").map(parseFloat),s=t.gridSize,r=t.groupedData,o=t.defaultRadius,a=t.clusterRadius,n=i*s,l=e*s,p=tt(this,t),u=[],h=this.options.cluster?.marker,d=this.options.cluster?.zones,c=this.getGridOffset(),m=p.x,f=p.y,g=0,y=0,k,I,b,M,S,w,A,P,X,Y,L,z;m-=c.plotLeft,f-=c.plotTop;for(let r=1;r<5;r++)for(A=0,b=r%2?-1:1,M=r<3?-1:1,S=Math.floor((m+b*a)/s),z=[(w=Math.floor((f+M*a)/s))+":"+S,w+":"+i,e+":"+S];A<z.length;A++)-1===u.indexOf(z[A])&&z[A]!==t.key&&u.push(z[A]);for(let t of u)if(r[t]){r[t].posX||(Y=R(r[t]),r[t].posX=Y.x,r[t].posY=Y.y);let p=tt(this,{x:r[t].posX||0,y:r[t].posY||0});if(k=p.x-c.plotLeft,I=p.y-c.plotTop,[X,P]=t.split(":").map(parseFloat),d){g=r[t].length;for(let t=0;t<d.length;t++)g>=d[t].from&&g<=d[t].to&&(y=C(d[t].marker?.radius)?d[t].marker.radius||0:h?.radius?h.radius:x.marker.radius)}r[t].length>1&&0===y&&h?.radius?y=h.radius:1===r[t].length&&(y=o),L=a+y,y=0,P!==i&&Math.abs(m-k)<L&&(m=P-i<0?n+a:n+s-a),X!==e&&Math.abs(f-I)<L&&(f=X-e<0?l+a:l+s-a)}let D=F(this,{x:m+c.plotLeft,y:f+c.plotTop});return r[t.key].posX=D.x,r[t.key].posY=D.y,D}function tt(t,e){let{chart:i,xAxis:s,yAxis:r}=t;return i.mapView?i.mapView.projectedUnitsToPixels(e):{x:s?s.toPixels(e.x):0,y:r?r.toPixels(e.y):0}}let te={compose:function(t,e){let i=e.prototype;!i.markerClusterAlgorithms&&(L=i.generatePoints,i.markerClusterAlgorithms=Y,i.animateClusterPoint=H,i.destroyClusteredData=W,i.generatePoints=Z,i.getClusterDistancesFromPoint=_,i.getClusteredData=B,i.getGridOffset=q,i.getPointsState=N,i.getRealExtremes=U,i.getScaledGridSize=K,i.hideClusteredData=J,i.isValidGroupedDataObject=Q,i.preventClusterCollisions=$,y(e,"destroy",i.destroyClusteredData),t.plotOptions&&(t.plotOptions.series=w(t.plotOptions.series,p)))}},{animObject:ti}=l(),{defaultOptions:ts}=l(),{composed:tr}=l(),{addEvent:to,defined:ta,error:tn,isFunction:tl,merge:tp,pushUnique:tu,syncTimeout:th}=l();function td(){let t=this.chart,e=0;for(let i of t.series)i.markerClusterInfo&&(e=ti((i.options.cluster||{}).animation).duration||0);th(()=>{t.tooltip&&t.tooltip.destroy()},e)}function tc(){for(let t of this.series||[])if(t.markerClusterInfo){let e=t.options.cluster,i=((t.markerClusterInfo||{}).pointsState||{}).oldState;if((e||{}).animation&&t.markerClusterInfo&&0===(t.chart.pointer?.pinchDown||[]).length&&"pan"!==((t.xAxis||{}).eventArgs||{}).trigger&&i&&Object.keys(i).length){for(let e of t.markerClusterInfo.clusters)t.animateClusterPoint(e);for(let e of t.markerClusterInfo.noise)t.animateClusterPoint(e)}}}function tm(t){let e=(((t.point||t.target).series.options.cluster||{}).events||{}).drillToCluster;tl(e)&&e.call(this,t)}function tf(){if(this.dataGroup)return tn("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.",!1,this.series.chart),!1}function tg(){let t=(this.options.cluster||{}).drillToCluster;if(this.markerClusterInfo&&this.markerClusterInfo.clusters)for(let e of this.markerClusterInfo.clusters)e.point&&e.point.graphic&&(e.point.graphic.addClass("highcharts-cluster-point"),t&&e.point&&(e.point.graphic.css({cursor:"pointer"}),e.point.dataLabel&&e.point.dataLabel.css({cursor:"pointer"})),ta(e.clusterZone)&&e.point.graphic.addClass(e.clusterZoneClassName||"highcharts-cluster-zone-"+e.clusterZone.zoneIndex))}function tx(t,i,s,r){let o=s/2,a=r/2,n=e.arc(t+o,i+a,o-4,a-4,{start:.5*Math.PI,end:2.5*Math.PI,open:!1}),l=e.arc(t+o,i+a,o-3,a-3,{start:.5*Math.PI,end:2.5*Math.PI,innerR:o-2,open:!1});return e.arc(t+o,i+a,o-1,a-1,{start:.5*Math.PI,end:2.5*Math.PI,innerR:o,open:!1}).concat(l,n)}(ts.plotOptions||{}).series=tp((ts.plotOptions||{}).series,p);let ty=l();({compose:function(t,e,i,s){if(tu(tr,"MarkerClusters")){let r=s.prototype.pointClass,{scatter:o}=s.types;to(t,"setExtremes",td),to(e,"render",tc),to(r,"drillToCluster",tm),to(r,"update",tf),to(s,"afterRender",tg),o&&te.compose(i,o)}}}).compose(ty.Axis,ty.Chart,ty.defaultOptions,ty.Series),({compose:function(t){(e=t.prototype.symbols).cluster=tx}}).compose(ty.SVGRenderer);let tC=l();return a.default})());