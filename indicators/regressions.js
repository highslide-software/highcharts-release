/*
 Highstock JS v11.0.0 (2023-04-26)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Kamil Kulig

 License: www.highcharts.com/license
*/
'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.SymbolClass=function(a,b){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};
$jscomp.Symbol=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(c||"")+"_"+b++,c)}var b=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var c=0,e={next:function(){if(c<a.length){var d=c++;return{value:b(d,a[d]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");
var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};$jscomp.polyfill=function(a,b,c,e){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,e):$jscomp.polyfillUnisolated(a,b,c,e))};
$jscomp.polyfillUnisolated=function(a,b,c,e){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];d in c||(c[d]={});c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,e){var d=a.split(".");a=1===d.length;e=d[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var h=0;h<d.length-1;h++){var g=d[h];g in e||(e[g]={});e=e[g]}d=d[d.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?e[d]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,d,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[d]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(d):$jscomp.POLYFILL_PREFIX+d,d=$jscomp.propertyToPolyfillSymbol[d],
$jscomp.defineProperty(e,d,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.values",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a,c){return c})}},"es8","es3");
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/regressions",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,d,h){a.hasOwnProperty(b)||(a[b]=h.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}
a=a?a._modules:{};b(a,"Stock/Indicators/LinearRegression/LinearRegressionIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){const {sma:c}=a.seriesTypes,{isArray:e,extend:g,merge:f}=b;class k extends c{constructor(){super(...arguments);this.points=this.options=this.data=void 0}getRegressionLineParameters(a,b){const c=this.options.params.index,d=function(a,b){return e(a)?a[b]:a};var f=a.reduce(function(a,b){return b+a},0),n=b.reduce(function(a,b){return d(b,c)+a},
0);f/=a.length;n/=b.length;let p,k,l,h=0,g=0;for(l=0;l<a.length;l++)p=a[l]-f,k=d(b[l],c)-n,h+=p*k,g+=Math.pow(p,2);a=g?h/g:0;return{slope:a,intercept:n-a*f}}getEndPointY(a,b){return a.slope*b+a.intercept}transformXData(a,b){const c=a[0];return a.map(function(a){return(a-c)/b})}findClosestDistance(a){let b,c,d;for(d=1;d<a.length-1;d++)b=a[d]-a[d-1],0<b&&("undefined"===typeof c||b<c)&&(c=b);return c}getValues(a,b){const c=a.xData;a=a.yData;b=b.period;const d={xData:[],yData:[],values:[]},e=this.options.params.xAxisUnit||
this.findClosestDistance(c);let f;let g;for(f=b-1;f<=c.length-1;f++){var k=f-b+1;var h=f+1;g=c[f];var m=c.slice(k,h);k=a.slice(k,h);h=this.transformXData(m,e);m=this.getRegressionLineParameters(h,k);k=this.getEndPointY(m,h[h.length-1]);d.values.push({regressionLineParameters:m,x:g,y:k});d.xData.push(g);d.yData.push(k)}return d}}k.defaultOptions=f(c.defaultOptions,{params:{xAxisUnit:null},tooltip:{valueDecimals:4}});g(k.prototype,{nameBase:"Linear Regression Indicator"});a.registerSeriesType("linearRegression",
k);"";return k});b(a,"Stock/Indicators/LinearRegressionSlopes/LinearRegressionSlopesIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){const {linearRegression:c}=a.seriesTypes,{extend:e,merge:g}=b;class f extends c{constructor(){super(...arguments);this.points=this.options=this.data=void 0}getEndPointY(a){return a.slope}}f.defaultOptions=g(c.defaultOptions);e(f.prototype,{nameBase:"Linear Regression Slope Indicator"});a.registerSeriesType("linearRegressionSlope",
f);"";return f});b(a,"Stock/Indicators/LinearRegressionIntercept/LinearRegressionInterceptIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){const {linearRegression:c}=a.seriesTypes,{extend:e,merge:g}=b;class f extends c{constructor(){super(...arguments);this.points=this.options=this.data=void 0}getEndPointY(a){return a.intercept}}f.defaultOptions=g(c.defaultOptions);e(f.prototype,{nameBase:"Linear Regression Intercept Indicator"});a.registerSeriesType("linearRegressionIntercept",
f);"";return f});b(a,"Stock/Indicators/LinearRegressionAngle/LinearRegressionAngleIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){const {linearRegression:c}=a.seriesTypes,{extend:e,merge:g}=b;class f extends c{constructor(){super(...arguments);this.points=this.options=this.data=void 0}slopeToAngle(a){return 180/Math.PI*Math.atan(a)}getEndPointY(a){return this.slopeToAngle(a.slope)}}f.defaultOptions=g(c.defaultOptions,{tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span>{series.name}: <b>{point.y}\u00b0</b><br/>'}});
e(f.prototype,{nameBase:"Linear Regression Angle Indicator"});a.registerSeriesType("linearRegressionAngle",f);"";return f});b(a,"masters/indicators/regressions.src.js",[],function(){})});
//# sourceMappingURL=regressions.js.map