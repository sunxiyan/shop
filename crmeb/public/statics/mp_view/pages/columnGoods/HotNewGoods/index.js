(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/columnGoods/HotNewGoods/index"],{3538:function(t,e,n){},3947:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("83b5"),i=n("6f6b"),a=c(n("882e"));function c(t){return t&&t.__esModule?t:{default:t}}var r=function(){n.e("components/emptyPage").then(function(){return resolve(n("e194"))}.bind(null,n)).catch(n.oe)},s=function(){Promise.all([n.e("common/vendor"),n.e("components/goodList/index")]).then(function(){return resolve(n("0045"))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("components/pageFooter/index")]).then(function(){return resolve(n("e22b"))}.bind(null,n)).catch(n.oe)},l=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("487b"))}.bind(null,n)).catch(n.oe)},d={name:"HotNewGoods",components:{GoodList:s,emptyPage:r,home:l,pageFooter:u},props:{},mixins:[a.default],data:function(){return{imgUrls:[],goodsList:[],name:"",icon:"",type:0,typeName:["","精品推荐","热门榜单","首发新品","促销单品"],autoplay:!0,circular:!0,interval:3e3,duration:500,page:1,limit:8,isScroll:!0,footerStatus:!1}},onLoad:function(e){t.getStorageSync("FOOTER_BAR")&&(this.footerStatus=!0,t.hideTabBar()),this.type=e.type,this.titleInfo(),this.name=e.name,t.setNavigationBarTitle({title:e.name}),this.getIndexGroomList()},methods:{titleInfo:function(){"1"===this.type?this.icon="icon-jingpintuijian":"2"===this.type?this.icon="icon-remen":("3"===this.type||"4"===this.type)&&(this.icon="icon-xinpin")},goPages:function(e){var n=e.link||"";(0,i.goPage)().then((function(e){-1!=n.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(n),t.navigateTo({url:n}))}))},getIndexGroomList:function(){if(this.isScroll){var t=this,e=this.type;(0,o.getGroomList)(e,{page:this.page,limit:this.limit}).then((function(e){t.imgUrls=e.data.banner,t.goodsList=t.goodsList.concat(e.data.list),t.isScroll=e.data.list.length>=t.limit,t.page++})).catch((function(e){t.$util.Tips({title:e})}))}},onReachBottom:function(){this.getIndexGroomList()}}};e.default=d}).call(this,n("543d")["default"])},"579a":function(t,e,n){"use strict";n.r(e);var o=n("ac7e"),i=n("a9b8");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("b17d");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=s.exports},a9b8:function(t,e,n){"use strict";n.r(e);var o=n("3947"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},ac7e:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},b17d:function(t,e,n){"use strict";var o=n("3538"),i=n.n(o);i.a},ee50:function(t,e,n){"use strict";(function(t){n("8d15");o(n("66fd"));var e=o(n("579a"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["ee50","common/runtime","common/vendor"]]]);