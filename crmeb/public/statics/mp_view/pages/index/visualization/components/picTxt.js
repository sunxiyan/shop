(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/picTxt"],{"06f1":function(n,t,e){"use strict";e.r(t);var o=e("5aef"),i=e("f19c");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("1bf1");var r,c=e("f0c5"),f=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"92e1b6ce",null,!1,o["a"],r);t["default"]=f.exports},"1bf1":function(n,t,e){"use strict";var o=e("44b8"),i=e.n(o);i.a},"44b8":function(n,t,e){},"5aef":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={jyfParser:function(){return Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(e.bind(null,"7f3c"))}},i=function(){var n=this,t=n.$createElement;n._self._c},a=[]},b3b3:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e("6f6b");var o=getApp(),i=function(){Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(e("7f3c"))}.bind(null,e)).catch(e.oe)},a={name:"picTxt",props:{dataConfig:{type:Object,default:function(){}}},components:{"jyf-parser":i},watch:{dataConfig:{immediate:!0,handler:function(n,t){n&&(this.description=n.richText.val,this.isShow=n.isShow.val)}}},data:function(){return{description:"",name:this.$options.name,isIframe:o.globalData.isIframe,isShow:!0,tagStyle:{img:"width:100%;display:block",video:"width: 100% !important;"}}},created:function(){},mounted:function(){},methods:{}};t.default=a},f19c:function(n,t,e){"use strict";e.r(t);var o=e("b3b3"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/picTxt-create-component',
    {
        'pages/index/visualization/components/picTxt-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("06f1"))
        })
    },
    [['pages/index/visualization/components/picTxt-create-component']]
]);
