(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2da74bbf"],{"175d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"face-recognition-main"},[i("c-nav-bar",{staticClass:"address-nav-bar"},[i("i",{staticClass:"nav-bar-left iconfont icon-fanhui1",attrs:{slot:"left"},slot:"left"}),i("span",{staticClass:"nav-bar-center",attrs:{slot:"center"},slot:"center"},[t._v("\n        人脸识别\n      ")])]),i("div",{staticClass:"face-recogition-content"},[i("video",{attrs:{id:"video",width:"375",height:"320"}}),i("div",{staticClass:"submit-btn"},[i("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.isBegin,expression:"!isBegin"}],staticClass:"btn",attrs:{size:"large",type:"default"},on:{click:t.play}},[t._v("\n          开始\n        ")])],1)])],1)])},a=[],s=(i("ff66"),i("ea23"),i("dbff"),{data:function(){return{isBegin:!1}},mounted:function(){var t=this;setTimeout(function(){t.init()},20)},methods:{init:function(){var t=this;this.video=document.getElementById("video"),navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(e){t.getVideoStream(e)}).catch(function(t){alert(t)})},getVideoStream:function(t){this.video.srcObject=t},play:function(){this.video.play()}}}),o=s,c=(i("d6de"),i("048f")),r=Object(c["a"])(o,n,a,!1,null,"6f960358",null);r.options.__file="faceRecongnition.vue";e["default"]=r.exports},d5e2:function(t,e,i){},d6de:function(t,e,i){"use strict";var n=i("d5e2"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-2da74bbf.7888e3e4.js.map