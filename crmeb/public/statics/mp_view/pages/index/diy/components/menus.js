(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/menus"],{2723:function(t,e,n){},"446f":function(t,e,n){"use strict";n.r(e);var i=n("4b78"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},"4b78":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"menus",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{interval:3e3,duration:500,menus:this.dataConfig.menuConfig.list||[],titleColor:this.dataConfig.titleColor.color[0].item,mbConfig:this.dataConfig.mbConfig.val,rowsNum:this.dataConfig.rowsNum.type,number:this.dataConfig.number.type,isMany:this.dataConfig.tabConfig.tabVal,menuStyle:this.dataConfig.menuStyle.type,docConfig:this.dataConfig.pointerStyle.type,dotColor:this.dataConfig.pointerColor.color[0].item,bgColor:this.dataConfig.bgColor.color[0].item,bgStyle:this.dataConfig.bgStyle.type,prConfig:this.dataConfig.prConfig.val,navHigh:0,menuList:[],active:0}},created:function(){},mounted:function(){var t=this;0===this.rowsNum?0===this.number?this.pageNum(6):1===this.number?this.pageNum(8):this.pageNum(10):1===this.rowsNum?0===this.number?this.pageNum(9):1===this.number?this.pageNum(12):this.pageNum(15):0===this.number?this.pageNum(12):1===this.number?this.pageNum(16):this.pageNum(20),this.$nextTick((function(){if(t.menuList.length&&t.isMany){var e=t;setTimeout((function(){e.menuHeight()}),100)}}))},methods:{bannerfun:function(t){this.active=t.detail.current},menuHeight:function(){var e=this,n=t.createSelectorQuery().in(this);n.select("#nav0").boundingClientRect((function(t){e.navHigh=t.height})).exec()},pageNum:function(t){for(var e=Math.ceil(this.menus.length/t),n=new Array,i=0;i<e;i++){var a=this.menus.slice(i*t,i*t+t);a.length&&n.push({list:a})}this.$set(this,"menuList",n)},menusTap:function(e){-1!=e.indexOf("http")?t.navigateTo({url:"/pages/annex/web_view/index?url=".concat(e)}):-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(e)?t.navigateTo({url:e}):t.reLaunch({url:e})}}};e.default=n}).call(this,n("543d")["default"])},"60eb":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},b1f4:function(t,e,n){"use strict";var i=n("2723"),a=n.n(i);a.a},e165:function(t,e,n){"use strict";n.r(e);var i=n("60eb"),a=n("446f");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("b1f4");var o,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/menus-create-component',
    {
        'pages/index/diy/components/menus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e165"))
        })
    },
    [['pages/index/diy/components/menus-create-component']]
]);
