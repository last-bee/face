(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89de7780"],{"11f1":function(t,e,n){"use strict";var s=n("87b5"),a=n.n(s);a.a},"17ea":function(t,e,n){"use strict";var s=n("7d17"),a=n.n(s);a.a},"326e":function(t,e,n){},4440:function(t,e,n){"use strict";var s=n("e350"),a=n.n(s);a.a},"7d17":function(t,e,n){},"87b5":function(t,e,n){},"89a4":function(t,e,n){},b81d:function(t,e,n){"use strict";var s=n("326e"),a=n.n(s);a.a},d002:function(t,e,n){"use strict";var s=n("89a4"),a=n.n(s);a.a},e350:function(t,e,n){},fb5d:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vehicleSurvey-main"},[n("c-nav-bar",{staticClass:"vehicleSurvey-header"},[n("span",{staticClass:"nav-bar-left",attrs:{slot:"left"},slot:"left"},[n("i",{staticClass:"iconfont icon-fanhui1"})]),n("span",{staticClass:"nav-bar-center",attrs:{slot:"center"},slot:"center"},[t._v("\n      勘验任务\n    ")]),n("span",{staticClass:"nav-bar-right",attrs:{slot:"right"},slot:"right"},[t._v("\n      分享位置\n    ")])]),n("div",{ref:"content",staticClass:"vehicleSurvey-content"},[n("div",{staticClass:"vehicleSurvey-content-warn"},[n("div",{staticClass:"title"},[t._v("\n        注意事项\n      ")]),n("ul",{staticClass:"content"},t._l(t.warningData,function(e,s){return n("li",{key:s},[t._v("\n          "+t._s(s+1)+"、"+t._s(e)+"\n        ")])}),0)]),n("vehicle-survey-message"),n("loss-item-message"),n("task-conclusion")],1)],1)},a=[],o=(n("ff66"),n("ea23"),n("dbff"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vehicle-survey-message-main"},[n("div",{staticClass:"vehicleSurvey-content-message",on:{click:t.entryMessage}},[n("div",{staticClass:"title"},[t._v("\n      勘验信息\n      "),n("already-entered",{attrs:{tagDto:t.tagDto}})],1),n("p",{staticClass:"content"},[t._v("\n      点击录入勘验信息\n    ")])])])}),c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tag",{attrs:{round:"",color:t.getBackgroundColor}},[t._v("\n  "+t._s(t.name)+"\n")])},r=[],l=(n("c839"),{name:"alreadyEntered",data:function(){return{name:"未录入",getBackgroundColor:""}},props:{tagDto:{type:Object,default:function(){}}},watch:{tagDto:{handler:function(){this.name=this.tagDto.name,this.getBackgroundColor=this.tagDto.setBackgroundColor},deep:!0}}}),u=l,v=(n("17ea"),n("048f")),d=Object(v["a"])(u,i,r,!1,null,"60e1250a",null);d.options.__file="alreadyEntered.vue";var f=d.exports,h={name:"vehicleSurveyMessage",components:{"already-entered":f},data:function(){return{chooseItem:["添加车辆信息","添加财产信息","添加伤者信息"],tagDto:{name:"未录入",setBackgroundColor:"#7d7e80"}}},methods:{entryMessage:function(){this.tagDto.name="已录入",this.tagDto.setBackgroundColor="rgb(243,120,54)",this.$router.push({name:"进度一"})}}},m=h,g=(n("d002"),Object(v["a"])(m,o,c,!1,null,"6c99de2e",null));g.options.__file="vehicleSurveyMessage.vue";var C=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vehicleSurvey-content-lossItem"},[n("div",{on:{click:t.addLossItem}},[n("span",{staticClass:"title"},[t._v("\n      损失项信息\n    ")]),n("span",{staticClass:"font_orange"},[t._v("\n      添加损失项\n    ")])]),n("div",{staticClass:"tip"},[t._v("\n    点击添加可添加损失信息。\n  ")]),n("ul",{staticClass:"already-add-lossItem"},[n("li",{staticClass:"item",on:{click:t.entryLossItem}},[n("div",[n("i",{staticClass:"iconfont icon-shanjian"}),n("span",[t._v("\n          车辆-沪A9876【标】\n        ")]),n("already-entered",{attrs:{tagDto:t.tagDto}})],1),n("i",{staticClass:"iconfont icon-tiaozhuan"})])]),n("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("ul",{staticClass:"choose-content"},t._l(t.chooseItem,function(e,s){return n("li",{key:s,staticClass:"choose-item"},[t._v("\n        "+t._s(e)+"\n      ")])}),0),n("div",{staticClass:"choose-cancel",on:{click:t.cancelLossItem}},[t._v("\n      取消\n    ")])])],1)},p=[],y={name:"lossItemMessage",components:{"already-entered":f},data:function(){return{chooseItem:["添加车辆信息","添加财产信息","添加伤者信息"],tagDto:{name:"未录入",setBackgroundColor:"#7d7e80"},show:!1}},methods:{addLossItem:function(){this.show=!0},cancelLossItem:function(){this.show=!1},entryLossItem:function(){this.tagDto.name="已录入",this.tagDto.setBackgroundColor="rgb(243,120,54)"}}},k=y,b=(n("11f1"),Object(v["a"])(k,_,p,!1,null,"ed0a16ec",null));b.options.__file="lossItemMessage.vue";var D=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vehicleSurvey-content-taskConclusion",on:{click:t.entryConclusion}},[n("div",[n("span",{staticClass:"title"},[t._v("\n      任务结论\n    ")]),n("already-entered",{attrs:{tagDto:t.tagDto}})],1),n("div",{staticClass:"tip"},[t._v("\n    任务结论书写。\n  ")])])},I=[],S={name:"taskConclusion",components:{"already-entered":f},data:function(){return{tagDto:{name:"未录入",setBackgroundColor:"#7d7e80"}}},methods:{entryConclusion:function(){this.tagDto.name="已录入",this.tagDto.setBackgroundColor="rgb(243,120,54)"}}},B=S,j=(n("4440"),Object(v["a"])(B,w,I,!1,null,"64c277fa",null));j.options.__file="taskConclusion.vue";var E=j.exports,$=n("6f44"),x={name:"vehicleSurvey",components:{"vehicle-survey-message":C,"loss-item-message":D,"task-conclusion":E},data:function(){return{warningData:["注意事项第一条。","请认真填写以下内容。","类目与页面提供的内容不一致将会审核失败。"]}},mounted:function(){var t=this;setTimeout(function(){t.scroll=new $["a"](t.$refs.content,{probeType:1,click:!0,eventPassthrough:"horizontal"})},20)}},L=x,M=(n("b81d"),Object(v["a"])(L,s,a,!1,null,"3dc3f880",null));M.options.__file="vehicleSurvey.vue";e["default"]=M.exports}}]);
//# sourceMappingURL=chunk-89de7780.c7ded4fa.js.map