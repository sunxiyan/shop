(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-order_list-index"],{"3a4a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-order .header[data-v-f86fe478]{height:%?260?%;padding:0 %?30?%}.my-order .header .picTxt[data-v-f86fe478]{height:%?190?%}.my-order .header .picTxt .text[data-v-f86fe478]{color:hsla(0,0%,100%,.8);font-size:%?26?%;font-family:Guildford Pro}.my-order .header .picTxt .text .name[data-v-f86fe478]{font-size:%?34?%;font-weight:700;color:#fff;margin-bottom:%?20?%}.my-order .header .picTxt .pictrue[data-v-f86fe478]{width:%?122?%;height:%?109?%}.my-order .header .picTxt .pictrue uni-image[data-v-f86fe478]{width:100%;height:100%}.my-order .nav[data-v-f86fe478]{background-color:#fff;width:%?690?%;height:%?140?%;border-radius:%?6?%;margin:%?-73?% auto 0 auto}.my-order .nav .item[data-v-f86fe478]{text-align:center;font-size:%?26?%;color:#282828;padding:%?27?% 0;border-bottom:%?5?% solid transparent}.my-order .nav .item.on[data-v-f86fe478]{font-weight:700;border-color:var(--view-theme)}.my-order .nav .item .num[data-v-f86fe478]{margin-top:%?18?%}.my-order .list[data-v-f86fe478]{width:%?690?%;margin:%?14?% auto 0 auto}.my-order .list .item[data-v-f86fe478]{background-color:#fff;border-radius:%?6?%;margin-bottom:%?14?%}.my-order .list .item .title[data-v-f86fe478]{height:%?84?%;padding:0 %?30?%;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#282828}.my-order .list .item .title .sign[data-v-f86fe478]{font-size:%?24?%;padding:0 %?7?%;height:%?36?%;margin-right:%?15?%}.my-order .list .item .item-info[data-v-f86fe478]{padding:0 %?30?%;margin-top:%?22?%}.my-order .list .item .item-info .pictrue[data-v-f86fe478]{width:%?120?%;height:%?120?%}.my-order .list .item .item-info .pictrue uni-image[data-v-f86fe478]{width:100%;height:100%;border-radius:%?6?%}.my-order .list .item .item-info .text[data-v-f86fe478]{width:%?486?%;font-size:%?28?%;color:#999;margin-top:%?6?%;display:flex}.my-order .list .item .item-info .text .name[data-v-f86fe478]{width:%?306?%;color:#282828;height:%?78?%}.my-order .list .item .item-info .text .money[data-v-f86fe478]{text-align:right;flex:1}.my-order .list .item .totalPrice[data-v-f86fe478]{font-size:%?26?%;color:#282828;text-align:right;margin:%?27?% 0 0 %?30?%;padding:0 %?30?% %?30?% 0;border-bottom:%?1?% solid #eee}.my-order .list .item .totalPrice .money[data-v-f86fe478]{font-size:%?28?%;font-weight:700;color:var(--view-priceColor)}.my-order .list .item .bottom[data-v-f86fe478]{height:%?107?%;padding:0 %?30?%}.my-order .list .item .bottom .bnt[data-v-f86fe478]{width:%?176?%;height:%?60?%;text-align:center;line-height:%?60?%;color:#fff;border-radius:%?50?%;font-size:%?27?%}.my-order .list .item .bottom .bnt.cancelBnt[data-v-f86fe478]{border:%?1?% solid #ddd;color:#aaa}.my-order .list .item .bottom .bnt ~ .bnt[data-v-f86fe478]{margin-left:%?17?%}.noCart[data-v-f86fe478]{margin-top:%?171?%;padding-top:%?0.1?%}.noCart .pictrue[data-v-f86fe478]{width:%?414?%;height:%?336?%;margin:%?78?% auto %?56?% auto}.noCart .pictrue uni-image[data-v-f86fe478]{width:100%;height:100%}.my-order .list .item .item-info .text .money .return[data-v-f86fe478]{margin-top:%?10?%;font-size:%?24?%}',""]),t.exports=e},"512d":function(t,e,i){"use strict";var a=i("4ea4");i("d81d"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("331f"),r=i("b284"),o=(i("6ca5"),a(i("487b"))),s=a(i("9cbc")),u=i("1e55"),c=i("26cb"),d=a(i("e194")),l=a(i("882e")),v={components:{payment:s.default,home:o.default,emptyPage:d.default},mixins:[l.default],data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],orderData:{},orderStatus:0,page:1,limit:20,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"使用微信快捷支付",payStatus:!0},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"使用线上支付宝支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"当前可用余额：",number:0,payStatus:!0},{name:"好友代付",icon:"icon-haoyoudaizhifu",value:"friend",title:"找微信好友支付",payStatus:1}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1}},computed:(0,c.mapGetters)(["isLogin"]),onShow:function(){this.isLogin?(this.page=1,this.orderList=[],this.loadend=!1,this.onLoadFun(),this.getOrderList()):(0,u.toLogin)()},methods:{onLoadFun:function(){this.getOrderData(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,a=void 0!=e.value?e.value:null;i&&this[i]&&this[i](a)},getUserInfo:function(){var t=this;(0,r.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money,t.$set(t,"payMode",t.payMode)}))},payClose:function(){this.pay_close=!1},onLoad:function(t){t.status&&(this.orderStatus=t.status)},getOrderData:function(){var t=this;(0,n.orderData)().then((function(e){t.$set(t,"orderData",e.data),t.payMode.map((function(t){"weixin"==t.value&&(t.payStatus=!!e.data.pay_weixin_open),"alipay"==t.value&&(t.payStatus=!!e.data.ali_pay_status),"yue"==t.value&&(t.payStatus=1==e.data.yue_pay_status),"friend"==t.value&&(t.payStatus=1==e.data.friend_pay_status)}))}))},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少订单号无法取消订单"});(0,n.orderCancel)(e).then((function(e){return i.$util.Tips({title:e.msg,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.$set(this,"pay_order_id",e),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,uni.navigateTo({url:"/pages/order_pay_status/index?order_id="+this.pay_order_id+"&msg=支付成功&type=3&totalPrice="+this.totalPrice}),this.pay_order_id="",this.getOrderData(),this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(t){if(!t)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});uni.navigateTo({url:"/pages/users/order_details/index?order_id="+t})},statusClick:function(t){t!=this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="加载更多",(0,n.getOrderList)({type:t.orderStatus,page:t.page,limit:t.limit}).then((function(e){var i=e.data||[],a=i.length<t.limit;t.orderList=t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.loadend=a,t.loading=!1,t.loadTitle=a?"我也是有底线的":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},delOrder:function(t,e){var i=this;uni.showModal({title:"删除订单",content:"确定删除该订单",success:function(a){if(a.confirm)(0,n.orderDel)(t).then((function(t){return i.orderList.splice(e,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData(),i.$util.Tips({title:"删除成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}));else if(a.cancel)return i.$util.Tips({title:"已取消"})}})}},onReachBottom:function(){this.getOrderList()}};e.default=v},6407:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:t.colorStyle},[a("v-uni-view",{staticClass:"my-order"},[a("v-uni-view",{staticClass:"header bg-color"},[a("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"name"},[t._v("订单信息")]),a("v-uni-view",[t._v("消费订单："+t._s(t.orderData.order_count||0)+" 总消费：￥"+t._s(t.orderData.sum_price||0))])],1),a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:i("ab78")}})],1)],1)],1),a("v-uni-view",{staticClass:"nav acea-row row-around"},[a("v-uni-view",{staticClass:"item",class:0==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(0)}}},[a("v-uni-view",[t._v("待付款")]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.unpaid_count||0))])],1),a("v-uni-view",{staticClass:"item",class:1==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(1)}}},[a("v-uni-view",[t._v("待发货")]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.unshipped_count||0))])],1),a("v-uni-view",{staticClass:"item",class:2==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(2)}}},[a("v-uni-view",[t._v("待收货")]),a("v-uni-view",{staticClass:"num "},[t._v(t._s(t.orderData.received_count||0))])],1),a("v-uni-view",{staticClass:"item",class:3==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(3)}}},[a("v-uni-view",[t._v("待评价")]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.evaluated_count||0))])],1),a("v-uni-view",{staticClass:"item",class:4==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(4)}}},[a("v-uni-view",[t._v("已完成")]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.complete_count||0))])],1)],1),a("v-uni-view",{staticClass:"list"},t._l(t.orderList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item"},[a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[a("v-uni-view",{staticClass:"title acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"acea-row row-middle"},[2==e.type?a("v-uni-text",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("砍价")]):3==e.type?a("v-uni-text",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("拼团")]):1==e.type?a("v-uni-text",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("秒杀")]):4==e.type?a("v-uni-text",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("预售")]):t._e(),a("v-uni-view",[t._v(t._s(e._add_time))])],1),9==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("线下付款,未支付")]):0==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("待付款")]):1==e._status._type&&1==e.shipping_type?a("v-uni-view",{staticClass:"font-color"},[t._v("待发货"),e.refund.length?a("v-uni-text",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()],1):2==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("待收货"),e.refund.length?a("v-uni-text",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()],1):3==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("待评价"),e.refund.length?a("v-uni-text",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()],1):4==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("已完成"),e.refund.length?a("v-uni-text",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()],1):5==e._status._type&&0==e.status?a("v-uni-view",{staticClass:"font-color"},[t._v("未核销"),e.refund.length?a("v-uni-text",[t._v(t._s(e.is_all_refund?"，退款中":"，部分退款中"))]):t._e()],1):-2==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("已退款")]):t._e()],1),t._l(e.cartInfo,(function(i,n){return a("v-uni-view",{key:n,staticClass:"item-info acea-row row-between row-top"},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:i.productInfo.image}})],1),a("v-uni-view",{staticClass:"text  row-between"},[a("v-uni-text",{staticClass:"name line2"},[t._v(t._s(i.productInfo.store_name))]),a("v-uni-view",{staticClass:"money"},[i.productInfo.attrInfo?a("v-uni-view",[t._v("￥"+t._s(i.productInfo.attrInfo.price))]):a("v-uni-view",[t._v("￥"+t._s(i.productInfo.price))]),a("v-uni-view",[t._v("x"+t._s(i.cart_num))]),i.refund_num&&-2!=e._status._type?a("v-uni-view",{staticClass:"return"},[t._v(t._s(i.refund_num)+"件退款中")]):t._e()],1)],1)],1)})),a("v-uni-view",{staticClass:"totalPrice"},[t._v("共"+t._s(e.total_num||0)+"件商品，总金额"),a("v-uni-text",{staticClass:"money"},[t._v("￥"+t._s(e.pay_price))])],1)],2),a("v-uni-view",{staticClass:"bottom acea-row row-right row-middle"},[0==e._status._type||9==e._status._type?a("v-uni-view",{staticClass:"bnt cancelBnt",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelOrder(i,e.order_id)}}},[t._v("取消订单")]):t._e(),0==e._status._type?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPay(e.pay_price,e.order_id)}}},[t._v("立即付款")]):t._e(),4==e._status._type?a("v-uni-view",{staticClass:"bnt cancelBnt",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.delOrder(e.order_id,i)}}},[t._v("删除订单")]):t._e(),a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("查看详情")])],1)],1)})),1),t.orderList.length>0?a("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[a("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),0==t.orderList.length?a("v-uni-view",[t.loading?t._e():a("emptyPage",{attrs:{title:"暂无订单~"}}),a("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[a("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}})],1)],1):t._e()],1),a("home"),a("payment",{attrs:{payMode:t.payMode,pay_close:t.pay_close,order_id:t.pay_order_id,totalPrice:t.totalPrice},on:{onChangeFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeFun.apply(void 0,arguments)}}})],1)},r=[]},"66e4":function(t,e,i){var a=i("3a4a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("11f29aca",a,!0,{sourceMap:!1,shadowMode:!1})},"6ca5":function(t,e,i){"use strict";i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=n,e.openPaySubscribe=r,e.openOrderSubscribe=o,e.openExtrctSubscribe=s,e.openPinkSubscribe=u,e.openBargainSubscribe=c,e.openOrderRefundSubscribe=d,e.openRechargeSubscribe=l,e.subscribe=v;var a=i("d7ff");function n(){var t={},e=uni.getStorageSync(a.SUBSCRIBE_MESSAGE);return t=e?JSON.parse(e):{},t}function r(){var t=n();return v([t.order_pay_success,t.order_deliver_success,t.order_postage_success])}function o(){var t=n();return v([t.order_take,t.integral_accout,t.order_brokerage])}function s(){var t=n();return v([t.user_extract])}function u(){var t=n();return v([t.pink_true,t.pink_status])}function c(){var t=n();return v([t.bargain_success])}function d(){var t=n();return v([t.order_refund])}function l(){var t=n();return v([t.recharge_success])}function v(t){var e=wx;return new Promise((function(i,a){e.requestSubscribeMessage({tmplIds:t,success:function(t){return i(t)},fail:function(t){return i(t)}})}))}},7264:function(t,e,i){"use strict";var a=i("e05c"),n=i.n(a);n.a},"78fd":function(t,e,i){"use strict";i.r(e);var a=i("6407"),n=i("7c09");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("d09b");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"f86fe478",null,!1,a["a"],o);e["default"]=u.exports},"7c09":function(t,e,i){"use strict";i.r(e);var a=i("512d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"99bb":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"empty-box"},[i("v-uni-image",{attrs:{src:"/static/images/empty-box.png"}}),i("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.title))])],1)},r=[]},ab78:function(t,e,i){t.exports=i.p+"static/img/orderTime.144c69b9.png"},d09b:function(t,e,i){"use strict";var a=i("66e4"),n=i.n(a);n.a},de3d:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{title:{type:String,default:"暂无记录"}}};e.default=a},e05c:function(t,e,i){var a=i("e98d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("60999ef8",a,!0,{sourceMap:!1,shadowMode:!1})},e194:function(t,e,i){"use strict";i.r(e);var a=i("99bb"),n=i("e923");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("7264");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6b1a6701",null,!1,a["a"],o);e["default"]=u.exports},e923:function(t,e,i){"use strict";i.r(e);var a=i("de3d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},e98d:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.empty-box[data-v-6b1a6701]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:%?200?%}.empty-box uni-image[data-v-6b1a6701]{width:%?414?%;height:%?240?%}.empty-box .txt[data-v-6b1a6701]{font-size:%?26?%;color:#999}',""]),t.exports=e}}]);