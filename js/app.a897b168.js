(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],u=0,h=[];u<c.length;u++)o=c[u],a[o]&&h.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},a={app:0},s=[];function c(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-19c50f90":"ca87800d","chunk-232b92a8":"ac9f7867","chunk-27bfede7":"90a18164","chunk-33764a9e":"10bb0c5b","chunk-347cc0c7":"1b4fb32a","chunk-39b076cb":"69f47b2e","chunk-5af0f9fc":"356b7a8c","chunk-685d3087":"0232e748","chunk-6e537a4e":"cfb4f081","chunk-89de7780":"c7ded4fa","chunk-ad40b836":"9ae35043","chunk-b004b9b2":"9ed335ff","chunk-bf388888":"056029bc","chunk-c0f56076":"00f44f3b","chunk-c97c73a6":"96b2cff3","chunk-d83761e2":"e5b867ff","chunk-eda4b796":"b3bfbccf"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-19c50f90":1,"chunk-232b92a8":1,"chunk-27bfede7":1,"chunk-33764a9e":1,"chunk-347cc0c7":1,"chunk-39b076cb":1,"chunk-5af0f9fc":1,"chunk-685d3087":1,"chunk-6e537a4e":1,"chunk-89de7780":1,"chunk-ad40b836":1,"chunk-b004b9b2":1,"chunk-bf388888":1,"chunk-c0f56076":1,"chunk-c97c73a6":1,"chunk-d83761e2":1,"chunk-eda4b796":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-19c50f90":"3297659e","chunk-232b92a8":"56b28359","chunk-27bfede7":"018428dd","chunk-33764a9e":"1b347633","chunk-347cc0c7":"5884c838","chunk-39b076cb":"b9359523","chunk-5af0f9fc":"f9d7b7a2","chunk-685d3087":"ad762947","chunk-6e537a4e":"0abfcf2b","chunk-89de7780":"5eaf2b29","chunk-ad40b836":"811f2840","chunk-b004b9b2":"b02a0972","chunk-bf388888":"13f72ed1","chunk-c0f56076":"f895a4fa","chunk-c97c73a6":"43112364","chunk-d83761e2":"4eb70de5","chunk-eda4b796":"63ef8f41"}[t]+".css",a=r.p+i,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===a))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){l=h[c],u=l.getAttribute("data-href");if(u===i||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.request=i,delete o[t],d.parentNode.removeChild(d),n(s)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[t]=0}));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise(function(e,n){i=a[t]=[e,n]});e.push(i[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+o+")");s.type=i,s.request=o,n[1](s)}a[t]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07ae":function(t,e,n){t.exports=n.p+"img/backId@2x.320eb7a9.png"},1:function(t,e){},"19b3":function(t,e,n){},"1ce4":function(t,e,n){"use strict";var i=n("2a5f"),o=n.n(i);o.a},2661:function(t,e,n){"use strict";var i=n("2fcf"),o=n.n(i);o.a},"2a5f":function(t,e,n){},"2fcf":function(t,e,n){},"307d":function(t,e,n){},"4e09":function(t,e,n){},"4e20":function(t,e,n){"use strict";var i=n("81ca"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("ff66"),n("ea23"),n("dbff");var i=n("3a00"),o=n("5a4b"),a=n("b506"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],r=(n("1ce4"),n("5c64"),n("048f")),l={},u=Object(r["a"])(l,s,c,!1,null,"001c0c99",null);u.options.__file="App.vue";var h=u.exports,d=n("081a"),f={path:"/home",name:"首页",component:function(){return n.e("chunk-bf388888").then(n.bind(null,"44c3"))}},p={path:"/login",name:"登录",component:function(){return n.e("chunk-27bfede7").then(n.bind(null,"89d2"))}},v={path:"/personal",name:"个人中心",component:function(){return n.e("chunk-19c50f90").then(n.bind(null,"3b2b"))},meta:{title:"个人中心"}},m={path:"/registered",name:"注册",component:function(){return n.e("chunk-c97c73a6").then(n.bind(null,"1d7a"))}},b={path:"/findPass",name:"找回密码",component:function(){return n.e("chunk-39b076cb").then(n.bind(null,"e930"))}},g={path:"/taskStation",name:"任务台",component:function(){return n.e("chunk-b004b9b2").then(n.bind(null,"a84e"))}},y=function(){return n.e("chunk-33764a9e").then(n.bind(null,"264e"))},_=function(){return n.e("chunk-ad40b836").then(n.bind(null,"0719"))},k=function(){return n.e("chunk-685d3087").then(n.bind(null,"c3f0"))},C=function(){return n.e("chunk-6e537a4e").then(n.bind(null,"b6b0"))},w={path:"/qualification",name:"资质申请",component:function(){return n.e("chunk-347cc0c7").then(n.bind(null,"39b9"))},meta:{title:"资质申请"},children:[{path:"/qualification/seach/:id",name:"资源医院搜索",meta:{title:"资源医院搜索"},component:y},{path:"/qualification/receiptArea",name:"接单地区",meta:{title:"接单地区"},component:k,children:[{path:"/qualification/receiptArea/address/:id",name:"地区选择",meta:{title:"地区选择"},component:_}]},{path:"/qualification/hospital",name:"资源医院",meta:{title:"资源医院"},component:C,children:[{path:"/qualification/hospital/seach/:id",name:"资源医院搜索",meta:{title:"资源医院搜索"},component:y}]}]},S={path:"/vehicleSurvey",name:"车物查勘",component:function(){return n.e("chunk-89de7780").then(n.bind(null,"fb5d"))}},x={path:"/carTaskProgress",name:"车物任务进度",component:function(){return n.e("chunk-eda4b796").then(n.bind(null,"c192"))},children:[{path:"",name:"进度一",component:function(){return n.e("chunk-5af0f9fc").then(n.bind(null,"86a5"))}},{path:"secondStep",name:"进度二",component:function(){return n.e("chunk-c0f56076").then(n.bind(null,"4db3"))}}]},T=function(){return n.e("chunk-232b92a8").then(n.bind(null,"6cc0"))},L=function(){return n.e("chunk-d83761e2").then(n.bind(null,"175d"))},P={name:"realAuth",path:"/realAuth",component:T,meta:{title:"实名认证"},children:[{name:"faceRecongnition",path:"/realAuth/faceRecongnition",component:L,meta:{title:"人脸识别"}}]};i["default"].use(d["a"]);var O=new d["a"]({routes:[{path:"/",redirect:"/realAuth"},p,f,v,m,b,g,w,S,x,P]}),$=n("f2de"),I={USERINFO:null,Province:[],City:[],CountyCode:[],receiptAreaList:[],hospitalList:[],hospital:{},investigativeInformationDto:{appointTimeObj:{value:""},accidentTypeObj:{value:""},accidentDepartmentObj:{value:""},policyNameObj:{value:""},policyTelObj:{value:""},policyTeamObj:{value:""},riskCauseObj:{value:""},responsibilityObj:{value:""},surveyMethodObj:{value:""},surveyAddressObj:{value:""},delayedReport:"1",actualAccidentObj:{value:""},delayedReasonObj:{value:""},eyewitness:"1",eyewitnessNameObj:{value:""},recordingObj:{value:""},claiming:"1",bigCase:"1",drunkDriving:"1",responsibleParty:"1"}},j={get_userInfo:function(t){return t.USERINFO},get_Province:function(t){return t.Province||[]},get_City:function(t){return t.City||[]},get_CountyCode:function(t){return t.CountyCode||[]},get_receiptAreaList:function(t){return t.receiptAreaList||[]},get_hospitalList:function(t){return t.hospitalList||[]},get_hospital:function(t){return t.hospital||{}},get_investigativeInformationDto:function(t){return t.investigativeInformationDto||{}}},A=n("b00f"),E={chang_userInfo:function(t,e,n){var i=t.commit;i("set_userInfo",e,n)},change_Province:function(t,e){var n=t.commit;n("set_Province",e)},change_City:function(t,e){var n=t.commit;n("set_City",e)},change_CountyCode:function(t,e){var n=t.commit;n("set_CountyCode",e)},change_receiptAreaList_delOne:function(t,e){var n=t.commit,i=t.state;if(e){var o=i.hospitalList.filter(function(t){return t.hospitalCode!=e});n("set_hospitalList",o)}},change_receiptAreaList_addOne:function(t,e){var n=t.commit,i=t.state;if(e){var o=i.receiptAreaList.some(function(t){return t.cityCode===e.cityCode});o||n("set_receiptAreaList",[].concat(Object(A["a"])(i.receiptAreaList),[e]))}},change_hospitalList_delOne:function(t,e){var n=t.commit,i=t.state;console.log(e),console.log(i.hospitalList);var o=i.hospitalList.filter(function(t){return t.hospitalCode!==e});n("set_hospitalList",o)},change_hospitalList_addOne:function(t,e){var n=t.commit,i=t.state;if(e){var o=i.hospitalList.some(function(t){return t.hospitalCode===e.hospitalCode});console.log(o),o||n("set_hospitalList",[].concat(Object(A["a"])(i.hospitalList),[e]))}},addHospital:function(t,e){var n=t.commit;e&&n("set_hospital",e)},change_investigativeInformationDto:function(t,e){var n=t.state,i=t.commit;e.key?n.investigativeInformationDto[e.key].value=e.value:n.investigativeInformationDto=e;var o=n.investigativeInformationDto;i("set_investigativeInformationDto",o)}},D={set_userInfo:function(t,e,n){n?t.USERINFO[n]=e:t.USERINFO=e},set_Province:function(t,e){t.Province=e},set_City:function(t,e){t.City=e},set_CountyCode:function(t,e){t.CountyCode=e},set_receiptAreaList:function(t,e){t.receiptAreaList=e},set_hospitalList:function(t,e){t.hospitalList=e},set_hospital:function(t,e){t.hospital=e},set_investigativeInformationDto:function(t,e){t.investigativeInformationDto=e}};i["default"].use($["a"]);var B=new $["a"].Store({state:I,getters:j,actions:E,mutations:D}),N=n("a482"),M=n.n(N),U=(n("4c68"),n("be35"),n("8083"),n("c839"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide_box"},[n("div",{ref:"slider",staticClass:"slide"},[n("div",{ref:"slideGroup",staticClass:"slide-group"},[t._t("default")],2),n("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return n("span",{key:i,staticClass:"dot",class:{dotActive:t.currentPageIndex===i}})}),0)])])}),F=[],R=(n("7378"),n("6f44")),X={name:"common-carousel",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:1e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){this.setSliderWidth(),this.init(),this.autoPlay&&this.play()},methods:{setSliderWidth:function(){this.children=this.$refs.slideGroup.children,this.dots=new Array(this.children.length);for(var t=0,e=this.$refs.slider.clientWidth,n=0;n<this.children.length;n++)t+=e;this.$refs.slideGroup.style.width=t+"px"},init:function(){var t=this,e=this;this.scroll=new R["a"](this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:0,snapSpeed:400}),this.scroll.on("scrollEnd",function(){var n=t.scroll.getCurrentPage().pageX;t.currentPageIndex=n,e.autoPlay&&e.play()}),this.scroll.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},play:function(){this.children=this.$refs.slideGroup.children;var t=this.currentPageIndex;this.loop&&(t+=1),t>this.children.length-1&&(t=0);var e=this;this.timer=setTimeout(function(){e.scroll.goToPage(t,0,400)},e.interval)}}},G=X,Y=(n("4e20"),Object(r["a"])(G,U,F,!1,null,"f9603076",null));Y.options.__file="commonCarousel.vue";var H=Y.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"verticalScroll"},[n("div",{staticClass:"title"},[n("img",{staticClass:"img_name",attrs:{src:t.verticalScrollObj.title,alt:""}})]),n("div",{staticClass:"content"},[n("div",{ref:"slider",staticClass:"slide"},[n("div",{ref:"slideGroup",staticClass:"slide-group"},t._l(t.verticalScrollObj.message,function(e,i){return n("div",{key:i,staticClass:"slider-item"},[n("span",[t._v("\n            "+t._s(e)+"\n          ")])])}),0)])])])},q=[],V={name:"bulletin-board",props:{verticalScrollObj:{type:Object,default:function(){}},loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:1e3}},data:function(){return{currentPageIndeY:0}},mounted:function(){this.setSliderHeight(),this.init(),this.play()},methods:{setSliderHeight:function(){this.children=this.$refs.slideGroup.children;for(var t=0,e=this.$refs.slider.clientHeight,n=0;n<this.children.length;n++)t+=e;this.$refs.slideGroup.style.height=t+"px"},init:function(){var t=this,e=this;this.scroll=new R["a"](this.$refs.slider,{scrollX:!1,scrollY:!0,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:0,snapSpeed:400}),this.scroll.on("scrollEnd",function(){var n=t.scroll.getCurrentPage().pageY;t.currentPageIndeY=n,e.autoPlay&&e.play()}),this.scroll.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},play:function(){this.children=this.$refs.slideGroup.children;var t=this.currentPageIndeY;this.loop&&(t+=1),t>this.children.length-1&&(t=0);var e=this;this.timer=setTimeout(function(){e.scroll.goToPage(0,t,400)},e.interval)}}},z=V,J=(n("2661"),Object(r["a"])(z,W,q,!1,null,"a30efe02",null));J.options.__file="bulletinBoard.vue";var K=J.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cNavBar-main"},[n("div",{staticClass:"nav-left",on:{click:t.clickLeft}},[t._t("left")],2),n("div",{staticClass:"nav-center"},[t._t("center")],2),n("div",{staticClass:"nav-right",on:{click:t.clickRight}},[t._t("right")],2)])},Z=[],tt={name:"cNavBar",props:{path:{type:String,default:""}},methods:{clickRight:function(){this.$emit("clickRight")},clickLeft:function(){this.path?this.$router.push({path:this.path}):this.$router.back()}}},et=tt,nt=(n("c0c8"),Object(r["a"])(et,Q,Z,!1,null,"c2d604de",null));nt.options.__file="cNavBar.vue";var it=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{on:{click:t.getVerCode}},[t._v("\n  "+t._s(t.content)+"\n")])},at=[],st={name:"c-countdown",data:function(){return{content:"获取验证码",canClick:!0,second:0,verCodeFlag:!1}},props:{phoneCode:{type:String,default:""},totalTime:{type:Number,default:60},getVerUrl:{type:String,default:""},isMobileExists:{type:Boolean,default:!1},isGoRegistered:{type:Boolean,default:!1}},created:function(){this.second=this.totalTime},methods:{getVerUrlHTTP:function(){var t=this;if(this.canClick){this.canClick=!1,this.content="(".concat(this.second,"s)后重发");var e=window.setInterval(function(){t.second--,t.content="(".concat(t.second,"s)后重发"),t.second<0&&(window.clearInterval(e),t.content="获取验证码",t.second=60,t.canClick=!0)},1e3);this.$http.post(this.getVerUrl,{mobile:this.phoneCode}).then(function(e){e.data.success?t.$emit("verCodeFlag",t.verCodeFlag):t.$toast(e.data.errorMessage)},function(t){console.log(t)})}},getVerCode:function(){var t=this;this.phoneCode?this.isMobileExists?this.$http.post("/api/user/isMobileExists",{mobile:this.phoneCode}).then(function(e){t.isGoRegistered?e.data.data?t.getVerUrlHTTP():t.$dialog.confirm({title:"提示",message:"手机号不存在，是否需要注册？",messageAlign:"center"}).then(function(){t.$router.push({name:"注册"})}).catch(function(){}):e.data.data?t.$toast("您的手机号已存在"):t.getVerUrlHTTP()},function(t){console.log(t)}):this.getVerUrlHTTP():this.$toast("请先输入手机号")}}},ct=st,rt=(n("8dcc"),Object(r["a"])(ct,ot,at,!1,null,"66eb11bd",null));rt.options.__file="cCountdown.vue";var lt=rt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"home-footer",on:{click:t.footEvent}},[t._t("default")],2)},ht=[],dt={name:"c-footer",methods:{footEvent:function(){this.$emit("footEvent")}}},ft=dt,pt=(n("8a54"),Object(r["a"])(ft,ut,ht,!1,null,"69db2f3c",null));pt.options.__file="cFooter.vue";var vt=pt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"confirm-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"confirm-main",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"confirm-wrapper"},[n("div",{staticClass:"confirm-content"},[n("div",{staticClass:"title-text"},[n("p",{staticClass:"title"},[t._v("\n            "+t._s(t.title)+"\n          ")]),n("p",{staticClass:"text"},[t._v("\n            "+t._s(t.text)+"\n          ")])]),t._t("default"),n("div",{staticClass:"operate"},[n("div",{staticClass:"operate-btn left",on:{click:t.cancel}},[t._v("\n            "+t._s(t.cancelBtnText)+"\n          ")]),n("div",{staticClass:"operate-btn",on:{click:t.confirm}},[t._v("\n            "+t._s(t.confirmBtnText)+"\n          ")])])],2)])])])},bt=[],gt={name:"cConfirm",props:{title:{type:String,default:""},text:{type:String,default:""},confirmBtnText:{type:String,default:"确定"},cancelBtnText:{type:String,default:"取消"}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1},cancel:function(){this.hide(),this.$emit("cancel")},confirm:function(){this.$emit("confirm")}}},yt=gt,_t=(n("8a82"),Object(r["a"])(yt,mt,bt,!1,null,"754a1cbd",null));_t.options.__file="cConfirm.vue";var kt=_t.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell-main"},[n("div",{staticClass:"cell-left",style:{fontWeight:t.fontBold}},[t._v("\n    "+t._s(t.title)),t.mark?n("i",[t._v("\n      *\n    ")]):t._e()]),"select"===t.rightType?n("div",{staticClass:"cell-right",on:{click:t.clickSelect}},[n("div",[t._v(t._s(t.value||"请选择"))]),n("i",{staticClass:"iconfont icon-tiaozhuan"})]):t._e(),"text"===t.rightType?n("div",{staticClass:"cell-right"},[n("span",[t._v(t._s(t.value||"-"))])]):t._e(),"input"===t.rightType?n("div",{staticClass:"cell-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],attrs:{type:"text",placeholder:t.placeholderText},domProps:{value:t.inputData},on:{input:function(e){e.target.composing||(t.inputData=e.target.value)}}})]):t._e(),"switch"===t.rightType?n("div",{staticClass:"cell-right"},[n("van-switch",{staticStyle:{"margin-top":"10px"},attrs:{activeColor:"rgb(243,120,54)",inactiveColor:"#c9c9c9"},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}})],1):t._e()])},wt=[],St={name:"cCell",props:{title:{type:String,default:""},mark:{type:Boolean,default:!1},rightType:{type:String,default:""},value:{type:String,default:""},fontBold:{type:Number,default:400},placeholder:{type:String,default:""}},data:function(){return{}},computed:{placeholderText:function(){return this.placeholder?this.placeholder:"请输入"+this.title},inputData:{get:function(){return"switch"===this.rightType?"1"===this.value:this.value},set:function(t){"switch"===this.rightType&&(t=t?"1":"0"),this.$emit("input",t)}}},methods:{clickSelect:function(){this.$emit("clickSelect")}}},xt=St,Tt=(n("9612"),Object(r["a"])(xt,Ct,wt,!1,null,"4ce55de2",null));Tt.options.__file="cCell.vue";var Lt=Tt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{staticClass:"address-main",attrs:{closeOnClickOverlay:!1,position:"bottom"},model:{value:t.addressShow,callback:function(e){t.addressShow=e},expression:"addressShow"}},[n("div",{ref:"address",staticClass:"address-content"},[n("h2",[t._v("\n      选择地址"),n("van-icon",{staticClass:"close",attrs:{name:"close"},on:{click:t.clickModel}})],1),n("div",{staticClass:"choose-title"},[t._l(t.titleList,function(e,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:!!e,expression:"!!val"}],key:i,class:{active:t.titleList.length==t.number&&t.tabActive===i},on:{click:function(e){t.tabClick(i)}}},[t._v("\n        "+t._s(e.codeName)+"\n      ")])}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.titleList.length!=t.number,expression:"titleList.length != number"}],staticClass:"text-color-theme border-1px active"},[t._v("\n        请选择\n      ")])],2),n("div",{staticClass:"city-picker",on:{touchstart:t._startDrag,touchmove:t._onDrag,touchend:t._endDrag,touchcancel:t._endDrag}},[n("div",{staticClass:"city-picker-content",style:t.swiperStyle},[n("div",{staticClass:"city-picker-item"},[n("ul",t._l(t.get_Province,function(e,i){return n("li",{key:i,staticClass:"item",class:{"text-color-theme":!!t.titleList[0]&&e.codeCode===t.titleList[0].codeCode},on:{click:function(n){t._clickPrevice(e,i,0)}}},[t._v("\n              "+t._s(e.codeName)+"\n            ")])}),0)]),n("div",{staticClass:"city-picker-item"},[n("ul",t._l(t.citys,function(e,i){return n("li",{key:i,staticClass:"item",class:{"text-color-theme":!!t.titleList[1]&&e.codeCode===t.titleList[1].codeCode},on:{click:function(n){t._clickPrevice(e,i,1)}}},[t._v("\n              "+t._s(e.codeName)+"\n            ")])}),0)]),n("div",{staticClass:"city-picker-item"},[n("ul",t._l(t.countys,function(e,i){return n("li",{key:i,staticClass:"item",class:{"text-color-theme":!!t.titleList[2]&&e.codeCode===t.titleList[2].codeCode},on:{click:function(n){t._clickPrevice(e,i,2)}}},[t._v("\n              "+t._s(e.codeName)+"\n            ")])}),0)])])])])])},Ot=[],$t=n("7ea5"),It={name:"cAddress",props:{number:{type:Number,default:function(){return 2}}},data:function(){return{addressShow:!1,titleList:[],offset:0,touch:{offset:0,move:!1},citys:[],countys:[],tabActive:0}},computed:Object($t["a"])({},Object($["c"])(["get_Province","get_City","get_CountyCode"]),{swiperStyle:function(){return{transform:"translate3d(".concat(this.offset,"px, 0, 0)"),transition:this.touch.moved?"none":".6s cubic-bezier(0.18, 0.89, 0.32, 1)"}}}),watch:{tabActive:function(t,e){this.offset=this.touch.offset+(e-t)*this.addressWidth,this.touch.offset=this.offset}},created:function(){console.log(this.get_Province)},mounted:function(){this.addressWidth=window.innerWidth},methods:{_clickPrevice:function(t,e,n){console.log(t,e,n),this.titleList[n]=t,this.tabActive=Math.min(n+1,2),n>=this.number-1?this.$emit("close",this.titleList):0===n?(this.titleList=this.titleList.slice(0,1),this.citys=this.get_City.filter(function(e){return e.parentCode===t.codeCode})):1===n&&(this.titleList=this.titleList.slice(0,2),this.countys=this.get_CountyCode.filter(function(e){return e.parentCode===t.codeCode}),console.log(this.countys))},_startDrag:function(t){this.touch.initiated=!0,this.touch.moved=!1;var e=t.touches[0];this.touch.startX=e.pageX,this.touch.startY=e.pageY,this.touch.deractionX=0,this.touch.startTimes=(new Date).getTime()},_onDrag:function(t){if(this.touch.initiated){var e=t.touches[0],n=e.pageX-this.touch.startX,i=e.pageY-this.touch.startY;Math.abs(i)>Math.abs(n)||(this.touch.x=n,this.touch.moved=!0,this.touch.deractionX=n>0?1:n<0?-1:0,this.titleList.length<this.tabActive+1&&this.touch.deractionX<0||(t.preventDefault(),this.offset=n+this.touch.offset>0?0:n+this.touch.offset<-(this.number-1)*this.addressWidth?-(this.number-1)*this.addressWidth:n+this.touch.offset))}},_endDrag:function(){if(!(!this.touch.initiated&&0===this.touch.deractionX||this.titleList.length<this.tabActive+1&&this.touch.deractionX<0)&&!(this.tabActive-this.touch.deractionX<0||this.tabActive-this.touch.deractionX>this.number-1)){this.touch.moved=!1,this.touch.initiated=!1;var t=(new Date).getTime()-this.touch.startTimes;t<300?Math.abs(this.touch.x)>30?this.tabActive-=this.touch.deractionX:this.offset=this.touch.offset:Math.abs(this.touch.x)>.5*this.addressWidth?this.tabActive-=this.touch.deractionX:this.offset=this.touch.offset}},tabClick:function(t){this.tabActive=t,this.touch.moved=!1},clickModel:function(){this.$emit("close"),this.titleList=[],this.hide()},show:function(){this.addressShow=!0},hide:function(){this.addressShow=!1}}},jt=It,At=(n("a2ee"),Object(r["a"])(jt,Pt,Ot,!1,null,"5951b375",null));At.options.__file="cAddress.vue";var Et=At.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scan-info-main",style:t.style},[n("div",{staticClass:"input-content"},[n("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.onloadImg}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLoading,expression:"isShowLoading"}],staticClass:"loading"},[n("van-loading",{staticClass:"loading-icon",attrs:{type:"spinner"}})],1)])},Bt=[],Nt=(n("2f9b"),n("6134"),n("0be8"),n("07ae")),Mt=n("be62"),Ut={name:"cScanInfo",data:function(){return{back:Nt,positive:Mt,background:"",isShowLoading:!1}},props:{type:{type:String,default:"positive"},imgId:{type:String,default:""}},computed:{style:function(){return{backgroundImage:"url("+this.background+")"}}},created:function(){this.background=this[this.type]},methods:{upload:function(t){var e=this;this.isShowLoading=!0,this.$http.post("/api/file/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e.isShowLoading=!1,t.data.success?e.$emit("addImg",{fileId:t.data.data.fileId}):e.$toast(t.data.errorMessage)},function(t){e.isShowLoading=!1,console.log(t)})},onloadImg:function(t){var e=t.target.files[0];if(t.target.value="",e.size/1024>10240)this.$toast("上传图片不应超过10M");else if(e.size/1024<1024){var n=new FormData;n.append("file",e),this.upload(n)}else this.compress(e,this.upload)},compress:function(t,e){var n=this,i=new FileReader;i.readAsDataURL(t),i.onload=function(){var t=new Image;t.src=this.result,t.onload=function(){var i=this,o=i.width,a=i.height,s=o/a,c=document.createElement("canvas"),r=c.getContext("2d"),l=Math.min(o,600);c.width=l,c.height=parseInt(l/s),r.drawImage(t,0,0,c.width,c.height);var u=c.toDataURL("image/jpeg",1),h=n.uriToBlob(u),d=new FormData;d.append("file",h,"file_"+Date.parse(new Date)+".png"),e(d)}}},uriToBlob:function(t){var e=t.split(","),n=e[0].match(/:(.*?);/)[1],i=atob(e[1]),o=i.length,a=new Uint8Array(o);while(o--)a[o]=i.charCodeAt(o);return new Blob([a],{type:n})}}},Ft=Ut,Rt=(n("fedb"),Object(r["a"])(Ft,Dt,Bt,!1,null,"7c670118",null));Rt.options.__file="cScanInfo.vue";var Xt=Rt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper"},[t._t("default")],2)},Yt=[],Ht="horizontal",Wt="vertical",qt={name:"cScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!1},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20},direction:{type:String,default:Wt}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new R["a"](this.$refs.wrapper,{probeType:this.probeType,click:this.click,eventPassthrough:this.direction===Wt?Ht:Wt}),this.listenScroll&&this.scroll.on("scroll",function(e){t.$emit("scroll",e)}),this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")}))},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}}},Vt=qt,zt=Object(r["a"])(Vt,Gt,Yt,!1,null,null,null);zt.options.__file="cScroll.vue";for(var Jt=zt.exports,Kt=[H,K,it,lt,vt,kt,Lt,Et,Xt,Jt],Qt=0;Qt<Kt.length;Qt++)i["default"].component(Kt[Qt].name,Kt[Qt]);var Zt=n("2443");i["default"].use(Zt["g"]).use(Zt["a"]).use(Zt["f"]).use(Zt["c"]).use(Zt["m"]).use(Zt["j"]).use(Zt["e"]).use(Zt["q"]).use(Zt["b"]).use(Zt["h"]).use(Zt["o"]).use(Zt["p"]).use(Zt["l"]).use(Zt["d"]).use(Zt["k"]).use(Zt["i"]).use(Zt["n"]),i["default"].config.productionTip=!1,i["default"].use(o["a"]),i["default"].use(a["a"]),i["default"].use(M.a),i["default"].http.options.crossOrigin=!0,i["default"].http.options.emulateHTTP=!0,i["default"].http.interceptors.push(function(t,e){e(function(t){if("unauthorized"!==t.data.errorCode)return t;i["default"].$router.push({name:"登录"})})});var te={enableHighAccuracy:!0,maximumAge:1e3};new i["default"]({router:O,store:B,render:function(t){return t(h)},created:function(){this.httpInterceptors(),this.getPositionByGeolocation()},methods:{httpInterceptors:function(){i["default"].http.interceptors.push(function(t){t.body&&t.body.interceptorsUrlIgnore?delete t.body.interceptorsUrlIgnore:t.params&&t.params.interceptorsUrlIgnore?delete t.params.interceptorsUrlIgnore:t.url="/api"+t.url})},getPositionByGeolocation:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){console.log(t)},function(t){switch(console.log(t),t.code){case 1:alert("位置服务被拒绝");break;case 2:alert("暂时获取不到位置信息");break;case 3:alert("获取信息超时");break;case 4:alert("未知错误");break}},te)}}}).$mount("#app")},"5c64":function(t,e,n){"use strict";var i=n("e41e"),o=n.n(i);o.a},8083:function(t,e,n){},"81ca":function(t,e,n){},"8a54":function(t,e,n){"use strict";var i=n("cdf6"),o=n.n(i);o.a},"8a82":function(t,e,n){"use strict";var i=n("c226"),o=n.n(i);o.a},"8dcc":function(t,e,n){"use strict";var i=n("307d"),o=n.n(i);o.a},9612:function(t,e,n){"use strict";var i=n("e1bb"),o=n.n(i);o.a},a2ee:function(t,e,n){"use strict";var i=n("d341"),o=n.n(i);o.a},be35:function(t,e,n){},be62:function(t,e,n){t.exports=n.p+"img/positive@2x.e64ef079.png"},c0c8:function(t,e,n){"use strict";var i=n("4e09"),o=n.n(i);o.a},c226:function(t,e,n){},cdf6:function(t,e,n){},d341:function(t,e,n){},e1bb:function(t,e,n){},e41e:function(t,e,n){},fedb:function(t,e,n){"use strict";var i=n("19b3"),o=n.n(i);o.a}});
//# sourceMappingURL=app.a897b168.js.map