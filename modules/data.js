!/**
 * Highcharts JS v12.1.2-modified (2025-02-25)
 * @module highcharts/modules/data
 * @requires highcharts
 *
 * Data module
 *
 * (c) 2012-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.Axis,e._Highcharts.Chart,e._Highcharts.Point,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/data",["highcharts/highcharts"],function(e){return t(e,e.Axis,e.Chart,e.Point,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/data"]=t(e._Highcharts,e._Highcharts.Axis,e._Highcharts.Chart,e._Highcharts.Point,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.Axis,e.Highcharts.Chart,e.Highcharts.Point,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t,s,i,r)=>(()=>{"use strict";var a={532:e=>{e.exports=t},960:e=>{e.exports=s},260:e=>{e.exports=i},512:e=>{e.exports=r},944:t=>{t.exports=e}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return a[e](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l={};o.d(l,{default:()=>$});var h=o(944),u=o.n(h);let{win:d}=u(),{discardElement:p,objectEach:c}=u(),m={ajax:function(e){let t={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},s=new XMLHttpRequest;function i(t,s){e.error&&e.error(t,s)}if(!e.url)return!1;s.open((e.type||"get").toUpperCase(),e.url,!0),e.headers?.["Content-Type"]||s.setRequestHeader("Content-Type",t[e.dataType||"json"]||t.text),c(e.headers,function(e,t){s.setRequestHeader(t,e)}),e.responseType&&(s.responseType=e.responseType),s.onreadystatechange=function(){let t;if(4===s.readyState){if(200===s.status){if("blob"!==e.responseType&&(t=s.responseText,"json"===e.dataType))try{t=JSON.parse(t)}catch(e){if(e instanceof Error)return i(s,e)}return e.success?.(t,s)}i(s,s.responseText)}},e.data&&"string"!=typeof e.data&&(e.data=JSON.stringify(e.data)),s.send(e.data)},getJSON:function(e,t){m.ajax({url:e,success:t,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(e,t,s){let i=new d.FormData;c(t,function(e,t){i.append(t,e)}),i.append("b64","true");let{filename:r,type:a}=t;return d.fetch(e,{method:"POST",body:i,...s}).then(e=>{e.ok&&e.text().then(e=>{let t=document.createElement("a");t.href=`data:${a};base64,${e}`,t.download=r,t.click(),p(t)})})}};var f=o(532),g=o.n(f),x=o(960),y=o.n(x),v=o(260),C=o.n(v),T=o(512),N=o.n(T);let{getOptions:R}=u(),{doc:A}=u(),{ajax:Y}=m,{seriesTypes:D}=N(),{addEvent:w,defined:U,extend:b,fireEvent:F,isNumber:O,merge:H,objectEach:S,pick:E,splat:j}=u();function L(e){return!!(e&&(e.rowsURL||e.csvURL||e.columnsURL))}class M{static data(e,t={},s){return new M(e,t,s)}static rowsToColumns(e){let t,s,i,r,a;if(e)for(t=0,a=[],s=e.length;t<s;t++)for(i=0,r=e[t].length;i<r;i++)a[i]||(a[i]=[]),a[i][t]=e[t][i];return a}constructor(e,t={},s){this.rowsToColumns=M.rowsToColumns,this.dateFormats={"YYYY/mm/dd":{regex:/^(\d{4})[\-\/\.](\d{1,2})[\-\/\.](\d{1,2})$/,parser:function(e){return e?Date.UTC(+e[1],+e[2]-1,+e[3]):NaN}},"dd/mm/YYYY":{regex:/^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,parser:function(e){return e?Date.UTC(+e[3],+e[2]-1,+e[1]):NaN},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,parser:function(e){return e?Date.UTC(+e[3],+e[1]-1,+e[2]):NaN}},"dd/mm/YY":{regex:/^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,parser:function(e){if(!e)return NaN;let t=new Date,s=+e[3];return s>t.getFullYear()-2e3?s+=1900:s+=2e3,Date.UTC(s,+e[2]-1,+e[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,parser:function(e){return e?Date.UTC(+e[3]+2e3,+e[1]-1,+e[2]):NaN}}},this.chart=s,this.chartOptions=t,this.options=e,this.rawColumns=[],this.init(e,t,s)}init(e,t,s){let i=e.decimalPoint,r;t&&(this.chartOptions=t),s&&(this.chart=s),"."!==i&&","!==i&&(i=void 0),this.options=e,this.columns=e.columns||this.rowsToColumns(e.rows)||[],this.firstRowAsNames=E(e.firstRowAsNames,this.firstRowAsNames,!0),this.decimalRegex=i&&RegExp("^(-?[0-9]+)"+i+"([0-9]+)$"),void 0!==this.liveDataTimeout&&clearTimeout(this.liveDataTimeout),this.rawColumns=[],this.columns.length&&(this.dataFound(),r=!L(e)),r||(r=this.fetchLiveData()),r||(r=!!this.parseCSV().length),r||(r=!!this.parseTable().length),r||(r=this.parseGoogleSpreadsheet()),!r&&e.afterComplete&&e.afterComplete(this)}getColumnDistribution(){let e=this.chartOptions,t=this.options,s=[],i=function(e="line"){return(D[e].prototype.pointArrayMap||[0]).length},r=function(e="line"){return D[e].prototype.pointArrayMap},a=e?.chart?.type,n=[],o=[],l=t?.seriesMapping||e?.series?.map(function(){return{x:0}})||[],h=0;(e?.series||[]).forEach(e=>{n.push(i(e.type||a))}),l.forEach(e=>{s.push(e.x||0)}),0===s.length&&s.push(0),l.forEach(t=>{let s=new I,l=n[h]||i(a),u=(e?.series??[])[h]??{},d=r(u.type||a),p=d??["y"];(U(t.x)||u.isCartesian||!d)&&s.addColumnReader(t.x,"x"),S(t,function(e,t){"x"!==t&&s.addColumnReader(e,t)});for(let e=0;e<l;e++)s.hasReader(p[e])||s.addColumnReader(void 0,p[e]);o.push(s),h++});let u=r(a);void 0===u&&(u=["y"]),this.valueCount={global:i(a),xColumns:s,individual:n,seriesBuilders:o,globalPointArrayMap:u}}dataFound(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns)),this.getColumnDistribution(),this.parseTypes(),!1!==this.parsed()&&this.complete()}parseCSV(e){let t=this,s=this.columns=[],i=e||this.options,r=i.startColumn||0,a=i.endColumn||Number.MAX_VALUE,n=[],o={",":0,";":0,"	":0},l=i.csv,h=i.startRow||0,u=i.endRow||Number.MAX_VALUE,d,p,c=0;if(l&&i.beforeParse&&(l=i.beforeParse.call(this,l)),l){if(p=l.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(i.lineDelimiter||"\n"),(!h||h<0)&&(h=0),(!u||u>=p.length)&&(u=p.length-1),i.itemDelimiter)d=i.itemDelimiter;else{let e,s,r;e=0,s=0,r=!1,p.some(function(t,i){let r=!1,a,n,l,h="";if(i>13)return!0;for(let i=0;i<t.length;i++){if(a=t[i],n=t[i+1],l=t[i-1],"#"===a)return;if('"'===a){if(r){if('"'!==l&&'"'!==n){for(;" "===n&&i<t.length;)n=t[++i];void 0!==o[n]&&o[n]++,r=!1}}else r=!0}else void 0!==o[a]?(isNaN(Date.parse(h=h.trim()))?(isNaN(h)||!isFinite(h))&&o[a]++:o[a]++,h=""):h+=a;","===a&&s++,"."===a&&e++}}),o[";"]>o[","]?r=";":(o[","],o[";"],r=","),i.decimalPoint||(e>s?i.decimalPoint=".":i.decimalPoint=",",t.decimalRegex=RegExp("^(-?[0-9]+)"+i.decimalPoint+"([0-9]+)$")),d=r}let e=0;for(c=h;c<=u;c++)"#"===p[c][0]?e++:function(e,t,o,l){let h=0,u="",p="",c="",m="",f=0,g=0;function x(t){u=e[t],p=e[t-1],c=e[t+1]}function y(e){n.length<g+1&&n.push([e]),n[g][n[g].length-1]!==e&&n[g].push(e)}function v(){if(r>f||f>a){++f,m="";return}i.columnTypes||(!isNaN(parseFloat(m))&&isFinite(m)?(m=parseFloat(m),y("number")):isNaN(Date.parse(m))?y("string"):(m=m.replace(/\//g,"-"),y("date"))),s.length<g+1&&s.push([]),s[g][t]=m,m="",++g,++f}if(e.trim().length&&"#"!==e.trim()[0]){for(;h<e.length;h++)if(x(h),'"'===u)for(x(++h);h<e.length&&('"'!==u||'"'===p||'"'===c);)('"'!==u||'"'===u&&'"'!==p)&&(m+=u),x(++h);else u===d?v():m+=u;v()}}(p[c],c-h-e);(!i.columnTypes||0===i.columnTypes.length)&&n.length&&n[0].length&&"date"===n[0][1]&&!i.dateFormat&&(i.dateFormat=function(e,s){let r="YYYY/mm/dd",a=[],n=[],o,l=[],h,u=0,d=!1,p;for((!s||s>e.length)&&(s=e.length);u<s;u++)if(void 0!==e[u]&&e[u]?.length)for(p=0,o=e[u].trim().replace(/\//g," ").replace(/\-/g," ").replace(/\./g," ").split(" "),l=["","",""];p<o.length;p++)p<l.length&&(o[p]=parseInt(o[p],10),o[p]&&(n[p]=!n[p]||n[p]<o[p]?o[p]:n[p],void 0!==a[p]?a[p]!==o[p]&&(a[p]=!1):a[p]=o[p],o[p]>31?o[p]<100?l[p]="YY":l[p]="YYYY":o[p]>12&&o[p]<=31?(l[p]="dd",d=!0):l[p].length||(l[p]="mm")));if(d){for(p=0;p<a.length;p++)!1!==a[p]?n[p]>12&&"YY"!==l[p]&&"YYYY"!==l[p]&&(l[p]="YY"):n[p]>12&&"mm"===l[p]&&(l[p]="dd");return(3===l.length&&"dd"===l[1]&&"dd"===l[2]&&(l[2]="YY"),h=l.join("/"),(i.dateFormats||t.dateFormats)[h])?h:(F(t,"deduceDateFailed"),r)}return r}(s[0])),this.dataFound()}return s}parseTable(){let e=this.options,t=this.columns||[],s=e.startRow||0,i=e.endRow||Number.MAX_VALUE,r=e.startColumn||0,a=e.endColumn||Number.MAX_VALUE;if(e.table){let n=e.table;"string"==typeof n&&(n=A.getElementById(n)),[].forEach.call(n.getElementsByTagName("tr"),(e,n)=>{n>=s&&n<=i&&[].forEach.call(e.children,(e,i)=>{let o=t[i-r],l=1;if(("TD"===e.tagName||"TH"===e.tagName)&&i>=r&&i<=a)for(t[i-r]||(t[i-r]=[]),t[i-r][n-s]=e.innerHTML;n-s>=l&&void 0===o[n-s-l];)o[n-s-l]=null,l++})}),this.dataFound()}return t}fetchLiveData(){let e=this,t=this.chart,s=this.options,i=s.enablePolling,r=H(s),a=0,n=1e3*(s.dataRefreshRate||2);return!!L(s)&&(n<1e3&&(n=1e3),delete s.csvURL,delete s.rowsURL,delete s.columnsURL,!function o(l){function h(r,h,u){if(!r||!/^(http|\/|\.\/|\.\.\/)/.test(r))return r&&s.error&&s.error("Invalid URL"),!1;function d(){i&&t.liveDataURL===r&&(e.liveDataTimeout=setTimeout(o,n))}return l&&(clearTimeout(e.liveDataTimeout),t.liveDataURL=r),Y({url:r,dataType:u||"json",success:function(e){t?.series&&h(e),d()},error:function(e,t){return++a<3&&d(),s.error?.(t,e)}}),!0}h(r.csvURL,function(e){t.update({data:{csv:e}})},"text")||h(r.rowsURL,function(e){t.update({data:{rows:e}})})||h(r.columnsURL,function(e){t.update({data:{columns:e}})})}(!0),L(s))}parseGoogleSpreadsheet(){let e=this,t=this.options,s=t.googleSpreadsheetKey,i=this.chart,r=Math.max(1e3*(t.dataRefreshRate||2),4e3),a=()=>{if(t.googleSpreadsheetRange)return t.googleSpreadsheetRange;let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=(e.charAt(t.startColumn||0)||"A")+((t.startRow||0)+1),i=e.charAt(E(t.endColumn,-1))||"ZZ";return U(t.endRow)&&(i+=t.endRow+1),`${s}:${i}`};return s&&(delete t.googleSpreadsheetKey,function i(n){Y({url:["https://sheets.googleapis.com/v4/spreadsheets",s,"values",a(),"?alt=json&majorDimension=COLUMNS&valueRenderOption=UNFORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&key="+t.googleAPIKey].join("/"),dataType:"json",success:function(s){n(s),t.enablePolling&&(e.liveDataTimeout=setTimeout(function(){i(n)},r))},error:function(e,s){return t.error?.(s,e)}})}(function(t){let s=t.values;if(!s||0===s.length)return!1;let r=s.reduce((e,t)=>Math.max(e,t.length),0);s.forEach(e=>{for(let t=0;t<r;t++)void 0===e[t]&&(e[t]=null)}),i?.series?i.update({data:{columns:s}}):(e.columns=s,e.dataFound())})),!1}trim(e,t){return"string"==typeof e&&(e=e.replace(/^\s+|\s+$/g,""),t&&/[\d\s]+/.test(e)&&(e=e.replace(/\s/g,"")),this.decimalRegex&&(e=e.replace(this.decimalRegex,"$1.$2"))),e}parseTypes(){let e=this.columns||[],t=e.length;for(;t--;)this.parseColumn(e[t],t)}parseColumn(e,t){let s=this.rawColumns,i=this.columns=this.columns||[],r=this.firstRowAsNames,a=this.valueCount?.xColumns.indexOf(t)!==-1,n=[],o=this.chartOptions,l=(this.options.columnTypes||[])[t],h=a&&o?.xAxis&&"category"===j(o.xAxis)[0].type||"string"===l,u=U(e.name),d=e.length,p,c,m,f,g,x,y;for(s[t]||(s[t]=[]);d--;)p=n[d]||e[d],m=this.trim(p),c=parseFloat(f=this.trim(p,!0)),void 0===s[t][d]&&(s[t][d]=m),h||0===d&&r&&!u?e[d]=""+m:+f===c?(e[d]=c,c>31536e6&&"float"!==l?e.isDatetime=!0:e.isNumeric=!0,void 0!==e[d+1]&&(y=c>e[d+1])):(m?.length&&(g=this.parseDate(p)),a&&O(g)&&"float"!==l?(n[d]=p,e[d]=g,e.isDatetime=!0,void 0!==e[d+1]&&((x=g>e[d+1])!==y&&void 0!==y&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,d=e.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):e.unsorted=!0),y=x)):(e[d]=""===m?null:m,0!==d&&(e.isDatetime||e.isNumeric)&&(e.mixed=!0)));if(a&&e.mixed&&(i[t]=s[t]),a&&y&&this.options.sort){for(t=0;t<i.length;t++)if(i[t].reverse(),r){let e=i[t].pop();e&&i[t].unshift(e)}}}parseDate(e){let t=this.options.parseDate,s,i,r,a=this.options.dateFormat||this.dateFormat,n;if(t)s=t(e);else if("string"==typeof e){if(a)(r=this.dateFormats[a])||(r=this.dateFormats["YYYY/mm/dd"]),(n=e.match(r.regex))&&(s=r.parser(n));else for(i in this.dateFormats)if(r=this.dateFormats[i],n=e.match(r.regex)){this.dateFormat=a=i,this.alternativeFormat=r.alternative,s=r.parser(n);break}!n&&(e.match(/:.+(GMT|UTC|[Z+\-])/)&&(e=e.replace(/\s*(?:GMT|UTC)?([+\-])(\d\d)(\d\d)$/,"$1$2:$3").replace(/(?:\s+|GMT|UTC)([+\-])/,"$1").replace(/(\d)\s*(?:GMT|UTC|Z)$/,"$1+00:00")),"object"==typeof(n=Date.parse(e))&&null!==n&&n.getTime?s=n.getTime()-6e4*n.getTimezoneOffset():O(n)&&(s=n-6e4*new Date(n).getTimezoneOffset()))}return s}getData(){if(this.columns)return this.rowsToColumns(this.columns)?.slice(1)}parsed(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)}complete(){let e=this.columns=this.columns||[],t=this.options,s=[],i="linear",r,a,n,o,l,h,u,d,p,c,m;if([].length=e.length,t.complete||t.afterComplete){if(this.firstRowAsNames)for(n=0;n<e.length;n++){let t=e[n];U(t.name)||(t.name=E(t.shift(),"").toString())}for(h=0,r=[],p=function(e,t){let s,i,r;let a=[],n=[];for(i=0;i<e;i+=1)a.push(!0);for(s=0;s<t.length;s+=1)for(i=0,r=t[s].getReferencedColumnIndexes();i<r.length;i+=1)a[r[i]]=!1;for(i=0;i<a.length;i+=1)a[i]&&n.push(i);return n}(e?.length||0,this.valueCount.seriesBuilders);h<this.valueCount.seriesBuilders.length;h++)(d=this.valueCount.seriesBuilders[h]).populateColumns(p)&&s.push(d);for(;p.length>0;){for((d=new I).addColumnReader(0,"x"),-1!==(m=p.indexOf(0))&&p.splice(m,1),n=0;n<this.valueCount.global;n++)d.addColumnReader(void 0,this.valueCount.globalPointArrayMap[n]);d.populateColumns(p)&&s.push(d)}if(s.length>0&&s[0].readers.length>0&&void 0!==(c=e?.[s[0].readers[0].columnIndex??-1])&&(c.isDatetime?i="datetime":c.isNumeric||(i="category")),"category"===i)for(h=0;h<s.length;h++)for(l=0,d=s[h];l<d.readers.length;l++)"x"===d.readers[l].configName&&(d.readers[l].configName="name");for(h=0;h<s.length;h++){for(o=0,d=s[h],a=[];o<e[0].length;o++)a[o]=d.read(e,o);r[h]={data:a,pointStart:a[0]&&(d.pointIsArray?a[0]?.[0]:a[0]?.x)||void 0},d.name&&(r[h].name=d.name),"category"===i&&(r[h].turboThreshold=0,r[h].pointStart=0)}u={series:r},"linear"!==i||this.xAxisOptions&&this.xAxisOptions.type!==i?(this.xAxisOptions={type:i},"category"===i&&(this.xAxisOptions.uniqueNames=!1)):i=this.xAxisOptions=void 0,this.chart||H(!0,u,{xAxis:this.xAxisOptions||{}}),t.complete?.(u),t.afterComplete?.(this,u)}}xAxisUpdateHandler(e){let t=this.xAxisOptions;t&&(!e.options.type&&t.type&&(e.type=t.type),e.options.uniqueNames||!1!==t.uniqueNames||(e.uniqueNames=t.uniqueNames))}update(e,t){let s=this.chart,i=s.options;e&&(e.afterComplete=function(e,i){if(!i)return;let r=s.xAxis[0],a=e.xAxisOptions;a&&r&&(r.type!==a.type&&!r.options.type||r.uniqueNames&&!1===a.uniqueNames&&void 0===r.options.uniqueNames)?r.update({},!1):(i?.series||[]).forEach(function(e){delete e.pointStart}),s.update(i,t,!0)},H(!0,i.data,e),i.data?.googleSpreadsheetKey&&!e.columns&&delete i.data.columns,this.init(i.data||{},i))}}w(g(),"afterSetOptions",function(){this.isXAxis&&(!this.chart.xAxis.length||this.chart.xAxis[0]===this)&&this.chart.data?.xAxisUpdateHandler(this)}),w(y(),"init",function(e){let t=this,s=e.args[1],i=R().data,r=e.args[0]||{};if((i||r&&r.data)&&!t.hasDataDef){t.hasDataDef=!0;let a=H(i,r.data);t.data=new M(b(a,{afterComplete:function(e,i){let a,n;if(Object.hasOwnProperty.call(r,"series")){if("object"==typeof r.series)for(a=Math.max(r.series.length,i?.series?.length??0);a--;)n=r.series[a]||{},r.series[a]=H(n,i?.series?.[a]??{});else delete r.series}r=H(i,r),t.data=e,t.init(r,s)}}),r,t),e.preventDefault()}});class I{constructor(){this.readers=[],this.pointIsArray=!0}populateColumns(e){let t=!0;return this.readers.forEach(t=>{void 0===t.columnIndex&&(t.columnIndex=e.shift())}),this.readers.forEach(e=>{void 0===e.columnIndex&&(t=!1)}),t}read(e,t){let s=this.pointIsArray,i=s?[]:{};if(this.readers.forEach(r=>{let a=e[r.columnIndex][t];s?i.push(a):r.configName.indexOf(".")>0?C().prototype.setNestedProperty(i,a,r.configName):i[r.configName]=a}),void 0===this.name&&this.readers.length>=2){let t=[];this.readers.forEach(function(e){("x"===e.configName||"name"===e.configName||"y"===e.configName)&&void 0!==e.columnIndex&&t.push(e.columnIndex)}),t.length>=2&&(t.shift(),t.sort(function(e,t){return e-t})),this.name=e[E(t.shift(),0)].name}return i}addColumnReader(e,t){this.readers.push({columnIndex:e,configName:t}),"x"===t||"y"===t||void 0===t||(this.pointIsArray=!1)}getReferencedColumnIndexes(){let e,t;let s=[];for(e=0;e<this.readers.length;e+=1)void 0!==(t=this.readers[e]).columnIndex&&s.push(t.columnIndex);return s}hasReader(e){let t;for(t=0;t<this.readers.length;t+=1)if(this.readers[t].configName===e)return!0}}let P=u();P.Data=P.Data||M,P.HttpUtilities=P.HttpUtilities||m,P.ajax=P.HttpUtilities.ajax,P.data=P.Data.data,P.getJSON=P.HttpUtilities.getJSON,P.post=P.HttpUtilities.post;let $=u();return l.default})());