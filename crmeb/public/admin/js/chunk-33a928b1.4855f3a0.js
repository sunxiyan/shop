(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33a928b1"],{"12c6":function(e,t,a){},"28bd":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"i-layout-page-header header_top"},[a("div",{staticClass:"i-layout-page-header fl_header"},[a("router-link",{attrs:{to:{path:"/admin/marketing/store_combination/index"}}},[a("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[e._v("返回")])],1),a("Divider",{attrs:{type:"vertical"}}),a("span",{staticClass:"ivu-page-header-title mr20",staticStyle:{padding:"0"},domProps:{textContent:e._s(e.$route.params.id?"编辑拼团商品":"添加拼团商品")}})],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mt30 acea-row row-middle row-center",attrs:{type:"flex"}},[a("Col",{attrs:{span:"20"}},[a("Steps",{attrs:{current:e.current}},[a("Step",{attrs:{title:"选择拼团商品"}}),a("Step",{attrs:{title:"填写基础信息"}}),a("Step",{attrs:{title:"修改商品详情"}})],1)],1),a("Col",{attrs:{span:"23"}},[a("Form",{ref:"formValidate",staticClass:"form mt30",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":e.labelWidth,"label-position":e.labelPosition},on:{"on-validate":e.validate},nativeOn:{submit:function(e){e.preventDefault()}}},[0===e.current?a("FormItem",{attrs:{label:"选择商品：",prop:"image_input"}},[a("div",{staticClass:"picBox",on:{click:e.changeGoods}},[e.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])]):e._e(),a("Row",{directives:[{name:"show",rawName:"v-show",value:1===e.current,expression:"current === 1"}],attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品主图：",prop:"image"}},[a("div",{staticClass:"picBox",on:{click:function(t){return e.modalPicTap("dan","danFrom")}}},[e.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品轮播图：",prop:"images"}},[a("div",{staticClass:"acea-row"},[e._l(e.formValidate.images,(function(t,i){return a("div",{key:i,staticClass:"pictrue",attrs:{draggable:"true"},on:{dragstart:function(a){return e.handleDragStart(a,t)},dragover:function(a){return a.preventDefault(),e.handleDragOver(a,t)},dragenter:function(a){return e.handleDragEnter(a,t)},dragend:function(a){return e.handleDragEnd(a,t)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}]}),a("Button",{staticClass:"btndel",attrs:{shape:"circle",icon:"md-close"},nativeOn:{click:function(t){return e.handleRemove(i)}}})],1)})),e.formValidate.images.length<10?a("div",{staticClass:"upLoad acea-row row-center-wrapper",on:{click:function(t){return e.modalPicTap("duo")}}},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1):e._e()],2)])],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"拼团名称：",prop:"title","label-for":"title"}},[a("Input",{attrs:{placeholder:"请输入拼团名称","element-id":"title"},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"拼团简介：",prop:"info","label-for":"info"}},[a("Input",{attrs:{placeholder:"请输入拼团简介",type:"textarea",rows:4,"element-id":"info"},model:{value:e.formValidate.info,callback:function(t){e.$set(e.formValidate,"info",t)},expression:"formValidate.info"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团时间：",prop:"section_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("DatePicker",{staticClass:"perW30",attrs:{editable:!1,type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"请选择活动时间",value:e.formValidate.section_time},on:{"on-change":e.onchangeTime},model:{value:e.formValidate.section_time,callback:function(t){e.$set(e.formValidate,"section_time",t)},expression:"formValidate.section_time"}}),a("div",{staticClass:"ml10 grey"},[e._v("\n                    设置活动开启结束时间，用户可以在设置时间内发起参与拼团\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"物流方式：",prop:"logistics"}},[a("CheckboxGroup",{model:{value:e.formValidate.logistics,callback:function(t){e.$set(e.formValidate,"logistics",t)},expression:"formValidate.logistics"}},[a("Checkbox",{attrs:{label:"1",disabled:""}},[e._v("快递")]),a("Checkbox",{attrs:{label:"2"}},[e._v("到店核销")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"运费设置：",prop:1!=e.formValidate.freight?"freight":""}},[a("RadioGroup",{model:{value:e.formValidate.freight,callback:function(t){e.$set(e.formValidate,"freight",t)},expression:"formValidate.freight"}},[a("Radio",{attrs:{label:2}},[e._v("固定邮费")]),a("Radio",{attrs:{label:3}},[e._v("运费模板")])],1)],1)],1),3!=e.formValidate.freight&&1!=e.formValidate.freight?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:""}},[a("div",{staticClass:"acea-row"},[a("InputNumber",{staticClass:"perW20 maxW",attrs:{min:"0.01",placeholder:"请输入金额"},model:{value:e.formValidate.postage,callback:function(t){e.$set(e.formValidate,"postage",t)},expression:"formValidate.postage"}})],1)])],1):e._e(),3==e.formValidate.freight?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"",prop:"temp_id"}},[a("div",{staticClass:"acea-row"},[a("Select",{staticClass:"perW20 maxW",attrs:{clearable:"",placeholder:"请选择运费模板"},model:{value:e.formValidate.temp_id,callback:function(t){e.$set(e.formValidate,"temp_id",t)},expression:"formValidate.temp_id"}},e._l(e.templateList,(function(t,i){return a("Option",{key:i,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1),a("span",{staticClass:"addfont",on:{click:e.freight}},[e._v("新增运费模板")])],1)])],1):e._e(),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团时效(单位 小时)：",prop:"effective_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"请输入拼团时效(单位 小时)","element-id":"effective_time"},model:{value:e.formValidate.effective_time,callback:function(t){e.$set(e.formValidate,"effective_time",t)},expression:"formValidate.effective_time"}}),a("div",{staticClass:"ml10 grey"},[e._v("\n                    用户发起拼团后开始计时，需在设置时间内邀请到规定好友人数参团，超过时效时间，则系统判定拼团失败，自动发起退款\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团人数：",prop:"people"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:2,placeholder:"请输入拼团人数",precision:0,"element-id":"people"},model:{value:e.formValidate.people,callback:function(t){e.$set(e.formValidate,"people",t)},expression:"formValidate.people"}}),a("div",{staticClass:"ml10 grey"},[e._v("单次拼团需要参与的用户数")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"虚拟成团补齐人数：",prop:"virtualPeople"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"设置虚拟成团的补齐人数",precision:0,"element-id":"virtualPeople"},model:{value:e.formValidate.virtualPeople,callback:function(t){e.$set(e.formValidate,"virtualPeople",t)},expression:"formValidate.virtualPeople"}}),a("div",{staticClass:"ml10 grey"},[e._v("\n                    设置虚拟成团的补齐人数，如：5人团设置补齐2人，当团队成员大于等于3人时，拼团结束时自动补齐剩余最多2个位置，不开启虚拟成团请设置为0\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"总购买数量限制：",prop:"num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:1,placeholder:"请输入总数量限制",precision:0,"element-id":"num"},model:{value:e.formValidate.num,callback:function(t){e.$set(e.formValidate,"num",t)},expression:"formValidate.num"}}),a("div",{staticClass:"ml10 grey"},[e._v("\n                    该商品活动期间内，用户可购买的最大数量。例如设置为4，表示本次活动有效期内，每个用户最多可购买4件\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单次购买数量限制：",prop:"once_num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:1,placeholder:"请输入单次购买数量限制",precision:0,"element-id":"once_num"},model:{value:e.formValidate.once_num,callback:function(t){e.$set(e.formValidate,"once_num",t)},expression:"formValidate.once_num"}}),a("div",{staticClass:"ml10 grey"},[e._v("\n                    用户参与拼团时，一次购买最大数量限制。例如设置为2，表示每次参与拼团时，用户一次购买数量最大可选择2个\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单位：",prop:"unit_name","label-for":"unit_name"}},[a("Input",{staticClass:"perW20",attrs:{placeholder:"请输入单位","element-id":"unit_name"},model:{value:e.formValidate.unit_name,callback:function(t){e.$set(e.formValidate,"unit_name",t)},expression:"formValidate.unit_name"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"排序："}},[a("InputNumber",{staticClass:"perW10",attrs:{placeholder:"请输入排序","element-id":"sort",precision:0},model:{value:e.formValidate.sort,callback:function(t){e.$set(e.formValidate,"sort",t)},expression:"formValidate.sort"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"热门推荐：",props:"is_hot","label-for":"is_hot"}},[a("RadioGroup",{attrs:{"element-id":"is_hot"},model:{value:e.formValidate.is_host,callback:function(t){e.$set(e.formValidate,"is_host",t)},expression:"formValidate.is_host"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[e._v("开启")]),a("Radio",{attrs:{label:0}},[e._v("关闭")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"活动状态：",props:"is_show","label-for":"is_show"}},[a("RadioGroup",{attrs:{"element-id":"status"},model:{value:e.formValidate.is_show,callback:function(t){e.$set(e.formValidate,"is_show",t)},expression:"formValidate.is_show"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[e._v("开启")]),a("Radio",{attrs:{label:0}},[e._v("关闭")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"规格选择："}},[a("Table",{attrs:{data:e.specsData,columns:e.columns,border:""},on:{"on-selection-change":e.changeCheckbox},scopedSlots:e._u([{key:"price",fn:function(t){var i=t.row,r=t.index;return[a("InputNumber",{staticClass:"priceBox",attrs:{min:0,precision:2,"active-change":!1},on:{"on-change":function(t){e.changePrice(t,r)}},model:{value:i.price,callback:function(t){e.$set(i,"price",t)},expression:"row.price"}})]}},{key:"pic",fn:function(t){var i=t.row,r=t.index;return[a("div",{staticClass:"acea-row row-middle row-center-wrapper",on:{click:function(t){return e.modalPicTap("dan","danTable",r)}}},[i.pic?a("div",{staticClass:"pictrue pictrueTab"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.pic,expression:"row.pic"}]})]):a("div",{staticClass:"upLoad pictrueTab acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"21"}})],1)])]}}])})],1)],1)],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:2===e.current,expression:"current === 2"}]},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"内容："}},[a("WangEditor",{staticStyle:{width:"90%"},attrs:{content:e.formValidate.description},on:{editorContent:e.getEditorContent}})],1)],1)],1),a("FormItem",[a("Button",{directives:[{name:"show",rawName:"v-show",value:0!==e.current,expression:"current !== 0"}],staticClass:"submission mr15",attrs:{disabled:e.$route.params.id&&1===e.current},on:{click:e.step}},[e._v("上一步")]),a("Button",{staticClass:"submission",attrs:{type:"primary",disabled:e.submitOpen&&2===e.current},domProps:{textContent:e._s(2===e.current?"提交":"下一步")},on:{click:function(t){return e.next("formValidate")}}})],1)],1),e.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":e.cancel},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[a("goods-list",{ref:"goodslist",on:{getProductId:e.getProductId}})],1),a("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":888},model:{value:e.modalPic,callback:function(t){e.modalPic=t},expression:"modalPic"}},[e.modalPic?a("uploadPictures",{attrs:{isChoice:e.isChoice,gridBtn:e.gridBtn,gridPic:e.gridPic},on:{getPic:e.getPic,getPicD:e.getPicD}}):e._e()],1),a("freight-template",{ref:"template",on:{addSuccess:e.productGetTemplate}})],1)},r=[],s=(a("8e6e"),a("456d"),a("75fc")),o=(a("c5f6"),a("7f7f"),a("96cf"),a("3b8d")),n=(a("55dd"),a("ac6a"),a("bd86")),l=a("2f62"),c=a("c4ad"),d=a("ef0d"),m=a("a069"),u=a("b0e7"),p=a("b7be"),f=a("c4c8"),g=a("5334");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={name:"storeCombinationCreate",components:{UeditorWrap:d["a"],goodsList:c["default"],uploadPictures:u["a"],WangEditor:m["a"],freightTemplate:g["a"]},data:function(){return{submitOpen:!1,spinShow:!1,isChoice:"",current:0,modalPic:!1,grid:{xl:12,lg:20,md:24,sm:24,xs:24},grid2:{xl:8,lg:8,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},modals:!1,modal_loading:!1,images:[],templateList:[],columns:[],specsData:[],picTit:"",tableIndex:0,formValidate:Object(n["a"])({images:[],info:"",title:"",image:"",unit_name:"",price:0,effective_time:24,stock:1,sales:0,sort:0,postage:0,is_postage:0,is_host:0,is_show:0,section_time:[],description:"",id:0,product_id:0,people:2,once_num:1,num:1,temp_id:"",attrs:[],items:[],virtual:100,virtualPeople:0,logistics:["1"],freight:2},"postage",1),ruleValidate:{image:[{required:!0,message:"请选择主图",trigger:"change"}],images:[{required:!0,type:"array",message:"请选择主图",trigger:"change"},{type:"array",min:1,message:"Choose two hobbies at best",trigger:"change"}],title:[{required:!0,message:"请输入拼团名称",trigger:"blur"}],info:[{required:!0,message:"请输入拼团简介",trigger:"blur"}],section_time:[{required:!0,type:"array",message:"请选择活动时间",trigger:"change"}],unit_name:[{required:!0,message:"请输入单位",trigger:"blur"}],price:[{required:!0,type:"number",message:"请输入拼团价",trigger:"blur"}],cost:[{required:!0,type:"number",message:"请输入成本价",trigger:"blur"}],stock:[{required:!0,type:"number",message:"请输入库存",trigger:"blur"}],give_integral:[{required:!0,type:"number",message:"请输入赠送积分",trigger:"blur"}],effective_time:[{required:!0,type:"number",message:"请输入拼团时效(单位 小时)",trigger:"blur"}],people:[{required:!0,type:"number",message:"请输入拼团人数",trigger:"blur"}],num:[{required:!0,type:"number",message:"请输入购买数量限制",trigger:"blur"}],once_num:[{required:!0,type:"number",message:"请输入单次购买数量限制",trigger:"blur"}],virtualPeople:[{required:!0,type:"number",message:"请输入虚拟成团补齐人数",trigger:"blur"}],temp_id:[{required:!0,message:"请选择运费模板",trigger:"change",type:"number"}]},copy:0,description:""}},computed:b(b({},Object(l["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:155},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.$route.params.id&&(this.copy=this.$route.params.copy,this.current=1,this.getInfo()),this.productGetTemplate()},methods:{changePrice:function(e,t){console.log(e,t),this.$set(this.specsData[t],"price",e)},getEditorContent:function(e){this.description=e},freight:function(){this.$refs.template.id=0,this.$refs.template.isTemplate=!0},productAttrs:function(e){var t=this;Object(p["W"])(e.id,3).then((function(e){var a=e.data.info,i={type:"selection",width:60,align:"center"};t.specsData=a.attrs,t.specsData.forEach((function(e,a){t.$set(t.specsData[a],"id",a)})),t.formValidate.items=a.items,t.columns=a.header,t.columns.unshift(i),t.inputChange(a)})).catch((function(e){t.$Message.error(e.msg)}))},inputChange:function(e){var t=this,a=[];e.header.forEach((function(e,t){1===e.type&&a.push({index:t,key:e.key,title:e.title})})),a.forEach((function(e,a){var i=e.title,r=e.key,s={title:i,key:r,align:"center",minWidth:100,render:function(e,a){return e("div",[e("InputNumber",{props:{min:1,precision:0,value:a.row.quota},on:{"on-change":function(e){a.row.quota=e,t.specsData[a.index]=a.row,t.formValidate.attrs&&t.formValidate.attrs.length&&t.formValidate.attrs.forEach((function(e,i){e.id===a.row.id&&t.formValidate.attrs.splice(i,1,a.row)}))}}})])}};t.columns.splice(e.index,1,s)}))},changeCheckbox:function(e){this.formValidate.attrs=e},productGetTemplate:function(){var e=this;Object(f["t"])().then((function(t){e.templateList=t.data}))},validate:function(e,t,a){!1===t&&this.$Message.error(a)},getProductId:function(e){var t=this;this.modal_loading=!1,this.modals=!1,setTimeout((function(){var a;t.formValidate=(a={images:e.slider_image,info:e.store_info,title:e.store_name,image:e.image,unit_name:e.unit_name,price:0,effective_time:24,stock:e.stock,sales:e.sales,sort:e.sort,postage:e.postage,is_postage:e.is_postage,is_host:e.is_hot,is_show:0,section_time:[],description:e.description,id:0,people:2,num:1,once_num:1,product_id:e.id,temp_id:e.temp_id,virtual:100,virtualPeople:0,logistics:e.temp_id,freight:e.freight},Object(n["a"])(a,"postage",e.postage),Object(n["a"])(a,"custom_form",e.custom_form),Object(n["a"])(a,"virtual_type",e.virtual_type),a),t.productAttrs(e)}),500)},cancel:function(){this.modals=!1},onchangeTime:function(e){this.formValidate.section_time=e},getInfo:function(){var e=this;this.spinShow=!0,Object(p["i"])(this.$route.params.id).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var i,r,s,o,n,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(l in i=e,r=a.data.info,s={type:"selection",width:60,align:"center"},e.formValidate=r,e.formValidate.virtualPeople=parseInt(e.formValidate.people-e.formValidate.people*(e.formValidate.virtual/100)),e.$set(e.formValidate,"items",r.attrs.items),e.columns=r.attrs.header,e.columns.unshift(s),e.specsData=r.attrs.value,i.specsData.forEach((function(e,t){i.$set(i.specsData[t],"id",t)})),o=r.attrs,n=[],r.attrs.value)r.attrs.value[l]._checked&&n.push(r.attrs.value[l]);i.formValidate.attrs=n,i.inputChange(o),e.spinShow=!1;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},next:function(e){var t=this,a=this;2===this.current?(this.formValidate.description=this.description,this.$refs[e].validate((function(e){if(!e)return!1;1==t.copy&&(t.formValidate.copy=1),t.formValidate.id=Number(t.$route.params.id)||0,t.submitOpen=!0,t.formValidate.virtual=parseInt((t.formValidate.people-t.formValidate.virtualPeople)/t.formValidate.people*100),console.log(t.formValidate),Object(p["h"])(t.formValidate).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.submitOpen=!1,t.$Message.success(a.msg),setTimeout((function(){t.$router.push({path:"/admin/marketing/store_combination/index"})}),500);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.submitOpen=!1,t.$Message.error(e.msg)}))}))):1===this.current?this.$refs[e].validate((function(e){if(!e)return t.$Message.warning("请完善您的信息");if(a.formValidate.people<2)return a.$Message.error("拼团人数必须大于2");if(a.formValidate.num<0)return a.$Message.error("购买数量限制必须大于0");if(a.formValidate.once_num<0)return a.$Message.error("单次购买数量限制必须大于0");if(!a.formValidate.attrs)return a.$Message.error("请选择属性规格");for(var i in a.formValidate.attrs){if(a.formValidate.attrs[i].quota<=0)return a.$Message.error("拼团限量必须大于0");if(t.formValidate.attrs[i].quota>t.formValidate.attrs[i]["stock"])return t.$Message.error("拼团限量不能超过规格库存")}t.current+=1})):this.formValidate.image?this.current+=1:this.$Message.warning("请选择商品")},step:function(){this.current--},getContent:function(e){this.formValidate.description=e},modalPicTap:function(e,t,a){this.modalPic=!0,this.isChoice="dan"===e?"单选":"多选",this.picTit=t,this.tableIndex=a},getPic:function(e){switch(this.picTit){case"danFrom":this.formValidate.image=e.att_dir;break;default:this.formValidate.attrs&&this.formValidate.attrs.length&&this.$set(this.specsData[this.tableIndex],"_checked",!0),this.specsData[this.tableIndex].pic=e.att_dir}this.modalPic=!1},getPicD:function(e){var t=this;this.images=e,this.images.map((function(e){t.formValidate.images.push(e.att_dir),t.formValidate.images=t.formValidate.images.splice(0,10)})),this.modalPic=!1},handleRemove:function(e){this.images.splice(e,1),this.formValidate.images.splice(e,1)},changeGoods:function(){this.modals=!0,this.$refs.goodslist.formValidate.is_presale=0,this.$refs.goodslist.getList(),this.$refs.goodslist.goodsCategory()},handleDragStart:function(e,t){this.dragging=t},handleDragEnd:function(e,t){this.dragging=null},handleDragOver:function(e){e.dataTransfer.dropEffect="move"},handleDragEnter:function(e,t){if(e.dataTransfer.effectAllowed="move",t!==this.dragging){var a=Object(s["a"])(this.formValidate.images),i=a.indexOf(this.dragging),r=a.indexOf(t);a.splice.apply(a,[r,0].concat(Object(s["a"])(a.splice(i,1)))),this.formValidate.images=a}}}},_=v,w=(a("8839"),a("2877")),V=Object(w["a"])(_,i,r,!1,null,"2283ed30",null);t["default"]=V.exports},8839:function(e,t,a){"use strict";var i=a("12c6"),r=a.n(i);r.a},ef0d:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:e.myConfig},on:{beforeInit:e.addCustomDialog},model:{value:e.contents,callback:function(t){e.contents=t},expression:"contents"}})],1)},r=[],s=a("6625"),o=a.n(s),n={name:"index",components:{VueUeditorWrap:o.a},props:{content:""},watch:{content:{handler:function(e){},deep:!0}},data:function(){return{contents:this.content,myConfig:{autoHeightEnabled:!1,initialFrameHeight:200,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""}}},methods:{addCustomDialog:function(e){window.UE.registerUI("test-dialog",(function(e,t){var a=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:e,name:t,title:"上传图片",cssRules:"width:960px;height:550px;padding:20px;"});this.dialog=a;var i=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){a.render(),a.open()}});return i}),37,e)}},created:function(){}},l=n,c=a("2877"),d=Object(c["a"])(l,i,r,!1,null,"2b6750ca",null);t["a"]=d.exports}}]);