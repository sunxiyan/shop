(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/commission_rank/index"],{"0c3e":function(t,e,n){},"41b2":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},6339:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("b284"),o=n("1e55"),a=n("26cb"),s=r(n("882e"));function r(t){return t&&t.__esModule?t:{default:t}}var u=function(){n.e("components/emptyPage").then(function(){return resolve(n("e194"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/Authorize").then(function(){return resolve(n("5e32"))}.bind(null,n)).catch(n.oe)},d={components:{authorize:c,emptyPage:u},mixins:[s.default],data:function(){return{navList:["周排行","月排行"],active:0,rankList:[],page:1,limit:20,loadend:!1,loading:!1,loadTitle:"加载更多",type:"week",position:0,isAuto:!1,isShowAuth:!1}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getBrokerageRankList()},deep:!0}},onLoad:function(){this.isLogin?this.getBrokerageRankList():(0,o.toLogin)()},methods:{onLoadFun:function(){this.getBrokerageRankList()},authColse:function(t){this.isShowAuth=t},switchTap:function(t){this.active=t,this.type=t?"month":"week",this.page=1,this.loadend=!1,this.$set(this,"rankList",[]),this.getBrokerageRankList()},getBrokerageRankList:function(){var t=this;this.loadend||this.loading||(this.loading=!0,this.loadTitle="",(0,i.getBrokerageRank)({page:this.page,limit:this.limit,type:this.type}).then((function(e){var n=e.data.rank,i=n.length<t.limit;t.rankList.push.apply(t.rankList,n),t.loading=!1,t.loadend=i,t.loadTitle=i?"😕我也是有底线的":"加载更多",t.$set(t,"rankList",t.rankList),t.position=e.data.position,t.page+=1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))}},onReachBottom:function(){this.getBrokerageRankList()}};e.default=d},"73f5":function(t,e,n){"use strict";n.r(e);var i=n("41b2"),o=n("d5ed");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c7de");var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"45c9193b",null,!1,i["a"],s);e["default"]=u.exports},"992e":function(t,e,n){"use strict";(function(t){n("8d15");i(n("66fd"));var e=i(n("73f5"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c7de:function(t,e,n){"use strict";var i=n("0c3e"),o=n.n(i);o.a},d5ed:function(t,e,n){"use strict";n.r(e);var i=n("6339"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}},[["992e","common/runtime","common/vendor"]]]);