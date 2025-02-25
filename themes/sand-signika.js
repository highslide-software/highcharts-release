!/**
 * Highcharts JS v12.1.2-modified (2025-02-25)
 * @module highcharts/themes/sand-signika
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/themes/sand-signika",["highcharts/highcharts"],function(e){return t(e)}):"object"==typeof exports?exports["highcharts/themes/sand-signika"]=t(e._Highcharts):e.Highcharts=t(e.Highcharts)}("undefined"==typeof window?this:window,e=>(()=>{"use strict";var t,o={944:t=>{t.exports=e}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};s.d(i,{default:()=>p});var a=s(944),n=s.n(a);let{setOptions:l}=n(),{addEvent:c,createElement:h}=n();!function(e){e.options={colors:["#f45b5b","#8085e9","#8d4654","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:null,style:{fontFamily:"Signika, serif"}},title:{style:{color:"black",fontSize:"16px",fontWeight:"bold"}},subtitle:{style:{color:"black"}},tooltip:{borderWidth:0},legend:{backgroundColor:"#E0E0E8",itemStyle:{fontWeight:"bold",fontSize:"13px"}},xAxis:{labels:{style:{color:"#6e6e70"}}},yAxis:{labels:{style:{color:"#6e6e70"}}},plotOptions:{series:{shadow:!0},candlestick:{lineColor:"#404048"},map:{shadow:!1}},navigator:{xAxis:{gridLineColor:"#D0D0D8"}},rangeSelector:{buttonTheme:{fill:"white",stroke:"#C0C0C8","stroke-width":1,states:{select:{fill:"#D0D0D8"}}}},scrollbar:{trackBorderColor:"#C0C0C8"}},e.apply=function(){h("link",{href:"https://fonts.googleapis.com/css?family=Signika:400,700",rel:"stylesheet",type:"text/css"},null,document.getElementsByTagName("head")[0]),c(n().Chart,"afterGetContainer",function(){this.container.style.background="url(https://www.highcharts.com/samples/graphics/sand.png)"}),l(e.options)}}(t||(t={}));let d=t;n().theme=d.options,d.apply();let p=n();return i.default})());